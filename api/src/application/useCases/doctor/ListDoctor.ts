import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class ListDoctorUseCases {
    
    constructor(readonly database: DatabaseService){}
    
    async execute (){
        //lógica de negicio
        const doctors = await this.database.listDoctor()
        
        if(!doctors) {
            throw new NotFoundError("No doctors found")
        }
        
        return doctors
    }
}