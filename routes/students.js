const app = require('../app');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Ruta /students GET');
});

router.post('/create', (req, res) => {
    res.send('Ruta /students/create POST');
});

router.put('/edit', (req, res) => {
    console.log(req.fechaActual);
    res.send('Ruta /students/edit PUT');
});

router.delete('/delete', (req, res) => {
    res.send('Ruta /students/delete DELETE')
})

module.exports = router;




// app.get('/example/b', middleware, function (req, res) {
//     res.send('Callback FINAL')
// });

// app.get('/example/c', middleware, (req, res) => {
//     res.send('Responde!!');
// })

// const middleware = (req, res, next) => {
//     console.log('Función middleware');
//     next();
// }


// var cb0 = function (req, res, next) {
//     console.log('Desde el callback 0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('Desde el callback 1')
//     next()
// }

// var cb2 = function (req, res) {
//     console.log('Desde el callback 2')
//     next()
// }

// app.get('/example/c', [cb0, cb1, cb2], (req, res) => {
//     res.send('Termina');
// })


// app.get('/example/c', (req, res) => {
//     console.log('Desde el callback 0')
//     console.log('Desde el callback 1')
//     console.log('Desde el callback 2')
//     res.send('Termina');
// })
