const btn = document.querySelector('.btn')
const billValue = document.querySelector('.bill')
const tip = document.querySelector('.tip')
const totalBill = document.querySelector('.total')
const rate = document.querySelector('.rate')
const error = document.querySelector('.error')

const hideError = () => {
  setTimeout(() => {
    error.style.display = 'none'
  }, 2000)
}
const calculate = () => {
  if (!billValue.value || !rate.value) {
    error.style.display = 'block'
    hideError()
  } else if (isNaN(billValue.value)) {
    error.innerHTML = 'Please enter a number'
    error.style.display = 'block'
    hideError()
  } else {
    const tipAmount = Math.ceil(billValue.value * rate.value)
    tip.textContent = `Tip Amount: $ ${tipAmount}`
    totalBill.textContent = `Total Amount: $ ${+billValue.value + tipAmount}`
  }
}

btn.addEventListener('click', calculate)
