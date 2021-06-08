const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/task
    axios.get('http://localhost:3000/api/task')
    .then(function(response){
    res.render('index.ejs',{task : response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.addTask = (req,res)=>{
    res.render('add_task');
}

exports.update_task = (req,res)=>{
    axios.get('http://localhost:3000/api/task', { params : { id : req.query.id }})
        .then(function(taskdata){
            res.render("update_task", { task : taskdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}