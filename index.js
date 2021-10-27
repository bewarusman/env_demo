require("dotenv").config();
const http = require("http");

const ENV_VARS = {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  email: process.env.EMAIL,
};

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(ENV_VARS));
    res.end();
  })
  .listen(process.env.PORT);
