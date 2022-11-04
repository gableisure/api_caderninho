import { CreateUsuarioUseCase } from './CreateUsuarioUseCase';
import { Request, Response } from "express";
import  bcrypt  from 'bcryptjs';


export class CreateUsuarioController {
    async handle(req: Request, res: Response) {
        const { id_estabelecimento, nome, email, telefone, celular } = req.body;
        
        const password = bcrypt.hashSync(req.body.password, 8);
        
        const createUsuarioUseCase = new CreateUsuarioUseCase();

        const usuario = await createUsuarioUseCase.execute({ id_estabelecimento, nome, email, password, telefone, celular });

        res.status(200).json(usuario);
    }
}