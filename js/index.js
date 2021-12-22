var personas = document.querySelector("#personas");

if (personas) {
  function inicio() {
    separarNombres(personas.value);
  }
  function separarNombres(personas) {
    personas = personas.split(", ");
    var totalPersonas = personas.length;
    var personasConPareja = [];
    var parejas = [];

    for (persona of personas) {
      var numero = numeroAleatorio(totalPersonas.length);
      console.log(persona)
      
      if (
        persona != personas[numero] &&
        !personasConPareja.includes(personas[numero])
      ) {
        parejas.push(`${persona} regala a ${personas[numero]}`);
        personasConPareja.push(persona)
      }
      else{console.log("object")}
    }
  }

  function numeroAleatorio(num) {
    return Math.floor(Math.random() * num);
  }
} else {
  alert("Por favor reinicia el navegador");
}
