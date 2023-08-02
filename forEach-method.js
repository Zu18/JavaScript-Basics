function getAverage(marks){
  let sum = 0
  marks.forEach(item => {
    sum += item;
 })
  return Math.floor(sum/marks.length)
}

//[1,2,3,4,5,] =>3
