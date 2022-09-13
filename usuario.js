const{Router} = require ( 'express');
const Usuario = require('../Usuario');
const router= Router();
//const usuario = require ('../Usuario')

router.post( '/',async function (req, res){

try {
    console.log(req.body);

const existeUsuario= await Usuario.findOne({email: req.body.email});
console.log('respuesta existe Usuario', existeUsuario);
if (existeUsuario){
    return res.send('Email ya existe');
}

    let usuario = new Usuario ();
    usuario.nombre= req.body.nombre;
    usuario.email= req.body.email;
    usuario.estado= req.body.estado;
    usuario.fechaCreacion= new Date();
    usuario.fechaActualizacion= new Date ();
    
    usuario= await usuario.save();
    res.send(usuario);
    

} catch(error){
    console.log(error);
  res.send('ocurrio un error');
}


});

router.get( '/', function (req, res){
    res.send( 'hola mundo estoy en crear usuario GET');
 });
 
router.put( '/:usuarioId', async function (req, res){
    try {
        console.log(req.body,req.params);

        let usuario= await Usuario.findById(req.params.usuarioId);
        if(!usuario){
            return res.send('Usuario no existe');
        }
    
   const existeUsuario= await Usuario
   .findOne({email: req.body.email, _id: {$ne: usuario._id}});
    console.log('respuesta existe Usuario', existeUsuario);

    if (existeUsuario){
        return res.send('Email ya existe');
    }

usuario.email= req.body.email;
usuario.nombre=req.body.nombre;
usuario.estado=req.body.estado;
        
        usuario= await usuario.save();
        res.send(usuario);
        
    
    } catch(error){
        console.log(error);
      res.send('ocurrio un error');
    }
 });    
module.exports = router;