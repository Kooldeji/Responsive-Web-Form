var name;
var info;

titles = ["MR", "MRS", "MISS", "MASTER"];

function init(){
	info = document.getElementById("info");
	nameForm = document.getElementById("name_form");
	persForm = document.getElementById("pers_form");
	expForm = document.getElementById("exp_form");
	formBody = document.getElementById("body");

	formBody.addEventListener("mouseleave", enteredName);

}

function enteredName(){
	console.log(validity(nameForm));
	if (validity(nameForm)){		
		title = document.getElementById("title_inp");
		lname = document.getElementById("lname_inp");
		info.innerHTML = "Hello "+name+", let's get to know you more."
		name_form.style.display = "none";
		pers_form.style.display = "block";
		formBody.removeEventListener("mouseleave", enteredName);
		formBody.addEventListener("mouseleave", enteredPersInfo);
	}

	// body.style.height = "600px";

}

function validity(form){	
	for (var e=0; e<form.elements.length; e++){
		var element = form[e];
		console.log("Aa"+element.checkValidity());
		if (!element.checkValidity()){
			element.classList.add("error");
			return false
		}
		element.classList.remove("error");	
	}
	return true;

}

function enteredPersInfo(){
	info.innerHTML = "Now "+name+", let's know about your coding experience"
	persForm.style.display = "none";
	expForm.style.display = "block";

}