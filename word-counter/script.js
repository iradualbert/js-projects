document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea');
    const countDisplay = document.getElementById('count')

    textarea.addEventListener('keyup', function () {
        const text = textarea.value.trim();
        console.log(text)
        const count = text.split(' ').length
        countDisplay.innerText = count
    })

})