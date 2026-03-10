const http = require("http");

const server = http.createServer((req, res) => {

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello from backend server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});