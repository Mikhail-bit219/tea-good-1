// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage of the helper functions
  console.log(getRandomNumber(1, 100)); // Generate a random number between 1 and 100
  console.log(isPrime(17)); // Check if 17 is a prime number
  console.log(reverseString("Hello, world!")); // Reverse the string "Hello, world!"
  