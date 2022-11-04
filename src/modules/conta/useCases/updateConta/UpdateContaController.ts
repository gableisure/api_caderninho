import { Request, Response } from 'express';
import { UpdateContaUseCase } from './UpdateContaUseCase';

export class UpdateContaController {
    async handle(req: Request, res: Response) {
        const id_conta = Number(req.params.id);

        const { desconto, observacao } = req.body;

        const dt_fim_vigencia = new Date(req.body.dt_fim_vigencia).toISOString();

        const updateContaUseCase = new UpdateContaUseCase();
        
        const conta = await updateContaUseCase.execute({ id_conta, desconto, observacao, dt_fim_vigencia });

        return res.status(200).json(conta);
    }
}