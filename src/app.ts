import { Express } from 'express';
import { setupIoC as setupModelsIoC, setupModels } from './models';
import { setupIoC as setupRepositoriesIoC } from './repositories';
import { setupIoC as setupServicesIoC } from './services';
import { setupIoC as setupControllersIoC } from './controllers';
import { setupRoutes } from './routes';
import { setupErrorMiddlewares, setupMiddlewares } from './middlewares';
import { createLogger } from './logger';

const unhandledRejectionLogger = createLogger('[UNHANDLED REJECTION]');
const uncaughtExceptionLogger = createLogger('[UNCAUGHT EXCEPTION]');

export class App {
  constructor(private readonly app: Express) {}

  public async setup() {
    this.setupProcessHandlers();

    await setupModels();

    this.setupIoC();

    setupMiddlewares(this.app);
    setupRoutes(this.app);
    setupErrorMiddlewares(this.app);
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

  private setupProcessHandlers() {
    process.on('uncaughtException', (error) => {
      uncaughtExceptionLogger.error(error);
    });

    process.on('unhandledRejection', (error) => {
      unhandledRejectionLogger.error(error);
    });
  }
}
