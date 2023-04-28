const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes.handler);
server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
