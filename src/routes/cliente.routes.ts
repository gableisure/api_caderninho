import { Router } from "express";
import { CreateClienteController } from "../modules/cliente/useCases/createCliente/CreateClienteController";
import { GetAllClienteController } from "../modules/cliente/useCases/getAllCliente/GetAllClienteController";
import { GetClienteByIdController } from "../modules/cliente/useCases/getClienteById/GetClienteByIdController";
import { UpdateClienteController } from "../modules/cliente/useCases/updateCliente/UpdateClienteController";

const clienteRoutes = Router();

const createClienteController = new CreateClienteController();
const getAllClienteController = new GetAllClienteController();
const getClienteByIdController = new GetClienteByIdController();
const updateClienteController = new UpdateClienteController();

clienteRoutes.post("/", createClienteController.handle);
clienteRoutes.get("/", getAllClienteController.handle);
clienteRoutes.get("/:id", getClienteByIdController.handle);
clienteRoutes.put("/:id", updateClienteController.handle);

export { clienteRoutes };
