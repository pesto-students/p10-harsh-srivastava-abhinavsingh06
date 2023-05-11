// Implement a function named getNumber which generates a random number.If random Number is divisible by 5 it will reject the promise else it will resolve the promise.Let’s also keep the promise resolution / rejection time as a variable.
// 1.JS promises should not be used.
// 2.A custom promise function should be created.
// 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
// 4.Should be able to accept callbacks as props.

function getNumber(resolveCallback, rejectCallback, fulfillCallback) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let resolved = false;
  let rejected = false;

  const resolve = (value) => {
    if (!resolved && !rejected) {
      resolved = true;
      resolveCallback(value);
    }
  };

  const reject = (reason) => {
    if (!resolved && !rejected) {
      rejected = true;
      rejectCallback(reason);
    }
  };

  if (randomNumber % 5 === 0) {
    setTimeout(() => {
      reject(`Number ${randomNumber} is divisible by 5`);
      setTimeout(() => {
        fulfillCallback("Promise fulfilled");
      }, 5000);
    }, 0);
  } else {
    setTimeout(() => {
      resolve(`Number ${randomNumber} is not divisible by 5`);
      setTimeout(() => {
        fulfillCallback("Primise fulfilled");
      }, 5000);
    }, 0);
  }
}

getNumber(
  (value) => console.log(value),
  (reason) => console.log(reason),
  (fulfilledValue) => console.log(fulfilledValue)
);
