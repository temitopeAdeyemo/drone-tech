"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Drone_1 = __importDefault(require("../../../drone/models/entities/Drone"));
class Medication extends sequelize_1.Model {
    static initModel(sequelize) {
        Medication.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            weight: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            code: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            drone_id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: Drone_1.default,
                    key: 'id',
                },
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Medication',
        });
    }
    static associateModel() {
        Medication.belongsTo(Drone_1.default, { foreignKey: 'drone_id', as: 'Drone' });
    }
}
exports.default = Medication;
