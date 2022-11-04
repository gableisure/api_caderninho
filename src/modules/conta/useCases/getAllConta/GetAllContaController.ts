import { GetAlContaUseCase } from './GetAlContaUseCase';
import { Request, Response } from "express";

export class GetAllContaController {
    async handle(req: Request, res: Response) {
        const getAlContaUseCase = new GetAlContaUseCase();

        const contas = await getAlContaUseCase.execute();

        res.status(200).json(contas);
    }
}