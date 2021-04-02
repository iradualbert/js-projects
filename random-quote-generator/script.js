document.addEventListener("DOMContentLoaded", function () {
	// GET ELEMENTS
	const button = document.getElementById("btn");
	const content = document.getElementById("quote");
	const author = document.getElementById("author");

	// FUNCTION TO CALL API AND SET NEW QUOTE
	function fetchQuote() {
		button.disabled = true;
		button.innerText = "Loading....";
		fetch("http://api.quotable.io/random").then(function (res) {
			res.json().then(function (data) {
				content.innerText = data.content;
				author.innerText = data.author;
				button.disabled = false;
				button.innerText = "New Quote";
			});
		});
	}
	// ADD CLICK EVENT TO THE BUTTON
	button.addEventListener("click", fetchQuote);
});
