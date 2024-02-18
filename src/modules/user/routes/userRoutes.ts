import { Response, Request, Router } from "express";
import { userModule } from "../factories/userFactories";
import { Authentication } from "../../../middlewares/authenticationMiddleware";
import { Authorization } from "../../../middlewares/authorizationMiddleware";

export const userRoutes = Router();

userRoutes.get("/user/:id", Authentication.handler, userModule.getUserById.bind(userModule));
userRoutes.get("/user-find/email", Authentication.handler, userModule.getUserByEmail.bind(userModule));
userRoutes.put("/user/update/:id", Authentication.handler, userModule.updateUser.bind(userModule));

userRoutes.get("/users", Authentication.handler, Authorization.handlerAdmin, userModule.getAll.bind(userModule));
userRoutes.get("/users/inactives", Authentication.handler, Authorization.handlerAdmin, userModule.getAllDelete.bind(userModule));

userRoutes.put("/user/delete/:id", Authentication.handler, Authorization.handlerAdmin, userModule.softDelete.bind(userModule));
userRoutes.put("/user/restore/:id", Authentication.handler, Authorization.handlerAdmin, userModule.restoreUser.bind(userModule));

userRoutes.put("/admin/add-gems/:id", Authentication.handler, Authorization.handlerAdmin, userModule.addGems.bind(userModule));

