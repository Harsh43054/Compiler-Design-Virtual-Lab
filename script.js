function checkAnswers() {
  const correctAnswers = {
    q1: "a", // Compiler translates source code
    q2: "b", // Lexical Analysis
    q3: "c", // Token
    q4: "a", // Regular Expression
    q5: "b", // Parse Tree
    q6: "c", // FIRST Set
    q7: "a", // FOLLOW Set
    q8: "d", // LL(1) Parser
    q9: "b", // Symbol Table
    q10: "c" // Code Optimization
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    const options = document.querySelectorAll(`input[name="${key}"]`);

    options.forEach(option => {
      const label = option.parentElement;
      label.style.color = "";

      if (option.checked) {
        if (option.value === correctAnswers[key]) {
          label.style.color = "green";
          score++;
        } else {
          label.style.color = "red";
        }
      }
    });
  }

  document.getElementById("result").innerHTML =
    `<h3>Your Score: ${score} / ${total}</h3>`;
}

function checkAnswers1() {
  const correctAnswers = {
    q11: "b", // DFA
    q12: "a", // Context Free Grammar
    q13: "c", // Predictive Parsing
    q14: "b", // Non-terminal
    q15: "d", // Terminal Symbol
    q16: "a", // Intermediate Code
    q17: "c", // Three Address Code
    q18: "b", // Dead Code Elimination
    q19: "a", // Code Generation
    q20: "d"  // Compiler Optimization
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    const options = document.querySelectorAll(`input[name="${key}"]`);

    options.forEach(option => {
      const label = option.parentElement;
      label.style.color = "";

      if (option.checked) {
        if (option.value === correctAnswers[key]) {
          label.style.color = "green";
          score++;
        } else {
          label.style.color = "red";
        }
      }
    });
  }

  document.getElementById("result1").innerHTML =
    `<h3>Your Score: ${score} / ${total}</h3>`;
}

/* Menu */

const menuToggle = document.getElementById("menuToggle");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

if (menuToggle) {
  menuToggle.onclick = () => {
    modalOverlay.style.display = "flex";
  };
}

if (closeModal) {
  closeModal.onclick = () => {
    modalOverlay.style.display = "none";
  };
}

window.onclick = (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
};