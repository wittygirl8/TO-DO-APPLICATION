const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../contoller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**<!--mongodb+srv://riddhi_singh:m001-mongodb-basics@cluster0.yvc39.mongodb.net/task?retryWrites=true&w=majority-->
 *  @description add item
 *  @method GET /add-item
 */
route.get('/add-task', services.addTask);

/**
 *  @description for update task
 *  @method GET /update-task
 */
route.get('/update-task', services.updateTask);

//API 
route.post('/api/task',controller.create);
route.get('/api/task',controller.find);
route.put('/api/task/:id',controller.update);
route.delete('/api/task/:id',controller.delete);


module.exports = route
