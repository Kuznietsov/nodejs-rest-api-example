import type { Express } from 'express';
import { setupIoC as setupControllersIoC } from './controllers';
import { setupRoutes } from './routes';

export class App {
  constructor(private readonly app: Express) {}

  public setup() {
    this.setupIoC();
    setupRoutes(this.app);
  }

  public start() {
    this.app.listen(3000, () => console.log('started listening'));
  }

  private setupIoC() {
    setupControllersIoC();
  }
}
