let step = 0;
let selectedExpr = "";
let tacLines = [];

function start() {

    selectedExpr =
    document.getElementById("expression").value;

    if(selectedExpr === "") {
        alert("Please select an expression.");
        return;
    }

    step = 0;
    tacLines = [];

    document.getElementById("steps").innerHTML =
    "Simulation started. Click Next.";

    document.getElementById("resultBox").innerHTML =
    "Generating Three Address Code...";

    document.getElementById("exprBox").innerHTML =
    document.getElementById("expression")
    .options[
        document.getElementById("expression").selectedIndex
    ].text;

    document.querySelector(".start").disabled = true;
    document.querySelector(".next").disabled = false;
    document.querySelector(".reset").disabled = false;
}

function nextStep() {

    const steps =
    document.getElementById("steps");

    const result =
    document.getElementById("resultBox");

    if(selectedExpr === "exp1") {

        if(step === 0) {

            steps.innerHTML =
            "<b>Step 1:</b> Evaluate multiplication first.";

            tacLines.push("t1 = b * c");
        }

        else if(step === 1) {

            steps.innerHTML +=
            "<br><b>Step 2:</b> Add result to a.";

            tacLines.push("t2 = a + t1");

            result.innerHTML =
            tacLines.join("<br>");

            document.querySelector(".next").disabled = true;
        }
    }

    else if(selectedExpr === "exp2") {

        if(step === 0) {

            steps.innerHTML =
            "<b>Step 1:</b> Evaluate expression inside parentheses.";

            tacLines.push("t1 = a + b");
        }

        else if(step === 1) {

            steps.innerHTML +=
            "<br><b>Step 2:</b> Multiply temporary result by c.";

            tacLines.push("t2 = t1 * c");

            result.innerHTML =
            tacLines.join("<br>");

            document.querySelector(".next").disabled = true;
        }
    }

    else if(selectedExpr === "exp3") {

        if(step === 0) {

            steps.innerHTML =
            "<b>Step 1:</b> Generate first multiplication.";

            tacLines.push("t1 = a * b");

            result.innerHTML =
            tacLines.join("<br>");
        }

        else if(step === 1) {

            steps.innerHTML +=
            "<br><b>Step 2:</b> Generate second multiplication.";

            tacLines.push("t2 = c * d");

            result.innerHTML =
            tacLines.join("<br>");
        }

        else if(step === 2) {

            steps.innerHTML +=
            "<br><b>Step 3:</b> Add both temporary results.";

            tacLines.push("t3 = t1 + t2");

            result.innerHTML =
            tacLines.join("<br>");

            document.querySelector(".next").disabled = true;
        }
    }

    step++;
}

function resetSim() {

    document.getElementById("expression").selectedIndex = 0;

    document.getElementById("steps").innerHTML =
    "Select an expression and click Start.";

    document.getElementById("exprBox").innerHTML =
    "Expression will appear here";

    document.getElementById("resultBox").innerHTML =
    "Waiting for simulation...";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;

    step = 0;
    tacLines = [];
    selectedExpr = "";
}

window.onload = function () {

    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};