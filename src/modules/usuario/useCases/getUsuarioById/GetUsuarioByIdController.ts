import { GetUsuarioByIdUseCase } from './GetUsuarioByIdUseCase';
import { Request, Response } from "express";

export class GetUsuarioByIdController {
    async handle(req: Request, res: Response) {
        const id_usuario = Number(req.params.id);

        const getUsuarioByIdUseCase = new GetUsuarioByIdUseCase();

        const usuario = await getUsuarioByIdUseCase.execute({ id_usuario });
        res.status(200).json(usuario);
    }
}