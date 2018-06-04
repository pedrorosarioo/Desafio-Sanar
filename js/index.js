function showDescription(event){
	switch(event.target.id){
		case "btMore":
			var description = document.getElementById("desc1");
			break;
		case "toDesc2":
			var description = document.getElementById("desc2");
			break;
		case "toDesc3":
			var description = document.getElementById("desc3");
			break;
		case "toSignUp":
			var description = document.getElementById("signUpp");
	}
	description.scrollIntoView({behavior: "smooth"});
};

function changeColor(event){
	bt1=document.getElementById("bt1");
	bt2=document.getElementById("bt2");
	switch(event.target.id){
		case ("bt2"):
			bt2.style.backgroundColor = "#16A086";
			bt2.style.borderColor = "#16A086";
			bt2.style.boxShadow = "inset 0px -3px #3BD4B6";

			bt1.style.backgroundColor = "#22303D";
			bt1.style.borderColor = "#FFFFFF";
			bt1.style.boxShadow = "none";
			break;

		case "bt1":
			bt1.style.backgroundColor = "#16A086";
			bt1.style.borderColor = "#16A086";
			bt1.style.boxShadow = "inset 0px -3px #3BD4B6";

			bt2.style.backgroundColor = "#22303D";
			bt2.style.borderColor = "#FFFFFF";
			bt2.style.boxShadow = "none";
			break;
	}				
};
				