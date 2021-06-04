const express = require('express');
const route = express.Router();
const services = require('../services/render');


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
route.get('/update-task', services.updateTask);

module.exports = route