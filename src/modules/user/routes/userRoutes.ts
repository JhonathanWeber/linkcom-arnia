import { Router } from "express";
import { userModule } from "../factories/userFactories";
import { Authentication } from "../../../middlewares/authenticationMiddleware";
import { Authorization } from "../../../middlewares/authorizationMiddleware";

export const userRoutes = Router();

userRoutes.get("/users", Authentication.handler, userModule.getAll.bind(userModule));
userRoutes.get("/users/inactives", Authentication.handler, Authorization.handlerAdmin, userModule.getAllDelete.bind(userModule));
userRoutes.get("/user/:id", Authentication.handler, userModule.getUserById.bind(userModule));
userRoutes.put("/user/delete/:id", Authentication.handler, userModule.softDelete.bind(userModule));
userRoutes.put("/user/restore/:id", Authentication.handler, Authorization.handlerAdmin, userModule.restoreUser.bind(userModule));
userRoutes.put(
  "/user/email/:email", Authentication.handler,
  userModule.getUserByEmail.bind(userModule)
);
userRoutes.put("/user/update/:id", Authentication.handler, userModule.updateUser.bind(userModule));


userRoutes.put(
  "/user/subtract-gems/:id", Authentication.handler,
  userModule.subtractGems.bind(userModule)
);

userRoutes.put("/admin/add-gems/:id", Authentication.handler, Authorization.handlerAdmin, userModule.addGems.bind(userModule));