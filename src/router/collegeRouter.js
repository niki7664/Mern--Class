import { Router } from "express";
import { createCollege, deleteCollege, readCollege, readDetailsCollege, updateCollege } from "../controller/collegeController.js";


let collegeRouter = Router();

collegeRouter 
.route("/")
.post(createCollege)

.get(readCollege)

collegeRouter .route("/:collegeId")
.delete(deleteCollege)

.get(readDetailsCollege)

.patch(updateCollege);

export default collegeRouter;


