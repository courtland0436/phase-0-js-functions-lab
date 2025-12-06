// Calculate a 10% tax on an amount
function calculateTax(amount) {
  const taxRate = 0.10;
  return amount * taxRate;
}

// Convert a string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Return the larger of two numbers
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Check if a string is a palindrome
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

// Calculate the discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}


// This is required for the test to function properly  
module.exports = {
    calculateTax, 
    convertToUpperCase, 
    findMaximum, 
    isPalindrome, 
    calculateDiscountedPrice
};