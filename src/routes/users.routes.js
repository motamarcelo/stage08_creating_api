const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

// function myMiddleware(request, response, next){
//   console.log("Passou pelo Middleware");
//   const isAdmin = request.body.isAdmin;

//   isAdmin? next() : response.json({message: 'user unauthorized'})
// }




const usersController = new UsersController();


usersRoutes.post("/", usersController.create)

module.exports = usersRoutes;