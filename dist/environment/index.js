"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const envPath = path_1.resolve('.env');
if (fs_1.existsSync(envPath)) {
    // tslint:disable-next-line: no-var-requires
    const env = require('dotenv').config({ path: path_1.resolve('.env') });
    if (env.error) {
        console.error(env.error);
    }
}
const _ = __importStar(require("lodash"));
const base = __importStar(require("./base"));
const production = __importStar(require("./production"));
let environment = base.environment;
exports.environment = environment;
if (process.env.NODE_ENV === 'production') {
    exports.environment = environment = _.assign(base.environment, production.environment);
}
else {
    exports.environment = environment = base.environment;
}
//# sourceMappingURL=index.js.map