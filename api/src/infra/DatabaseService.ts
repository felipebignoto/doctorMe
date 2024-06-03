import { PrismaClient } from "@prisma/client";

export default class DatabaseService {

    constructor(readonly connection: PrismaClient){}

    listDoctor (){
        //Lógica de acesso a bamco de dados
        return this.connection.doctor.findMany()
    }
}