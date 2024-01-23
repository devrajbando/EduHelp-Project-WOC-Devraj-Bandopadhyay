import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getStorage,ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js"
import{getAuth,onAuthStateChanged}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
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
// const database = app.getFirestore();
const postdata=collection(database, 'blog_posts')
const storage=getStorage(app)
const auth=getAuth(app);

// postdata.onSnapshot(function(querySnapshot) {
    // postdata.onSnapshot(function(querySnapshot) {
        // onSnapshot(query, (querySnapshot) => {


        onAuthStateChanged(auth,async(user)=>{
          if(user){
           
           

            const namedisplay=document.getElementById("nameofuser")
            const displayName = user.displayName;
            const mail=user.email;
            console.log("hello "+displayName+" "+mail)
            namedisplay.innerText=displayName;
            // console.log("hello "+displayName)

        

            const querySnapshot =  await getDocs(postdata)
            querySnapshot.forEach(function(doc) {
        const newposts=document.createElement("span")
        var content = doc.data().blogcontent;
        var name=doc.data().nameofposter;
        
        newposts.innerHTML += content ;
        const blogUser=document.createElement("div")
        // var user=doc.data().bloguploader;
        blogUser.textContent="posted by "+ name;
        blogUser.classList.add("usernames");

    document.getElementById('displayContent').appendChild(newposts);
        document.getElementById("displayContent").appendChild(blogUser);
        document.getElementById("displayContent").appendChild(document.createElement("br"));
        document.getElementById("displayContent").appendChild(document.createElement("br"));
        document.getElementById("displayContent").appendChild(document.createElement("br"));
        document.getElementById("displayContent").appendChild(document.createElement("br"));
    })
    
    
    
      // const goToBlogs=
    document.getElementById("goToBlogs").addEventListener("click",goBlogs)
    function goBlogs(){
      window.location.href="postblogs.html"
    }

  }


  
  else{
    
    window.alert("please login or signup")
                window.location.replace("index.html");
  }
})
