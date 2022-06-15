const input = document.querySelector('.form-control')
const count = document.querySelector('.count')

const countChars = () => {
  count.textContent = input.value.length
}

input.addEventListener('keyup', countChars)

//To reset the values
window.addEventListener('click', () => {
  input.value = ''
  count.textContent = 0
})
