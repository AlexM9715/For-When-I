//import all dependencies
const express = require('express')
const cors = require('cors')
const app = express()

//config mongoose
require("./configs/mongoose.config") //this is what you will name mongoose config file

//config express
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// urlencoded : enable post/put
//true: qs library (enable more complicated nested onjects)
//false: querystring library (nested object will be presented in [])

//config cors
app.use(cors())

//routes & logic
require("./routes/forWhenI.routes")(app)

//listen to port
app.listen(8000, ()=>console.log("Listening to port 8000"))