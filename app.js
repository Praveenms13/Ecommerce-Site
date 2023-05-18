const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { engine } = require('express-handlebars')
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: false,
}));// Handlebars is the big templatev so we shld tell to express that we are using handlebars as the templating engine 
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminDatas = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false })); // This is a middleware, which will parse the body of the incoming request and add it to the req object, //urlencoded() has next() in it, so it will call next() automatically
app.use(express.static(path.join(__dirname, "public"))); // This is a middleware, which will serve static files, like css, js, images, etc. //static() has next() in it, so it will call next() automatically
app.use('/admin', adminDatas.routes)
app.use(shopRoutes)
/**
 * I am using router.get in admin and in shop so that I can change the middlewear, but if I use app.get, then I can't change the middlewear
 */
app.use((req, res, next) => {
  /**
   * path => /home/praveen/Desktop/Backup-Win-/developer/WebD/Developer/NodeJS-Ud/
   * (path.join(__dirname, "views", "404.html")) => /home/praveen/Desktop/Backup-Win-/developer/WebD/Developer/NodeJS-Ud/views/404.html 
   */
  // res.status(404).sendFile(path.join(__dirname, "views", "404.hbs"));
  res.status(404).render('404', { pageTitle: 'Page Not Found' })
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
/**
 * Types Of Templating Engines and their npm packages
 * using pug templating engine until commit id = 3b86997ba9001d5652833ad157f794d741c49d6e
 * introduced HandleBars after the above comits
 * ------------------------------------------------------------------------------------------
 * To use Pug Engine        => app.set('view engine', 'pug');
 * To use Handlebars engine => app.set('view engine', 'handlebars');
 */