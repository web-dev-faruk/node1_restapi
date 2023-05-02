const {v4:uuidv4}=require(`uuid`);
const users= [
    {
        id: uuidv4(),
        userName: `Anisul Islam`,
        email: `anisul@gmail.com`
    },{
        id: uuidv4(),
        userName: `Rakibul Islam`,
        email: `rakibul@gmail.com`
    }
];

module.exports= users;