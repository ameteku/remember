const express = require('express');
const {EventsGetter,  Event}= require('./get-events');
const app = express()
const port = 3000;
const { LoggedInUsers, User } = require("./loggedin-users");




app.use(express.urlencoded({
    extended: true
}));

const users = new LoggedInUsers();
const eventGetter = new EventsGetter();

app.get('/', (req, res) => {
    console.log("Running");
    res.send("");

})

app.post('/login', (req, res) => {

    const body = req.body;
    console.log(body);
    users.login(body['userName'], body['password']).then((userInfo) => {
        console.log(userInfo + "is user")
        if (userInfo != null) {
            res.send(JSON.stringify(userInfo));
        }

        else {
            res.send("error");
        }
    });

})

app.post('/create-user', (req, res) => {

    const body = req.body;
    console.log(body);
    newUser = new User(body['fName'], body['lName'], body['password'], body['username'], body['userId'])
    console.table(newUser);

    users.newUser(newUser).then((result) => {
        console.table(result);

        res.send(result);
    });

})

app.get('/homepage/global-events', (req, res) => {
    eventGetter.getGlobalEvents().then((tempEvents) => {
        res.send(tempEvents);
    });


})

app.post('/homepage/create-event', (req, res) => {
    const body = req.body;
    console.log(body);
    newEvent = new Event(body["name"], body['creationDate'], body["description"], body["isPrivate"], body["passcode"], body["creatorId"]);
    console.table(newEvent);

    eventGetter.newEvent(newEvent).then((result) => {
        console.table(result);

        res.send(result);
    });
});


app.post('/homepage/join-event', (req, res)=> {
const body = req.body;
const userId = body['userId'];

const tempUser = users.getUser(userId);
console.log(tempUser + "is user");
if(tempUser == null) res.send("error");

if(tempUser != null) {
    const eventId = body['eventId'];
    const passcode = body['passcode'];
    console.log(eventId + " " + passcode)

    eventGetter.joinEvent(eventId, passcode).then((result)=> {
        if(result ) {
            tempUser['events'].push(eventId);
            users.updateUser(tempUser).then((userResult)=> {
                console.log("result is")
                console.table(userResult);
                res.send(JSON.stringify(userResult));
            });
        }
    })
}
})


app.post('/homepage/myevents', (req,res)=> {
    const userId = req.body["userId"];
    const tempUser = users.getUser(userId);

    if(tempUser == null) res.send("error");

    eventGetter.getEvents(tempUser["events"]).then((result) => {
        console.log("result is" + result);
        res.send(JSON.stringify(result));
    });
})

app.listen(3000, () => {
    console.log("hello");
})