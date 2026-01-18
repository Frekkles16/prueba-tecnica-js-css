export default (word1, word2) => {    
    return formatWordToCompare(word1) === formatWordToCompare(word2);
  };

  function formatWordToCompare(word){
    //El primer regex de los replace es para eliminar signos diacríticos y el segundo eliminar todo lo que no sean letras minusculas 
    return word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "").split("").sort().join("");
  }