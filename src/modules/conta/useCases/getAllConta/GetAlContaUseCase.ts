import { tb_conta } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAlContaUseCase  {
    async execute(): Promise<tb_conta[]> {
        const contas = await prisma.tb_conta.findMany({
            include: {
                tb_cliente: {
                    select: {
                        nome: true
                    }
                },
                tb_usuario: {
                    select: {
                        nome: true
                    }
                }
            }
        });

        return contas;
    }
}