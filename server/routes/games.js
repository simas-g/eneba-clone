import { Router } from 'express';
import { getAllGames, searchGames } from '../db/database.js';

const router = Router();

router.get('/', (req, res) => {
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

export default router;
