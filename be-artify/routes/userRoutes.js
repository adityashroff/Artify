const Route=require("express").Router()
const UserController=require('../controllers/userController')

Route.post("/register",UserController.register);
Route.get("/getUser", UserController.getUser);