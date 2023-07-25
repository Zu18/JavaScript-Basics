//arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let filteredArray = a.filter(item => !b.includes(item));
  return filteredArray;  
}


