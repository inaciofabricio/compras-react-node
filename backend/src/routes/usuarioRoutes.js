import express from "express";
import { registro, login, getMe, esqueceuSenha, novoUsuario, confirmarCadastro } from "../controllers/usuarioController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/api/usuario/registro", protect, registro);
router.post("/api/usuario/login", login);
router.post("/api/usuario/esqueceu-senha", esqueceuSenha);
router.post("/api/usuario/novo-usuario", novoUsuario);
router.get("/api/usuario/me", protect, getMe);

router.get("/usuario/confirmar-cadastro/:hash", confirmarCadastro);

export default router;