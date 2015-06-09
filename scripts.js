window.onload = function() {
    setupEventListeners();
}

function setupEventListeners() {
    input = document.getElementById('chatInput');
    input.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            text = document.getElementById('chatText');
            text.innerText += '\n' + input.value;
            input.value = "";
        };
    });
}
