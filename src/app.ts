import express, {
  Express,
  Request,
  Response,
  NextFunction,
  json,
} from "express";
import { AuthRouter } from "./routers/auth.router";
import { CustomerRouter } from "./routers/customer.router";
import { ServiceInstanceRouter } from "./routers/si.router";

const PORT = 8000;

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(json());
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const customerRouter = new CustomerRouter();
    const serviceInstanceRouter = new ServiceInstanceRouter();

    this.app.use("/api/auth", authRouter.getRouter());
    this.app.use("/api/customer", customerRouter.getRouter());
    this.app.use("/api/service-instance", serviceInstanceRouter.getRouter());
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        res.status(404).send("Not found !");
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes("/api/")) {
          res.status(500).send(err.message);
        } else {
          next();
        }
      }
    );
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`);
    });
  }
}
