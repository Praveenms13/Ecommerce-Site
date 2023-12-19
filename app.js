const path = require("path");
const express = require("express");
const errorController = require("./controllers/404.js");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { error } = require("console");
app.use(bodyParser.urlencoded({ extended: false })); // This is a middleware, which will parse the body of the incoming request and add it to the req object, //urlencoded() has next() in it, so it will call next() automatically
app.use(express.static(path.join(__dirname, "public"))); // This is a middleware, which will serve static files, like css, js, images, etc. //static() has next() in it, so it will call next() automatically
app.use("/admin", adminRoutes);
app.use(shopRoutes);
/**
 * I am using router.get in admin and in shop so that I can change the middlewear, but if I use app.get, then I can't change the middlewear
 */
app.use(errorController.get404);

port = 20000
app.listen(port, () => {
  console.log("Server is listening on port",port);
});
/**
 * Types Of Templating Engines and their npm packages
 * using pug templating engine until commit id = 3b86997ba9001d5652833ad157f794d741c49d6e
 * introduced HandleBars after the above comits
 * ------------------------------------------------------------------------------------------
 * To use Pug Engine        => app.set('view engine', 'pug');
 * To use Handlebars engine => app.set('view engine', 'handlebars');
 */
