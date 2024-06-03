import { Response, Request } from "express";

export default interface DoctorController {
    listDoctor(req: Request, res: Response): Promise<void>
}