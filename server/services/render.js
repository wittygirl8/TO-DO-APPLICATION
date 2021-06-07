const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/task
    axios.get('http://localhost:3000/api/task')
        .then(function(response){
            console.log(response)
            res.render('index',{task : response.data});
        })
        .catch(err =>{
            res.send(err);
        })   
}
exports.homeRoutes = (req,res)=>{
    res.render('index', {task:"New Data"});
}
exports.addTask = (req,res)=>{
    res.render('add_task');
}

exports.updateTask = (req,res)=>{
    res.render('update_task');
}