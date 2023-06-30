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
                type: sequelize_1.DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    len: [10, 100],
                },
            },
            model: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                values: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
            },
            weight: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            battery_capacity: {
                type: sequelize_1.DataTypes.STRING,
                defaultValue: '100',
                allowNull: false,
            },
            state: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                values: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
                defaultValue: 'IDLE',
            },
            medication_carried: {
                type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
                // references: {
                //   model: Medication,
                //   key: 'id',
                // },
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Drone',
        });
    }
    static associateModel() {
        Drone.hasMany(Medication_1.default);
    }
}
exports.default = Drone;
