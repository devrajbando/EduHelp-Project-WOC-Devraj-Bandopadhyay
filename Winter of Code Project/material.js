import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
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
const auth=getAuth(app)



onAuthStateChanged(auth,(user)=>{


  if(user){

    const namedisplay=document.getElementById("nameofuser")
            const displayName = user.displayName;
            const mail=user.email;
            console.log("hello "+displayName+" "+mail)
            namedisplay.innerText=displayName;
            // console.log("hello "+displayName)
    console.log("welcome to materials "+user.displayName);
  const uploadingfile=document.getElementById("uploadingfile");
  const showupload=document.getElementById("uploadoption");
  showupload.addEventListener("click", function(){
    uploadingfile.style.display="block";
  document.getElementById("upnfetch").style.height="800px"
  
})


const yearft=document.getElementById("yearsfetch");
const ftbtn=document.getElementById("fetch_option")
ftbtn.addEventListener("click",function(){
  const yearFET=yearft.value;
  console.log(yearFET);
})



}

else{
    window.alert("please login or signup")
    window.location.href="index.html"
}


})
