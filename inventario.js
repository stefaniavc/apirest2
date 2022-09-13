const {Router} = require ('express');

const router = Router ();
 
router.get ('/',function(req, res){
    res.send ('estoy desde inventario GET')
});
router.post ('/',function(req, res){
    res.send ('estoy desde inventario POST')
});
router.put ('/',function(req, res){
    res.send ('estoy desde inventario PUT')
});
module.exports= router;
