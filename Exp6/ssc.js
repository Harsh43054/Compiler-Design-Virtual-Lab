let steps = [];
let currentStep = 0;

const simulations = {

"id+id":[

{
state:"0",
stack:"$",
action:"Initialize"
},

{
state:"5",
stack:"$ id",
action:"Shift id"
},

{
state:"2",
stack:"$ E",
action:"Reduce E → id"
},

{
state:"3",
stack:"$ E +",
action:"Shift +"
},

{
state:"5",
stack:"$ E + id",
action:"Shift id"
},

{
state:"4",
stack:"$ E + E",
action:"Reduce E → id"
},

{
state:"1",
stack:"$ E",
action:"Reduce E → E + E"
},

{
state:"Accept",
stack:"$ E",
action:"Accept"
}

],

"id+id+id":[

{
state:"0",
stack:"$",
action:"Initialize"
},

{
state:"5",
stack:"$ id",
action:"Shift id"
},

{
state:"2",
stack:"$ E",
action:"Reduce E → id"
},

{
state:"3",
stack:"$ E +",
action:"Shift +"
},

{
state:"5",
stack:"$ E + id",
action:"Shift id"
},

{
state:"4",
stack:"$ E + E",
action:"Reduce E → id"
},

{
state:"1",
stack:"$ E",
action:"Reduce E → E + E"
},

{
state:"3",
stack:"$ E +",
action:"Shift +"
},

{
state:"5",
stack:"$ E + id",
action:"Shift id"
},

{
state:"4",
stack:"$ E + E",
action:"Reduce E → id"
},

{
state:"1",
stack:"$ E",
action:"Reduce E → E + E"
},

{
state:"Accept",
stack:"$ E",
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
State  : ${s.state}
Stack  : ${s.stack}
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

document.getElementById("stateBox").innerHTML =
`<b>State</b><br>${step.state}`;

document.getElementById("stackBox").innerHTML =
`<b>Stack</b><br>${step.stack}`;

document.getElementById("actionBox").innerHTML =
`<b>Action</b><br>${step.action}`;

document
.querySelectorAll(".box")
.forEach(box => box.classList.remove("active"));

if(index % 3 === 0)
document.getElementById("stateBox").classList.add("active");

else if(index % 3 === 1)
document.getElementById("stackBox").classList.add("active");

else
document.getElementById("actionBox").classList.add("active");

}

function resetSim(){

steps = [];
currentStep = 0;

document.getElementById("inputString").selectedIndex = 0;

document.getElementById("steps").innerHTML = "";

document.getElementById("stateBox").innerHTML = "State";
document.getElementById("stackBox").innerHTML = "Stack";
document.getElementById("actionBox").innerHTML = "Action";

document
.querySelectorAll(".box")
.forEach(box => box.classList.remove("active"));

document.querySelector(".start").disabled = false;
document.querySelector(".next").disabled = true;
document.querySelector(".reset").disabled = true;

}