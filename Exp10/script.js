function checkAnswersI() {

    const answers = {
        q1: "a", // Improve program efficiency
        q2: "a", // Constant Folding
        q3: "a", // Repeated computations
        q4: "a", // Unused statements
        q5: "a"  // Intermediate Code Generation
    };

    let score = 0;

    for (let q in answers) {

        const selected =
        document.querySelector(`input[name="${q}"]:checked`);

        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        `<strong>Your Score: ${score} / 5</strong>`;
}

function checkAnswers1() {
    checkAnswersI();
}

/* Menu Functions */

const menuToggle = document.getElementById("menuToggle");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

if (menuToggle) {
    menuToggle.onclick = function () {
        modalOverlay.style.display = "flex";
    };
}

if (closeModal) {
    closeModal.onclick = function () {
        modalOverlay.style.display = "none";
    };
}

if (modalOverlay) {
    window.onclick = function (event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    };
}