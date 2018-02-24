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

router.put('/up/:id', (request, response) => {
    const id = request.params.id;
    console.log('this is the id', id);
    sqlText = 'UPDATE images SET votes=votes+1 WHERE id=$1;';
    pool.query(sqlText, [id])
    .then((result) => {
        console.log('updated votes', result);
        response.sendStatus(200);
    })
    .catch((error) => {
        console.log('did not update votes', error);
        response.sendStatus(500);
    })
})

router.put('/down/:id', (request, response) => {
    const id = request.params.id;
    sqlText = 'UPDATE images SET votes=votes-1 WHERE id=$1;';
    pool.query(sqlText, [id])
    .then((result) => {
        console.log('updated votes', result);
        response.sendStatus(200);
    })
    .catch((error) => {
        console.log('did not update votes', error);
        response.sendStatus(500);
    })
})


module.exports = router;