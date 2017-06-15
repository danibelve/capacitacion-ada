//id=select-option name=opciones
var opciones = ['opcion 1', 'opcion 2', 'opcion 3'];

$(document).ready(function(){
	var select = $('#select-option');

	for(i=0; i<opciones.length;i++){
		var value= i+1;
		var option = '<option value="'+value+'">'+ opciones[i]+'</option>';
		select.append(option);
	}

	$('.verMas').on('click',function(){
			var vid= $(this).data('id');
			var id='#' + vid;
			//necesito preguntar si esta en none o block
			console.log($(id).css('display'));
			if($(id).css('display') === "none"){
				//oculto todos antes
				$('.extra').hide();
				//piso el ocultar todo con la especificidad
				$(id).css('display','block');
				console.log($(id).css('display'));
			
			}else{
				if($(id).css('display') === "block"){
					$(id).css('display','none');
					console.log($(id).css('display'));
				}

			}
			

	})//fin verMas

	$('.img_peque').on('click', function(){

		//event.preventDefault();

		id=$(this).data('img');
		url= 'img/'+id;
		console.log(url);
		$('#img_grande').attr('src', url);
	});//fin modal

	$('.menu').on('click',function(event){
		event.preventDefault();
		dir=$(this).attr('href');
		console.log(dir);
		$('html, body').animate({
			scrollTop:$(dir).offset().top
		},500);
			
			//	$(dir).slideDown("slow");
		
	});// fin menu
});//fin document ready