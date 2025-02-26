import { FrequencyCounterType } from './frequency-counter-example';

function sameFrequency(num1: number, num2: number): boolean {
  const arr1 = Array.from(String(num1), Number);
  const arr2 = Array.from(String(num2), Number);
  let frequencyCounter1: FrequencyCounterType = {};
  let frequencyCounter2: FrequencyCounterType = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
