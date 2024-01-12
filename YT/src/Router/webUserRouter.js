import { Router } from "express";
import { createWebUser, deleteSpecificUser, forgotPassword, loginUser, myProfile, readAllUser, readSpecificUser, resetPassword, updatePassword, updateProfile, updateSpecificUser, verifyEmail } from "../controller/webUserController.js";
import { isAuthenicated } from "../middleware/isAuthenticated.js";
import { WebUser } from "../schema/model.js";
import authorized from "../middleware/authorized.js";

let webUserRouter = Router();

webUserRouter
    .route("/")
    .post(createWebUser)
    .get(isAuthenicated,authorized(["Admin","superAdmin"]),readAllUser)

webUserRouter.route("/verify-email").patch(verifyEmail)

webUserRouter .route("/login") .post(loginUser)
webUserRouter .route("/my-profile") .get(isAuthenicated,myProfile)
webUserRouter .route("/update-profile") .patch(isAuthenicated,updateProfile)
webUserRouter .route("/update-password") .patch(isAuthenicated,updatePassword)

webUserRouter .route("/forgot-password")
.post(forgotPassword)

webUserRouter .route("/reset-password")
.patch(isAuthenicated,resetPassword)



webUserRouter.route("/:id")
.get(isAuthenicated,authorized(["Admin","superAdmin"]),readSpecificUser) //admin,superadmin
.patch(isAuthenicated,authorized(["Admin","superAdmin"]),updateSpecificUser)//admin,superadmin
.delete(isAuthenicated,authorized(["superAdmin"]),deleteSpecificUser)//superadmin

export default webUserRouter;


