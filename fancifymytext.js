// increase text size
function increaseTextSize() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
}

// apply styles when "FancyShmancy" 
function applyFancyStyles() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// remove styles when "BoringBetty" 
function removeFancyStyles() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
}

// uppercase text and add "-Moo" 
function makeMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    
    textArea.value = text.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            var lastWord = words.pop();
            lastWord = lastWord.toUpperCase() + "-Moo";
            words.push(lastWord);
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(".");
}


//alert message when the button is clicked
function showAlert() {
    alert("Hello, world!");
}
