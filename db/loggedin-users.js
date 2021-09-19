const { json } = require('express');
const admin = require('firebase-admin');

const serviceAccount = require('/Users/mike/remember/db/remember-dbe0a-ff71acd7d40a.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


class LoggedInUsers {

    constructor() {

        //id is the key
        //maps unto a user
        this.users = {}



    }

    async login(userName, password) {

        console.log(userName + " " + password);
        const snapshot = await db.collection('users').where("username", '==', userName).where("password",'==', password).get();
        console.log(snapshot.docs.length);
        if (snapshot.docs.length >=1) {
            console.log("The document exists");
            const user =snapshot.docs[0].data();
            this.users[user['userId']] = user;
            return this.users[user['userId']];

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


module.exports = LoggedInUsers;
