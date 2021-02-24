import express from 'express';
import { health } from './health';

export const app = express();

app.get('/', (_req, res) => {
  res.send('👋');
});

app.use('/health', health);
