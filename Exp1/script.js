function checkAnswersI() {

    const answers = {
        q1: "a", // Lexical Analysis
        q2: "c", // Tokens
        q3: "c", // total_marks
        q4: "b", // while
        q5: "c"  // Syntax Analysis
    };

    let score = 0;

    for (let q in answers) {

        const selected =
        document.querySelector(
        `input[name="${q}"]:checked`
        );

        if (
            selected &&
            selected.value === answers[q]
        ) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
    `<strong>You scored ${score} out of 5</strong>`;
}

function checkAnswers1() {
    checkAnswersI();
}

const menuToggle =
document.getElementById('menuToggle');

const modalOverlay =
document.getElementById('modalOverlay');

const closeModal =
document.getElementById('closeModal');

if(menuToggle)
menuToggle.onclick = () => {
    modalOverlay.style.display = 'flex';
};

if(closeModal)
closeModal.onclick = () => {
    modalOverlay.style.display = 'none';
};

if(modalOverlay)
window.onclick = (event) => {
    if(event.target === modalOverlay)
        modalOverlay.style.display = 'none';
};