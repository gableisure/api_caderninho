import { tb_cliente } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { GetClienteByIdDTO } from "../../dtos/GetClienteByIdDTO";

export class GetClienteByIdUseCase {
    async execute({id_cliente}: GetClienteByIdDTO): Promise<tb_cliente> {
        const clienteExists = await prisma.tb_cliente.findUnique({
            where: {
                id_cliente
            }
        });
        
        if(!clienteExists) throw new AppError("Cliente não existe!");

        return clienteExists;
    }
}