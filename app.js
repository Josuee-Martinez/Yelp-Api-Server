require('dotenv').config();
let express = require('express');
let app = express();
let yelpApi = require("./controllers/yelpcontroller");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require("./middleware/headers"));

app.use("/yelpapi", yelpApi)

app.listen(process.env.PORT, () => {
    console.log('hello')
});

