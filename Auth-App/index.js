var investment = require('./investment')
var bodyParser = require('body-parser')
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/investment", investment)
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
console.log('Invest Game API server started on: ' + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);