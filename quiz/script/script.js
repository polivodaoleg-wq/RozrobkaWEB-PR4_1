document.addEventListener("DOMContentLoaded", () => {
    const btnOpenModal = document.querySelector("#btnOpenModal");
    const modalBlock = document.querySelector("#modalBlock");
    const closeModal = document.querySelector("#closeModal");
    const questionTitle = document.querySelector("#question");
    const formAnswers = document.querySelector("#formAnswers");

    btnOpenModal.addEventListener("click", () => {
        modalBlock.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block");
    })

    const playTest = function () {
        questionTitle.textContent = "Якого кольору бургер бажаєте?";

        const burgerTitle = "Стандарт";
        const burgerImgSrc = "./image/burger.png";
        const burgerBlackTitle = "Чорний";
        const burgerBlackImgSrc = "./image/burgerBlack.png";
        formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${burgerImgSrc}" alt="burger">
                    <span>${burgerTitle}</span>
                </label>
            </div>
            <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${burgerBlackImgSrc}" alt="burger">
                    <span>${burgerBlackTitle}</span>
                </label>
            </div>
        `;

        console.log("test");
    }
})