import { Express } from 'express';
import { setupIoC as setupModelsIoC, setupModels } from './models';
import { setupIoC as setupRepositoriesIoC } from './repositories';
import { setupIoC as setupServicesIoC } from './services';
import { setupIoC as setupControllersIoC } from './controllers';
import { setupRoutes } from './routes';

export class App {
  constructor(private readonly app: Express) {}

  public async setup() {
    await setupModels();
    this.setupIoC();
    setupRoutes(this.app);
  }

  public start() {
    this.app.listen(3000, () => console.log('started listening'));
  }

  private setupIoC() {
    setupModelsIoC();
    setupRepositoriesIoC();
    setupServicesIoC();
    setupControllersIoC();
  }
}
