const mongoose =  require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter your Full Name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address.']
    },
    city: {
        type: String,
        required: [true, 'Please enter the City.']
    },
    mobileNumber: {
        type: Number,
        required: [true, 'Please enter your Mobile Number.']
    },
    orderTicket: [{
        ticketId: { type: Schema.Types.ObjectId, ref: 'Ticket'},
        quantity: { type: Number }
    }]
})

module.exports = mongoose.model('Transaction', transactionSchema)