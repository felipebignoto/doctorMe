import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    //Lógica de acesso a banco de dados
    return this.connection.doctor.findMany();
  }

  getDoctorById(id: number, includeAgenda: boolean) {
    return this.connection.doctor.findUnique({
      where: { id },
      include: {
        agenda: includeAgenda,
      },
    });
  }

  getPatienteByPhone(phone: string, includeAppoinmet: boolean) {
    return this.connection.patient.findUnique({
      where: { phone },
      include: {
        appointment: includeAppoinmet,
      },
    });
  }
}

export const database = new DatabaseService(new PrismaClient())