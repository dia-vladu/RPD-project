let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const routerStudent = require('./routes/students');
require("dotenv").config();

const sequelize = require('./sequelize');
require("./models/student");

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routerStudent);

app.use((err, req, res, next) => {
    res.status(500).json({"ERROR": "General error"});
});

app.set("port", 8080);

app.listen(app.get("port"), async () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully")
    } catch(err){
        console.log("Unable to connect to the database:", err)
    }
})