function sumZero(arr: number[]): number[] | undefined {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])) // array is sorted
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))