const goToModalButton = document.querySelector(".go_to_modal")
const goBackModalButton = document.querySelector(".go_back_home")

const modal = document.querySelector(".modal")

// 모달창 보이게 하는 함수
function goToModal() {
    modal.classList.add("show")
}

// 모달창 안보이게 하는 함수
function goBackHome() {
    modal.classList.remove("show")
}


goToModalButton.addEventListener("click", goToModal)
goBackModalButton.addEventListener("click", goBackHome)