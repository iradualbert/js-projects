document.addEventListener('DOMContentLoaded', function () {
    // GET ELEMENTS
    const button = document.getElementById('btn');
    const content = document.getElementById('quote');
    const author = document.getElementById('author');

    // add click event to the button
    button.addEventListener('click', fetchQuote);

    // function to call the api and set new quote
    function fetchQuote() {
        button.innerText = "Loading...";
        button.disabled = true;
        // console.log('Button clicked');
        fetch("http://api.quotable.io/random").then(function (res) {
            res.json().then(function (data) {
                content.innerText = data.content;
                author.innerText = data.author;
                button.disabled = false;
                button.innerText = "New Quote";
            })
        });
    }

})