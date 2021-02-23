"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    port: process.env.PORT || 3000,
    production: false,
    db: {
        uri: process.env.MONGODB_URI
    },
    questionsApi: 'https://opentdb.com/api.php?amount=15&type=multiple'
};
//# sourceMappingURL=base.js.map