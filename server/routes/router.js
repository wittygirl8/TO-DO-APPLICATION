const express = require('express');
const route = express.Router();

route.get("/",(req, res)=>{
    res.render('index');
})

route.get("/add-task",(req, res)=>{
    res.render('add_task');
})

route.get("/update-task",(req, res)=>{
    res.render('update_task');
})

module.export = route;