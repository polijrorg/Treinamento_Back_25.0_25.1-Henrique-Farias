import Piu from "../models/Piu";

interface CreatePiu {
    Id:string
    IdUser:string;
    Texto:string;
    NúmeroDeLikes: string;
    NúmeroDeComentários: string;
}
class piusRepository {
    private pius: Piu[];
    constructor () {
        this.pius = []
    }
    public create(data: CreatePiu): Piu {
        const{Id, IdUser, Texto, NúmeroDeLikes, NúmeroDeComentários} = data;
        const piu = new Piu(Id, IdUser, Texto, NúmeroDeLikes, NúmeroDeComentários, new Date, new Date);
        this.pius.push(piu)
        return piu
    }
    public getAll(): Piu[] {
        return this.pius;
    }
    //Desafio de pegar todos os pius de um usuário
    public getAllUser(IdUser:string): Piu [] {
        return this.pius.filter(piu => piu.IdUser===IdUser)
    }
    public getById(Id:string): Piu | undefined {
        return this.pius.find(piu => piu.Id===Id)
    }
    public findIndexById(Id:string): number {
        return this.pius.findIndex(piu => piu.Id === Id)
    }
    public delete(index: number): void{
        this.pius.splice(index,1);
    }
}
export default piusRepository
