import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/auth.js"

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3001
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())

// Routes

app.use('/api/auth', authRoute)

const start = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
    app.listen(PORT, () => {
      console.log(`Server sarted on port ${PORT}!`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
