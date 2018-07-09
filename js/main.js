/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});
	// Get the modal
	var modal = document.getElementById('myModal');
	
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "inline-block";

	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
    

 // Authentication

// Initialize firebase
var config = {
    apiKey: "AIzaSyA7rfBhIutZdEG0R7xANM3Wy27lV7GP2-Q",
    authDomain: "yaseen-site.firebaseapp.com",
    databaseURL: "https://yaseen-site.firebaseio.com",
    projectId: "yaseen-site",
    storageBucket: "yaseen-site.appspot.com",
    messagingSenderId: "1093689830600"
  };
  firebase.initializeApp(config);

// Get Elements


var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnLogOut = document.getElementById("btnLogOut");

// Add Sign Up Event

btnSignUp.addEventListener("click", e => {
	var txtUser = document.getElementById("txtUser");
var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
	window.alert("dsds");
	// Get email and password
	var user = txtUser.value();
	var email = txtEmail.value();
	var password = txtPassword.value();
	window.alert(password);

	const auth = firebase.auth();

	// Sign Up
	
	const promise = auth.createUserWithEmailAndPassword( email, password);
	promise.catch(e => console.log(e.message))
});

// Add Login Event

btnLogin.addEventListener("click", e => {

	// Get email and password
	const email = txtEmail.value;
	const password = txtPassword.value;
	const auth = firebase.auth();

	// Sign In
	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message))
});

btnLogOut.addEventListener("click", e => {
	firebase.auth().signOut();
})

// Add a realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
	}

	else {
		console.log("not logged in");
	}
})
   
