// Appel de la librairie Jquery
$(function(){
  // Fonction pour changer la couleur du texte en vert au click
  $('#green').click(function(){
    $('#text').css('color', 'green');
    // Fonction pour changer la couleur du texte en rouge au click
    $('#red').click(function(){
      $('#text').css('color', 'red');
      // Fonction pour changer la couleur du texte en bleu au click
      $('#blue').click(function(){
        $('#text').css('color', 'blue');
      });
    });
  });
});
