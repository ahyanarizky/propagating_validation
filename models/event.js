'use stict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        unique: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventOrganizer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)
