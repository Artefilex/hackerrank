function diagonalDifference(arr) {
  
     let diagonalFirstBase = 0, 
     diagonalSecondBase = 0;

     for(let i = 0; i < arr.length; i++){

         diagonalFirstBase += arr[i][i];

         diagonalSecondBase += arr[arr.length -1 - i][i]
     }
     return Math.abs(diagonalFirstBase - diagonalSecondBase);  
 
 }