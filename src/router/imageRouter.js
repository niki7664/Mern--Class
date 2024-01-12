import { Router } from "express";
import upload from "../middleware/upload.js";
import { imageFile } from "../controller/imagefileController.js";

let imageRouter = Router();

imageRouter
.route("/")
.post(upload.array("image",3),imageFile)


export default imageRouter;


