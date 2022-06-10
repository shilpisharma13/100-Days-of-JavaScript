'use strict'
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const btn = document.querySelector('.btn')
const close = document.querySelector('.close')

btn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
  e.preventDefault()
  modal.style.display = 'block'
}

function closeModal() {
  modal.classList.add('slide-up')
  setTimeout(() => {
    modal.style.display = 'none'
    modal.classList.remove('slide-up')
  }, 500)
}
