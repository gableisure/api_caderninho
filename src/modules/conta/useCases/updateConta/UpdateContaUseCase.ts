import { tb_conta } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { UpdateContaDTO } from "../../dtos/UpdateContaDTO";

export class UpdateContaUseCase {
    async execute({ id_conta, desconto, observacao, dt_fim_vigencia }: UpdateContaDTO): Promise<tb_conta> {
        const contaExists = await prisma.tb_conta.findFirst({
            where: {
                id_conta
            }
        });

        if(!contaExists) throw new AppError("Conta não existe!");

        const conta = await prisma.tb_conta.update({
            where: {
                id_conta
            },
            data: {
                id_conta,
                desconto,
                observacao,
                dt_fim_vigencia
            }
        });

        return conta;
    }
}