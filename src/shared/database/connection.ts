import { Dialect, Options, Sequelize } from 'sequelize';
import { vars } from '../../config/database.config';
class SequelizeConnection {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      const dbConfig = {} as Options;
      dbConfig.port = vars.dbPort;
      dbConfig.host = vars.dbHost;
      // dbConfig.ssl = vars.dbSslModeRequire;
      dbConfig.database = vars.dbName;
      dbConfig.username = vars.dbUserName;
      dbConfig.password = vars.dbPassword;
      dbConfig.logging = false;
      dbConfig.dialect = vars.dbDialect as Dialect;
      dbConfig.logging = vars.dbLogging;
      dbConfig.define = {
        schema: vars.dbSchema,
      };
      dbConfig.pool = {
        max: vars.dbMaxPoolSize,
        acquire: vars.dbPoolAcquireTimeout,
        idle: vars.dbPoolIdleConnectionTime,
      };
      if (vars.dbSslModeRequire) {
        dbConfig.dialectOptions = {
          ssl: {
            require: vars.dbSslModeRequire,
            rejectUnauthorized: false,
          },
        };
      }
      SequelizeConnection.instance = new Sequelize('mysql://127.0.0.1:3306/my_database', dbConfig);
    }

    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.authenticate();
      console.log('Database connection authenticated successfully');
      return sequelize;
    } catch (ex: any) {
      console.log('Error while creation connection to database :: ' + ex.message);
      return sequelize;
    }
  }

  static async close(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.close();
      console.log('Database connection closed successfully');
      return sequelize;
    } catch (ex: any) {
      console.log('Error while closing database connection :: ' + ex.message);
      return sequelize;
    }
  }
}

export default SequelizeConnection;


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