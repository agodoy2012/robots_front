import { Router } from "express";
import { getUsuariosGobierno, getUsuariosIgss } from '../controllers/usuarios';

const router = Router();



router.get('/gobierno/:id', getUsuariosGobierno);
router.get('/igss/:id',getUsuariosIgss)




export default router;