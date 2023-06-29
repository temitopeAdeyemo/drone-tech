'use strict';
/** @type {import('sequelize-cli').Migration} */
const { Model, Sequelize, DataTypes } = require('sequelize');
// const { medicationAttributes } = require('../src/modules/medication/models/entities/Medication.ts');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'medicationAttributes',
      // medicationAttributes
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.TEXT,
          // unique: true,
          allowNull: false,
        },
        weight: {
          type: DataTypes.TEXT,
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
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Drones');
  },
};
