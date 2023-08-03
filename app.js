var admin = require('firebase-admin'); // allows access to firebase

var serviceAccount = require('./serviceAccountKeys.json'); 

admin.initializeApp({ //grants admin from ServiceAccount
  credential: admin.credential.cert(serviceAccount)
});


const dp = admin.firestore(); 

let customerRef = dp.collection("Customers");

const data = {
    id: 2,
    name: "Missak"
};

dp.collection("Customers").doc(data.id.toString()).set(data); //Creates new doc

customerRef.get().then((quertSnapshot) => { //lists all docs
    quertSnapshot.forEach(document => {
        console.log(document.data()) 
    })
})
