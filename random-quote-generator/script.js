const button = document.getElementById("btn");
const content = document.getElementById("quote");
const author = document.getElementById("author");
const tags = document.getElementById('tags');

function getQuote() {
    button.disabled = true;
		button.innerText = "Loading....";
		fetch("http://api.quotable.io/random").then((res) => {
			res.json().then((data) => {
				console.log(data);
				content.innerText = data.content;
				author.innerText = data.author;
				tags.innerHTML = "";
				for (let i = 0; i < data.tags.length; i++) {
					const tag = document.createElement("span");
					tag.innerText = data.tags[i];
					tags.innerHTML += tag.innerHTML;
				}
				button.disabled = false;
				button.innerText = "Get New Quote";
			});
		});
};

document.addEventListener('DOMContentLoaded', getQuote)
button.addEventListener("click", getQuote);
