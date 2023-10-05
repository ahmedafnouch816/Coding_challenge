function findLongestWordWithMostVowels(sentence) {
    // Initialize variables to track the longest word and its vowel count
    let longestWord = '';
    let maxVowelCount = 0;
  
    // Split the sentence into words and iterate through them
    const words = sentence.split(' ');
    for (const word of words) {
      // Remove non-alphabet characters and convert the word to lowercase
      const cleanedWord = word.replace(/[^a-z]/gi, '').toLowerCase();
  
      // Calculate the vowel count in the cleaned word
      const vowelCount = cleanedWord.split('').filter(char => 'aeiou'.includes(char)).length;
  
      // Check if the current word is longer than the previous longest word
      if (cleanedWord.length > longestWord.length) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      } else if (cleanedWord.length === longestWord.length && vowelCount > maxVowelCount) {
        // If the lengths are the same, compare vowel counts
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const sentence = "hello how are you developer";
  const longestWord = findLongestWordWithMostVowels(sentence);
  console.log(longestWord); // Output: "jumps"
  