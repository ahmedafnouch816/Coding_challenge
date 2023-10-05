function findLongestWordWithMostVowels(sentence) {
    // Remove non-alphabet characters and split the sentence into words
    const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
  
    // Initialize variables to track the longest word and its vowel count
    let longestWord = '';
    let maxVowelCount = 0;
  
    // Iterate through each word in the sentence
    for (const word of words) {
      const vowels = 'aeiouAEIOU';
      let currentVowelCount = 0;
  
      // Calculate the vowel count for the current word
      for (const char of word) {
        if (vowels.includes(char)) {
          currentVowelCount++;
        }
      }
  
      // Check if the current word is longer or has more vowels than the longest word found so far
      if (word.length > longestWord.length || (word.length === longestWord.length && currentVowelCount > maxVowelCount)) {
        longestWord = word;
        maxVowelCount = currentVowelCount;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  const longestWord = findLongestWordWithMostVowels(sentence);
  console.log(longestWord);
  