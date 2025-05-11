import User from "../models/user";

interface CreateUser {
    id:string;
    NomeDoUsuário: string;
    Senha:string;
    Telefone:string;
    DataDeNascimento: string
    email: string;
    cpf: string;
  }
interface IUpdateUserDTO {
  id: string;
  data: {
    NomeDoUsuário: string;
    Senha:string;
    Telefone:string;
    DataDeNascimento: string
    email: string;
    cpf: string;
  };
}
  class usersRepository{
    private users: User[];
    constructor() {
        this.users = []
    }
    public create(data: CreateUser): User {
        const {id, NomeDoUsuário, email, cpf, Senha, Telefone, DataDeNascimento} =data;
        const user = new User(id, NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf);
        this.users.push(user);
        return user;
    }
    public getAll(): User[] {
      return this.users;
    }
    public getById(id:string): User | undefined {
      const user = this.users.find(user => user.id === id);
      return user
    }

    public findUserByCPF(cpf:string): User | undefined {
      return this.users.find(user => user.cpf===cpf)
    }
    public findUserByEmail(email:string): User | undefined{
      return this.users.find(user => user.email=== email)
    }
    public findUserByTelefone(Telefone:string): User | undefined{
      return this.users.find(user => user.Telefone ===Telefone)
    }
    public findIndexById(id:string): number{
      return this.users.findIndex(user => user.id ===id)
    }

    public update(data: IUpdateUserDTO): User{
      const index = this.findIndexById(data.id);
      this.users[index] = {
        ...this.users[index],
        ...data.data,
      };
      return this.users[index]
    }
    public delete( index:number): void{
      this.users.splice(index,1);
    }
  }
 
export default usersRepository;
