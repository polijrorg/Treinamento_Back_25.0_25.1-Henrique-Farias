import { randomUUID } from 'crypto';

import User from '../models/user';
import usersRepository from '../repositories/usersRepository';

class UserService {
    private repository: usersRepository;
    constructor() {
        this.repository = new usersRepository();
    }
    public create(NomeDoUsuário:string, Senha:string, Telefone:string, DataDeNascimento:string, email:string, cpf:string): User{

        const userwithCPF = this.repository.findUserByCPF(cpf);
        if (userwithCPF) {throw Error("Já existe um usuário com esse cpf")}

        const userwithEmail = this.repository.findUserByEmail(email);
        if (userwithEmail) {throw Error("Já existe um usuário com esse email")}

        const userwithTelefone = this.repository.findUserByTelefone(Telefone);
        if (userwithTelefone) {throw Error("Já existe um usuário com esse telefone")}

        const id = randomUUID();
        const user = this.repository.create({
            id,
            NomeDoUsuário,
            Senha,
            Telefone,
            DataDeNascimento,
            email,
            cpf,

    });

    return user;
    }
    public listAll():User[] {
        return this.repository.getAll();
    }
    public findById(id:string): User | undefined{
        const user = this.repository.getById(id)
        return user;
    }
    public findByCpf(cpf:string): User | undefined{
        return this.repository.findUserByCPF(cpf)
    }
    public findByemail(email:string): User | undefined {
        return this.repository.findUserByEmail(email)
    }
    public findByTelefone(Telefone:string): User | undefined {
        return this.repository.findUserByTelefone(Telefone)
    }
    public update( id:string, NomeDoUsuário:string, Senha:string, Telefone:string, DataDeNascimento:string, email:string, cpf:string): User | null{
        const existingUser = this.repository.getById(id)

        if (!existingUser) return null;
        const userwithCPF = this.repository.findUserByCPF(cpf);
        if (userwithCPF) {throw Error("Já existe um usuário com esse cpf")}

        const userwithEmail = this.repository.findUserByEmail(email);
        if (userwithEmail) {throw Error("Já existe um usuário com esse email")}

        const userwithTelefone = this.repository.findUserByTelefone(Telefone);
        if (userwithTelefone) {throw Error("Já existe um usuário com esse telefone")}
        return this.repository.update({
            id,
            data: {NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf}
        })
    }
    public delete(id:string): boolean {
        const index = this.repository.findIndexById(id);
        if (index===-1) return false
        this.repository.delete(index);
        return true
    }

}
export default new UserService
