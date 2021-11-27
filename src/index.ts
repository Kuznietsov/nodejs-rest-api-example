import express from 'express';

async function bootstrap() {
  const app = express();
  app.listen(3000, () => console.log('started listening'));
}

bootstrap();
