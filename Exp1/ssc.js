let tokens = [];
let currentStep = 0;

window.onload = () => {
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};

function getTokenType(token) {

    if (["int","float","char","double","if","else","while","for","return","void"].includes(token))
        return "Keyword";

    if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token))
        return "Identifier";

    if (/^[0-9]+$/.test(token))
        return "Constant";

    if (["+", "-", "*", "/", "%", "=", "==", "!=", "<", ">", "<=", ">="].includes(token))
        return "Operator";

    if ([";", ",", "(", ")", "{", "}"].includes(token))
        return "Delimiter";

    return "Unknown";
}

function start() {

    const code = document.getElementById("sourceCode").value.trim();

    if (!code) {
        alert("Please enter source code.");
        return;
    }

    tokens = code.match(/[A-Za-z_][A-Za-z0-9_]*|[0-9]+|==|!=|<=|>=|[+\-*/%=<>{}();,]/g);

    if (!tokens) {
        alert("No valid tokens found.");
        return;
    }

    currentStep = 0;

    document.getElementById("tokenBox").innerHTML = "";

    document.getElementById("steps").innerHTML =
        tokens.map((token, index) =>
            `<pre id="step-${index}">
Token ${index + 1}: "${token}"
Type Detected: ${getTokenType(token)}
</pre>`
        ).join("");

    document.querySelector(".start").disabled = true;
    document.querySelector(".next").disabled = false;
    document.querySelector(".reset").disabled = false;
}

function nextStep() {

    if (currentStep >= tokens.length) {
        alert("Lexical Analysis Completed!");
        return;
    }

    document.getElementById(`step-${currentStep - 1}`)?.classList.remove("active");

    document.getElementById(`step-${currentStep}`)?.classList.add("active");

    const token = tokens[currentStep];
    const type = getTokenType(token);

    document.getElementById("tokenBox").innerHTML += `
        <div class="token active">
            <strong>${token}</strong><br>
            ${type}
        </div>
    `;

    currentStep++;

    if (currentStep >= tokens.length) {
        document.querySelector(".next").disabled = true;
    }
}

function resetSim() {

    tokens = [];
    currentStep = 0;

    document.getElementById("steps").innerHTML = "";
    document.getElementById("tokenBox").innerHTML = "";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
}