import {Request, Response} from 'express';
import { QueryTypes } from 'sequelize';
import UsuariosGobierno from '../models/usuariosGobierno';
import UsuariosIgss from '../models/usuariosIgss';
export const getUsuariosGobierno = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const usuariosG = await UsuariosGobierno.findAll({
        where: {
            nombrec: {
              [Op.like]: `%${id}%`
            }
          }
      });
      if(usuariosG){
        res.json(usuariosG)
    }
    else{
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${id}`
        })
    }

}

export const getUsuariosIgss = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const usuarios = await UsuariosIgss.sequelize?.query('SELECT ROB_DATOS_PERSONALES.nombre,ROB_DATOS_PERSONALES.dpi,ROB_DATOS_PERSONALES.nit,ROB_DATOS_PERSONALES.fech_nac, ROB_DATOS_IGSS.nombre as patrono,  ROB_DATOS_IGSS.direcc, ROB_DATOS_IGSS.tel,  ROB_DATOS_IGSS.fech_ult_cuota   FROM [GT_ROBOTS].[dbo].[ROB_DATOS_PERSONALES]  INNER JOIN ROB_DATOS_IGSS ON GT_ROBOTS..ROB_DATOS_IGSS.codigo  = GT_ROBOTS..ROB_DATOS_PERSONALES.codigo and GT_ROBOTS..ROB_DATOS_PERSONALES.nombre like :search_name',{
        replacements: {search_name: `%${id}%` },
        type: QueryTypes.SELECT
    }
     )
      if(usuarios){
        res.json(usuarios)
    }
    else{
        res.status(404).json({
            msg: `NO EXISTE UN USUARIO CON EL ID ${id}`
        })
    }
    }


 