"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = require("../../config/database.config");
class SequelizeConnection {
    static getInstance() {
        if (!SequelizeConnection.instance) {
            const dbConfig = {};
            dbConfig.port = database_config_1.vars.dbPort;
            dbConfig.host = database_config_1.vars.dbHost;
            // dbConfig.ssl = vars.dbSslModeRequire;
            dbConfig.database = database_config_1.vars.dbName;
            dbConfig.username = database_config_1.vars.dbUserName;
            dbConfig.password = database_config_1.vars.dbPassword;
            dbConfig.logging = false;
            dbConfig.dialect = database_config_1.vars.dbDialect;
            dbConfig.logging = database_config_1.vars.dbLogging;
            dbConfig.define = {
                schema: database_config_1.vars.dbSchema,
            };
            dbConfig.pool = {
                max: database_config_1.vars.dbMaxPoolSize,
                acquire: database_config_1.vars.dbPoolAcquireTimeout,
                idle: database_config_1.vars.dbPoolIdleConnectionTime,
            };
            if (database_config_1.vars.dbSslModeRequire) {
                dbConfig.dialectOptions = {
                    ssl: {
                        require: database_config_1.vars.dbSslModeRequire,
                        rejectUnauthorized: false,
                    },
                };
            }
            SequelizeConnection.instance = new sequelize_1.Sequelize('mysql://127.0.0.1:3306/my_database', dbConfig);
        }
        return SequelizeConnection.instance;
    }
    static async connect() {
        const sequelize = SequelizeConnection.getInstance();
        try {
            await sequelize.authenticate();
            console.log('Database connection authenticated successfully');
            return sequelize;
        }
        catch (ex) {
            console.log('Error while creation connection to database :: ' + ex.message);
            return sequelize;
        }
    }
    static async close() {
        const sequelize = SequelizeConnection.getInstance();
        try {
            await sequelize.close();
            console.log('Database connection closed successfully');
            return sequelize;
        }
        catch (ex) {
            console.log('Error while closing database connection :: ' + ex.message);
            return sequelize;
        }
    }
}
exports.default = SequelizeConnection;
// // @/connection.ts
// import { Sequelize } from "sequelize-typescript";
// import { Medication } from '../../modules/medication/models/entities/Medication';
// import { Drone } from '../../modules/drone/models/entities/Drone';
// const connection = new Sequelize({
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   username: 'root',
//   password: 'Fammieyjuliey12@#',
//   database: 'my_database',
//   logging: true,
//   models: [Drone, Medication ],
// });
// export default connection;
