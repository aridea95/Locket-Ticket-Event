const { Router } = require("express");
const router = Router ();

const transactionController = require("../controllers/transactionController");

router.get('/get-info', transactionController.getTransaction);
router.post('/purchase/:eventId', transactionController.addToTransaction);

module.exports = router