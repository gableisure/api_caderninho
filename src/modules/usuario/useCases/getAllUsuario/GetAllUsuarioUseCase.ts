import { tb_usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsuarioUseCase  {
    async execute(): Promise<tb_usuario[]> {
        const usuarios = await prisma.tb_usuario.findMany({});

        return usuarios;
    }
}