const should = require("chai").should();

const mergeSort = require("../src/algos/merge-sort");

describe("Auth Controller Test", function () {
  it("Should sort the numbers 1 - 5", function () {
    const unsortedArray = [3, 1, 4, 2, 6, 5]
    mergeSort(unsortedArray).should.eql([1, 2, 3, 4, 5, 6])
  });
});
