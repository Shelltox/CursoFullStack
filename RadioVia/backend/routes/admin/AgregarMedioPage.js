var express = require('express');
var router = express.Router();
var AgregarMedioModel = require('../../models/AgregarMedioModels');

// LISTADO COMPLETO DE MEDIOS EN GRILLA

router.get('/', async function(req, res, next){
    var medios = await AgregarMedioModel.getAgregarMedio();
    res.render('admin/AgregarMedioPage', { layout: 'admin/layout', 
                                           UserName: req.session.UserName, 
                                           UserId: req.session.UserId,
                                           medios
                                         }); //AgregarMedioPage.hbs y layout.hbs
});

//AGREGAR UN ITEM AL LISTADO

//Renderiza la vista AgregarMedioPageAlta.hbs con el formulario de carga.-
router.get('/AgregarMedioPageAlta', async function(req, res, next){
    res.render('admin/AgregarMedioPageAlta', { layout: 'admin/layout', 
                                               UserName: req.session.UserName, 
                                               UserId: req.session.UserId
                                             }); //AgregarMedioPage.hbs y layout.hbs
});

//Al guardar realiza validaciones, control de errores y si todo esta bien impacta el cambio en bd.-
router.post('/AgregarMedioPageAlta', async function(req, res, next){
    try{
        if (req.body.Descripcion !="" && req.body.WhatsApp !="" && req.body.URL !=""){
            await AgregarMedioModel.insertAgregarMedio(req.body);
            res.redirect('/admin/AgregarMedioPage');
        }else{

            res.render('admin/AgregarMedioPageAlta', { layout: 'admin/layout', 
                                                       UserName: req.session.UserName, 
                                                       UserId: req.session.UserId,
                                                       error: true,
                                                       mensaje: 'Todos los datos son requeridos: ' 
                                                     }); //AgregarMedioPageAlta.hbs y layout.hbs
        }

    }catch (error){
        res.render('admin/AgregarMedioPageAlta', { layout: 'admin/layout', 
                                                   UserName: req.session.UserName, 
                                                   UserId: req.session.UserId,
                                                   error: true,
                                                   mensaje: 'Error al intentar dar de alta un nuevo medio: ' + console.log(error)
                                                 }); //AgregarMedioPageAlta.hbs y layout.hbs
    }
});

// ELIMINAR UN ITEM DEL LISTADO

router.get('/AgregarMedioPageEliminar/:Id', async function(req, res, next){
    let Id = req.params.Id;
    await AgregarMedioModel.eliminarAgregarMedioById(Id);
    res.redirect('/admin/AgregarMedioPage');
});

// MODIFICAR UN ITEM DEL LISTADO

router.get('/AgregarMedioPageModificar/:Id', async function(req, res, next){
    let Id = req.params.Id;
    let Datos = await AgregarMedioModel.getAgregarMedioById(Id);

    res.render('admin/AgregarMedioPageModificar', { layout: 'admin/layout', 
                                                    UserName: req.session.UserName, 
                                                    UserId: req.session.UserId,
                                                    Datos
                                                 }); //AgregarMedioPageAlta.hbs y layout.hbs
});

router.post('/AgregarMedioPageModificar', async function(req, res, next){
    try{
        let Obj = {
            Descripcion: req.body.Descripcion,
            WhatsApp: req.body.WhatsApp,
            Email: req.body.Email,
            URL: req.body.URL,
            LinkWinamp: req.body.LinkWinamp,
            LinkWMP: req.body.LinkWMP,
            Comentarios: req.body.Comentarios
        }
        await AgregarMedioModel.modificarAgregarMedioById(Obj, req.body.IdMedio);
        res.redirect('/admin/AgregarMedioPage');
    }catch (error){
        console.log(error);
        res.render('admin/AgregarMedioPageModificar', { layout: 'admin/layout', 
                                                        UserName: req.session.UserName, 
                                                        UserId: req.session.UserId,
                                                        error: true,
                                                        mensaje: 'Error al intentar Modificar un  medio: ' + console.log(error)
                                                      }); //AgregarMedioPageAlta.hbs y layout.hbs
    }
});

module.exports = router;