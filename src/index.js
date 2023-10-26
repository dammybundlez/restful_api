const express = require('express')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const body_parser = require('body-parser')
const  PORT = process.env.PORT || 3000  


app.use(body_parser.json())
app.use("/api/v1/workouts" , v1WorkoutRouter)

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}` )
})