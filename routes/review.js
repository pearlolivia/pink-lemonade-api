var express = require('express');
var { v4: uuidv4 } = require('uuid');
const Review = require('../models/review');
var router = express.Router();

router.get('/get-all', (req, res) => {
    Review.find({ approved: 1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post('/', (req, res) => {
    const {
        date,
        email,
        eventDate,
        feedback,
        rating,
        review,
        reviewer
    } = req.body;

    const newReview = new Review({
        approved: 0,
        date,
        email,
        eventDate,
        feedback: req.body?.feedback ? feedback: '',
        // id: uuidv4(),
        rating,
        review,
        reviewer,
    }); // create new document

    newReview.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;