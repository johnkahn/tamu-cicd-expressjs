import express from 'express';
import { health } from './health';

export const app = express();

app.get('/', (_req, res) => {
  res.send('👋');
});

app.use('/health', health);

COMPUTOR MAKE PROGRAM
DO GOOD THINGS PLS
I AM 1337 HAXOR