function maiúscula() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toUpperCase();
    document.getElementById('outputText').innerText = outputText;
}

function minuscula() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toLowerCase();
    document.getElementById('outputText').innerText = outputText;
}

function negrito() {
    var inputText = document.getElementById('inputText');
    var outputText = document.getElementById('outputText');
    let texto = inputText.value;
    outputText.textContent = texto;
    outputText.classList.add("textoForte");
}

function clear() {
    var limpa = document.getElementById('inputText');
    limpa.value = "";
}