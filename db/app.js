const express  = require('express');
const app = express()
const port = 3000;
const LoggedInUsers = require("./loggedin-users");

app.use(express.urlencoded({
    extended: true
  }));

const users = new LoggedInUsers();

app.get('/',(req,res) => {
    console.log("Running");
    res.send("");

})

app.post('/login', (req, res) => {

    const body = req.body;
    console.log(body);
    users.login(body['userName'], body['password']).then((userInfo)=> {
        console.log(userInfo +  "is user")
    if(userInfo != null) {
        res.send(JSON.stringify(userInfo));
    }

    else {
        res.send("error");
    }
    });
    
})

app.listen(3000, ()=> {
    console.log("hello");
})