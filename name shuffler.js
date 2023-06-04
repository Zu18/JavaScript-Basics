//"john McClane" --> "McClane john"
function nameShuffler(str){
  var array = str.split(" ");
  var array_new = array.reverse();
  return array_new.join(" ");
}
