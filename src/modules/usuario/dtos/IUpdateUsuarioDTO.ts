export default interface IUpdateUsuarioDTO {
  id: string;
  nome: string;
  email: string;
  senha?: string;
  senha_antiga?: string;
  tipo_de_pessoa_id: string;
}
