import { Response, Request, NextFunction } from 'express';
import { AppError } from '../errors/AppErros';
import { TokenPayloadDTO } from '../auth/dtos/TokenPayloadDTO';
import jwt from 'jsonwebtoken';

export default function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const accessTokenSecret = String(process.env.ACCESS_TOKEN_SECRET);

    const { authorization } = req.headers;

    if (!authorization) throw new AppError("Não autorizado!");

    const token = authorization.replace('Bearer', '').trim();
    
    try {
        const data = jwt.verify(token, accessTokenSecret);
        
        const { id } = data as TokenPayloadDTO;

        req.id_usuario = id;

        return res.send({ id_usuario: req.id_usuario });
    } catch {
        if (!authorization) throw new AppError("Não autorizado!");
    }
}