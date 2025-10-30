// task-4
// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Step 1: Remove all spaces and convert to lowercase
  // This ensures "A man a plan a canal Panama" works correctly
  const cleaned = str.replace(/\s+/g, "").toLowerCase();

  // Step 2: Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // Step 3: Compare original cleaned string with reversed string
  if (cleaned === reversed) {
    return true;  // It's a palindrome
  } else {
    return false; // Not a palindrome
  }
}

// Example usage:

// Single word
console.log(isPalindrome("racecar"));       // true

// Not a palindrome
console.log(isPalindrome("hello"));         // false

// Sentence with spaces and mixed case
console.log(isPalindrome("A man a plan a canal Panama")); // true
