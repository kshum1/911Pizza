function cancelAdd() {
	$("#addPizzaCell").html("");
	$("#addPizza").hide();
	document.getElementById("addPizza").reset();
}

function addToOrder(pic, name) {
	var pizzaPic = document.createElement("img");
	var pizzaName = document.createElement("h1");

	pizzaName.innerHTML = document.getElementById(name).innerText;
	document.getElementById("addPizzaCell").appendChild(pizzaName);

	pizzaPic.src = document.getElementById(pic).src;
	document.getElementById("addPizzaCell").appendChild(pizzaPic);
	
	$("#addPizza").show();
}