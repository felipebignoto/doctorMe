import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    //Lógica de acesso a banco de dados
    return this.connection.doctor.findMany();
  }

  getDoctorById(id: number, includeAgenda: boolean = false) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        agenda: includeAgenda,
      },
    });
  }

  getPatienteByPhone(phone: string, includeAppoinmet: boolean = false) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointment: includeAppoinmet,
      },
    });
  }

  createUser(phone: string, password: string){
    return this.connection.user.create({
      data: {
        phone,
        password,
      }
    })
  }

  createPatiente(name: string, phone: string, userId: number){
    return this.connection.patient.create({
      data: {
        name,
        phone,
        userId
      }
    })
  }
}

export const database = new DatabaseService(new PrismaClient())