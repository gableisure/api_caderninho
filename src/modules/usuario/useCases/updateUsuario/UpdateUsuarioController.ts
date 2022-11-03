import { Request, Response } from 'express';
import { UpdateUsuarioUseCase } from './UpdateUsuarioUseCase';

export class UpdateUsuarioController {
    async handle(req: Request, res: Response) {
        const id_usuario = Number(req.params.id);

        const { nome, email, telefone, celular } = req.body;

        const dt_fim_vigencia = new Date(req.body.dt_fim_vigencia).toISOString();

        const updateUsuarioUseCase = new UpdateUsuarioUseCase();
        
        const usuario = await updateUsuarioUseCase.execute({ id_usuario, nome, email, telefone, celular, dt_fim_vigencia });

        return res.status(200).json(usuario);
    }
}