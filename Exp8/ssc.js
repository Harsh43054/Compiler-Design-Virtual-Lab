let step = 0;
let selectedExpr = "";

function start() {

    selectedExpr =
    document.getElementById("expression").value;

    if(selectedExpr === "") {
        alert("Please select an expression.");
        return;
    }

    step = 0;

    document.getElementById("steps").innerHTML =
    "Simulation started. Click Next.";

    document.getElementById("resultBox").innerHTML =
    "Type checking in progress...";

    document.getElementById("resultBox").className =
    "result";

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

    if(step === 0){

        steps.innerHTML =
        "<b>Step 1:</b> Read variable declarations from Symbol Table.";
    }

    else if(step === 1){

        steps.innerHTML +=
        "<br><b>Step 2:</b> Identify operand data types.";
    }

    else if(step === 2){

        steps.innerHTML +=
        "<br><b>Step 3:</b> Check assignment and expression compatibility.";
    }

    else if(step === 3){

        if(
            selectedExpr === "valid1" ||
            selectedExpr === "valid2"
        ){

            steps.innerHTML +=
            "<br><b>Step 4:</b> Types are compatible.";

            result.innerHTML =
            "✓ Type Checking Successful";

            result.className =
            "result success";
        }
        else{

            steps.innerHTML +=
            "<br><b>Step 4:</b> Type mismatch detected.";

            result.innerHTML =
            "✗ Type Error: Incompatible Data Types";

            result.className =
            "result error";
        }

        document.querySelector(".next").disabled = true;
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

    document.getElementById("resultBox").className =
    "result";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;

    step = 0;
    selectedExpr = "";
}

window.onload = function() {

    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};