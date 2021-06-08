const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../contoller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add item
 *  @method GET /add-item
 */
route.get('/add-task', services.addTask);

/**
 *  @description for update task
 *  @method GET /update-task
 */
route.get('/update-task', services.update_task);

//API 
route.post('/api/task',controller.create);
route.get('/api/task',controller.find);
route.put('/api/task/:id',controller.update);
route.delete('/api/task/:id',controller.delete);

module.exports = route
