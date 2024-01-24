import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs,updateDoc

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getStorage,ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
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
const app=initializeApp(firebaseConfig);
const database=getFirestore(app)
const doubtdata=collection(database, 'doubts')
const storage=getStorage(app)
const auth=getAuth(app)


onAuthStateChanged(auth,(user)=>{


if(user){
    const namedisplay=document.getElementById("nameofuser")
            const displayName = user.displayName;

            namedisplay.innerText=displayName;
            console.log("hello "+displayName)

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

function fetchDoubts(){
    var i=0;
getDocs(doubtdata)
.then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        i++;
        const doubt = doc.data().doubt;
        const answer=doc.data().answer;
        if(answer && answer!==""){
            displayDoubtandAns(doubt,answer,i,doc);
        }
    else{
    displayDoubt(doubt,i,doc);
    }
        
    });
})
.catch(error => {
    console.log("Error fetching files: ", error);
});
}


function displayDoubtandAns(doubt,ans,i,docx)
{
    const doubtRegion=document.createElement("div");
    var doubtRegionid="doubtregion"+i;
    doubtRegion.id=doubtRegionid;
    doubtRegion.classList.add("doubtRegions")
    const doubtShow=document.createElement("div");
    var doubtShowid="doubt"+i;
    doubtShow.id=doubtShowid;
    doubtShow.textContent="Doubt: "+doubt;
    doubtShow.classList.add("doubts")

    const answerShow=document.createElement("div")
    var answerShowid="answer"+i;
    answerShow.id=answerShowid;
    answerShow.textContent="Answer: "+ans;
    answerShow.classList.add("answers")
    
    // const doubtButton=document.createElement("button");
    // var doubtButtonId="answerBtn"+i;
    // doubtButton.id=doubtButtonId;
    // doubtButton.classList.add("answerBtns")
    // doubtButton.innerText="Answer doubt"
    
    
    document.getElementById("doubtsSection").appendChild(doubtRegion);
    document.getElementById(doubtRegion.id).appendChild(doubtShow);
    document.getElementById(doubtRegion.id).appendChild(answerShow);
    // document.getElementById(doubtRegion.id).appendChild(doubtButton);
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    // console.log(doubtButton)
    // answerDoubts(doubtButton,docx);
}


function displayDoubt(doubt,i,docx){

    const doubtRegion=document.createElement("div");
    var doubtRegionid="doubtregion"+i;
    doubtRegion.id=doubtRegionid;
    doubtRegion.classList.add("doubtRegions")
    const doubtShow=document.createElement("div");
    var doubtShowid="doubt"+i;
    doubtShow.id=doubtShowid;
    doubtShow.textContent=doubt;
    doubtShow.classList.add("doubts")

    
    const doubtButton=document.createElement("button");
    var doubtButtonId="answerBtn"+i;
    doubtButton.id=doubtButtonId;
    doubtButton.classList.add("answerBtns")
    doubtButton.innerText="answer doubt"
    
    
    document.getElementById("doubtsSection").appendChild(doubtRegion);
    document.getElementById(doubtRegion.id).appendChild(doubtShow);
    
    document.getElementById(doubtRegion.id).appendChild(doubtButton);
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    document.getElementById(doubtRegion.id).appendChild(document.createElement("br"));
    console.log(doubtButton)
    answerDoubts(doubtButton,docx);
}


fetchDoubts();






//answer part

function answerDoubts(button,docx){



    button.addEventListener('click',function(){
  
        
        console.log("button clicked")
        button.style.display="none";
        
        var answerRegion=document.createElement("textarea");
        answerRegion.classList.add("ansText");
        const subAns=document.createElement("button");
        subAns.classList.add("postAns");
        answerRegion.style.borderRadius="25px";
        answerRegion.style.backgroundColor="#f8e9a1"
        answerRegion.style.color="black";
        answerRegion.style.marginLeft="140px"
        
        subAns.textContent="submit answer";
        subAns.style.marginLeft="140px"
     
        
        const parentRegion=button.parentNode;
        const parentId=parentRegion.id;
        
        document.getElementById(parentId).appendChild(answerRegion);
        document.getElementById(parentId).appendChild(document.createElement("br"));
        document.getElementById(parentId).appendChild(subAns);
        postAnswer(subAns,answerRegion,docx);
    }
);

}




//uploading ans to firebase 
function postAnswer(subAns, answerRegion,docx){
subAns.addEventListener("click",
function() {
    postAns(answerRegion, docx);
});
}

function postAns(answerRegion,docx)
{

        

    var answer=answerRegion.value;
    if (confirm("confirm answer") == true) {
    console.log(docx.id)
    const id=docx.id;

    const updateRef=doc(database,"doubts",id)
    const updateAns={
        answer: answer
    }
    updateDoc(updateRef,updateAns)
    .then(()=>{
        console.log("answer posted")
        window.location.href="doubts.html";
        
    })
    .catch((err)=>{
    console.log(err.message)
    }
    )
}


    
}

}

else{
    // window.alert("please login or signup")
    window.location.href="index.html"
}


})
