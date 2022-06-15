const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')
const text = document.querySelector('.copiedtext')

const copyText = (e) => {
  e.preventDefault()
  console.log('hello')
  const textToCopy = coupon.value
  console.log(textToCopy)
  navigator.clipboard.writeText(textToCopy).then(() => {
    coupon.value = ''
    btn.textContent = 'Copied!!'
    setTimeout(() => {
      btn.textContent = 'Copy'
    }, 2000)
  })
}

btn.addEventListener('click', copyText)
