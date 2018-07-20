document.addEventListener("DOMContentLoaded", init);

function init(){
	document.getElementsByClassName("burger-nav")[0].onclick = function() {
		document.getElementById("nav-list").classList.toggle("open");
	};
}