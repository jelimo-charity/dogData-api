import express from 'express'
import config from './src/db/config.js'
import dogRoutes from './src/routes/dogRoutes.js'

const app = express()

app.get( "/", (req, res)=>{
    res.send("Welcome to dog API!")
})
dogRoutes(app) 

app.listen(config.port || 3030, ()=>{
    console.log(`Server is running on port ${config.port}`);
})
