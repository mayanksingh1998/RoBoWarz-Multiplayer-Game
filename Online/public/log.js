firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location = "attachments/new 1.html";
  } else {
    // No user is signed in.

  }
});

function login(){
var email= document.getElementById('emailid').value;

var passwrd= document.getElementById('pass').value;
firebase.auth().signInWithEmailAndPassword(email, passwrd).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error: " + errorMessage);
});
}

function logout(){
	firebase.auth().signOut().then(function(){
window.location = "tr.html";
  }); // An error happened.
  
}

function regester(){
// window.alert("errorMessage");

var emailReg= document.getElementById('emailidReg').value;

var passwrdReg= document.getElementById('passReg').value;
firebase.auth().createUserWithEmailAndPassword(emailReg, passwrdReg).catch(function(error) {
	var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error: " + errorMessage);
   // Handle errors
 });

}