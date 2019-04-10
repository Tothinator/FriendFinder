// This is the Friends data that will be used to compare
// people to each other as well as display on the API information
// page.

var friends = require('../data/friends');
var bestFriend = require('../public/js/bestFriend');

// API routes to go before HTML
// 1 get request to display data
// 1 post request to save and compare new person

module.exports = function(app) {

    // API GET to display friends data
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // POST request to store new person and then compare them
    app.post('/api/friends', function(req, res) {

        // store new friend
        var answers = [];
        for (var i = 1; i < 11; i++) {
            answers.push(parseInt(req.body['question' + i]))
        }
        
        var newFriend = {
            name: req.body.name,
            photo: req.body.pic,
            scores: answers
        }

        console.log(newFriend);
        
        var bff = bestFriend(friends, newFriend) || -1;
        friends.push(newFriend);
        console.log(bff);

        if (bff === -1) {
            res.redirect('/nomatch');
        } else {
            res.redirect('/friends/' + bff);
        }

        // run findBestMatch to display module after finding
        // best match.
    });
}