const goToModalButton = document.querySelector(".go_to_modal")
const modal = document.querySelector(".modal")
const goBackModalButton = document.querySelector(".go_back_home")

function goToModal() {
    modal.classList.add("show")
}

function goBackHome() {
    modal.classList.remove("show")
}


goToModalButton.addEventListener("click", goToModal)
goBackModalButton.addEventListener("click", goBackHome)
