import { Router } from "express";
import { CreateContaController } from "../modules/conta/useCases/createConta/CreateContaController";
import { GetAllContaController } from "../modules/conta/useCases/getAllConta/GetAllContaController";
import { GetContaByIdController } from "../modules/conta/useCases/getContaById/GetContaByIdController";
import { UpdateContaController } from "../modules/conta/useCases/updateConta/UpdateContaController";

const contaRoutes = Router();

const createContaController = new CreateContaController();
const getAllContaController = new GetAllContaController();
const getContaByIdController = new GetContaByIdController();
const updateContaController = new UpdateContaController();

contaRoutes.post("/", createContaController.handle);
contaRoutes.get("/", getAllContaController.handle);
contaRoutes.get("/:id", getContaByIdController.handle);
contaRoutes.put("/:id", updateContaController.handle);

export { contaRoutes };
