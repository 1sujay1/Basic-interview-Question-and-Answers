let globalGroup = [];
function maximumMagnets(X, Y, A) {
  // Sort the array of magnets' strengths
  A.sort((a, b) => a - b);
  console.log("A", A);
  //   [1, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13];
  let maxGroupSize = 0;

  // Iterate through each magnet

  for (let i = 0; i < X; i++) {
    let temp = i;
    let group = [A[i]];
    let groupSize = 1; // Initial group size

    // Compare the current magnet with all others
    for (let j = i + 1; j < X; j++) {
      //   console.log("i,j", i, j);
      //   console.log("A[i],A[j]", A[i], A[j]);
      if (A[j] - A[i] >= Y) {
        group.push(A[j]);
        groupSize++; // Increase group size if the difference is less than Y
        // console.log("j", j);
        i = j;
      }
    }
    i = temp + 1;
    // Update maxGroupSize if the current group size is greater
    if (groupSize > maxGroupSize) {
      maxGroupSize = groupSize;
    }
    globalGroup.push(group);
  }

  return maxGroupSize;
}

// Example usage
const input1 = 12;
const input2 = 3;
const input3 = [1, 5, 6, 1, 8, 3, 12, 2, 13, 7, 9, 11];

console.log(maximumMagnets(input1, input2, input3)); // Output: 4
console.log("globalGroup", globalGroup);
