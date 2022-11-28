function phoneticLookup(val) {
  let result = "";

  var teams = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot":"Frank"
  }
  result = teams[val];
  return result;
}

phoneticLookup("charlie"); // should return "Chicago"
