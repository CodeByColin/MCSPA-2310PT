

function getAllWords(str) {
    // your code here
    /* START SOLUTION */
  if (str === '') {
    return []
  }
    return str.split(' ')
  
}
    /* END SOLUTION */
  


  var output = getAllWords();
console.log(output); // --> ['Radagast', 'the', 'Brown']