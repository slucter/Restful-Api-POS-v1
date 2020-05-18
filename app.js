const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const route = require('./app/router/index');
const cors = require('cors');


app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());
app.use('/pos/api/',cors(), route);
app.listen(port, () => {
    console.log(`Listening on server http://localhost:${port}`);
})