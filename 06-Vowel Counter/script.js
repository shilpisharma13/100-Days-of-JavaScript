'use strict'
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const inputValue = document.querySelector('.input-text')

const vowel = ['a', 'e', 'i', 'o', 'u']

function vowelCounter() {
  const word = inputValue.value
  const numVowels = word
    .split('')
    .filter((element) => vowel.includes(element)).length
  return (result.textContent = `${word.toUpperCase()} has ${numVowels} vowels`)
}

btn.addEventListener('click', vowelCounter)
