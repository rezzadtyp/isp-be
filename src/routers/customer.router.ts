import { CustomerController } from "../controllers/customer.controller";
import { Router } from "express";

export class CustomerRouter {
  private customerController: CustomerController;
  private router: Router;

  constructor() {
    this.customerController = new CustomerController();
    this.router = Router();
    this.initializeRouters();
  }

  private initializeRouters() {
    this.router.post("/", this.customerController.createCustomerController);
    this.router.get("/", this.customerController.getCustomersController);
    this.router.get("/:id", this.customerController.getCustomerController);
    this.router.patch("/:id", this.customerController.updateCustomerController);
  }

  public getRouter() {
    return this.router;
  }
}
