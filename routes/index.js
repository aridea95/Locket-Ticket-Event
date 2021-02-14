const { Router } = require("express")
const router = Router();

router.get('/', (req, res, next) => {
    res.json("Welcome To Event Ticket Online Reservation");
});

const eventRoutes = require("./eventRouter");
router.use('/event', eventRoutes)

const transactionRoutes = require("./transactionRouter");
router.use('/transaction', transactionRoutes)

module.exports = router;