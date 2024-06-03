import { NextFunction, Request, Response } from "express";
import { createServiceInstanceService } from "../services/si/create-si.service";
import { getServiceInstancesService } from "../services/si/get-sis.service";
import { getServiceInstanceService } from "../services/si/get-si.service";

export class ServiceInstanceController {
  // CREATE SI
  async createServiceInstanceController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await createServiceInstanceService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET ALL SI
  async getServiceInstancesController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await getServiceInstancesService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET SI BY ID
  async getServiceInstanceController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;
      const result = await getServiceInstanceService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
