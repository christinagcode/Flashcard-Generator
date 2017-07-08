var ClozeCard = function (fullText, cloze) {
	this.text = fullText.replace(cloze, "...");
	this.cloze = cloze;
	this.fullText = fullText;

	this.checkCloze = function () {
		if (fullText.search(cloze) <0) {
			console.log("Error: "+cloze+" not found in "+fullText);
			return 0;
		} else {
			return 1;
		}
	}
}

module.exports = ClozeCard;