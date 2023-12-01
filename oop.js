function increment() {
  this.count++;
  return this.count;
}

function decrement() {
  this.count--;
  return this.count;
}

function makeCounter(initial) {
  return {
    count: initial,
    increment,
    decrement,
  };
}

var counterOne = makeCounter(0);
var counterTwo = makeCounter(1000);

counterOne.increment();
counterTwo.decrement();

console.log(counterOne.count, "one\n", counterTwo.count, "two \n");
