const {v4:uuidv4}= require(`uuid`);
let users=require(`../models/users.model`);

// see user
const getAllUsers= (req, res)=>{
    res.status(202).json(users);
};
//create user
const createUser= (req, res)=>{
    const newUser={
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
        };
    users.push(newUser);
    res.status(201).json(users);
};
//update user
const updateUser= (req, res)=>{
    const userid= req.params.id; //old userid
    const {username, email}= req.body; //new username && email
    users.filter((user)=>user.id=== userid).map((selecteduser)=>{
        selecteduser.userName= username;
        selecteduser.email= email;
    });
    res.status(200).send(users);
};
// delete user
const deleteUser= (req, res)=>{
    const userid= req.params.id; //old userid
    const {username, email}= req.body; //new username && email
    users= users.filter((user)=>user.id!== userid);
    res.status(200).send(users);
};



module.exports={ getAllUsers, createUser, updateUser, deleteUser}