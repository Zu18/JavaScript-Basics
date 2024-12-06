let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

/*
The obj.review and obj.newProp assignments will result in errors,
because our editor runs in strict mode by default,
and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.
*/
