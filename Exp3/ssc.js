let steps = [];
let currentStep = 0;
let expression = "";

window.onload = () => {
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
};

function start(){

    expression =
    document.getElementById("expr").value;

    if(!expression){
        alert("Select an expression.");
        return;
    }

    steps = [
        "Start Symbol: E",
        "Apply grammar productions",
        "Generate intermediate non-terminals",
        "Expand terminals",
        "Parse Tree Completed"
    ];

    currentStep = 0;

    document.getElementById("steps").innerHTML =
    steps.map((s,i)=>
    `<pre id="step-${i}">${s}</pre>`
    ).join("");

    document.getElementById("treeBox").innerHTML = "";

    document.querySelector(".start").disabled = true;
    document.querySelector(".next").disabled = false;
    document.querySelector(".reset").disabled = false;
}

function nextStep(){

    if(currentStep >= steps.length){
        alert("Parse Tree Generated");
        return;
    }

    document.getElementById(
    `step-${currentStep-1}`
    )?.classList.remove("active");

    document.getElementById(
    `step-${currentStep}`
    ).classList.add("active");

    drawTree(currentStep);

    currentStep++;

    if(currentStep >= steps.length){
        document.querySelector(".next").disabled = true;
    }
}

function drawTree(step){

    let tree = "";

    if(expression === "a+b"){

        if(step >= 0)
            tree += `<div class="node active">E</div><br>`;

        if(step >= 1)
            tree += `<div class="node">E</div>
                     <div class="node">+</div>
                     <div class="node">T</div><br>`;

        if(step >= 2)
            tree += `<div class="node">a</div>
                     <div class="node">+</div>
                     <div class="node">b</div>`;
    }

    else if(expression === "a+b*c"){

        if(step >= 0)
            tree += `<div class="node active">E</div><br>`;

        if(step >= 1)
            tree += `<div class="node">E</div>
                     <div class="node">+</div>
                     <div class="node">T</div><br>`;

        if(step >= 2)
            tree += `<div class="node">a</div>
                     <div class="node">+</div>
                     <div class="node">T</div><br>`;

        if(step >= 3)
            tree += `<div class="node">b</div>
                     <div class="node">*</div>
                     <div class="node">c</div>`;
    }

    else if(expression === "a*b+c"){

        if(step >= 0)
            tree += `<div class="node active">E</div><br>`;

        if(step >= 1)
            tree += `<div class="node">T</div>
                     <div class="node">+</div>
                     <div class="node">T</div><br>`;

        if(step >= 2)
            tree += `<div class="node">a</div>
                     <div class="node">*</div>
                     <div class="node">b</div><br>`;

        if(step >= 3)
            tree += `<div class="node">+</div>
                     <div class="node">c</div>`;
    }

    document.getElementById("treeBox").innerHTML = tree;
}

function resetSim(){

    steps = [];
    currentStep = 0;

    document.getElementById("expr").selectedIndex = 0;
    document.getElementById("steps").innerHTML = "";
    document.getElementById("treeBox").innerHTML = "";

    document.querySelector(".start").disabled = false;
    document.querySelector(".next").disabled = true;
    document.querySelector(".reset").disabled = true;
}