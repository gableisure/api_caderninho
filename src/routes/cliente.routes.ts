import { Router } from "express";
import { CreateClienteController } from "../modules/cliente/useCases/createCliente/CreateClienteController";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();

clienteRoutes.post("/", createClienteController.handle);

export { clienteRoutes };