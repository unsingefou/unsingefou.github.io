function validateForm(){
	var status = true;

	var nameField = document.forms["contactForm"]["nameBox"];
	var name = nameField.value;
	if (name == null || name == "" ){
		toggleMark("name", true);
		status = false;
	}
	else
		toggleMark("name", false);

	var emailField = document.forms["contactForm"]["_replyto"];
	var email = emailField.value;
	if (email.indexOf("@") < 1){
		toggleMark("email", true);
		status = false;
	}
	else
		toggleMark("email", false);

	var messageField = document.forms["contactForm"]["messageBox"];
	var message = messageField.value;
	if (message == null || message == "" ){
		toggleMark("message", true);
		status = false;
	}
	else
		toggleMark("message", false);

	if(status){
		sendEmail(name, email, message);

		var buttonText = document.getElementById("emailButtonText");
		buttonText.innerHTML = "send another";
		nameField.value = '';
		emailField.value = '';
		messageField.value = '';
		//$("#thanks").slideDown("slow");
	}
	return status;
}

function changeUp(){
	$("#showHide").slideUp("slow", function(){
		var form = document.getElementById("contactForm");
		form.reset();

		var title = document.getElementById("contactTitle");
		title.innerHTML = ("Your message is waiting in my inbox.");

		var emailButton = document.getElementById("emailButton");
		emailButton.setAttribute("onClick", "changeDown()");
	});
}
function changeDown(){
	$("#showHide").slideDown("slow", function(){
			var title = document.getElementById("contactTitle");
			title.innerHTML = "Drop me a note.";

			var emailButton = document.getElementById("emailButton");
			emailButton.setAttribute("onClick", "validateForm()");
			var buttonText = document.getElementById("emailButtonText");
			buttonText.innerHTML = "send";
		});
}
function sendEmail(name, email, message){
	//$('#contactForm').submit();

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","//formspree.io/jonathan.levis@gmail.com",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("nameBox=" + name + "&_replyto=" + email + "&messageBox=" + message);


	console.log("sent!");
}

function toggleMark(id, on){
	var element = document.getElementById(id);
	if(on == true)
		element.className = "requiredOn";
	else
		element.className = "requiredOff";
}
