'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Model, Sequelize, DataTypes } = require('sequelize');
// const { droneAttributes } = require('../src/modules/drone/models/entities/Drone.ts');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Drones', 
        // droneAttributes
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Drones');
    },
};
