import express from 'express'
import config from './src/db/config.js'

const app = express()

app.get( "/", (req, res)=>{
    res.send("Welcome to dog API!")
})

app.listen(config.port || 3030, ()=>{
    console.log(`Server is running on port ${config.port}`);
})
