import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDoc

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getAuth,onAuthStateChanged}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import{getStorage,ref,uploadString,getDownloadURL,uploadBytes,uploadBytesResumable,getMetadata,updateMetadata, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
const firebaseConfig = {
  apiKey: "AIzaSyA_7kNGUV7DBfZsuZNmysXNSQD7SbdRKsg",
  authDomain: "eduhelp-forum-cdc8d.firebaseapp.com",
  projectId: "eduhelp-forum-cdc8d",
  // storageBucket: "eduhelp-forum-cdc8d.appspot.com",
  messagingSenderId: "570951096004",
  appId: "1:570951096004:web:80600ba9b4b0ab28c85b91",
  databaseURL:"https://eduhelp-forum-cdc8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket:"gs://eduhelp-forum-cdc8d.appspot.com"
};

const app=initializeApp(firebaseConfig);
const database=getFirestore(app)

const materialdata=collection(database, 'materials')
const storage=getStorage(app)
const auth=getAuth(app);



const upform=document.getElementById("uploadingfile");
const upfile=document.getElementById("upfile");
const filename=document.getElementById("nameoffile")
const subject=document.getElementById("subject")

onAuthStateChanged(auth,(user)=>{
  if(user){

    const namedisplay=document.getElementById("nameofuser")
            const displayName = user.displayName;
            const mail=user.email;
            console.log("hello "+displayName+" "+mail)
            namedisplay.innerText=displayName;
            // console.log("hello "+displayName)
    
        upform.onsubmit=(e)=>{
          e.preventDefault();
          const years=document.getElementById("upload_years")
          const year= years.value;
          const nameoffile=filename.value;
          const subjectname=subject.value;
          const matRef=ref(storage,"study_material/year_"+year+"/"+nameoffile);
         
              const files=upfile.files;
              for(let i=0;i<files.length;i++){
                const file=files[i];
                
              addDoc(materialdata,{
                name_of_file:nameoffile,
                subject:subjectname,
                
              })

              uploadBytes(matRef,file)
              .then(() => {
                // console.log('Uploaded a blob or file!');
                console.log(file)
                console.log("uploaded "+nameoffile);
                window.alert("file uploaded")

                
        window.location.href="material.html"
      })
      .catch((err)=>{console.log(err.message);})
    }

  }
  }
   
  else{
    
    // window.alert("please login or signup")
                window.location.replace("index.html");
  }
})

      

  