import { tb_usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { UpdateUsuarioDTO } from "../../dtos/UpdateUsuarioDTO";

export class UpdateUsuarioUseCase {
    async execute({ id_usuario, nome, email, telefone, celular, dt_fim_vigencia }: UpdateUsuarioDTO): Promise<tb_usuario> {
        const usuarioExists = await prisma.tb_usuario.findFirst({
            where: {
                id_usuario
            }
        });

        if(!usuarioExists) throw new AppError("Usuário não existe!");

        const usuarioEmailAlreadyExists = await prisma.tb_usuario.findFirst({
            where: {
                email
            }
        });

        if(usuarioEmailAlreadyExists) throw new AppError("Já existe um usuário com esse email!");

        const usuario = await prisma.tb_usuario.update({
            where: {
                id_usuario
            },
            data: {
                nome,
                email,
                telefone,
                celular,
                dt_fim_vigencia
            }
        });

        return usuario;
    }
}