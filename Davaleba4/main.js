// 1)

const arr = ["one", "two", "three"];

function deleteLastLetter(arr) {
  const result = arr.map((r) => r.slice(0, -1));

  return result;
}

// console.log(deleteLastLetter(arr));

// -----------------------------------------------------------------------

// 2)

const nums = [19, 5, 42, 2, 77];

const twoSmallesEelementSum = nums
  .sort((a, b) => a - b)
  .slice(0, 2)
  .reduce((prev, curr) => prev + curr, 0);

// console.log(twoSmallesEelementSum);

// -----------------------------------------------------------------------

// 3)

const nums2 = [10, 12, 4, 2];
let sum = 0;

nums2.forEach((n) => {
  sum = sum + n;
});

// console.log(sum);

// -----------------------------------------------------------------------

// 4)

const arr2 = ["cat", "parrot", "dog", "elephant"];

const result = arr2.filter((f) => f.length > 5).join("#");

// console.log(result);

// -----------------------------------------------------------------------

// 5)

const arr3 = [
  { name: "Ann", cls: "A", grade: 90 },
  { name: "Ben", cls: "B", grade: 75 },
  { name: "Cara", cls: "A", grade: 80 },
];

const result2 = arr3.reduce((prev, { cls, grade }) => {
  if (!prev[cls]) {
    prev[cls] = { sum: 0, count: 0 };
  }

  prev[cls].count++;
  prev[cls].sum += grade;

  return prev;
}, {});

// console.log(result2);

const result3 = {};
for (const cls in result2) {
  result3[cls] = result2[cls].sum / result2[cls].count;
}

console.log(result3);
