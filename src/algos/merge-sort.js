const { merge } = require("lodash");

function mergeSort(list) {
  // If array is empty or consists of one element then return this array since it is sorted.
  if (list.length <= 1) {
    return list;
  }

  // Split array on two halves.
  const middleIdx = Math.floor(list.length / 2);
  const leftArray = list.slice(0, middleIdx);
  const rightArray = list.slice(middleIdx, list.length);

  // Sort two halves of split array
  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);
}

module.exports = mergeSort;
