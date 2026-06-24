function checkAnswersI() {

    const answers = {
        q1: "a", // Intermediate Code
        q2: "c", // Three Addresses
        q3: "a", // t1, t2, t3
        q4: "a", // Code Optimization
        q5: "a"  // Intermediate Code Generation
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

/* Navigation Menu */

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