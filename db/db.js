const admin = require('firebase-admin');

const serviceAccount = require('/Users/mike/remember/db/remember-dbe0a-ff71acd7d40a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
