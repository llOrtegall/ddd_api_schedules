import { productsRouter } from '../router/product.router';
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('express + typescript server running');
});

app.use('/api/v1', productsRouter);

export default app;