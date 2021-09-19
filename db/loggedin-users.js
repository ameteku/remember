const { json } = require('express');
const db = require("./db");
const collectionPath = 'users';


var newUserId = 0;
function User(first, last, username, email, password) {
    return {
        "fName": first,
        "lName": last,
        "email" : email,
        "userId" : newUserId++,
        "username": username,
        "password": password,
        "events" : []
    }
}

class LoggedInUsers {

    constructor() {

        //id is the key
        //maps unto a user
        this.users = {}



    }

    async login(userName, password) {

        console.log(userName + " " + password)
        const snapshot = await db.collection(collectionPath).where("username", '==', userName).where("password", '==', password).get();

        console.log(snapshot.docs.length);
        if (snapshot.docs.length >= 1) {
            console.log("The document exists");
            const user = snapshot.docs[0].data();
            this.users[user['userId']] = user;
            return this.users[user['userId']];

        }

        return null;
    }


    async newUser(user) {
        console.log(user);
        if (user != null) {
            const newUser = await db.collection(collectionPath).add(user)
            console.log("New ref" + newUser.id)
            return user;
        }

        return null;
    }

    removeUser(userId) {
        if (users[users.id] != null) {
            users[users.id] = null;
        }
    }

    getUser(userId) {
        if (users[users.id] != null) {
            return users[users.id];
        }
    }

}


module.exports = { LoggedInUsers, User };

