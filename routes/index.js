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
            res.render('index', {
                title: 'Event Database',
                alert: 'Event Registration Failed'
            })
        } else {
            // res.render('events', {
            //     title : 'Event List Table'
            // })
            res.send('Registration success')
        }
    })
});

module.exports = router;
