var express = require('express');
var router = express.Router();

/* GET Login del Admin. */
router.get('/', function (req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' }); //login.hbs y layout.hbs
});

module.exports = router;