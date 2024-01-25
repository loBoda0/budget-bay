import { nextApp, nextHandler } from './next-utils'
import express from 'express';
import dotenv from 'dotenv'
import connectDB from './utils/mongoConnect';

dotenv.config()

connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

  
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.use((req, res) => nextHandler(req, res))

nextApp.prepare().then(() => {
  app.listen(PORT, async () => {
    console.log(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
  })
})
