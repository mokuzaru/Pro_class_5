const express = require('express');
const router = express.Router();

const pool = require('./../database');


router.get('/', (req,res) => {
    res.send('Funciona nuestro segundo server');
})

router.get('/enviar', async(req,res) => {
    const a = await pool.query('SELECT * FROM datos');
    res.send(a);
})

router.post('/enviar', async(req,res) => {
    const {temperatura, lx} = req.body;
    let temp = {
        temperatura,
        lx
    }
    console.log(temperatura);
    const a =  await pool.query('INSERT INTO datos set ?',[temp]);
    res.send('se enviaron datos');
});

module.exports = router;