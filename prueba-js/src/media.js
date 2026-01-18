export default (json) => {
    if(json.length <= 0) return 0;
    return getAverageAge(json.map(user => user.edad));
  };
  
function getAverageAge(ages){
  return sumAges(ages) / ages.length;
}

function sumAges(ages){
  var totalAges = 0;

  for (const age of ages) {
    totalAges += age;
  }

  return totalAges;
}