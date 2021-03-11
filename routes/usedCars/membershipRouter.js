'use strict';
const membershipController = require('../../controllers/usedCars/membershipController');
const {Router} = require('express');
const router = Router();

router.get('/', membershipController.listMemberships);
router.get('/add/:id', membershipController.formCreateMembership);
router.get('/delete/:id', membershipController.delete);

router.post('/save/:id', membershipController.createMembership);




module.exports = router;
