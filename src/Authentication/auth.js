// import firebase from "./firebase"
import firebase from './Firebase'
export const auth = firebase.auth();
// import { db } from "./firestore";
export const db = firebase.firestore();

// var nameForDB, emailForDB;
// user Sign Up  
const ClearField = () => {

}
export const Register = (e) => {
    e.preventDefault();
    var email = document.getElementById("reg-email").value;
    var pass = document.getElementById("reg-password").value;
    var type = document.getElementById("reg-type").value;
    if ((email.length && pass.length ) !== 0) {
        auth.createUserWithEmailAndPassword(email, pass)
            .then(async (user) => {
                await db.collection("Users").doc(auth.currentUser.uid).set({
                    email: email.value,
                    id: auth.currentUser.uid
                })
                    .then(res => {
                        alert(`Your Account Has Been Created Successfully !!`)
                        SignOut();
                        return ClearField()
                    })
            })
            .catch(err => {
                console.log(err.message)
            })
    } else {
        alert('field is empty!!')
    }
}

// USer Sign Out
export const SignOut = (e) => {
    e.preventDefault();
    auth.signOut().then(res => {
        alert('You\'re Logged Out Successfully', {
            icon: 'success'
        });
        window.location.replace("/");
    }).catch(err => {
        alert(err.message);
    })
}

// User login 
export const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email");
    const pass = document.getElementById("login-pass");
    auth.signInWithEmailAndPassword(email.value, pass.value)
        .then(res => {
            window.location.replace('/dashboard')
                console.log(res);
        }).catch(err => {
            alert(err.message);
        });
}
