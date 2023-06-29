"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Medication_1 = __importDefault(require("../../../medication/models/entities/Medication"));
class Drone extends sequelize_1.Model {
    static initModel(sequelize) {
        Drone.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            serial_number: {
                type: sequelize_1.DataTypes.TEXT,
                // unique: true,
                allowNull: false,
            },
            model: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            code: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            weight: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            battery_capacity: {
                type: sequelize_1.DataTypes.STRING,
                // allowNull: false,
            },
            state: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Drone',
        });
    }
    static associateModel() {
        Drone.belongsTo(Medication_1.default, { targetKey: 'id', as: 'medicationDetails' });
    }
}
exports.default = Drone;
