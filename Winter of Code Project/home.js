import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
            const firebaseConfig = {
    apiKey: "AIzaSyA_7kNGUV7DBfZsuZNmysXNSQD7SbdRKsg",
    authDomain: "eduhelp-forum-cdc8d.firebaseapp.com",
    projectId: "eduhelp-forum-cdc8d",
    storageBucket: "eduhelp-forum-cdc8d.appspot.com",
    messagingSenderId: "570951096004",
    appId: "1:570951096004:web:80600ba9b4b0ab28c85b91",
    databaseURL:"https://eduhelp-forum-cdc8d-default-rtdb.asia-southeast1.firebasedatabase.app"
  };


const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
// const user = auth.currentUser;
const namedisplay=document.getElementById("nameofuser")
onAuthStateChanged(auth, (user) => {
if (user!==null) {
  
  const displayName = user.displayName;
const mail=user.email;
console.log("hello "+displayName+" "+mail)
namedisplay.innerText=displayName;
}
else{
    console.log("user not signed in")
    // window.location.replace("index.html")
}
})


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//    namedisplay.innerText=user.displayName;
//     const uid = user.uid;
    
//   } else {
//    window.location.replace("index.html")
//   }
// });