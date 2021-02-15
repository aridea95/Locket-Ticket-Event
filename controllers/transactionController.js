const Transaction = require("../models/transaction")
const Ticket = require("../models/ticket");
const Event = require("../models/event");
const mongoose = require("mongoose")

class transactionController {
    static async getTransaction (req, res, next) {
        try {
            let result = await Transaction
                .find()

            res.status(200).json({
                success: true,
                message: "Show all Transaction list.",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }

    static async addToTransaction (req, res, next) {
        try {
            const { eventId } = req.params;
            let { fullName, email, city, mobileNumber, orderTicket } = req.body;


            // validate the transaction.
            let ticketIds = orderTicket.map(el => el.ticketId)
            
            let ticketData = await Ticket.find({ _id: ticketIds })

            let checkEvent = ticketData.every(
                (val) => val.eventTitle == eventId
                )

            if(!checkEvent){
                return res.send('Cannot purchase ticket for different Event.')
            }

            let data = {};
            data.fullName = fullName;
            data.email = email;
            data.city = city;
            data.mobileNumber = mobileNumber;
            data.orderTicket = orderTicket;
            data.total = 0;

            if (data) {
                for (let el of orderTicket) {
                    let ticket = await Ticket.findById(el.ticketId)

                    if (ticket.quota >= el.quantity){
                        
                        ticket.quota -= el.quantity
                        
                        await ticket.save()

                        data.total += (ticket.price * el.quantity)
                    }
                    else {
                        res.send('Insufficient Ticket');
                    }
                }
            }
            const transactions = await Transaction.create(data)
            res.send(data)

        } catch (error) {
            next(error)
        }
    }
}
    
module.exports = transactionController
