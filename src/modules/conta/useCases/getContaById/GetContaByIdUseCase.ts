import { tb_conta } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { GetContaByIdDTO } from "../../dtos/GetContaByIdDTO";

export class GetContaByIdUseCase  {
    async execute({ id_conta }: GetContaByIdDTO): Promise<tb_conta> {
        const contaExists = await prisma.tb_conta.findUnique({
            where: {
                id_conta
            },
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

        if(!contaExists) throw new AppError("Conta não existe!");
       
        return contaExists;
    }
}