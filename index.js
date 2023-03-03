import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

const PORT = 8000
const DB_URL = `mongodb+srv://Pavel:Luky@cluster0.rvgopky.mongodb.net/sushi` 

const app = express()
app.use(express.json())
app.use(cors())

app.use('/', router)  

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})    
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()