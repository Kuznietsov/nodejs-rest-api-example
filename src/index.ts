import express from 'express';
import { App } from './app';

async function bootstrap() {
  const app = new App(express());
  app.setup();
  app.start();
}

bootstrap();
