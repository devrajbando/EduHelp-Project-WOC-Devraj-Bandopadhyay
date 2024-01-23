import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs, getDoc

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getDownloadURL,ref,getStorage,listAll} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
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

const storage=getStorage(app)


// const fetchyear=document.getElementById("yearsfetch")
import yearValue from "./material.js";

const yearft1=yearValue.yearFET;
window.alert(yearft1)



const matrefstore=ref(storage,"study_material/year_"+yearft1)

function displayFiles() {
  
  
  listAll(matrefstore)
    .then((result) =>{

    result.items.forEach((item) =>{
      
      getDownloadURL(item)
      .then((url)=>{
      
        var fileLink = document.createElement("a");
        fileLink.href = url 
        fileLink.target="_blank";
        fileLink.innerText = item.name;
       
        document.getElementById("fileList").appendChild(fileLink);
    
        
        document.getElementById("fileList").appendChild(document.createElement("br"));
        document.getElementById("fileList").appendChild(document.createElement("br"));
        document.getElementById("fileList").appendChild(document.createElement("br"));
      }
      )
      .catch((error)=> {
       
        console.error("Error fetching files: ", error);
      });
    })
  }
    )
    .catch((err)=>{
      console.log(err.message);
    })
  }
displayFiles();





