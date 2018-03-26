$(document).ready( () =>{
$('.char').click(function(){
  const id = $(this).attr('id')

$.ajax({
  method: 'GET',
  url: 'https://swapi.co/api/people/' + id,
  success: function (response){
    console.log(response)
    infoFill(response)},
    error: function (error){
      console.log('Some info got lost on the dark side :(, try installing Moesif Origin & CORS Changer');
    }
  })

function infoFill(info) {
$('.name').empty();
    $('.charInfo').empty();
    $('.name').append('<h1>'+info.name+'</h1>');
  $('.charInfo').append('<div class="form-group">' +
    '<p>Birth year : '+ info.birth_year +'</p>'+
    '<p>Eye Color : '+ info.eye_color +'</p>' +
    '<p>Gender : '+ info.gender +'</p>' +
    '<p>Hair Color : '+ info.hair_color +'</p>'+
    '<p>Height : '+ info.height +'</p>'+
    '<p>Weight: '+ info.mass +'</p>'+
    '<p>Skin Color: '+ info.skin_color +'</p>'
      );
    }
})
});
