function optAddGuidesHandler(e) {
	chrome.runtime.sendMessage({directive: "opt-add-guides"}, function(response) {
		this.close(); // close the popup when the background finishes processing request
	});
}

function optTestTokenizerHandler(e) {
	chrome.runtime.sendMessage({directive: "opt-test-tokenizer"}, function(response) {
		this.close(); // close the popup when the background finishes processing request
	});
}

function optRobartSvgHandler(e) {
	chrome.runtime.sendMessage({directive: "opt-robart-svg"}, function(response) {
		this.close(); // close the popup when the background finishes processing request
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('opt-add-guides').addEventListener('click', optAddGuidesHandler);
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('opt-test-tokenizer').addEventListener('click', optTestTokenizerHandler);
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('opt-robart-svg').addEventListener('click', optRobartSvgHandler);
});