import { tb_usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateUsuarioDTO } from "../../dtos/CreateUsuarioDTO";

export class CreateUsuarioUseCase {
    async execute({id_estabelecimento, nome, email, telefone, celular}: CreateUsuarioDTO): Promise<tb_usuario> {
        const usuarioAlreadyExists = await prisma.tb_usuario.findUnique({
            where: {
                email
            }
        });

        if (usuarioAlreadyExists) throw new AppError("Usuário já existe!");

        const usuario = await prisma.tb_usuario.create({
            data: {
                id_estabelecimento,
                nome,
                email,
                telefone,
                celular
            }
        });
        
        return usuario;
    }
}
