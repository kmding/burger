var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (request, result) {
	result.redirect('/burgers');
});

router.get('/burgers', function (request, result) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		result.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.insertOne('burger_name', [req.body.name], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + request.params.id;

	burger.updateOne({ devoured : req.body.devoured }, condition, function () {
		result.redirect('/burgers');
	});
});

module.exports = router;
