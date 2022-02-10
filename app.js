const express = require('express');
const path = require('path');
const gameRoutes = require('./routes/game');

const app = express();

app.listen(3000, () => {
    console.log('Servers are listening at http://localhost:3000/ Lets play a game');
});

app.use(express.static(
    path.join(__dirname, 'public'),
    
));

gameRoutes(app);
