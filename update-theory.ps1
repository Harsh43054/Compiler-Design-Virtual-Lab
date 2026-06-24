# Generate Compiler Design theory pages (same UI structure as original)
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$theories = @{

1 = @{
title="Lexical Analysis and Token Recognition"
body=@"
<h2>Lexical Analysis</h2>
<p>Lexical Analysis is the first phase of a compiler. It scans the source program and converts the sequence of characters into meaningful tokens.</p>

<h2>Tokens</h2>
<ul>
<li>Keywords</li>
<li>Identifiers</li>
<li>Operators</li>
<li>Literals</li>
<li>Special Symbols</li>
</ul>

<h2>Role of Lexical Analyzer</h2>
<p>The lexical analyzer removes white spaces and comments, identifies tokens, and passes them to the syntax analyzer.</p>
"@
}

2 = @{
title="Regular Expressions and Finite Automata"
body=@"
<h2>Regular Expressions</h2>
<p>Regular expressions are patterns used to describe sets of strings and define lexical structures of programming languages.</p>

<h2>Finite Automata</h2>
<p>Finite automata are abstract machines used to recognize patterns described by regular expressions.</p>

<h2>Types</h2>
<ul>
<li>Deterministic Finite Automata (DFA)</li>
<li>Nondeterministic Finite Automata (NFA)</li>
</ul>
"@
}

3 = @{
title="Parse Tree Generation"
body=@"
<h2>Parse Tree</h2>
<p>A parse tree is a hierarchical representation of the derivation of an input string according to a grammar.</p>

<h2>Purpose</h2>
<ul>
<li>Represents grammatical structure</li>
<li>Shows derivation process</li>
<li>Supports syntax analysis</li>
</ul>

<h2>Applications</h2>
<p>Parse trees are used in syntax-directed translation and intermediate code generation.</p>
"@
}

4 = @{
title="LL(1) Predictive Parsing"
body=@"
<h2>LL(1) Parsing</h2>
<p>LL(1) parsing is a top-down parsing technique that scans input from left to right and produces a leftmost derivation.</p>

<h2>Features</h2>
<ul>
<li>No backtracking</li>
<li>Uses parsing table</li>
<li>Efficient syntax analysis</li>
</ul>

<h2>Predictive Parser</h2>
<p>A predictive parser uses FIRST and FOLLOW sets to decide which production rule to apply.</p>
"@
}

5 = @{
title="FIRST and FOLLOW Set Computation"
body=@"
<h2>FIRST Set</h2>
<p>The FIRST set of a grammar symbol contains terminals that can appear first in strings derived from that symbol.</p>

<h2>FOLLOW Set</h2>
<p>The FOLLOW set contains terminals that can appear immediately after a non-terminal in a sentential form.</p>

<h2>Importance</h2>
<p>FIRST and FOLLOW sets are essential for constructing LL(1) parsing tables.</p>
"@
}

6 = @{
title="Construction of LL(1) Parsing Table"
body=@"
<h2>LL(1) Parsing Table</h2>
<p>An LL(1) parsing table is constructed using FIRST and FOLLOW sets.</p>

<h2>Construction Steps</h2>
<ul>
<li>Compute FIRST sets</li>
<li>Compute FOLLOW sets</li>
<li>Fill parsing table entries</li>
<li>Check conflicts</li>
</ul>

<h2>Purpose</h2>
<p>The table guides predictive parsing decisions.</p>
"@
}

7 = @{
title="Symbol Table Management"
body=@"
<h2>Symbol Table</h2>
<p>A symbol table stores information about identifiers used in a source program.</p>

<h2>Stored Information</h2>
<ul>
<li>Variable Name</li>
<li>Data Type</li>
<li>Scope</li>
<li>Memory Location</li>
</ul>

<h2>Operations</h2>
<p>Insertion, deletion, lookup, and update operations are performed during compilation.</p>
"@
}

8 = @{
title="Intermediate Code Generation"
body=@"
<h2>Intermediate Code</h2>
<p>Intermediate code is a machine-independent representation generated between syntax analysis and code generation.</p>

<h2>Advantages</h2>
<ul>
<li>Machine independence</li>
<li>Easy optimization</li>
<li>Simplifies code generation</li>
</ul>

<h2>Examples</h2>
<p>Postfix notation and syntax trees are common intermediate representations.</p>
"@
}

9 = @{
title="Three Address Code Generation"
body=@"
<h2>Three Address Code</h2>
<p>Three Address Code (TAC) is an intermediate representation consisting of simple instructions with at most three operands.</p>

<h2>Format</h2>
<p>x = y op z</p>

<h2>Benefits</h2>
<ul>
<li>Easy optimization</li>
<li>Simple code generation</li>
<li>Efficient representation</li>
</ul>
"@
}

10 = @{
title="Code Optimization Techniques"
body=@"
<h2>Code Optimization</h2>
<p>Code optimization improves program performance and reduces resource usage without changing program behavior.</p>

<h2>Techniques</h2>
<ul>
<li>Constant Folding</li>
<li>Dead Code Elimination</li>
<li>Common Subexpression Elimination</li>
<li>Loop Optimization</li>
</ul>

<h2>Benefits</h2>
<p>Optimization reduces execution time and memory consumption.</p>
"@
}

}
<ul>
<li>Error management</li>
<li>Program reliability</li>
<li>Data persistence</li>
</ul>
"@
  }
}