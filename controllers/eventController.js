const Event = require("../models/event");
const Ticket = require("../models/ticket");

class eventController {
    static async getEvent(req, res, next) {
        try {
            let result = await Event
                .find()
                .populate({path: 'ticketCategory'})

            res.status(200).json({
                success: true,
                message: "Successfully showing all event!",
                data: result
            });
        } catch (err) {
            next(err);
        }
    }

    static async createEvent (req, res, next){
        try {
            let obj = {};
            const { title, info, schedule,location } = req.body;
            if (title) obj.title = title;
            if (info) obj.info = info;
            if (schedule) obj.schedule = schedule;
            if (location) obj.location = location;
            console.log(obj)

            let result = await Event.create(obj);
            res.status(200).json({
                success: true,
                message: "Event has been created",
                data: result
            });
        } catch (err) {
            next (err);
        }
    }
}

module.exports = eventController;