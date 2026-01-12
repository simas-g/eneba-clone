import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { getAllGames, searchGames } from './database.js';

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/list', (req, res) => {
  try {
    const { search } = req.query;
    
    if (search && typeof search === 'string' && search.trim()) {
      const games = searchGames(search);
      res.json(games);
    } else {
      const games = getAllGames();
      res.json(games);
    }
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
