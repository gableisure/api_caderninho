import { Router } from "express";
import { clienteRoutes } from "./cliente.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/api/usuarios", usuarioRoutes);
routes.use("/api/clientes", clienteRoutes);

export { routes };