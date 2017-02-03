var express = require('express');
var app = express();

var router = express.Router();

app.use(express.static('public')); // no jade, read the docs

router.use(function (req, res, next) {
    // logging
    console.log('something is happening');
    next(); // go to the next route and don't stop here
});

app.listen(3000, function () {
  console.log('on port 3000');
});