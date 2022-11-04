import { GetContaByIdUseCase } from './GetContaByIdUseCase';
import { Request, Response } from "express";

export class GetContaByIdController {
    async handle(req: Request, res: Response) {
        const id_conta = Number(req.params.id);

        const getContaByIdUseCase = new GetContaByIdUseCase();

        const conta = await getContaByIdUseCase.execute({ id_conta });

        res.status(200).json(conta);
    }
}