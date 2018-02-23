const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (request, response) => {
    sqlText = 'SELECT * FROM images';
    pool.query(sqlText)
    .then((result) => {
        console.log('got the stuff', result);
        response.send(result.rows);
    })
    .catch((error) => {
        console.log('vote get', error)
        response.sendStatus(500);
    })
})




module.exports = router;