import SequelizeConnection from '../index';
import Drone from '../../../modules/drone/models/entities/Drone';
import Medication from '../../../modules/medication/models/entities/Medication';

const sequelize = SequelizeConnection.getInstance();

Drone.initModel(sequelize);
Medication.initModel(sequelize);

Drone.associateModel();
Medication.associateModel();

export const db = {
  sequelize,
  Drone,
  Medication,
};
