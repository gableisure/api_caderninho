import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateClienteDTO } from "../../dtos/CreateClienteDTO";

export class CreateClienteUseCase {
    async execute({id_estabelecimento, nome, telefone, celular}: CreateClienteDTO) {
        const estabelecimentoExists = await prisma.tb_estabelecimento.findUnique({
            where: {
                id_estabelecimento
            }
        });

        if (!estabelecimentoExists) throw new AppError("Estabelecimento não existe!");

        const cliente = await prisma.tb_cliente.create({
            data: {
                id_estabelecimento,
                nome,
                telefone,
                celular
            }
        });

        return cliente;
    }
}