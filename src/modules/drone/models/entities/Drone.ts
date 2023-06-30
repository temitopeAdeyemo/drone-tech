import { Model, Sequelize, DataTypes } from 'sequelize';
import IDroneDTO from '../../dtos/IDroneDTO';
import Medication from '../../../medication/models/entities/Medication';

export type DroneCreationArrtibutes = IDroneDTO;
class Drone extends Model implements DroneCreationArrtibutes {
  public id!: number;
  public serial_number!: string;
  public model!: string;
  public weight!: string;
  public battery_capacity!: string;
  public state!: string;
  public load_weight!: string;
  public charging!: boolean;

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
          values: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
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
        charging: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        load_weight: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '0',
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
          values: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
          defaultValue: 'IDLE',
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Drone',
      }
    );
  }

  public static associateModel(): void {
    Drone.hasMany(Medication, { foreignKey: 'drone_id' });
  }
}

export default Drone;
