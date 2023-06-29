import SequelizeConnection from '../index';
import Drone from '../../../modules/drone/models/entities/Drone';
import Medication from '../../../modules/medication/models/entities/Medication';

const sequelize = SequelizeConnection.getInstance();

// init models
Drone.initModel(sequelize);
Medication.initModel(sequelize);

// associate models
Drone.associateModel();
Medication.associateModel();

export const db = {
  sequelize,
  Drone,
  Medication,
};
