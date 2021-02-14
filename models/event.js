const mongoose = require('mongoose');
const uuid = require("node-uuid");
const { Schema } = mongoose;

const eventSchema = new Schema({
    id: {
        type: String,
        default: uuid.v1
    },
    title: {
        type: String,
        required: [true, 'Please input the Title of the Event']
    },
    info: {
        type: String,
        required: [true, 'Input the info for the Event']
    },
    ticketCategory: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
    schedule: {
        type: String,
        required: true
    },
    location: {
        type: String,
        // required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);