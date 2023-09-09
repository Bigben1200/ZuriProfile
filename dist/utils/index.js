"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFromDatabase = exports.userDatabaseFile = exports.userDatabaseFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//bank file path
exports.userDatabaseFolder = path_1.default.join(__dirname, '../../../src/model');
exports.userDatabaseFile = path_1.default.join(exports.userDatabaseFolder, 'bank.json');
// read from database
const readFromDatabase = (filePath) => {
    return fs_1.default.readFileSync(filePath, "utf8");
};
exports.readFromDatabase = readFromDatabase;
