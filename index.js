const express = require('express');
const app = express();
const porta = 3000;


const gameRoutes = require('./routes/gameRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(gameRoutes);

app.listen(3000, ()=>{
    console.log(`esse server está logado na http://localhost:${porta} `);
});