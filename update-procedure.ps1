# Update procedure pages with Compiler Design lab steps
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$titles = @{
  1="Lexical Analysis and Token Recognition"
  2="Regular Expressions and Finite Automata"
  3="Parse Tree Generation"
  4="LL(1) Predictive Parsing"
  5="FIRST and FOLLOW Set Computation"
  6="Construction of LL(1) Parsing Table"
  7="Symbol Table Management"
  8="Intermediate Code Generation"
  9="Three Address Code Generation"
  10="Code Optimization Techniques"
}

$steps = @{

  1=@(
    "Read the theory section on lexical analysis."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter a source code snippet."
    "Perform lexical analysis."
    "Observe generated tokens, keywords, identifiers, and operators."
    "Analyze token classification."
    "Take the posttest quiz."
  )

  2=@(
    "Read the theory section on regular expressions and finite automata."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Select a regular expression."
    "Generate the corresponding automaton."
    "Test input strings."
    "Observe acceptance and rejection states."
    "Take the posttest quiz."
  )

  3=@(
    "Read the theory section on parse tree generation."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Select a grammar and input string."
    "Generate the parse tree."
    "Observe derivation steps."
    "Analyze the parse structure."
    "Take the posttest quiz."
  )

  4=@(
    "Read the theory section on LL(1) predictive parsing."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Select a grammar and input string."
    "Construct parsing actions step by step."
    "Observe stack operations."
    "Verify whether the string is accepted."
    "Take the posttest quiz."
  )

  5=@(
    "Read the theory section on FIRST and FOLLOW sets."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Select a grammar."
    "Compute FIRST sets."
    "Compute FOLLOW sets."
    "Analyze the generated results."
    "Take the posttest quiz."
  )

  6=@(
    "Read the theory section on LL(1) parsing tables."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Compute FIRST and FOLLOW sets."
    "Construct the LL(1) parsing table."
    "Observe table entries."
    "Validate the grammar."
    "Take the posttest quiz."
  )

  7=@(
    "Read the theory section on symbol table management."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter variable declarations."
    "Insert symbols into the symbol table."
    "Perform search and update operations."
    "Analyze symbol table contents."
    "Take the posttest quiz."
  )

  8=@(
    "Read the theory section on intermediate code generation."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter an arithmetic expression."
    "Generate intermediate code."
    "Observe translation steps."
    "Analyze the generated representation."
    "Take the posttest quiz."
  )

  9=@(
    "Read the theory section on Three Address Code generation."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter an expression."
    "Generate Three Address Code."
    "Observe temporary variables."
    "Analyze generated instructions."
    "Take the posttest quiz."
  )

  10=@(
    "Read the theory section on code optimization."
    "Take the pretest quiz."
    "Open the Simulation page."
    "Enter intermediate code."
    "Apply optimization techniques."
    "Observe optimized code generation."
    "Compare original and optimized code."
    "Take the posttest quiz."
  )
}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Compiler Design Virtual Lab</title><link rel="stylesheet" href="style.css"></head>
<body>
<header><div class="menu-bar"><div class="menu-icon" id="menuToggle">&#9776;</div><div class="logo"><img src="../logo.jpg" alt="Logo"/></div></div>
<div class="orange-line"></div>
<h2 align="left" style="color:#4a90e2"><div class="section"><a href="../index.html">Compiler Design Virtual Lab</a></div></h2>
<div class="grey-line"></div></header>
<main class="content"><h1 align="center">$($titles[$n]) - Procedure</h1>
<ol class="section">$ol</ol></main>
<div class="modal-overlay" id="modalOverlay"><div class="modal"><div class="modal-header"><img src="../logo.jpg" class="modal-logo"/><span class="close-btn" id="closeModal">&times;</span></div>
<ul class="modal-menu"><li><a href=AO.html>Aim</a></li><li><a href=theory.html>Theory</a></li><li><a href=quiz.html>Pretest</a></li><li><a href=pro.html class="active">Procedure</a></li><li><a href=sim.html>Simulation</a></li><li><a href=postt.html>Posttest</a></li><li><a href=ref.html>References</a></li><li><a href=feed2.html>Feedback</a></li></ul></div></div>
<script src="script.js"></script></body></html>
"@
  Set-Content -Path (Join-Path $base "Exp$n\pro.html") -Value $html -Encoding UTF8
}
Write-Host "Procedure pages updated."
