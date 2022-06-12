const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

function palindromeChecker() {
  const inputValue = document.querySelector('.input-text').value
  const arr = inputValue.split('')
  const revArr = arr.slice()
  revArr.reverse()
  const isPal = arr.every((element, index) => element === revArr[index])
  return (result.textContent = isPal
    ? `${inputValue} is a Palindrome`
    : `${inputValue} is NOT a Palindrome`)
}

btn.addEventListener('click', palindromeChecker)
