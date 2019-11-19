/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// Constraints:
// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.

var relativeSortArray = function(arr1, arr2) {
    let result = [];
    let counter = Array.from({length:1001}).fill(0);
    for (let num of arr1){
        counter[num]++;
    }
    for (let num of arr2){
        while(counter[num]){
            result.push(num);
            counter[num]--;
        }
    }
    for (let idx in counter){
        while(counter[idx]){
            result.push(+idx);
            counter[idx]--;
        }
    }
    return result;
};