const mongoose =  require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    eventTitle: {type: Schema.Types.ObjectId, ref: 'Event'},
    ticketType: {
        type: String,
        required: [true, 'Input the ticket Type!']
    },
    quota: {
        type: Number,
        required: [true, 'Please input the quota for the Ticket.']
    },
    price: {
        type: Number,
        required: [true, 'Please input the Price for the Ticket.']
    }
});

module.exports = mongoose.model('Ticket', ticketSchema)