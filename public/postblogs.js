import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getFirestore, collection, setDoc,doc, addDoc,
  getDocs,query ,where ,getDoc

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import{getAuth,onAuthStateChanged,signOut}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
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
const postdata=collection(database, 'blog_posts')
const storage=getStorage(app)
const auth=getAuth(app);


tinymce.init({
  selector:"textarea#blogs",
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
  menubar:"file edit",
  plugins:"advlist autolink lists link image editimage save charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount emoticons autosave",
  toolbar:"save undo redo blocks | fontsize fontfamily bold underline italic forecolor backcolor | alignleft aligncenter alignright alignjustify |image editimage emoticons |",
  menu:{file:{title:"file",items:"newdocument save restoredraft"},edit:{title:"edit", items:"copy cut paste undo redo"}},

    skin:"oxide-dark",
    content_css: 'dark',
    height:400,
    width:1200,
    content_css:"styles.css",
  });
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
    
      const blogsbtn=document.getElementById("blogpost");

        blogsbtn.onclick=e=>{
          e.preventDefault();
          const contentWithHTML= tinyMCE.get("blogs").getContent();
          postBlog(contentWithHTML);
        }
       
        }
      else{
        window.alert("please login or signup")
      window.location.replace("index.html");
      
          }
}

)


function postBlog(contentWithHTML){

  const userr=auth.currentUser;
  if(userr){


  addDoc(postdata,{
    blogcontent:contentWithHTML,
    nameofposter:userr.displayName,

    
  })
  .then(()=>{

    window.alert("blog posted");
    window.location.href="posts.html"
    console.log("posted "+contentWithHTML)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  
}
else{
  console.log("poster not logged in")
  window.location.href="index.html"
}


}

