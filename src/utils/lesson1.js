export function twoSum(array, target) {
  const diffs = [];
  for (const [j, value] of array.entries()) {
    const i = diffs.indexOf(value);
    if (i >= 0) {
      return [i, j];
    }

    diffs.push(target - value);
  }
}

// export function twoSum(array, target) {
//   const diffs = {};
//   for (const [j, value] of array.entries()) {
//     const i = diffs[value];
//     if (typeof i !== 'undefined') {
//       return [i, j];
//     }

//     diffs[target - value] = j;
//   }
// }
