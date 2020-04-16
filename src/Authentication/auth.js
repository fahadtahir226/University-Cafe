// import firebase from "./firebase"
import firebase from './Firebase'
export const auth = firebase.auth();
// import { db } from "./firestore";
export const db = firebase.firestore();

// var nameForDB, emailForDB;
// user Sign Up  
const ClearField = () => {

}
const Loading = () => {

}
const Register = (e) => {
    e.preventDefault();
    var heading = document.querySelector(".name");
    var name = document.getElementById('reg-name');
    var email = document.getElementById("reg-email");
    var pass = document.getElementById("reg-password");
    var DBName = heading.firstChild.textContent.replace("register ", "").trim();
    // Loading('block')
    if ((email.value.length && pass.value.length && name.value.length) !== 0) {
        auth.createUserWithEmailAndPassword(email.value, pass.value)
            .then(async (user) => {
                await db.collection(DBName).doc(auth.currentUser.uid).set({
                    name: name.value,
                    email: email.value,
                    id: auth.currentUser.uid
                })
                    .then(res => {
                        auth.currentUser.updateProfile({
                            displayName: name.value,
                        }).then(function () {
                            console.log('User Name Added to authentication')
                        }).catch(function (error) {
                            console.log('User Name Added to authentication')
                        });
                        alert(`Your Account Has Been Created Successfully !!`)
                        SignOut();
                        return Loading('none') && ClearField()
                    })
            })
            .catch(err => {
                console.log(err.message)
                return Loading('none')
            })

    } else {
        alert('field is empty!!')
    }
}

// USer Sign Out
const SignOut = (e) => {
    e.preventDefault();
    auth.signOut().then(res => {
        alert('You\'re Logged Out Successfully', {
            icon: 'success'
        });
        window.location.replace("../index.html");
    }).catch(err => {
        alert(err.message);
    })
}

// User login 
export const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email");
    const pass = document.getElementById("login-pass");
    // Loading('block');

    auth.signInWithEmailAndPassword(email.value, pass.value)
        .then(res => {
            window.location.replace('/dashboard')
                console.log(res);
                // Loading('Block');
                // await db.collection("Users").doc(auth.currentUser.uid).get()
                    // .then(doc => {
                        // if (doc.exists) {
                            // if (doc.data().type === 'admin') {
                                // window.location.replace("./Field_Wise_Pages/admin_panel.html");
                                // console.log("Here is an Admin");
                                // return "admin";
                            // }
                            // else if (doc.data().type === 'user') {
                                // window.location.replace("./Field_Wise_Pages/user_panel.html");
                                // console.log("Here is a User");
                            // }
                            // else{
                                // console.log("Neither Admin, nor User, error");
                            // }
                        //  } else {
                            // alert('User Doesnt Exist!!!')
                            // return Loading('none')
        }).catch(err => {
            alert(err.message);
            return Loading('none');
        });
}
