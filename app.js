var admin = require('firebase-admin'); // allows access to firebase api

var serviceAccount = require('./serviceAccountKeys.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const dp = admin.firestore();

let customerRef = dp.collection("Customers");

const data = {
    id: 2,
    name: "Missak"
};

dp.collection("Customers").doc(data.id.toString()).set(data);

customerRef.get().then((quertSnapshot) => {
    quertSnapshot.forEach(document => {
        console.log(document.data())
    })
})