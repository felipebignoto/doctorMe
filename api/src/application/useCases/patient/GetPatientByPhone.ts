import DatabaseService from "@/infra/DatabaseService";

export default class GetPatienteByPhone {
    constructor(readonly database: DatabaseService){}

    async execute(Phone: string){
        const INCLUDE_APPOINMENT = true
        const Patiente = await this.database.getPatienteByPhone(
          Phone,
          INCLUDE_APPOINMENT
        );

        if(!Patiente){
            throw new Error("No Patiente found with this Phone")
        }

        return Patiente
    }
}