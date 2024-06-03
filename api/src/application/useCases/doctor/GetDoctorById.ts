import DatabaseService from "@/infra/DatabaseService";

export default class GetDoctorById {
  constructor(readonly database: DatabaseService) {}

  async execute(id: number) {
    const INCLUDE_AGENDA = true;
    const doctor = await this.database.getDoctorById(id, INCLUDE_AGENDA);

    if (!doctor) {
      throw new Error("No doctor found with this id");
    }

    return doctor;
  }
}
