import { Request, Response } from "express";
import { AuthUseCase } from "./AuthUseCase";


export class AuthController {
    async handle(req: Request, res: Response) {

        const { email, password } = req.body

        const authUseCase = new AuthUseCase();

        const usuario = await authUseCase.execute({email, password});

        res.status(200).json(usuario);

    }
}


        
        
    