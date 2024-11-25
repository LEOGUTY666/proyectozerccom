document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtiene el valor ingresado en el campo de búsqueda
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
  
    // Realiza la lógica de búsqueda aquí
    // Puedes utilizar el valor de searchTerm para buscar y mostrar/ocultar elementos según tus necesidades
  
    // Ejemplo: Filtrar elementos con la clase "card" según el texto de búsqueda
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var cardText = card.textContent.toLowerCase();
      if (cardText.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Resto de la lógica de búsqueda aquí
  
    return false; // Evita el envío del formulario y la recarga de la página
  });
  