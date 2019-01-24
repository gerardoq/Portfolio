
$(document).ready(function() {

	$('.textOverlay').click(function() {

		var id = $(this).attr('id');

		switch(id){

			case 'zelda':
				$('#projectDescription').html("<a href='https://gerardoq.github.io/zelda/' class='linkHeader' target='_blank'>Legend of Zelda Minigame</a><div class='shortDescription'>A simple minigame inspired by the popular <i>Legend of Zelda</i> series. The game is played using the Spacebar and Arrow Keys. It was created using Object-Oriented Programming with the Javascript Canvas. </div>");
				break;

			case 'restaurant':
				$('#projectDescription').html("<a href='https://gerardoq.github.io/restaurant/' class='linkHeader' target='_blank'>Restaurant Website</a><div class='shortDescription'>A responsive website created for a fictional restaurant. The site was mocked up in Photoshop, and then created through HTML and CSS. </div>");
				break;

			case 'travelAgency':
				$('#projectDescription').html("<a href='https://gerardoq.github.io/travelAgency/' class='linkHeader' target='_blank'>Travel Agency Website</a><div class='shortDescription'>A responsive website created for a fictional travel agency. The site was mocked up in Photoshop, and then created through HTML and CSS. </div>");
				break;

		}

		$('#projectDisplay').css({"background-image": "url('"+id+".png')"});


	}); 

});