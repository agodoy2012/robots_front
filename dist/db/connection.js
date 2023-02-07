"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//archivo para la conexion a la base de datos 
const db = new sequelize_1.Sequelize('GT_ROBOTS', 'gt_robot', 'f9HbfqXBJjJ5jkH', {
    host: '200.74.250.96',
    dialect: 'mssql',
});
exports.default = db;
//# sourceMappingURL=connection.js.map