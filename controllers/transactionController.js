const Transaction = require("../models/transaction")
const Ticket = require("../models/ticket");
const Event = require("../models/event");
const mongoose = require("mongoose")

class transactionController {
    static async getTransaction (req, res, next) {
        try {
            let result = await Transaction
                .find()
                // .populate(['ticket'])

            res.status(200).json({
                success: true,
                message: "Show all Purchase list.",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }

    static async addToTransaction (req, res, next) {
        try {
            const { fullName, email, city, mobileNumber, orderTicket } = req.body;
            
            //validate
            let eventIds = orderTicket.map(el => mongoose.Types.ObjectId(el.eventId))
            let eventData = await Ticket.find({_id: eventIds})
            .select('eventTitle');

            //Check the transaction.
            let checkEvent = eventData.every( (val, i, arr) => val === arr[0] )
            if(!checkEvent){
                return res.send('Cannot purchase ticket of different Event.')
            }

            const data = await Transaction.create(req.body)
            if (data) {
                for (let data of orderTicket) {
                    let ticket = await Ticket.findById(data.ticketId)

                    ticket.quota -= data.quantity

                    await ticket.save()
                 }
            }
            res.send(data)

            // const totalPrice = await Transaction.create(req.body)
            // if (totalPrice) {
            //     for (let totalPrice of orderTicket) {
            //         let ticket = await Ticket.findById(totalPrice.ticketId)

            //         ticket.price * data.quantity
            //     }
            // }

        } catch (error) {
            next(error)
        }
    }
}
    
module.exports = transactionController
