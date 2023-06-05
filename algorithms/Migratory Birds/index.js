
function migratoryBirds(arr) {
    // Step 1: Initialize the hash map
    const frequencyMap = {};
  
    // Step 2: Count the frequency of each bird type
    for (let i = 0; i < arr.length; i++) {
      const birdType = arr[i];
      if (frequencyMap[birdType]) {
        frequencyMap[birdType]++;
      } else {
        frequencyMap[birdType] = 1;
      }
    }
  
    // Step 3: Find the maximum frequency and the smallest id
    let maxFrequency = 0;
    let maxBirdType = -1;
    for (const birdType in frequencyMap) {
      const frequency = frequencyMap[birdType];
      if (frequency > maxFrequency || (frequency === maxFrequency && birdType < maxBirdType)) {
        maxFrequency = frequency;
        maxBirdType = birdType;
      }
    }
  
    // Step 4: Return the lowest type id of the most frequently sighted birds
    return maxBirdType;
  }