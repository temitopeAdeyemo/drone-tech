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
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Medication',
      }
    );
  }

  static associateModel(): void {
    Medication.hasMany(DroneDetails, { foreignKey: 'carrier_id', sourceKey: 'id', as: 'carrier' });
  }
}

export default Medication;
