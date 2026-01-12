import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import gamesRouter from './routes/games.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.use('/list', gamesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
