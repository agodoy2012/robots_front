"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuariosIgss = exports.getUsuariosGobierno = void 0;
const sequelize_1 = require("sequelize");
const usuariosGobierno_1 = __importDefault(require("../models/usuariosGobierno"));
const usuariosIgss_1 = __importDefault(require("../models/usuariosIgss"));
const getUsuariosGobierno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const usuariosG = yield usuariosGobierno_1.default.findAll({
        where: {
            nombrec: {
                [Op.like]: `%${id}%`
            }
        }
    });
    if (usuariosG) {
        res.json(usuariosG);
    }
    else {
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${id}`
        });
    }
});
exports.getUsuariosGobierno = getUsuariosGobierno;
const getUsuariosIgss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const usuarios = yield ((_a = usuariosIgss_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query('SELECT ROB_DATOS_PERSONALES.nombre,ROB_DATOS_PERSONALES.dpi,ROB_DATOS_PERSONALES.nit,ROB_DATOS_PERSONALES.fech_nac, ROB_DATOS_IGSS.nombre as patrono,  ROB_DATOS_IGSS.direcc, ROB_DATOS_IGSS.tel,  ROB_DATOS_IGSS.fech_ult_cuota   FROM [GT_ROBOTS].[dbo].[ROB_DATOS_PERSONALES]  INNER JOIN ROB_DATOS_IGSS ON GT_ROBOTS..ROB_DATOS_IGSS.codigo  = GT_ROBOTS..ROB_DATOS_PERSONALES.codigo and GT_ROBOTS..ROB_DATOS_PERSONALES.nombre like :search_name', {
        replacements: { search_name: `%${id}%` },
        type: sequelize_1.QueryTypes.SELECT
    }));
    if (usuarios) {
        res.json(usuarios);
    }
    else {
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${id}`
        });
    }
});
exports.getUsuariosIgss = getUsuariosIgss;
//# sourceMappingURL=usuarios.js.map