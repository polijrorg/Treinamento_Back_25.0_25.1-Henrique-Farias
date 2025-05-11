import { Router } from 'express';

import PiuService from '../services/PiuService';
import UserService from '../services/UserService';

const piusRouter = Router();

piusRouter.post('/register', (req, res) => {
    const{IdUser, Texto, NúmeroDeLikes, NúmeroDeComentários} = req.body;

    if(!IdUser  || !Texto || !NúmeroDeLikes || !NúmeroDeComentários) {
        return res.status(400).json({message:"Por favor envie todas as informações"})}

    const ExisteUser = UserService.findById(IdUser);
    if (!ExisteUser) {
        return res.status(400).json({message:"Esse Usuário não existe"})
    }
    if (Texto.length > 140) {
        return res.status(400).json({message:"O tamanho do texto ultrapassa o limite de 140 caracteres"})
    }
    
    const piu = PiuService.create(IdUser, Texto, NúmeroDeLikes, NúmeroDeComentários);
    return res.status(201).json(piu)

})
piusRouter.get('/', (req, res) =>{
    const pius = PiuService.listAll();
    return res.status(200).json(pius)
})
piusRouter.get('/Id/:Id', (req,res) => {
    const piu = PiuService.findById(req.params.Id);
    if(!piu) {
        return res.status(400).json({message:"Piu não encontrado :("})
    }
    return res.status(200).json(piu)
})
piusRouter.get('/Idu/:IdUser', (req,res) => {
    const piusUser = PiuService.ListAllUser(req.params.IdUser);
    return res.status(200).json(piusUser)
})
piusRouter.delete('/Idd/:Id', (req,res) => {
    const deleted = PiuService.delete(req.params.Id);
    if(!deleted) {
        return res.status(400).json({message:"Piu não encontrado"})
    }
    return res.status(200).send();
})

export default piusRouter
