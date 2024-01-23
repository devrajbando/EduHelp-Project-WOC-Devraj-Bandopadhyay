
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref , push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import{getAuth , signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
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
// const app = initializeApp(appSettings)
const database=getDatabase(app)
const userdata=ref(database, "Users")
const auth=getAuth(app);


const UserEmailEl=document.getElementById('EmailOfUser1');
const UserPasswordEl=document.getElementById('PasswordOfUser1');
const loginform=document.getElementById('loginform');

loginform.addEventListener("submit",loginuser) 

function loginuser(e){
            
            e.preventDefault()
            
            signInWithEmailAndPassword(auth, UserEmailEl.value, UserPasswordEl.value)
            .then(cred => {
              const user=cred.user;
                console.log('user logged in:', user)
                // get(child(userdata "UsersAuthList/"+cred.user.uid))
                setInterval(ref)
                loginform.reset()
                onAuthStateChanged(auth, (user) => {
                  if (user) {
                    const nam=user.displayName;
                    const uid = user.uid;
                    console.log(uid);
                    console.log(nam);
                    window.location.href="home.html";
                    window.alert("Welcome back to EduHelp "+nam);
                  } else {
                    console.log("error")
                  }
                });
            })
            .catch(err => {
                console.log(err.message)
                        alert("Please Fill Details Correctly");
              })
        }
  

    

// function Submit()
// {
//     }





