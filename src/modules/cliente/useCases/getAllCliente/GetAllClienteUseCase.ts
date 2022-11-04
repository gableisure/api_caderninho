import { prisma } from "../../../../prisma/client";

export class GetAllClienteUseCase {
    async execute() {
        const clientes = await prisma.tb_cliente.findMany({});

        return clientes;
    }
}