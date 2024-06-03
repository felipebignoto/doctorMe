import DatabaseService from "@/infra/DatabaseService";

export default class ListDoctorUseCses {
    
    constructor(readonly database: DatabaseService){}
    
    async execute (){
        //lógica de negicio
        const doctors = await this.database.listDoctor()
        
        if(!doctors) {
            throw new Error("No doctors found")
        }
        
        return doctors
    }
}