function checkAnswers() {
  const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "c",
    q7: "a",
    q8: "a",
    q9: "b",
    q10: "a"
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
    `<h3>Your Score: ${score} out of ${total}</h3>`;
}