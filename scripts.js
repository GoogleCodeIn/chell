if (typeof responses === 'undefined') {
	alert("Error: responses.js not loaded");
}

window.onload = function() {
    setupEventListeners();
}

function setupEventListeners() {
    input = document.getElementById('chatInput');
    input.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            text = document.getElementById('chatText');
            text.innerText += 'user@localhost$ ' + input.value + '\n';
			var response = getResponse(input.value);
			text.innerText += 'chell@remote$ ' + response + '\n';

            input.value = "";

            text.scrollTop = text.scrollHeight;
        };
    });
}

function normaliseText(text) {
	return text.toLowerCase().replace(/!?.,'"/g, '').trim();
}

function getResponse(input) {
	var maxResponseScore = -Infinity;
	var maxResponseId = 0;

	for (var i = 0; i < responses.length; i++) {
		var responseScore = 0;

		var matchTokens = responses[i].match.toLowerCase().split(",");
		for (var j = 0; j < matchTokens.length; j++) {
			if (input.indexOf(matchTokens[j]) !== -1) {
				if (input[0] === "!") {
					responseScore -= 10;
				} else {
					responseScore += matchTokens[j].split(" ").length;
				}
			}
		}

		if (responses[i].used) {
			// apply heavy penalty
			responseScore /= (2 * responses[i].used);
			responseScore -= (3 * responses[i].used);
		}
        console.log(responses[i].response + ":" + responseScore);

		if (responseScore > maxResponseScore) {
			maxResponseId = i;
			maxResponseScore = responseScore;
		}
	}
	responses[maxResponseId].used = responses[maxResponseId].used + 1 || 1;
	return evaluateResponse(responses[maxResponseId].response);
}

function evaluateResponse(response) {
    if (typeof response === "string" || response instanceof String) {
        return response;
    } else if (typeof response === "function") {
        return evaluateResponse(response());
    }
}
