const admin = require('firebase-admin');

const serviceAccount = require('/Users/mike/remember/db/remember-dbe0a-ff71acd7d40a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

async function test() {
    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      });
      const snapshot = await db.collection("users").get();
      snapshot.forEach((doc)=> {
          console.log(doc.id, '=>', doc.data());
      })
}

test();