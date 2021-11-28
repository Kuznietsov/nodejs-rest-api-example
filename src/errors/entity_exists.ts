export class EntityExistsError extends Error {
  constructor(entityName: string, byField: string, fieldValue: string) {
    super(`${entityName} with ${byField}='${fieldValue}' already exists`);
    this.name = `${entityName}Exists`;
  }
}
