import { Router } from "express";
import { createUser, deleteProfile, deleteUser, loginUser, myProfile, readUser, readUserDetails, updateProfile, updateUser,} from "../controller/userController.js";
import { isAuthenticated } from "../middleware/isAuthenicated.js";

let userRouter = Router();

userRouter 
.route("/") //localhost:8000/users
.post(createUser)

.get(readUser)


userRouter .route("/login") //localhost:8000/users/login
.post(loginUser)

userRouter .route("/myProfile")
.get(isAuthenticated,myProfile)
.patch(isAuthenticated,updateProfile)
.delete(isAuthenticated,deleteProfile)


userRouter .route("/:userId")//localhost:8000/users/any  => yeslai(dynamic route) chai sadhai last ma as it takes any (may take login too agadi rakhda)
.delete(deleteUser)

.get(readUserDetails)

.patch(updateUser);

export default userRouter;


