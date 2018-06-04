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
				
};
				