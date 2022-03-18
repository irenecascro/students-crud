const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Recupero todos los productos');
});

router.get('/active', (req, res) => {
    res.send('Recupero todos los productos activos');
});

router.get('/list', (req, res) => {
    console.log(req.query);
    res.send('Recuperamos los productos por página');
});

router.get('/:productId', (req, res) => {
    console.log(new Date());
    console.log(req.params.productId);
    res.send('Prueba sobre el detalle del producto ' + req.params.productId);
});

router.get('/category/:categoryName/id/:productId', (req, res) => {
    console.log(req.params);
    res.send('Recupero un producto por categoría');
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('Estamos creando un producto');
});

module.exports = router;

/**
 * 
 * https://rickandmortyapi.com/api/personaje?page=20&total=10&nombre=mario
 * 
 */