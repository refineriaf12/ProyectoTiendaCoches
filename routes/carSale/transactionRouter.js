const express = require("express");
const router = express.Router();
const transactionController = require("../../controllers/carSale/transactionController");

router.get("/renderTransactionPanel",transactionController.renderTransactionPanel);
router.get("/transactionDetail/:id",transactionController.showTransactionDetail);
router.get("/benefits",transactionController.benefitsMonth);
router.get("/transactionMonth",transactionController.transactionMonth);
router.get("/transactionYear",transactionController.transactionYear);
router.get("/buyCar/:id", transactionController.buyCar);
router.get("/transactionTotal",transactionController.showTotalTransactions)

module.exports = router;