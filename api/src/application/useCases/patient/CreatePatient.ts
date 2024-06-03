import DatabaseService, { database } from "@/infra/DatabaseService";
import { hashPassword } from "@/infra/helpers/SecurityHelper";
export default class CreatePatientUseCase {
    constructor(readonly database: DatabaseService){}

    async execute(name: string,phone: string, password: string){
        // verificar se ja existe o paciente
        const patient = await database.getPatienteByPhone(phone);
        if(patient){
            throw new Error("Patient already exists")
        }

        // gera uma hash para a senha
        const hashedPassword = hashPassword(password);

        //adicona novo ususario com o telefone
        const user = await this.database.createUser(phone, hashedPassword);

        // adiciona paciente 
        const newPatient = await this.database.createPatiente(name, phone, user.id);

        return newPatient;
    }
}