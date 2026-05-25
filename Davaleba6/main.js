// 1)

// 1
// 5
// 4
// 3
// 2

// -----------------------------------------------------------------------

// 2)

// 1
// 5
// 3
// 2
// 4

// -----------------------------------------------------------------------

// 3)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// await sleep(10000);

// -----------------------------------------------------------------------

// 4)

// const mathRandom = () => Math.floor(Math.random() * 20) + 1;

// async function guessNumber(targetNum) {
//   await sleep(1000);

//   const currentRandom = mathRandom();
//   console.log(currentRandom);

//   if (currentRandom === targetNum) {
//     return;
//   }

//   await guessNumber(targetNum);
// }

// guessNumber(10);

// -----------------------------------------------------------------------

// 5)

async function countdown(number, delay) {
  console.log(number);

  if (number === 0) {
    return;
  }

  await sleep(delay);

  await countdown(number - 1, delay);
}

countdown(50, 2000);
