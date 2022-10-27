var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('admin/AgregarMedioPage', { layout: 'admin/layout', UserName: req.session.UserName,}); //AgregarMedioPage.hbs y layout.hbs
});

module.exports = router;