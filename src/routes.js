const express = require("express");

const UserController = require("./controllers/user.controller");
const AddressController = require("./controllers/address.controller");
const TechController = require("./controllers/tech.controller");
const ReportController = require("./controllers/report.controller");

const routes = express.Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
