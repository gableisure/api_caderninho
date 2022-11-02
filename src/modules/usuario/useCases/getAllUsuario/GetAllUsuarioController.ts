import { GetAllUsuarioUseCase } from './GetAllUsuarioUseCase';
import { Request, Response } from "express";

export class GetAllUsuarioController {
    async handle(req: Request, res: Response) {
        const getAllUsuarioUseCase = new GetAllUsuarioUseCase();

        const usuarios = await getAllUsuarioUseCase.execute();

        res.status(200).json(usuarios);
    }
}