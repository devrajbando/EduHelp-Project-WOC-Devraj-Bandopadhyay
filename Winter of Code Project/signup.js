
const firebaseConfig = {
  apiKey: "AIzaSyA9SOyEt3QnX98MJLQe_oguB7dTT6ew9TA",
  authDomain: "eduhelp-14ba1.firebaseapp.com",
  databaseURL: "https://eduhelp-14ba1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduhelp-14ba1",
  storageBucket: "eduhelp-14ba1.appspot.com",
  messagingSenderId: "169355164256",
  appId: "1:169355164256:web:d843d568cb837e8b49a105"
};


import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase, ref , push} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import{getAuth , createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
const appSettings={
    databaseURL:"https://eduhelp-14ba1-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const application = initializeApp(firebaseConfig);
const app = initializeApp(appSettings)
const database=getDatabase(app)
const userdata=ref(database, "Users")
const auth=getAuth(application);

const UserNameEl=document.getElementById('NameOfUser1');
const UserEmailEl=document.getElementById('EmailOfUser1');
const UserPasswordEl=document.getElementById('PasswordOfUser1');
const UserConfirmEl=document.getElementById('ConfirmPasswordOfUser1');
const submitbtn=document.getElementById('SubmitInfo');


submitbtn.addEventListener('click',Submit);
function Submit()
{
    let user={
     fullname:UserNameEl.value,
     email:UserEmailEl.value,
     password:UserPasswordEl.value,}
    let userconfirm=UserConfirmEl.value;
    let mailcheck=verifyMail();
    let length=user.password.length;
    function verifyMail(){
        let ismend=user.email.endsWith("iitism.ac.in");
        let jecheck=user.email.substring(2,4);
        let yearcheck=user.email.substring(0,2);
        if(ismend==true && jecheck=='je' && yearcheck<=23 && yearcheck>=19)
        {return true;}
        else{return false;}
    }
    if(user.password!=userconfirm)
    {window.alert('Please enter the Same Password Twice');
        UserPasswordEl.value='';
        UserConfirmEl.value='';}
        else if(length<6)
        {window.alert("Password Must be Minimum 6 Letters");
        UserPasswordEl='';
        UserConfirmEl='';}
    else if(user.name=="" || user.email=='' || user.password=='' || userconfirm=='')
    {window.alert('Please Fill All Details');}
    else if(mailcheck==false)
    {window.alert("Please use your IIT(ISM) Dhanbad email id");
    UserEmailEl.value='';}
    else{
        window.location.replace("home.html");
        window.alert("Welcome to EduHelp "+user.fullname);
        push(userdata,user);
    }
}

let signupuser = evt => {
    evt.preventDefault();
    createUserWithEmailAndPassword(auth, UserEmailEl,UserPasswordEl)
    .then((Credentials)=>{
        window.alert(error.code)
    })
}



