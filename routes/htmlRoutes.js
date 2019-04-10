var friends = require('../data/friends');
var path = require('path');

// HTML Routes for the app, these will come afer apiRoutes

module.exports = function(app) {

    // HTML GET Requests for when a user visits a page
    // Only specified path other than home. Modal will be used
    // to show best match.
    app.get('/survey', function(req, res) {
        res.render('survey', {});
    });

    app.get('/friends/:id', function(req, res) {
        var bff = req.params.id;
        if (bff > friends.length || bff < 0) {
            res.render('index');
        } else {
            res.render('result', {
                name: friends[bff].name,
                photo: friends[bff].photo,
                answers: friends[bff].scores
            });
        }
    });

    app.get('/nomatch', function(req, res) {
        res.render('nomatch', {});
    })

    // If no matching route is found, default to home
    app.get('*', function(req, res) {
        res.render('index', {});
    });
}