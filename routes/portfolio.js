// router/controller file
var express = require('express');
var router = express.Router();

/* GET home page. */
// same as contact > function with three objects(parameters)
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Emilie Portfolio' });
});



module.exports = router;