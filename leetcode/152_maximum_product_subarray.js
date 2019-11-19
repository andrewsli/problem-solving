/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];
  let arrsSplitByZero = splitArrsByZero(nums);
  let globalMaxProduct = Number.MIN_SAFE_INTEGER;
  for (let arr of arrsSplitByZero){
    let arrMaxProduct = maxProductWithoutZero(arr);
    if (arrMaxProduct > globalMaxProduct) globalMaxProduct = arrMaxProduct;
  }
  return globalMaxProduct;
};

// given an array of numbers, returns array of arrays
// split by 0s
// [-2, 0, -1] => [[-2],[-1]]
function splitArrsByZero(nums) {
  let splitArrsByZero = [];
  let arrNoZero = [];
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === 0 && arrNoZero.length) {
      splitArrsByZero.push(arrNoZero);
      arrNoZero = [];
    } else if (nums[idx] !== 0) {
      arrNoZero.push(nums[idx]);
    }
  }
  if (arrNoZero.length) splitArrsByZero.push(arrNoZero);

  return splitArrsByZero;
}

//given an array of nums with no zeroes, return the max product
function maxProductWithoutZero(nums) {
  if (nums.length === 1) return Math.max(nums[0],0);
  let negIdx = []
  let globalMax = Number.MIN_SAFE_INTEGER;
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] < 0) {
      negIdx.push(idx);
    }
  }

  // if there is an even number of negatives, just return
  // the product of the entire array
  if (negIdx.length % 2 === 0) {
    return nums.reduce((a, b) => a * b, 1)
  }

  // if there is an odd number of negatives, find the max of 
  // all subarrays to the left or right of every negative number
  for (let idx of negIdx) {
    let leftProduct = 1;
    let rightProduct = 1;
    for (let leftIdx = 0; leftIdx < idx; leftIdx++) {
      leftProduct *= nums[leftIdx];
    }
    for (let rightIdx = idx + 1; rightIdx < nums.length; rightIdx++) {
      rightProduct *= nums[rightIdx];
    }
    if (leftProduct > globalMax) globalMax = leftProduct;
    if (rightProduct > globalMax) globalMax = rightProduct;
  }

  return globalMax;
}