import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getStorage,ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
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


function fetchDoubts(){
getDocs(doubtdata)
.then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        const doubt = doc.data().doubt;

        displayDoubt(doubt);
    });
})
.catch(error => {
    console.log("Error fetching files: ", error);
});
}

function displayDoubt(doubt){
    // const doubtRegion=document.createElement("div");
    // doubtRegion.CgetElementsById="doubtsSection";
    // doubtRegion.classList.add("doubtRegions")
    const doubtShow=document.createElement("div");
    // doubtShow.id="doubt";
    doubtShow.classList.add("doubts")
    doubtShow.textContent=doubt;

    const doubtButton=document.createElement("button");
    // doubtButton.id="answerBtn";
    doubtButton.classList.add("answerBtns")
    doubtButton.innerText="answer doubt"

    
    // document.getElementById("doubtsSection").appendChild(doubtShow);
    document.getElementById("doubtsSection").appendChild(doubtShow);
    document.getElementById("doubtsSection").appendChild(doubtButton);
    document.getElementById("doubtsSection").appendChild(document.createElement("br"));
    document.getElementById("doubtsSection").appendChild(document.createElement("br"));
    document.getElementById("doubtsSection").appendChild(document.createElement("br"));
    document.getElementById("doubtsSection").appendChild(document.createElement("br"));

}


fetchDoubts();



const ansbtn = document.querySelectorAll('.answerBtns');
ansbtn.forEach((button) =>{
        button.addEventListener('click', answerQ(button));
      })
    
// answer part
// const ansbtn=document.getElementsByClassName("answerBtns")
// // ansbtn.onclick(()=>{)
function answerQ(button){
    
// // }
// ansbtn.addEventListener("click",function (){

    const answerRegion=document.createElement("textarea");
    const subAns=document.createElement("button");
    subAns.textContent="submit answer";
    // document.getElementsById("")
    // const parentRegion=ansbtn.parentNode;
    // const parentId=parentRegion.id;


    
    document.getElementById("doubtsSection").appendChild(answerRegion);
    document.getElementById("doubtsSection").appendChild(subAns);
    button.style.display="none"
}
// })
