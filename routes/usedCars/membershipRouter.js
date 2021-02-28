'use strict';
const membershipController = require('../../controllers/usedCars/membershipController');
const {Router} = require('express');
const router = Router();

router.get('/', membershipController.listMemberships);
router.get('/details/:id', membershipController.details);
router.get('/add', membershipController.formCreateMembership);
router.get('/delete/:id', membershipController.delete);

router.post('/save', membershipController.createMembership);
router.post('/update/:id', membershipController.update)



module.exports = router;
