import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getStorage,ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
import{getAuth,onAuthStateChanged,signOut}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
const firebaseConfig = {
  apiKey: "AIzaSyA_7kNGUV7DBfZsuZNmysXNSQD7SbdRKsg",
  authDomain: "eduhelp-forum-cdc8d.firebaseapp.com",
  projectId: "eduhelp-forum-cdc8d",
  storageBucket: "eduhelp-forum-cdc8d.appspot.com",
  messagingSenderId: "570951096004",
  appId: "1:570951096004:web:80600ba9b4b0ab28c85b91",
  databaseURL:"https://eduhelp-forum-cdc8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket:"gs://eduhelp-forum-cdc8d.appspot.com"
};
const app=initializeApp(firebaseConfig);
const database=getFirestore(app)
const doubtdata=collection(database, 'doubts')
const storage=getStorage(app)

const auth=getAuth(app);


onAuthStateChanged(auth,(user)=>{
  if(user){
   

    const namedisplay=document.getElementById("nameofuser")
    const displayName = user.displayName;
    const mail=user.email;
    console.log("hello "+displayName+" "+mail)
    namedisplay.innerText=displayName;
    // console.log("hello "+displayName)
    const signout=document.getElementById("logouttext")
            signout.addEventListener("click",signoutt)
            function signoutt(){
            signOut(auth)
            .then(()=>{
            window.alert("user is logged out");
            window.location.href="index.html"
            })
            
            .catch(err=>{
              console.log(err.message);
            
            })
            
            }



const doubtArea=document.getElementById("writeDoubt");
const subbtn=document.getElementById("postDoubt");
subbtn.addEventListener("click",submitDoubt)
function submitDoubt(){
    const doubtText=doubtArea.value;

    if(doubtText==""){window.alert("please write your doubt before submitting");}
    else{
    if (confirm("please confirm your doubt before posting") == true) {
        
            addDoc(doubtdata,{
                doubt:doubtText,
                answer:"",
            })
            .then(()=>{
                console.log(doubtText);
                window.location.href="doubts.html";
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }
        
    }
      } 

    }
    else{
      // window.alert("please login or signup")
    window.location.replace("index.html");
    
        }
}


)
