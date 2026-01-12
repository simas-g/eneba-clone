import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, 'database.sqlite');

const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    price REAL NOT NULL,
    discount_price REAL,
    console TEXT NOT NULL,
    region TEXT NOT NULL CHECK(region IN ('EUROPE', 'GLOBAL'))
  )
`).run();

const gameCount = db.prepare('SELECT COUNT(*) as count FROM games').get();
if (gameCount.count === 0) {
  const games = [
    {
      title: 'FIFA 23',
      description: 'Experience the world\'s game with next-gen HyperMotion2 technology and expanded women\'s football.',
      image_url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/mixcollage-25-dec-2024-01-23-pm-9978.jpg?q=50&fit=crop&w=480&h=600&dpr=1.5',
      price: 69.99,
      discount_price: 39.99,
      console: 'playstation',
      region: 'EUROPE'
    },
    {
      title: 'Red Dead Redemption 2',
      description: 'An epic tale of life in America\'s unforgiving heartland from Rockstar Games.',
      image_url: 'https://upload.wikimedia.org/wikipedia/lt/4/44/Red_Dead_Redemption_II.jpg',
      price: 59.99,
      discount_price: 29.99,
      console: 'xbox',
      region: 'GLOBAL'
    },
    {
      title: 'Split Fiction',
      description: 'A narrative-driven adventure blending reality and imagination in a unique storytelling experience.',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/4/40/Split_Fiction_cover_art.jpg',
      price: 24.99,
      discount_price: 19.99,
      console: 'pc',
      region: 'EUROPE'
    },
    {
      title: 'Cyberpunk 2077',
      description: 'An open-world action-adventure RPG set in the dystopian Night City.',
      image_url: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
      price: 59.99,
      discount_price: 34.99,
      console: 'nintendo',
      region: 'GLOBAL'
    }
  ];

  const insert = db.prepare(`
    INSERT INTO games
    (title, description, image_url, price, discount_price, console, region)
    VALUES (@title, @description, @image_url, @price, @discount_price, @console, @region)
  `);

  const insertMany = db.transaction((games) => {
    for (const game of games) {
      insert.run(game);
    }
  });

  insertMany(games);
}

export const getAllGames = () => {
  return db.prepare('SELECT * FROM games ORDER BY id').all();
};

export const searchGames = (searchTerm) => {
  if (!searchTerm || typeof searchTerm !== 'string') {
    return [];
  }
  
  const sanitized = searchTerm.trim().substring(0, 100);
  
  if (sanitized.length === 0) {
    return [];
  }
  
  const search = `%${sanitized}%`;
  
  const stmt = db.prepare(`
    SELECT * FROM games 
    WHERE title LIKE ? OR description LIKE ?
    ORDER BY title
  `);
  
  return stmt.all(search, search);
};

export default db;
