import { DataTypes } from "sequelize";
import db from "../db/connection";

const UsuariosGobierno = db.define('UsuariosGobierno',
{
  
    nombrec: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    dependencia: {
        type: DataTypes.STRING
    },
    sede: {
        type: DataTypes.STRING
    },
    directo: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
},{
    // If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false,
tableName: 'ROB_GOBIERNO_INFO'
}
);

export default UsuariosGobierno;