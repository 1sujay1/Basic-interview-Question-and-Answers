//Input
// nums=[2,7,11,15]
// target=9

// ans:[0,1] =>2+7=11

//Brute force solution
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };
const twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (obj.hasOwnProperty(diff)) {
      return [obj[diff], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  console.log(obj);
};
console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
//Using Javascript Objects
