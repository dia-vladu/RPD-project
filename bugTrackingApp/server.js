//express = name of the module
//require('express') -> load modules and give you access to their exports
let express = require('express') 
//Middleware => hidden translation layer, middleware enables communication and data management for distributed applications.
//The bodyParser object exposes various factories to create middlewares.
let bodyParser = require('body-parser') 
//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
let cors = require('cors')
const routerBug = require('./routes/bugs')
const routerStudent = require('./routes/students')
const routerTeam = require('./routes/teams')
const routerProject = require('./routes/projects')
//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require("dotenv").config(); 

const sequelize = require('./sequelize'); //ORM-ul nostru cel de toate zilele
require("./models/bug")
require("./models/student")
require("./models/team")
require("./models/project")

let app = express()

//pentru req.
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', routerBug)
app.use('/api', routerStudent)
app.use('/api', routerTeam)
app.use('/api', routerProject)

app.use((err, req, res, next) => {
    res.status(500).json({"ERROR": "General error"})
})

app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), async () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully")
    } catch(err){
        console.log("Unable to connect to the database:", err)
    }
})

