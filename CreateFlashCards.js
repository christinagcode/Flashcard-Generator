var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js")

var basicCards = [];
var clozeCards = [];
var count = 0;

var inquirer = require("inquirer");

var getInput = function() {
	if (count< 5){
		inquirer.prompt([
		{
		    type: "list",
		    message: "Choose type of flashcard",
		    choices: ["Basic", "Cloze"],
		    name: "cardType"
	 	},
	  	{
		    type: "input",
		    message: "Enter full question/text",
		    name: "question"
	  	},
	  	{
		    type: "input",
		    message: "Enter answer/cloze",
		    name: "answer"
	  	}
		]).then(function(user) {

		 	if (user.cardType === "Basic") {
				var card1 = new BasicCard(user.question, user.answer);
				basicCards.push(card1);
			} else {
				var card2 = new ClozeCard(user.question, user.answer);
				if (card2.checkCloze()) {
					clozeCards.push(card2);
				}
			}
		
		 	count++;
		 	getInput();
	 	});
	 	
	} else {
	for (var i = 0; i < basicCards.length; i++) {
		console.log("Basic Card "+parseInt(i + 1));
		console.log("Card Front: " + basicCards[i].front);
		console.log("Card Back: " + basicCards[i].back);
	}
	console.log("\n");
	for (var i = 0; i < clozeCards.length; i++) {
		console.log("Cloze Card "+ parseInt(i + 1));
		console.log("Card front: "+ clozeCards[i].text);
		console.log("Cloze: "+ clozeCards[i].cloze);
		console.log("Full text: "+ clozeCards[i].fullText);
	}
}  
} 

getInput();