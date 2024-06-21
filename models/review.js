const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    approved: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    eventDate: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    reviewer: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;