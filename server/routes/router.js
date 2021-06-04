const express = require('express');
const route = express.Router();
const services = require('../services/render');

route.get('/', services.homeRoutes);

route.get("/add-task",(req, res)=>{
    res.render('add_task');
})

route.get("/update-task",(req, res)=>{
    res.render('update_task');
})

module.exports = route