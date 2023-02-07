"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const UsuariosIgss = connection_1.default.define('UsuariosIgss', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    dpi: {
        type: sequelize_1.DataTypes.STRING
    },
    nit: {
        type: sequelize_1.DataTypes.STRING
    },
    fech_nac: {
        type: sequelize_1.DataTypes.STRING
    },
    patrono: {
        type: sequelize_1.DataTypes.STRING
    },
    direcc: {
        type: sequelize_1.DataTypes.STRING
    },
    tel: {
        type: sequelize_1.DataTypes.STRING
    },
    fech_ult_cuota: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    tableName: 'ROB_DATOS_PERSONALES'
});
exports.default = UsuariosIgss;
//# sourceMappingURL=usuariosIgss.js.map