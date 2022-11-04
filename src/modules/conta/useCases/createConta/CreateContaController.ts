import { CreateContaUseCase } from './CreateContaUseCase';
import { Request, Response } from "express";

export class CreateContaController {
    async handle(req: Request, res: Response) {

        const { id_usuario, id_cliente, observacao } = req.body;

        const createContaUseCase = new CreateContaUseCase();

        const conta = await createContaUseCase.execute({ id_usuario, id_cliente, observacao });

        res.status(200).json(conta);
    }
}