import { Model, Sequelize, DataTypes } from 'sequelize';
import { IDroneDTO as DroneDetailsAttributes } from '../../dtos/IDroneDTO';
import MedicationDetails from '../../../medication/models/entities/Medication';

class Drone extends Model implements DroneDetailsAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public serial_number!: string;
  public model!: string;
  public weight!: string;
  public battery_capacity!: string;
  public state!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};

  static initModel(sequelize: Sequelize): void {
    Drone.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        serial_number: {
          type: DataTypes.TEXT,
          unique: true,
          allowNull: false,
        },
        model: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        weight: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        battery_capacity: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'DroneDetails',
      }
    );
  }

  static associateModel(): void {
    Drone.belongsTo(MedicationDetails, { targetKey: 'id', as: 'medicationDetails' });
  }
}

export default Drone;
