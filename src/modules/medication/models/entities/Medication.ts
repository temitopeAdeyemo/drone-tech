import { Model, Sequelize, DataTypes } from 'sequelize';
import IMedicationDTO from '../../dtos/IMedicationDTO';
import DroneDetails from '../../../drone/models/entities/Drone';

export type MedicationCreationArrtibutes = IMedicationDTO;

class Medication extends Model implements MedicationCreationArrtibutes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public weight!: string;
  public code!: string;
  public image!: string;
  public drone_id!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {};

  static initModel(sequelize: Sequelize): void {
    Medication.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        weight: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        drone_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          references: {
            model: DroneDetails, // 'Actors' would also work
            key: 'id',
          },
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Medication',
      }
    );
  }

  static associateModel(): void {
    Medication.belongsTo(DroneDetails, { foreignKey: 'drone_id' });
  }
}

export default Medication;
