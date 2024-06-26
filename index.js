const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDB = require("./dbConfig/connection")
const userRoutes = require("./routes/userRoutes")

const PORT = 8080
const app = express()

connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user-module", userRoutes)

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ::: ${PORT}`))