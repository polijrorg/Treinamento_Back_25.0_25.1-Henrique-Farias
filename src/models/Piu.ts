class Piu {
    Id:string
    IdUser:string;
    Texto:string;
    NúmeroDeLikes: string;
    NúmeroDeComentários: string;
    DataDePublicação: Date;
    DataDaUltimaEdição?:Date;

    constructor( 
    Id:string,
    IdUser:string,
    Texto:string,
    NúmeroDeLikes: string,
    NúmeroDeComentários: string,
    DataDePublicação: Date,
    DataDaUltimaEdição:Date) {
        this.Id = Id
        this.IdUser = IdUser;
        this.Texto = Texto;
        this.NúmeroDeLikes = NúmeroDeLikes;
        this.NúmeroDeComentários = NúmeroDeComentários;
        this.DataDePublicação = new Date(DataDePublicação);
        this.DataDaUltimaEdição = new Date(DataDaUltimaEdição);
    }

}
export default Piu