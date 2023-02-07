import { Sequelize } from "sequelize";

//archivo para la conexion a la base de datos 
const db = new Sequelize('GT_ROBOTS','gt_robot','f9HbfqXBJjJ5jkH',{

    host: '200.74.250.96',
    dialect: 'mssql',
   
    
}) ;

export default db