export interface CreateUsuarioDTO {
    id_estabelecimento: number;
    nome: string;
    email: string;
    password: string;
    telefone?: string;
    celular?: string;
}