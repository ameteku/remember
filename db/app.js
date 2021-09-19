const express  = require('express');
const app = express()
const port = 3000;
const {LoggedInUsers, User} = require("./loggedin-users");

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

app.post('/create-user', (req, res)=> {

        const body = req.body;
        console.log(body);
        newUser = new User(body['fName'], body['lName'], body['password'], body['username'], body['userId'])
        console.table(newUser);

        const result = users.newUser(newUser);
        console.table(result);

})

app.listen(3000, ()=> {
    console.log("hello");
})