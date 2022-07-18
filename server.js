require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = 5000 || process.env.PORT_NUMBER
const { connectdb } = require('./db/connect')
// const errorhandlerMiddleware = require('./middleware/errorhandlerMiddleware')
// const pagenotfound = require('./middleware/pagenotfound')
const morgan = require('morgan')
// const cookieParser = require('cookieParser')
//use packages
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
//parse json
app.use(express.json())
// parse cookies sent from client to server
// app.use(cookieParser(process.env.JWT_SECRET))

//error message if page is not found
// app.use(pagenotfound)
//error message for handling any error that may occur
// app.use(errorhandlerMiddleware)

// TESTING IF THE SERVER WORKS
// app.get('/', (req, res) => {
//     res.send('hi')
// })

const startserver = () => {
    try {
        connectdb();
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
startserver()