function removeElement() {
  // Get the element to remove
  var element = document.getElementById('elementToRemove');
  // Remove the element
  element.parentNode.removeChild(element);
  
}

function changeText() {
  // Get the element to change
  var element = document.getElementById('elementToChange');
  // Change the text of the element
  element.textContent = "Texto alterado com sucesso😎!";
}
