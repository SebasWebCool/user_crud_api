const router = require('express').Router();
const userServices = require('./users.services');

router.route('/') 
    .get(userServices.getAll)
    .post(userServices.register)

router.route('/:id')
    .get(userServices.getById)

exports.router = router;
