import { Router } from "express";
import { createReview, deleteReview, readDetailsReview, readReview, updateReview } from "../controller/reviewController.js";


let reviewRouter = Router();

reviewRouter
.route("/")
.post(createReview)
.get(readReview)

reviewRouter .route("/:reviewId")
.get(readDetailsReview)
.patch(updateReview)
.delete(deleteReview)

export default reviewRouter