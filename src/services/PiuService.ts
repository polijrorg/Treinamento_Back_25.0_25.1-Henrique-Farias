import { randomUUID } from 'crypto';

import Piu from '../models/Piu';
import piusRepository from '../repositories/piusRepository';

class PiuService {
    private repository: piusRepository;
    constructor() {
        this.repository = new piusRepository();
    }
    public create(IdUser:string,Texto:string, NúmeroDeLikes: string, NúmeroDeComentários: string): Piu{
    const Id = randomUUID();
    const piu = this.repository.create({
        Id,
        IdUser,
        Texto,
        NúmeroDeLikes,
        NúmeroDeComentários,
    })
    return piu;
    }
    public listAll(): Piu[] {
        return this.repository.getAll();
    }
    public ListAllUser(IdUser:string): Piu [] {
        return this.repository.getAllUser(IdUser);
    }
    public findById(Id:string): Piu | undefined {
        return this.repository.getById(Id)
    }
    public delete(Id:string): boolean {
        const index = this.repository.findIndexById(Id);
        if (index ===-1) return false
        this.repository.delete(index)
        return true
    }
}
export default new PiuService
