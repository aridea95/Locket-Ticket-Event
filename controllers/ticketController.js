const Ticket = require("../models/ticket");
const Event = require("../models/event");
const mongoose = require("mongoose")

class ticketController {
    static async getTicket (req, res, next) {
        try {
            let result = await Ticket
                .find()
                // .populate(['ticket'])

            res.status(200).json({
                success: true,
                message: "Successfully showing all available Ticket!",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }

    static async createTicket (req, res, next) {
        try {
            let eventId = req.params.eventId;
            let obj = {};
            const { ticketType, quota, price } = req.body;
            if (eventId) obj.eventTitle = eventId 
            if (ticketType) obj.ticketType = ticketType;
            if (quota) obj.quota = quota;
            if (price) obj.price = price;
            console.log(obj)

            let result = await Ticket.findOneAndUpdate({_id:mongoose.Types.ObjectId()}, obj, {
                new: true,
                upsert: true, // create the data if not exist
                runValidators: true,
                setDefaultsOnInsert: true, // set default value based on models
                populate: {path: "event"}
            })
            res.status(200).json({
                success: true,
                message: "Ticket has been created",
                data: result
            });
        } catch (err) {
            next (err);
        }
    }
}

module.exports = ticketController