let offScreen = '-245px';

$('#burger').click(function(){
   if(offScreen === '-245px') {
        $('aside').animate({left: '0'})
        offScreen = '0';
   } else {
       $('aside').animate({left: '-245px'})
       offScreen = '-245px';
   }
})