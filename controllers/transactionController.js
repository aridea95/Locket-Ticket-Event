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
            // let eventId = req.params.eventId;
            const { fullName, email, city, mobileNumber, orderTicket } = req.body;


            // validate
            let ticketIds = orderTicket.map(el => mongoose.Types.ObjectId(el.ticketId))
            let ticketData = await Ticket.find({ _id: ticketIds })
                .populate({ path: 'eventTitle' })
            console.log(ticketData, '-data Ticket');

            // Check the transaction.
            let checkEvent = ticketData.every(
                (val, i, arr) => val === arr[0]
                )
            console.log(checkEvent, '-check event');
            if(!checkEvent){
                return res.send('Cannot purchase ticket of different Event.')
            }

            const data = await Transaction.create(req.body)
            console.log(data, '-data yang diterima oleh mongoDB');
            if (data) {
                for (let data of orderTicket) {
                    let ticket = await Ticket.findById(data.ticketId)

                    ticket.quota -= data.quantity
                    
                    await ticket.save()
                 }
            }
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
}
    
module.exports = transactionController
