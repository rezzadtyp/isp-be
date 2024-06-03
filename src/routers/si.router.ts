import { Router } from "express";
import { ServiceInstanceController } from "../controllers/si.controller";

export class ServiceInstanceRouter {
  private serviceInstanceController: ServiceInstanceController;
  private router: Router;

  constructor() {
    this.serviceInstanceController = new ServiceInstanceController();
    this.router = Router();
    this.initializeRouters();
  }

  private initializeRouters() {
    this.router.post(
      "/",
      this.serviceInstanceController.createServiceInstanceController
    );
    this.router.get(
      "/",
      this.serviceInstanceController.getServiceInstancesController
    );
    this.router.get(
      "/:id",
      this.serviceInstanceController.getServiceInstanceController
    );
  }

  public getRouter() {
    return this.router;
  }
}
