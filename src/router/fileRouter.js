import { Router } from "express";
import { handleFile} from "../controller/fileController.js";
import upload from "../middleware/upload.js";



let fileRouter = Router();

fileRouter 
.route("/")
.post(upload.array("Document",4),handleFile)


export default fileRouter;


