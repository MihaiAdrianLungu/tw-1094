const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

// req params
app.get('/user/:id', function(req, res) {
    const id = req.params.id;
    res.send({msg: `User with id: ${id}`});
});

// req queries
app.get('/user', function(req, res) {
    const name = req.query.name;
    const age = req.query.age;

    res.send({msg: `User with name ${name} and age ${age}`});
});

app.listen(3000, function() {
    console.log("Server listening on 3000");
})
