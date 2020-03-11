const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet")

const server = express();


server.use(helmet())
server.use(logger)
server.use(morgan("dev"))





server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
//logger requires me to log both the req and res coming in an out of the api
function logger(req, res, next) {
 const method = req.method
 const endpoint = req.originalUrl;

 console.log(`${method} to ${endpoint}`)

 next()
}

module.exports = server;
