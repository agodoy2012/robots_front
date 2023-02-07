import express, {Application}  from "express";
import  userRoutes from '../routes/usuario';
import cors   from "cors";
import db from "../db/connection";
class Server{
private app: Application;
private port: string;
private apiPaths ={
    usaurios: '/api/usuarios'
}

constructor(){
    this.app = express();
    this.port =  process.env.PORT || '8003';
    this.dbConnection();
    //metodos iniciales 
    this.middlewares();
    //definir rutas
    this.routes();

}

async dbConnection(){
//conexion a la base de datos
try {
    await db.authenticate();
    console.log("conexion exitos")
} catch (error) {
    throw new Error('errores');
    
    
}


}
middlewares(){ // funciones que se ejecutan de primero que cualquier otra cosa 
    //cors

    this.app.use(cors({

    }))
    //lectura del body
    this.app.use(express.json())
    //publico


}
routes(){
    this.app.use(this.apiPaths.usaurios,userRoutes)
}
listen(){
    this.app.listen(this.port, () =>{
        console.log("servidor corriendo en puerto: "+ this.port);
    })
}
}

export default Server;