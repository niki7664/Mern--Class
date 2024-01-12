
import { Router } from "express";
import { createWebuser, deleteWebuser, readDetailsWebuser, readWebuser, updateWebuser } from "../controller/webuserController.js";


let webuserRouter = Router();

webuserRouter
    .route("/")
    .post(createWebuser)
    .get(readWebuser)

webuserRouter .route("/:webuserId")
.get(readDetailsWebuser)
.patch(updateWebuser)
.delete(deleteWebuser)




export default webuserRouter;


