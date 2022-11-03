import { GetClienteByIdUseCase } from './GetClienteByIdUseCase';
import { Response, Request } from 'express';

export class GetClienteByIdController {
    async handle(req: Request, res: Response) {
        const id_cliente = Number(req.params.id);

        console.log(id_cliente)

        const getClienteByIdUseCase = new GetClienteByIdUseCase();

        const cliente = await getClienteByIdUseCase.execute({id_cliente});

        res.status(200).json(cliente);
    }   
}