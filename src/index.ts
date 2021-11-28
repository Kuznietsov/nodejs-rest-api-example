import express from 'express';
import './env';
import { App } from './app';

async function bootstrap() {
  const app = new App(express());
  await app.setup();
  app.start();
}

bootstrap();
