var $a = $('div');

$a.blast({
      delimiter: "letter"
   })
   .velocity("transition.fadeIn", {
      display: null,
      stagger: 200,
      delay: 150,
      duration: 1000,
      complete: function() {
         $a.blast(false),
            $a.css({
               'color': '#8379c6'
            }, 800);
      }
   });