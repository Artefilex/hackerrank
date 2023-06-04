// we have three parameters 
//  s[n] = array chocolate number
//  d = int Ron birthday 
//  m = int Ron birth month

function birthday(s, d, m) {
    let count = 0;
    const n = s.length;

    for (let i = 0; i <= n - m; i++) {
        let segmentSum = 0;
        for (let j = i; j < i + m; j++) {
            segmentSum += s[j];
        }
        if (segmentSum === d) {
            count++;
        }
    }

    return count;
}
  /* 
Problem:
Given an array of integers representing the numbers on each square of a chocolate bar, we need to find the number of ways we can divide the chocolate bar into segments. Each segment should have a length equal to Ron's birth month and the sum of the integers in the segment should be equal to Ron's birth day.

Example:
n = 82 (number of squares in the chocolate bar)
s = [2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2]
d = 26 (Ron's birth day)
m = 8 (Ron's birth month)

The goal is to find the number of ways we can divide the chocolate bar into segments of length 8 (m) such that the sum of the integers in each segment is equal to 26 (d).

Solution:
We can solve this problem by iterating through the chocolate bar and checking each possible segment of length m. If the sum of the integers in a segment is equal to d, we count it as a valid way to divide the chocolate bar.

Step-by-step solution for the given example:

Initialize count = 0 to keep track of the number of valid segments.

Iterate through the chocolate bar:

Start with the first segment of length m = 8, considering elements s[0] to s[7].

Calculate the sum of the integers in the segment: 2 + 3 + 4 + 4 + 2 + 1 + 2 + 5 = 23. Since 23 != 26, it is not a valid segment.

Move to the next segment, considering elements s[1] to s[8].

Calculate the sum: 3 + 4 + 4 + 2 + 1 + 2 + 5 + 3 = 24. Again, it is not a valid segment.

Continue this process, calculating the sum for each segment until we reach the last valid segment.

Finally, when we consider elements s[10] to s[17], the sum is: 4 + 4 + 3 + 4 + 1 + 3 + 5 + 2 = 26. This segment is a valid division of the chocolate bar.

Increment the count by 1, as we found a valid segment.

Continue iterating through the chocolate bar until we reach the end.

After iterating through all possible segments, we have found a total of 16 valid segments.

Return the value of


  */