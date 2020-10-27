$(document).ready(function(){
  $('#form').submit(function(event) {
    event.preventDefault();

    const userInput = $('#sentence').val();
    const array = userInput.split();
    
    array.forEach(function(element) {
      let newArray = [];
      newArray.push(element);
    });
  });
});