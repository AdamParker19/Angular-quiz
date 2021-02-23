"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("../environment");
/**
 * Database manager
 */
class Db {
    constructor() {
        this.init();
    }
    /**
     * Create connection and connect to DB from environment
     */
    init() {
        const dbUri = environment_1.environment.db.uri;
        const options = {
            poolSize: 10,
            bufferMaxEntries: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        try {
            this.connection = mongoose_1.default.createConnection(dbUri, options);
            this.connection.once('open', () => {
                console.log('[DB] MongoDB opened');
                this.connection.on('disconnected', () => {
                    console.log('[DB] disconnected');
                });
                this.connection.on('reconnected', () => {
                    console.log('[DB] reconnected');
                });
                this.connection.on('error', (err) => {
                    console.log('[DB] event error: ' + err);
                });
            });
        }
        catch (err) {
            console.log('[DB] MongoDB connection error. Please make sure MongoDB is running.', err);
            process.exit(0);
        }
    }
}
exports.default = new Db();
//# sourceMappingURL=db.js.map