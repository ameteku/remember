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
        "events" : [],
        
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
            console.log(user)
            this.users[user['userId']] = user;

            console.log("User table is:")
            console.table(this.users)
            return this.users[user['userId']];

        }

        return null;
    }


    async updateUser(user) {
        console.log(user);
        if (user != null) {
            await db.collection(collectionPath).doc(user['userId']).update(user);
            this.users[user['userId']]   = user;
            return user;
        }

        return null;
    }

    async newUser(user) {
        console.log(user);
        if (user != null) {
            const newUser = await db.collection(collectionPath).add(user)
            
            console.log("New ref" + newUser.id)
            user['userId'] =newUser.id;
            this.users[user['userId']] = user;
            return user;
        }

        return null;
    }

    removeUser(userId) {
        if (this.users[users.id] != null) {
            this.users[users.id] = null;
        }
    }

    getUser(userId) {
        if (this.users[userId] != null) {
            return this.users[userId];
        }
    }
    

}


module.exports = { LoggedInUsers, User };

