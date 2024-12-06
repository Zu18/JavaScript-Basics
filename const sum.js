function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

//The console would display the strings You have passed 3 arguments.
//and You have passed 4 arguments..

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
