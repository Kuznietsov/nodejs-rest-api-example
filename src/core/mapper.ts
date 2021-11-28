export interface Mapper<Domain, DalEntity> {
  toDomain(dalEntity: DalEntity): Domain;
  toDalEntity(domain: Domain): DalEntity;
}
