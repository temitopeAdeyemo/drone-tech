import { Model, Sequelize, DataTypes } from 'sequelize';
import IDroneDTO from '../../dtos/IDroneDTO';
import MedicationDetails from '../../../medication/models/entities/Medication';

export type DroneCreationArrtibutes = IDroneDTO;
class Drone extends Model implements DroneCreationArrtibutes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public serial_number!: string;
  public model!: string;
  public weight!: string;
  public battery_capacity!: string;
  public state!: string;

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
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            len: [10, 100],
          },
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        weight: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        battery_capacity: {
          type: DataTypes.STRING,
          defaultValue: '100',
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
          values: ['employee', 'super_admin', 'travel_admin', 'travel_team_manager', 'manager', 'supplier'],
          defaultValue: 'employee',
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Drone',
      }
    );
  }

  static associateModel(): void {
    Drone.belongsTo(MedicationDetails, { targetKey: 'id', as: 'medicationDetails' });
    
  }
}

export default Drone ;
