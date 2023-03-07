import express from "express";
import env from "dotenv"
import cors from "cors";
import morgan from "morgan";
import allroutes from "./routes/index"

env.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use(allroutes)
app.use((req, res) => {
  res.status(404).json({message: 'Page not found'})
})



export default app