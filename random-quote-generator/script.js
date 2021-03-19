// GET ELEMENTS
const button = document.getElementById("btn");
const content = document.getElementById("quote");
const author = document.getElementById("author");

// ADD CLICK EVENT TO THE BUTTON
button.addEventListener("click", fetchQuote);

// FUNCTION TO CALL API AND SET NEW QUOTE
function fetchQuote() {
	button.disabled = true;
	button.innerText = "Loading....";
	fetch("http://api.quotable.io/random").then((res) => {
		res.json().then((data) => {
			// console.log(data);
			content.innerText = data.content;
			author.innerText = data.author;
			button.disabled = false;
			button.innerText = "New Quote";
		});
	});
};
