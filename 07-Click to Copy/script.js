const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

function copyText(e) {
  e.preventDefault()
  console.log('hello')
  btn.textContent = 'Copied'
}

btn.addEventListener('click', copyText)
