//agiungi che quando farai hover sul todo da fare strike out aggiungi
// un animation dove ingrendisce il todo e continua a mettere e togliere lo strike
// out e si fa verde


//Check off specific todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//Click on X to delete todos, you pass the "e" to stop the event bubbling
//otherwise you're clicking also the li and the function on top starts
$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$('input[type = text]').keypress(function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
    }
});

$('.fa-plus').click(function(){
    $('input[type = text]').fadeToggle(100);
});
