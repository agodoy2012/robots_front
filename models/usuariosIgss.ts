import { DataTypes } from "sequelize";
import db from "../db/connection";

const UsuariosIgss = db.define('UsuariosIgss',
{
    nombre: {
        type: DataTypes.STRING
    },
    dpi: {
        type: DataTypes.STRING
    },
    nit: {
        type: DataTypes.STRING
    },
    fech_nac: {
        type: DataTypes.STRING
    },
    patrono: {
        type: DataTypes.STRING
    },
    direcc: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.STRING
    }
    ,
    fech_ult_cuota: {
        type: DataTypes.STRING
    }

},{
    // If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false,
tableName: 'ROB_DATOS_PERSONALES'
}
);

export default UsuariosIgss;

