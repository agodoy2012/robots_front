"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/gobierno/:id', usuarios_1.getUsuariosGobierno);
router.get('/igss/:id', usuarios_1.getUsuariosIgss);
exports.default = router;
//# sourceMappingURL=usuario.js.map