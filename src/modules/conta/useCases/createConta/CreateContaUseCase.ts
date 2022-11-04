import { tb_conta } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateContaDTO } from "../../dtos/CreateContaDTO";

export class CreateContaUseCase {
    async execute({id_usuario, id_cliente, observacao}: CreateContaDTO): Promise<tb_conta> {

        const usuarioExists = await prisma.tb_usuario.findUnique({
            where: {
                id_usuario
            }
        });

        if(!usuarioExists) throw new AppError("Usuario não existe!");

        const clienteExists = await prisma.tb_cliente.findUnique({
            where: {
                id_cliente
            }
        });

        if(!clienteExists) throw new AppError("Cliente não existe!");

        const conta = await prisma.tb_conta.create({
            data: {
                id_usuario,
                id_cliente,
                observacao
            }
        });
        
        return conta;
    }
}
