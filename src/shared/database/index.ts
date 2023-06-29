import { Dialect, Options, Sequelize } from 'sequelize';
import { dbKeys } from '../../config/database.config';
class SequelizeConnection {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!SequelizeConnection.instance) {
      const dbConfig = {} as Options;
      dbConfig.port = dbKeys.dbPort;
      dbConfig.host = dbKeys.dbHost;
      dbConfig.ssl = dbKeys.dbSslModeRequire;
      dbConfig.database = dbKeys.dbName;
      dbConfig.username = dbKeys.dbUserName;
      dbConfig.password = dbKeys.dbPassword;
      dbConfig.logging = false;
      dbConfig.dialect = dbKeys.dbDialect as Dialect;
      dbConfig.logging = dbKeys.dbLogging;
      dbConfig.define = {
        schema: dbKeys.dbSchema,
      };
      dbConfig.pool = {
        max: dbKeys.dbMaxPoolSize,
        acquire: dbKeys.dbPoolAcquireTimeout,
        idle: dbKeys.dbPoolIdleConnectionTime,
      };
      if (dbKeys.dbSslModeRequire) {
        dbConfig.dialectOptions = {
          ssl: {
            require: dbKeys.dbSslModeRequire,
            rejectUnauthorized: false,
          },
        };
      }
      SequelizeConnection.instance = new Sequelize('mysql://localhost:3306', dbConfig);
    }
    console.log('here is');

    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = this.getInstance();
    try {
      console.log('HERE');

      await sequelize.authenticate();
      console.log('Database connection established successfully');
      return sequelize;
    } catch (err: any) {
      console.log('Error while creation connection to database :: ' + err.message);
      return sequelize;
    }
  }

  static async close(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.close();
      console.log('Database connection closed successfully');
      return sequelize;
    } catch (err: any) {
      console.log('Error while closing database connection :: ' + err.message);
      return sequelize;
    }
  }
}

export default SequelizeConnection;
