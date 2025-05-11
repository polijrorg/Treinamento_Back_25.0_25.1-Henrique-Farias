// video 5 minuto 10:33 ela colocou um updated data e created at, vou teorizar que nesse template não precisa
//user["NomeDoUsuário"], caso queira acessar
class User{
    id:string;
    NomeDoUsuário: string;
    Senha:string;
    Telefone:string;
    DataDeNascimento: string
    email: string;
    cpf: string;
    
    constructor(id:string, NomeDoUsuário:string, Senha:string, Telefone:string, DataDeNascimento:string, email:string, cpf:string) {
        this.id =id;
        this.NomeDoUsuário =NomeDoUsuário;
        this.email =email;
        this.cpf = cpf;
        this.Senha = Senha;
        this.Telefone =Telefone;
        this.DataDeNascimento = DataDeNascimento;
    }
}
export default User;