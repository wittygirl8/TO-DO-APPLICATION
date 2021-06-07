var Taskdb = require('../model/model');

//create and save new task  
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(404).send({message:"Content can not be empty!"});
        return;
    }
    
    //new task
    const task  =  new Taskdb({
        item: req.body.item,
    })

    //save user in the database 
    task 
        .save(task)
        .then(data=>{
            //res.send(data)
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}

//retrieve and return all tasks/retrive and return a single task
exports.find=(req,res)=>{
        if(req.query.id){
            const id = req.query.id;
    
            Taskdb.findById(id)
                .then(data =>{
                    if(!data){
                        res.status(404).send({ message : "Not found user with id "+ id})
                    }else{
                        res.send(data)
                    }
                })
                .catch(err =>{
                    res.status(500).send({ message: "Erro retrieving user with id " + id})
                })
    
        }else{
            Taskdb.find()
                .then(task => {
                    res.send(task)
                })
                .catch(err => {
                    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
                })
        }
}

//Udate an existing task by task id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Taskdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Taskdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

    