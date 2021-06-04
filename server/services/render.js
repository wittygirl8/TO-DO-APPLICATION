exports.homeRoutes = (req,res)=>{
    res.render('index');
}
exports.addTask = (req,res)=>{
    res.render('add_task');
}

exports.updateTask = (req,res)=>{
    res.render('update_task');
}