const { Router } = require("express");
const router = Router ();

const eventController = require("../controllers/eventController");
const ticketController = require("../controllers/ticketController");

router.get('/get-info', eventController.getEvent);
router.post('/create-event', eventController.createEvent);
router.get('/ticket', ticketController.getTicket);
router.post('/ticket/create/:eventId', ticketController.createTicket);

module.exports = router