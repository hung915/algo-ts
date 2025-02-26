function validAnagram(first: string, second: string): boolean {
  if (first.length !== second.length) return false;
  const lookup: { [key: string]: number } = {};
  for (let letter of first) {
    lookup[letter] = (lookup[letter] || 1) + 1;
  }
  for (let letter of second) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('team', 'meat'));
