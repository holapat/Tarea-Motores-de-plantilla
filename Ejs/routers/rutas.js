const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

const productos = [];

/*-------Prueba con productos ya cargados-------------*/
//  const productos = [{name: "Manzana", price: 35, img: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-128.png"},
//                     {name: "Pera", price: 40, img: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-128.png"}
//  ];

/*Pagina inicio */
router.get('/', (req, res)=>{
    res.render('formulario')
})

/*Visita Productos cargados */
router.get('/productos', (req, res)=>{
    res.render('productos', {productos})
})

/*Cargar producto */
router.post('/productos', (req, res)=>{
    console.log(req.body)
    productos.push(req.body)
    res.render('productos', {productos}) 
})

module.exports = router;