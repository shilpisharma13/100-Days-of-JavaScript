const number = document.querySelector('.number')
const btn = document.querySelector('.buttons')

const generateNum = () => {
  // Generate number 1 to 10
  const randomNum = Math.floor(Math.random() * 10 + 1)
  number.innerHTML = randomNum
}
btn.addEventListener('click', generateNum)

//If you want to generate number on page load and the number not be zero then invoke funtion
generateNum()
