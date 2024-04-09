// print nth element
//0 1 1 2 3 5 8

// function findFibo(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   console.log(arr);
//   return arr[n];
// }

function findFibo(n) {
  if (n <= 1) return n;
  return findFibo(n - 1) + findFibo(n - 2);
}

console.log(findFibo(4));
