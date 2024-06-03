import { createCustomerService } from "../services/customer/create-customer.service";
import { getCustomerService } from "../services/customer/get-customer.service";
import { getCustomersService } from "../services/customer/get-customers.service";
import { NextFunction, Request, Response } from "express";
import { updateCustomerService } from "../services/customer/update-customer.service";

export class CustomerController {
  // CREATE CUSTOMER
  async createCustomerController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await createCustomerService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET CUSTOMERS
  async getCustomersController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await getCustomersService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET CUSTOMER BY ID
  async getCustomerController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getCustomerService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // UPDATE CUSTOMER DATA
  async updateCustomerController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.id;
      const result = await updateCustomerService(Number(id), req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
