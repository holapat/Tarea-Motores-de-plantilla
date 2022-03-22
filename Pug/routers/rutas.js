const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

const productos = [];
let productosExisten = false;

/*-------Prueba con productos ya cargados-------------*/
//  const productos = [{name: "Manzana", price: 35, img: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png"},
//                     {name: "Pera", price: 40, img: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-128.png"}
//  ];



/*Pagina inicio */
router.get('/', (req, res)=>{
    res.render('formulario.pug')
})

/*Vista Productos cargados */
router.get('/productos', (req, res)=>{
    //verifica si hay productos en el array cargados
    if(productos.length !== 0) productosExisten = true;

    res.render('productos', {productos: productos, productosExisten: productosExisten})
})

/*Cargar producto */
router.post('/productos', (req, res)=>{
    console.log(req.body)
    productos.push(req.body) 
    
    //verifica si hay productos en el array cargados
    if(productos.length !== 0) productosExisten = true;

    res.render('productos', {productos: productos, productosExisten: productosExisten})
})

module.exports = router;