document.addEventListener('DOMContentLoaded', function () {
    // elements
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const startBtn = document.getElementById('start');
    const resetBtn = document.getElementById('reset');

    let allSeconds = 0

    startBtn.addEventListener('click', function start() {
        var interval = setInterval(() => {
            allSeconds += 1
            
        }, 1000)
    })

    resetBtn.addEventListener('click', function () {
        clearInterval(interval)
    })
    
})