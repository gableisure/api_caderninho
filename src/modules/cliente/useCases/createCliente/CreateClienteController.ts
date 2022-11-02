import { CreateClienteUseCase } from './CreateClienteUseCase';
import { Request, Response } from "express";

export class CreateClienteController {
    async handle(req: Request, res: Response) {
        const { id_estabelecimento, nome, telefone, celular} = req.body;

        console.log(id_estabelecimento)

        const createClienteUseCase = new CreateClienteUseCase();

        const usuario = await createClienteUseCase.execute({id_estabelecimento, nome, telefone, celular});

        res.status(200).json(usuario);
    }
}