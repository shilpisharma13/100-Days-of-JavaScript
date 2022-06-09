const hex = document.querySelector('.hex')
const btn = document.querySelector('.generate')

const generateColor = () => {
  // Generate number 1 to 10
  const randomColor = '#' + Math.random().toString(16).substring(2, 8)
  console.log(Math.random().toString(16))
  hex.innerHTML = randomColor
  document.body.style.backgroundColor = randomColor
}
btn.addEventListener('click', generateColor)

//If you want to generate number on page load and the number not be zero then invoke funtion
generateColor()
