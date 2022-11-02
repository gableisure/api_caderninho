export interface CreateUsuarioDTO {
    id_estabelecimento: number;
    nome: string;
    email: string;
    telefone?: string;
    celular?: string;
}