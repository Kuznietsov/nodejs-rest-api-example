import { Express } from 'express';
import { setupIoC as setupModelsIoC, setupModels } from './models';
import { setupIoC as setupRepositoriesIoC } from './repositories';
import { setupIoC as setupServicesIoC } from './services';
import { setupIoC as setupControllersIoC } from './controllers';
import { setupRoutes } from './routes';
import { setupMiddlewares } from './middlewares';

export class App {
  constructor(private readonly app: Express) {}

  public async setup() {
    await setupModels();
    this.setupIoC();
    setupMiddlewares(this.app);
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
