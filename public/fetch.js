import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs, getDoc,updateDoc,onSnapshot,query,where

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import {getAuth,onAuthStateChanged,signOut} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

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
const auth=getAuth(app)
const storage=getStorage(app)
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
            // window.location.href="index.html"
            })
            
            .catch(err=>{
              console.log(err.message);
            
            })
            
            }

getDoc(yearRef)
.then((doc)=>{

var yearft=doc.data().year;
console.log(yearft);


const matrefstore=ref(storage,"study_material/year_"+yearft)

function displayFiles() {

  var heading=document.createElement("h1")
  heading.innerText="Year "+yearft
  document.getElementById("headingofList").appendChild(heading);

  var table=document.createElement("table")
  table.id="table";
  document.getElementById("fileTable").appendChild(table)
  // table.style.marginTop="10px"
  
  var headrow=table.insertRow()
  headrow.id="headrow";
  var headRowEl1=headrow.insertCell(0)
  headRowEl1.id="headrowel1";
  headRowEl1.innerText="Subject";
  headRowEl1.style.fontSize="xxxx-large"
  
  var headRowEl0=headrow.insertCell(1)
  headRowEl0.id="headrowel0";
  headRowEl0.innerText="File Name";
  headRowEl0.style.fontSize="xxxx-large"

  var headRowEl2=headrow.insertCell(2);
  headRowEl2.id="headrowel2";
  headRowEl2.innerText="Download";
  headRowEl0.style.fontSize="xxxx-large"
  
  headrow.style.fontSize="xx-large"
  headrow.style.backgroundColor="#3aafa9"


  
  
  
  
  
  listAll(matrefstore)
  .then((result) =>{
    
    result.items.forEach((item) =>{
      
      getDownloadURL(item)
      .then((url)=>{
        const nameFile=item.name;
        console.log(nameFile)
        const subRef=collection(database,"materials")
        
        
        const subjectQ=query(subRef,where("name_of_file", "==" ,nameFile))
        getDocs(subjectQ)
        
      .then((docs)=>{
        docs.forEach((doc)=>{
        const subject=doc.data().subject;
        console.log(subject)
        

        
        
        var fileLink = document.createElement("a");
        fileLink.href = url 
        fileLink.target="_blank";
        fileLink.innerText = "download"
        
        
        var row=table.insertRow()
        row.classList.add("rows")
        
        var subjectEl=row.insertCell(0);
        subjectEl.classList.add("subjects")
        subjectEl.innerText=subject;
        var filename=row.insertCell(1);
        filename.classList.add("filenames")
        filename.innerText=item.name;
        

        var downloadfile=row.insertCell(2);
        downloadfile.classList.add("downloadfiles")
        downloadfile.appendChild(fileLink)


         console.log("executed till here")
      }
      )
    })
    .catch((err)=>{
      console.log(err.message);
    })
      .catch((err)=>{
        console.log(err.message);
      })
    })
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
})
.catch((err)=>{
  console.log(err.message)
})

  }

  else{
    // window.alert("please login or signup")
    window.location.href="index.html"
  }
  
  
  })





