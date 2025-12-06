function calculateTax(amount) {
    const taxRate = 0.1
    return amount * taxRate
}

function convertToUpperCase(text) {
    return text.toUpperCase
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function isPalindrome(word) {
  return word === word.split('').reverse().join('')
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100)
  return originalPrice - discount;
}

const calculateTax
const convertToUpperCase
const findMaximum
const isPalindrome
const calculateDiscountedPrice


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };