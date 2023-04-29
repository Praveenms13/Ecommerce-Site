// const http = require("http");
const express = require("express");
const app = express();
// const routes = require("./routes");
// const server = http.createServer(routes.handler);
// app.use((req, res, next) => {
//   console.log("This is a middleware and this will executed for every incoming request");
//   next(); // Allows the request to continue to the next middleware in line
// });
app.use('/', (req, res, next) => {
  console.log("This always runs!!");
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('The "Add Product" middleware');
  res.setHeader("Content-Type", "text/html"); // Optional, But Express will set it by default
  res.send("<h1>The Add Product Page!!<h1>");
});

app.use('/', (req, res, next) => {
  console.log("This will executed for every incoming request_2");
  res.setHeader("Content-Type", "text/html"); // Optional, But Express will set it by default
  res.send("<h1>Hello from Express!!<h1>");
});
// const server = http.createServer(app);
// server.listen(4000, () => {
//   console.log("Server is listening on port 4000");
// });
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
