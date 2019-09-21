const express = require('express');
const routes = express.Router();
const MovieController = require('./controllers/MovieController');

routes.get("/movie", MovieController.index);
routes.get("/movie/:id", MovieController.show);
routes.post("/movie", MovieController.store);
routes.put("/movie/:id", MovieController.update);
routes.delete("/movie/:id", MovieController.destroy);

module.exports = routes;