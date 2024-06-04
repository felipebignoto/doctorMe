import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class GetPatienteByPhone {
    constructor(readonly database: DatabaseService){}

    async execute(Phone: string){
        const INCLUDE_APPOINMENT = true
        const INCLUDE_DOCTOR = true
        const Patiente = await this.database.getPatienteByPhone(
          Phone,
          INCLUDE_APPOINMENT,
          INCLUDE_DOCTOR
        );

        if(!Patiente){
            throw new NotFoundError("No Patiente found with this Phone")
        }

        return Patiente
    }
}