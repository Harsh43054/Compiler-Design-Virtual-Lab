# Update all experiment folders with Compiler Design lab content (same UI structure)
$base = Split-Path -Parent $MyInvocation.MyCommand.Path

$experiments = @(
  @{ n=1; title="Lexical Analysis and Token Recognition"; aim="In this experiment, students will identify tokens, keywords, identifiers, operators, and literals from source code using lexical analysis techniques." },

  @{ n=2; title="Regular Expressions and Finite Automata"; aim="In this experiment, students will construct regular expressions and finite automata for recognizing patterns and tokens in programming languages." },

  @{ n=3; title="Parse Tree Generation"; aim="In this experiment, students will generate parse trees for context-free grammars and understand the hierarchical structure of language constructs." },

  @{ n=4; title="LL(1) Predictive Parsing"; aim="In this experiment, students will perform LL(1) predictive parsing and validate input strings using parsing tables." },

  @{ n=5; title="FIRST and FOLLOW Set Computation"; aim="In this experiment, students will compute FIRST and FOLLOW sets for grammar productions and analyze their role in parser construction." },

  @{ n=6; title="Construction of LL(1) Parsing Table"; aim="In this experiment, students will construct LL(1) parsing tables using FIRST and FOLLOW sets and test grammar suitability." },

  @{ n=7; title="Symbol Table Management"; aim="In this experiment, students will understand symbol table organization, insertion, lookup, and management during compilation." },

  @{ n=8; title="Intermediate Code Generation"; aim="In this experiment, students will generate intermediate code representations from source programs and understand syntax-directed translation." },

  @{ n=9; title="Three Address Code Generation"; aim="In this experiment, students will generate Three Address Code (TAC) for arithmetic and assignment expressions." },

  @{ n=10; title="Code Optimization Techniques"; aim="In this experiment, students will apply compiler optimization techniques such as constant folding, dead code elimination, and common subexpression elimination." }
)

$aoTemplate = @'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compiler Design Virtual Lab</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="menu-bar">
      <div class="menu-icon" id="menuToggle">&#9776;</div>
      <div class="logo">
        <img src="../logo.jpg" alt="Virtual Labs Logo" />
      </div>
    </div>
    <div class="orange-line"></div>
    <h2 align="left" style="color:#4a90e2"><div class="section"><a href="#">Computer Science and Engineering</a> > <a href="../index.html">Compiler Design Virtual Lab</a> > <a href="../LOE.html">Experiments</a></div></h2>
    <div class="grey-line"></div>
  </header>

  <main class="content">
   <h1 align="center">__TITLE__</h1>
  </main>
   <p>
    <div class="section">__AIM__</div>
   </p>
  
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-header">
        <img src="../logo.jpg" alt="Logo" class="modal-logo"/>
        <span class="close-btn" id="closeModal">&times;</span>
      </div>
      <ul class="modal-menu">
        <li><a href=AO.html class="active">Aim</a></li>
        <li><a href=theory.html>Theory</a></li>
        <li><a href=quiz.html>Pretest</a></li>
        <li><a href=pro.html>Procedure</a></li>
        <li><a href=sim.html>Simulation</a></li>
        <li><a href="postt.html">Posttest</a></li>
        <li><a href=ref.html>References</a></li>
        <li><a href=feed2.html>Feedback</a></li>
      </ul>
    </div>
  </div>
   <script src="script.js"></script>
</body>
</html>
'@

foreach ($exp in $experiments) {
  $dir = Join-Path $base ("Exp" + $exp.n)
  if (-not (Test-Path $dir)) { continue }

  $ao = $aoTemplate -replace '__TITLE__', $exp.title -replace '__AIM__', $exp.aim
  Set-Content -Path (Join-Path $dir "AO.html") -Value $ao -Encoding UTF8

  $content = $content -replace '<h1 align="center">.*?</h1>', "<h1 align=`"center`">$($exp.title)</h1>"

Write-Host "Updated $($experiments.Count) experiment folders."
