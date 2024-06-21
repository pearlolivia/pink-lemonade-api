var express = require('express');
const BugReport = require('../models/bugReport');
var router = express.Router();

router.post('/', (req, res) => {
    const {
        email,
        report,
    } = req.body;

    const newReport = new BugReport({
        email,
        report,
    }); // create new document

    newReport.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;