let currentStep = 0;
let selectedExample = "";

function start() {

    selectedExample = document.getElementById("program").value;

    if (selectedExample === "") {
        alert("Please select an optimization example.");
        return;
    }

    currentStep = 0;

    const original = document.getElementById("originalCode");
    const optimized = document.getElementById("optimizedCode");
    const steps = document.getElementById("steps");

    if (selectedExample === "constfold") {

        original.innerHTML =
`a = 10 * 20;
b = a + 5;`;

        optimized.innerHTML =
"Optimization not applied yet.";

        steps.innerHTML =
"<div class='highlight'>Constant Folding Simulation Started</div>";
    }

    else if (selectedExample === "commonsub") {

        original.innerHTML =
`t1 = a + b;
t2 = a + b;
t3 = t2 * c;`;

        optimized.innerHTML =
"Optimization not applied yet.";

        steps.innerHTML =
"<div class='highlight'>Common Subexpression Elimination Started</div>";
    }

    else if (selectedExample === "deadcode") {

        original.innerHTML =
`x = 10;
y = 20;
z = x + y;
x = 30;`;

        optimized.innerHTML =
"Optimization not applied yet.";

        steps.innerHTML =
"<div class='highlight'>Dead Code Elimination Started</div>";
    }

    document.querySelector(".next").disabled = false;
}

function nextStep() {

    const steps = document.getElementById("steps");
    const optimized = document.getElementById("optimizedCode");

    /* Constant Folding */
    if (selectedExample === "constfold") {

        if (currentStep === 0) {

            steps.innerHTML +=
            "<br>Step 1: Evaluate constant expression 10 * 20.";

            optimized.innerHTML =
`a = 200;
b = a + 5;`;
        }

        else if (currentStep === 1) {

            steps.innerHTML +=
            "<br>Step 2: Propagate constant value.";

            optimized.innerHTML =
`a = 200;
b = 205;`;

            document.querySelector(".next").disabled = true;
        }
    }

    /* Common Subexpression */
    else if (selectedExample === "commonsub") {

        if (currentStep === 0) {

            steps.innerHTML +=
            "<br>Step 1: Detect repeated expression (a + b).";

            optimized.innerHTML =
`t1 = a + b;
t2 = a + b;
t3 = t2 * c;`;
        }

        else if (currentStep === 1) {

            steps.innerHTML +=
            "<br>Step 2: Replace duplicate computation.";

            optimized.innerHTML =
`t1 = a + b;
t2 = t1;
t3 = t2 * c;`;

            document.querySelector(".next").disabled = true;
        }
    }

    /* Dead Code Elimination */
    else if (selectedExample === "deadcode") {

        if (currentStep === 0) {

            steps.innerHTML +=
            "<br>Step 1: Analyze variable usage.";

            optimized.innerHTML =
`x = 10;
y = 20;
z = x + y;
x = 30;`;
        }

        else if (currentStep === 1) {

            steps.innerHTML +=
            "<br>Step 2: Remove unused assignment.";

            optimized.innerHTML =
`x = 10;
y = 20;
z = x + y;`;

            document.querySelector(".next").disabled = true;
        }
    }

    currentStep++;
}

function resetSim() {

    currentStep = 0;
    selectedExample = "";

    document.getElementById("program").selectedIndex = 0;

    document.getElementById("steps").innerHTML =
    "Select an optimization example and click Start.";

    document.getElementById("originalCode").innerHTML =
    "Original code will appear here.";

    document.getElementById("optimizedCode").innerHTML =
    "Optimized code will appear here.";

    document.querySelector(".next").disabled = true;
}

window.onload = function () {

    document.querySelector(".next").disabled = true;
};