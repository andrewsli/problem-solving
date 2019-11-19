/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > result) result = area;

    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else height[left + 1] < height[right - 1] ? right-- : left++;
  }
  return result;
};