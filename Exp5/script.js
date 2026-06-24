function checkAnswersI() {

    const answers = {
        q1: "b", // Bottom-Up Parsing
        q2: "c", // Stack
        q3: "b", // Shift moves input to stack
        q4: "c", // Reduce replaces handle with non-terminal
        q5: "c"  // Accept state
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