import { CreateUsuarioUseCase } from './CreateUsuarioUseCase';
import { Request, Response } from "express";

export class CreateUsuarioController {
    async handle(req: Request, res: Response) {

        const { id_estabelecimento, nome, email } = req.body;

        const createUsuarioUseCase = new CreateUsuarioUseCase();

        const usuario = await createUsuarioUseCase.execute({ id_estabelecimento, nome, email });

        console.log(usuario)

        res.status(200).json(usuario);
    }
}