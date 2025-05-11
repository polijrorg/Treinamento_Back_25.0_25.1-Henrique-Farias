import { Router } from 'express';

import UserService from '../services/UserService';
// se der errado tenta req =Request e res = Response para o eu do futuro
const usersRouter = Router();

usersRouter.post('/register', (req, res) => {
    const {NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf} = req.body;

    if (!NomeDoUsuário || !email || !cpf  || !Senha || !Telefone || !DataDeNascimento) {
        return res.status(400).json({message:"Por favor envie todas as informações"}) 
    }
    const user = UserService.create(NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf);
    return res.status(201).json(user);

})
export default usersRouter;

usersRouter.get('/', (req, res) => {
    const users = UserService.listAll();

    const UsersSemSenha = users.map(user => {
        const { Senha , ...UsersSemSenha } = user;
        return UsersSemSenha;
    });

    return res.status(200).json(UsersSemSenha);
});
usersRouter.get('/id/:id',(req,res) =>{
    const id = req.params.id
    const user = UserService.findById(id);
    if(!user) {
        return res.status(404).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json(user)
})
usersRouter.get('/cpf/:cpf',(req,res) => {
    const user = UserService.findByCpf(req.params.cpf);
    if(!user) {
        return res.status(404).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json(user)
}) 
usersRouter.get('/email/:email',(req,res) => {
    const user = UserService.findByemail(req.params.email);
    if(!user) {
        return res.status(404).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json(user)
})
usersRouter.get('/Telefone/:Telefone',(req,res) => {
    const user =UserService.findByTelefone(req.params.Telefone);
    if(!user) {
        return res.status(404).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json(user)
})
usersRouter.put('/idp/:id',(req,res) => {
    const {NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf} = req.body;
    if (!NomeDoUsuário || !email || !cpf  || !Senha || !Telefone || !DataDeNascimento) {
        return res.status(400).json({message:"Por favor envie todas as informações"}) 
    }
    const updateUser = UserService.update(req.params.id, NomeDoUsuário, Senha, Telefone, DataDeNascimento, email, cpf);
    if (!updateUser) {
        return res.status(404).json({message:'User não encontrado'})
    }
    return res.status(200).json(updateUser)
})
usersRouter.delete('/idd/:id', (req,res) => {
    const deleted = UserService.delete(req.params.id);

    if(!deleted){
        return res.status(404).json({message:'Usuário não encontrado'})
    }
    return res.status(200).send();
})
