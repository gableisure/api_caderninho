import { tb_usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { GetUsuarioByIdDTO } from "../../dtos/GetUsuarioByIdDTO";

export class GetUsuarioByIdUseCase  {
    async execute({ id_usuario }: GetUsuarioByIdDTO): Promise<tb_usuario> {
        const usuarioExists = await prisma.tb_usuario.findUnique({
            where: {
                id_usuario
            }
        });

        if(!usuarioExists) throw new AppError("Usuário não existe!");

        return usuarioExists;
    }
}