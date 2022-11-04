import { GetAllClienteUseCase } from './GetAllClienteUseCase';
import { Response, Request } from 'express';

export class GetAllClienteController {
    async handle(req: Request, res: Response) {
        const getAllClienteUseCase = new GetAllClienteUseCase();

        const usuarios = await getAllClienteUseCase.execute();

        res.status(200).json(usuarios);
    }
}