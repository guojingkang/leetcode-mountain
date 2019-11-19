/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const indexArray = [];
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
      if (secondIndex !== firstIndex) {
        if (nums[firstIndex] + nums[secondIndex] === target) {
          indexArray.push(firstIndex);
          indexArray.push(secondIndex);
          return indexArray;
        }
      }
    }
  }
};

const array = [3, 3];

const target = 6;

console.log(twoSum(array, target));

