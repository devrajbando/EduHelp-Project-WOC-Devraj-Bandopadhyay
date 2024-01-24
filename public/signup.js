
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import{getDatabase, ref , set} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import{getAuth , createUserWithEmailAndPassword,updateProfile,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import{getFirestore, collection, setDoc,doc, addDoc,
     getDocs

} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
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
// const app = initializeApp(appSettings)
// const database=getDatabase(app)
const database=getFirestore(app)
const userdata=collection(database, 'users')
const auth=getAuth(app);

const UserNameEl=document.getElementById('NameOfUser1');
const UserEmailEl=document.getElementById('EmailOfUser1');
const UserPasswordEl=document.getElementById('PasswordOfUser1');
const UserConfirmEl=document.getElementById('ConfirmPasswordOfUser1')
const UserBranchEl=document.getElementById("BranchOfUser1");
const signupform=document.getElementById('signupform');
// const nameDisplay=document.getElementById("nameofuser");


signupform.addEventListener("submit",signupuser) 
// signupform.onsubmit(async(e)=>{
  async function signupuser(e){
    const displayNam=UserNameEl.value;
    const displayUser=UserEmailEl.value;
             let usern={
             fullname:UserNameEl.value,
                email:UserEmailEl.value,
             password:UserPasswordEl.value,
            branch:UserBranchEl.value,}
         let userconfirm=UserConfirmEl.value;
         let mailcheck=verifyMail();
    

    function verifyMail(){
        let ismend=usern.email.endsWith("iitism.ac.in");
        let jecheck=usern.email.substring(2,4);
        let yearcheck=usern.email.substring(0,2);
        let mailLength=usern.email.length;
        if(ismend==true && jecheck=='je' && yearcheck<=23 && yearcheck>=19 && mailLength==21)
        {return true;}
        else{return false;}
    }
    
    
    if(usern.fullname=="" || usern.email=='' || usern.password=='' || userconfirm=='')
    {window.alert('Please Fill All Details');}
    else if(usern.password!=userconfirm)
    {window.alert('Please enter the Same Password Twice');
    UserPasswordEl.value='';
    UserConfirmEl.value='';}
         else if(mailcheck==false)
        {window.alert("Please use your IIT(ISM) Dhanbad email id");
        UserEmailEl.value='';}
        else{
            
            e.preventDefault()
            addDoc(userdata,{
                name:UserNameEl.value,
            branch:UserBranchEl.value,
            email:UserEmailEl.value,
        })
            

            createUserWithEmailAndPassword(auth, usern.email, usern.password)
            // .then(()=>{          
                 .then( cred => {
                    const userx=cred.user;
                    console.log('user created:'+ userx)
                
                
                //     signupform.reset()
                
                //         if (user) {
                    
                    //             const uid = user.uid;
                    //             console.log(uid)
                    const user = auth.currentUser;
                    // onAuthStateChanged(auth, (user) => {
                        // const userx=userCred.user;
                        if(user){
                        updateProfile(user, { displayName:displayNam,
                            email:UserEmailEl.value
                        })
                        .then(()=>{
                        console.log("user name is "+user.displayName)
                        console.log("email is "+user.email)
                        
                        window.location.href="home.html";
                        window.alert("Welcome to EduHelp "+UserNameEl.value);
                        })
                        .catch((err)=>{
                            console.log(err.message)
                        })
                    }
                    else{
                        console.log("error")
                    }
                })
                
                //         } else {
                    //           console.log("error")
                    //         }
                    //       });
                    // })
                    .catch(err => {
                        console.log(err.message)
                        alert(err.message);
                    })
                    // })
            }
        }
        
        







