import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { clienteRoutes } from "./cliente.routes";
import { contaRoutes } from "./conta.routes";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/api/usuarios", usuarioRoutes);
routes.use("/api/clientes", clienteRoutes);
routes.use("/api/contas", contaRoutes);
routes.use("/api/auth", authRoutes);

export { routes };