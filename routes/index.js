var express = require('express');
var router = express.Router();
const event = require('../models/event');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Event Database'});
});

router.post('/', function(req, res, next) {
    event.create({
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventOrganizer: req.body.eventOrganizer,
        email: req.body.email
    }, function(err, data) {
        if (err) {
            console.log(err.message);
            res.render('index', {
                title: 'Event Database',
                alert: err.message
            })
        } else {
            // res.render('events', {
            //     title : 'Registered Events'
            // })
            res.send('Registration success')
        }
    })
});

router.get('/events', function(req, res, next) {
    event.find({}, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.render('events', {
                title: 'Registered Events',
                data: data
            })
        }
    })
})

module.exports = router;
