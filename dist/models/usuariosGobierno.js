"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const UsuariosGobierno = connection_1.default.define('UsuariosGobierno', {
    nombrec: {
        type: sequelize_1.DataTypes.STRING
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING
    },
    dependencia: {
        type: sequelize_1.DataTypes.STRING
    },
    sede: {
        type: sequelize_1.DataTypes.STRING
    },
    directo: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    tableName: 'ROB_GOBIERNO_INFO'
});
exports.default = UsuariosGobierno;
//# sourceMappingURL=usuariosGobierno.js.map