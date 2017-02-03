
//Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Deleting to-dos by clicking on delete icon
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Create to-dos on Enter inside Input
$("input[type='text']").keypress(function(e){
  if (e.which == 13){
    var text = $(this).val();
    $('ul').append('<li><span><i class="fa fa-trash-o"></i></span> ' + text + "</li>");
    $(this).val('');
  }
})

//Toggle Input Form when plus sign clicked
$("h1 i").click(function(){
  $("input[type='text']").fadeToggle(500);
})
