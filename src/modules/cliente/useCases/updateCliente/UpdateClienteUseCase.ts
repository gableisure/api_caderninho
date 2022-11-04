import { tb_cliente } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { UpdateClienteDTO } from "../../dtos/UpdateClienteDTO";

export class UpdateClienteUseCase {
    async execute({ id_cliente, nome, telefone, celular, dt_fim_vigencia }: UpdateClienteDTO): Promise<tb_cliente> {
        const clienteExists = await prisma.tb_cliente.findFirst({
            where: {
                id_cliente
            }
        });

        if(!clienteExists) throw new AppError("Cliente não existe!");

        const cliente = await prisma.tb_cliente.update({
            where: {
                id_cliente
            },
            data: {
                nome,
                telefone,
                celular,
                dt_fim_vigencia
            }
        });

        return cliente;
    }
}