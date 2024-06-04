import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import DoctorController from './controller/DoctorController'
import PatientController from './controller/PatientController'
import {validateBody, validateParams, isAuthenticated} from '@/infra/ValidationMiddleware'
import { authenticationSchema, createAppointmentAgendaIdSchema, createPatientPatientIdSchema, getDoctorByIdSchema, getPatientByPhoneSchema } from "@/infra/ValidationSchemas";
import { errorHandling } from './helpers/ErrorHandling'

export default class Router {
  app: express.Express;

  constructor(
    readonly doctorController: DoctorController,
    readonly patientController: PatientController
  ) {
    this.app = express();
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(errorHandling)

    this.setRoutes();
  }

  private setRoutes() {
    //rotas da aplicação
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    this.app.get("/doctors", this.doctorController.listDoctor);
    this.app.get(
      "/doctor/:id",
      validateParams(getDoctorByIdSchema),
      this.doctorController.getDoctorById
    );

    this.app.post("/patient", this.patientController.createPatient);
    this.app.post("/patient/:patientId/appointment", validateParams(createPatientPatientIdSchema),isAuthenticated, validateBody(createAppointmentAgendaIdSchema),this.patientController.createAppointment);
    this.app.post("/authenticate",validateBody(authenticationSchema), this.patientController.authenticate);
    this.app.get("/patient/:phone",validateParams(getPatientByPhoneSchema),isAuthenticated,this.patientController.getPatientByPhone)
    
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log("Server running on port " + port);
    });
  }
}