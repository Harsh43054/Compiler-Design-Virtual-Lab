let steps = [];
let currentStep = 0;

const simulations = {

"id+id":[

{
stack:"$",
input:"id+id$",
action:"Initialize Parser"
},

{
stack:"$ id",
input:"+id$",
action:"Shift id"
},

{
stack:"$ E",
input:"+id$",
action:"Reduce E → id"
},

{
stack:"$ E +",
input:"id$",
action:"Shift +"
},

{
stack:"$ E + id",
input:"$",
action:"Shift id"
},

{
stack:"$ E + E",
input:"$",
action:"Reduce E → id"
},

{
stack:"$ E",
input:"$",
action:"Reduce E → E + E"
},

{
stack:"$ E",
input:"$",
action:"Accept"
}

],

"id+id+id":[

{
stack:"$",
input:"id+id+id$",
action:"Initialize Parser"
},

{
stack:"$ id",
input:"+id+id$",
action:"Shift id"
},

{
stack:"$ E",
input:"+id+id$",
action:"Reduce E → id"
},

{
stack:"$ E +",
input:"id+id$",
action:"Shift +"
},

{
stack:"$ E + id",
input:"+id$",
action:"Shift id"
},

{
stack:"$ E + E",
input:"+id$",
action:"Reduce E → id"
},

{
stack:"$ E",
input:"+id$",
action:"Reduce E → E + E"
},

{
stack:"$ E +",
input:"id$",
action:"Shift +"
},

{
stack:"$ E + id",
input:"$",
action:"Shift id"
},

{
stack:"$ E + E",
input:"$",
action:"Reduce E → id"
},

{
stack:"$ E",
input:"$",
action:"Reduce E → E + E"
},

{
stack:"$ E",
input:"$",
action:"Accept"
}

]

};

window.onload = () => {

document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;

};

function start(){

const input =
document.getElementById("inputString").value;

if(!input){

alert("Please select an input string.");
return;

}

steps = simulations[input];
currentStep = 0;

document.getElementById("steps").innerHTML =
steps.map((s,i)=>

`<pre id="step-${i}">
Stack  : ${s.stack}
Input  : ${s.input}
Action : ${s.action}
</pre>`

).join("");

updateParser(0);

document.querySelector(".start").disabled = true;
document.querySelector(".next").disabled = false;
document.querySelector(".reset").disabled = false;

}

function nextStep(){

if(currentStep >= steps.length){

alert("Simulation Completed.");
return;

}

document
.getElementById(`step-${currentStep-1}`)
?.classList.remove("active");

document
.getElementById(`step-${currentStep}`)
?.classList.add("active");

updateParser(currentStep);

currentStep++;

if(currentStep >= steps.length){

document.querySelector(".next").disabled = true;

}

}

function updateParser(index){

const step = steps[index];

document.getElementById("stackBox").innerHTML =
`<b>Stack</b><br>${step.stack}`;

document.getElementById("inputBox").innerHTML =
`<b>Input</b><br>${step.input}`;

document.getElementById("actionBox").innerHTML =
`<b>Action</b><br>${step.action}`;

document
.querySelectorAll(".box")
.forEach(box => box.classList.remove("active"));

if(index % 3 === 0)
document.getElementById("stackBox").classList.add("active");

else if(index % 3 === 1)
document.getElementById("inputBox").classList.add("active");

else
document.getElementById("actionBox").classList.add("active");

}

function resetSim(){

steps = [];
currentStep = 0;

document.getElementById("inputString").selectedIndex = 0;

document.getElementById("steps").innerHTML = "";

document.getElementById("stackBox").innerHTML = "Stack";
document.getElementById("inputBox").innerHTML = "Input";
document.getElementById("actionBox").innerHTML = "Action";

document
.querySelectorAll(".box")
.forEach(box => box.classList.remove("active"));

document.querySelector(".start").disabled = false;
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;

}