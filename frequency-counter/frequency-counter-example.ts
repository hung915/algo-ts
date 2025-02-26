type FrequencyCounterType = { [key: number]: number };

function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length != arr2.length) return false;
  let frequencyCounter1: FrequencyCounterType = {};
  let frequencyCounter2: FrequencyCounterType = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);
  for (let key in frequencyCounter1) {
    let keyNum = parseInt(key);
    if (!(keyNum ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[keyNum ** 2] !== frequencyCounter1[keyNum])
      return false;
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
