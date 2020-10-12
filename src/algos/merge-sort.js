function mergeSort(unsortedList) {
  // If array is empty or has one element no need to sort so bail
  if (unsortedList.length <= 1) {
    return unsortedList;
  }

  // Split array on two halves.
  const middleIdx = Math.floor(unsortedList.length / 2);
  const left = unsortedList.slice(0, middleIdx);
  const right = unsortedList.slice(middleIdx, unsortedList.length);
  
  return merge(
    mergeSort(left), mergeSort(right)
  )
}

function merge(left, right) {
  let resultingArray = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      resultingArray.push(left[leftIdx]);
      leftIdx++;
    } else {
      resultingArray.push(right[rightIdx])
      rightIdx++;
    }
  }

  return resultingArray.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}

module.exports = mergeSort;
