// serverless config credentials --provider aws --key AKIAVSYBQIVF5GUZW27M --secret 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

// index.js
 
const serverless = require('serverless-http');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})
 
module.exports.handler = serverless(app);