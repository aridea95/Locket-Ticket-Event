const mongoose =  require('mongoose');
const uuid = require("node-uuid");
const { Schema } = mongoose;

const transactionSchema = new Schema({
    id: {
        type: String,
        default: uuid.v1
    },
    fullName: {
        type: String,
        required: [true, 'Please enter your Full Name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        lowercase: true,
        match: [/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, `Email format is incorrect!`]
    },
    city: {
        type: String,
        required: [true, 'Please enter the City.']
    },
    mobileNumber: {
        type: String,
        required: [true, 'Please enter your Mobile Number.']
    },
    orderTicket: [{
        ticketId: { type: Schema.Types.ObjectId, ref: 'Ticket'},
        quantity: { type: Number },
    }],
    total: {
        type: Number
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)