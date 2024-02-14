import { Router } from "express";
import { userModule } from "../factories/userFactories";

export const userRoutes = Router();

userRoutes.get("/users", userModule.getAll.bind(userModule));
userRoutes.get("/users/inactives", userModule.getAllDelete.bind(userModule));
userRoutes.get("/user/:id", userModule.getUserById.bind(userModule));
userRoutes.put("/user/delete/:id", userModule.softDelete.bind(userModule));
userRoutes.put("/user/restore/:id", userModule.restoreUser.bind(userModule));
userRoutes.put(
  "/user/email/:email",
  userModule.getUserByEmail.bind(userModule)
);
userRoutes.put("/user/update/:id", userModule.updateUser.bind(userModule));
userRoutes.put("/user/add-gems/:id", userModule.addGems.bind(userModule));
userRoutes.put(
  "/user/subtract-gems/:id",
  userModule.subtractGems.bind(userModule)
);
