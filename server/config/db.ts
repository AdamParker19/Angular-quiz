import mongoose from 'mongoose';
import { environment } from '../environment';


/**
 * Database manager
 */
class Db {

  connection: mongoose.Connection;

  constructor() {
    this.init();
  }

  /**
   * Create connection and connect to DB from environment
   */
  init() {
    const dbUri = environment.db.uri;
    const options = {
      poolSize: 10, // Maintain up to 10 socket connections
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    try {
      this.connection = mongoose.createConnection(dbUri, options);
      this.connection.once('open', () => {
        console.log('[DB] MongoDB opened');
        this.connection.on('disconnected', () => {
          console.log('[DB] disconnected');
        });
        this.connection.on('reconnected', () => {
          console.log('[DB] reconnected');
        });
        this.connection.on('error', (err)  => {
          console.log('[DB] event error: ' + err);
        });
      });
    } catch (err) {
      console.log('[DB] MongoDB connection error. Please make sure MongoDB is running.', err);
      process.exit(0);
    }
  }
}

export default new Db();
