import { Request, Response } from 'express';
import { UpdateClienteUseCase } from './UpdateClienteUseCase';

export class UpdateClienteController {
    async handle(req: Request, res: Response) {
        const id_cliente = Number(req.params.id);

        const { nome, telefone, celular } = req.body;

        const dt_fim_vigencia = new Date(req.body.dt_fim_vigencia).toISOString();

        const updateClienteUseCase = new UpdateClienteUseCase();
        
        const cliente = await updateClienteUseCase.execute({ id_cliente, nome, telefone, celular, dt_fim_vigencia });

        return res.status(200).json(cliente);
    }
}