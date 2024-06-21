const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bugSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    report: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const BugReport = mongoose.model('BugReport', bugSchema);
module.exports = BugReport;