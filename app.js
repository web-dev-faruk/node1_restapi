const express= require(`express`);
const cors= require(`cors`);
const bodyParser= require(`body-parser`);
const app=express();
const usersRouter= require(`./routes/users.route`);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(`/users`, usersRouter);

app.get(`/`, (req, res)=>{
    res.sendFile(__dirname+`/views/index.html`);
});



//invide url
app.use((req, res, next)=>{
    res.status(404).json({message: `Route not found!`});
});
// server err
app.use((err, req, res, next)=>{
    res.status(500).json(`something broken!`);
});


module.exports= app;