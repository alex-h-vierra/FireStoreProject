import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSetting = {
    databaseURL:"https://database-6684f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'Shopping');

console.log(database); //test to check if there's communication

const addButtonElmt = document.getElementById('addWorkoutBtn');

addButtonElmt.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        let valueElmt = addButtonElmt.value;
        push(shoppingListInDB, valueElmt);
        console.log(valueElmt);
    }
})
