const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// this gets our responses from the database and sends them to the client side in descendin gorder by id.
// we sort by descending order to get most recent submissions at the top.
app.get('/feedback', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY id DESC;')
        .then(result => {
            res.send(result.rows)
        }).catch( err => {
            console.log(err);
        })
})
// allows us to post responses to the database
app.post('/feedback', (req, res) => {
    console.log(req.body);
    const form = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`
    const queryValues = [
        form.feeling,
        form.understanding,
        form.support,
        form.comments
    ]
    pool.query(queryText, queryValues)
        .then( result => {
    res.sendStatus(201);
}).catch( err => {
    console.log(err);
    res.sendStatus(500);
})
})
// allows us to delete responses from the database by id.
app.delete('/feedback/:id', (req, res) => {
    const queryText = 'DELETE FROM "feedback" WHERE id=$1;';
    const queryValues = [req.params.id];

    pool.query(queryText, queryValues)
        .then( result => {
            res.sendStatus(204);
        }).catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});