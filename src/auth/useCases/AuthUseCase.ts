import { prisma } from "../../prisma/client";
import { AuthDTO } from "../dtos/AuthDTO";
import { AppError } from '../../errors/AppErros';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthUseCase {
    async execute({email, password}: AuthDTO) {
        const accessTokenSecret = String(process.env.ACCESS_TOKEN_SECRET);

        const usuarioExists = await prisma.tb_usuario.findUnique({
            where: {
                email
            }
        });

        if(!usuarioExists) throw new AppError("Usuário não existe!");
        
        const isValidPassword = await bcrypt.compare(password, usuarioExists.password);

        if(!isValidPassword) throw new AppError("Email ou senha inválida!");

        const token = jwt.sign({ id: usuarioExists.id_usuario}, accessTokenSecret, { expiresIn: '1d' });

        return { usuarioExists, token };
    }
}