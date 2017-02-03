var express = require('express');
var app = express();

var router = express.Router();

app.use(express.static('public')); // no jade, read the docs

router.use(function (req, res, next) {
    // logging
    console.log('something is happening');
    next(); // go to the next route and don't stop here
});

/* We'll create, initially, two API functions:
 * 
 *      One for creating a shortened URL hash. This is for initial testing and development purposes.
 *      
 *      And one for creating a PostgreSQL database entry of a shortened URL.
 *      
 * We'll need to create a third API function, a GET request, for actually redirecting to a
 * shortened URL.
 */


router.route('/shorten/:url')
        .post(function(req, res) {
            url = req.params.url;
    
            // now to shorten the URL. just create a new string is all, lol
            alphabet = 'abcdefghijklmnopqrstuvwxyz';
            newUrl = '';
            for (i = 0; i < 7; i++) {
                newUrl += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            
            // for now, just return it in the response for the client to decide
            res.send(newUrl);
});

app.use('/api', router); // might as well prefix with '/api'

app.listen(3000, function () {
  console.log('on port 3000');
});