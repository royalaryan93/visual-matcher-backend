import express from 'express';
import cors from 'cors';
import products from './products.json' with { type: 'json' };

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Simplified server is live on http://localhost:${PORT}`);
});