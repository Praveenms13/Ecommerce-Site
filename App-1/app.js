const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false})); // This is a middleware, which will parse the body of the incoming request and add it to the req object
                                  // urlencoded() has next() in it, so it will call next() automatically
app.use('/add-product', (req, res, next) => {
  // res.setHeader("Content-Type", "text/html"); // Optional, But Express will set it by default
  res.send('<form method="POST" action="/product"><input type="text" name="title"><button type="submit">Add Products</button></form>');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  // console.log("This will executed for every incoming request_2");
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hello from Express!!<h1>");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
