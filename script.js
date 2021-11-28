'use strict';
const openShowModal = document.querySelector(".show-modal")
const bntCloseModal = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

const showModal = function() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const closeModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

openShowModal.addEventListener("click", showModal)

bntCloseModal.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
})