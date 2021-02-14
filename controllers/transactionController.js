const Transaction = require("../models/transaction")
const Ticket = require("../models/ticket");
const Event = require("../models/event");
const mongoose = require("mongoose")

// Customer will be able to make transaction to purchase ticket event
// Customer can purchase ticket event many times
// For each transaction, customer only can purchase ticket within same event
// Within one transaction, customer can purchase more than 1 ticket type, and more than 1 qty per ticket type

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
            let ticketIds = orderTicket.map(el => mongoose.Types.ObjectId(el.ticketId))
            let ticketData =await Ticket.find({_id: ticketIds})
            .select('eventTitle');

            //
            let checkEvent = ticketData.every( (val, i, arr) => val === arr[0] )
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
        } catch (error) {
            next(error)
        }
    }
}
    
module.exports = transactionController
