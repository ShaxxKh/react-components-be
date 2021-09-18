const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.get("/user", userController.createUser);
router.get("/users", userController.getUsers);
router.post("/getUserByCountry", userController.getUserByCountry);

module.exports = router;
