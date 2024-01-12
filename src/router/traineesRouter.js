import { Router } from "express";
import { createTrainee, deleteTrainee, readDetailsTrainee, readTrainee, updateTrainee } from "../controller/traineeController.js";

let traineeRouter = Router();

traineeRouter
    .route("/")
    .post(createTrainee)
    .get(readTrainee)

traineeRouter .route("/:traineeId")
.get(readDetailsTrainee)
.patch(updateTrainee)
.delete(deleteTrainee)




export default traineeRouter;


