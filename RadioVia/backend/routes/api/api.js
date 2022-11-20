var express = require('express');
var router = express.Router();
var MedioModel = require('../../models/AgregarMedioModels');
var cloudinary = require('cloudinary').v2;

router.get('/', async function(req, res, next){
    let medios = await MedioModel.getAgregarMedio();

    medios = medios.map(medios => {
        if (medios.Logo){
            const imagen = cloudinary.url(medios.Logo, {width:960, height:200, crop:'fill'});
            medios.Logo = imagen;
            return {medios}
        }else{
            medios.Logo = '';
            return {medios}
        }
    })
    res.json(medios);
});

module.exports = router;