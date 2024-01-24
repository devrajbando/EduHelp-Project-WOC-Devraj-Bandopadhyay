import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth,onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
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
import {getFirestore,updateDoc,getDoc,doc,setDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"


// uCQdGXzQxUL07ZkVX3Sn
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const database=getFirestore(app)
const yearRef=doc(database,"year","uCQdGXzQxUL07ZkVX3Sn")






 onAuthStateChanged(auth,async (user)=>{
  
  
  if(user){
    
    const namedisplay=document.getElementById("nameofuser")
    const displayName = user.displayName;
    const mail=user.email;
    console.log("hello "+displayName+" "+mail)
    namedisplay.innerText=displayName;
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
    console.log("welcome to materials "+user.displayName);
    const uploadingfile=document.getElementById("uploadingfile");
    const showupload=document.getElementById("uploadoption");
              showupload.addEventListener("click", function(){
        uploadingfile.style.display="block";
        document.getElementById("upnfetch").style.height="800px"
      
      })
      
      
      const yearft=document.getElementById("yearsfetch");
      const ftbtn=document.getElementById("fetch_option")

  ftbtn.addEventListener("click", function(){
   
  
    const yearFET=yearft.value;
    updateDoc(yearRef,{
      year:yearFET
    })
    .then(()=>{
      console.log("updated year to "+yearFET)
      window.location.href="fetch.html"
    })
    .catch((err)=>{
      console.log(err.message)
    })
   
  });
  
}

else{
  // window.alert("please login or signup")
  window.location.href="index.html"
}


})


