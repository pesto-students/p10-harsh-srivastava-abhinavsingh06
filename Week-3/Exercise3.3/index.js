function createIncrement() {
  let count = 0;

  function increment() {
    count++;
  }

  let message = `Count is${count}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();// What is logged? output => 0

// The increment call is working fine and increasing the count value as it should.
// However, message variable is assigned the value of count which is 0 in the environment created by createIncrement().
// This can be fixed by using the message in increment() function.
