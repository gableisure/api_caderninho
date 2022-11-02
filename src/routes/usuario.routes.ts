import { Router } from "express";
import { CreateUsuarioController } from "../modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { GetAllUsuarioController } from "../modules/usuario/useCases/getAllUsuario/GetAllUsuarioController";
import { GetUsuarioByIdController } from "../modules/usuario/useCases/getUsuarioById/GetUsuarioByIdController";
import { UpdateUsuarioController } from "../modules/usuario/useCases/updateUsuario/UpdateUsuarioController";

const usuarioRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const getAllUsuarioController = new GetAllUsuarioController();
const getUsuarioByIdController = new GetUsuarioByIdController();
const updateUsuarioController = new UpdateUsuarioController();

usuarioRoutes.get("/", getAllUsuarioController.handle);
usuarioRoutes.post("/", createUsuarioController.handle);
usuarioRoutes.get("/:id", getUsuarioByIdController.handle);
usuarioRoutes.put("/:id", updateUsuarioController.handle);


export { usuarioRoutes };