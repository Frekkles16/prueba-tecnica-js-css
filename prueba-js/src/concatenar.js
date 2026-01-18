export default (json) => {
    return json.map(user =>
      getformatedNames([user.nombre, user.apellido, user.apellido2])
    ).join('<br>');
  };

 function getformatedNames(names){
    return names.map(name =>
      name ? name.toLowerCase().split(" ").map(word => capitalizeFirstWordLetter(word)).join(" ") : ""
    ).join(" ");
 }

 function capitalizeFirstWordLetter(name){
    return name[0].toUpperCase() + name.slice(1);
 }
