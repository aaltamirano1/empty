'use strict';

function getLyrics(artist, title) {
  
}

function displayResults(responseJson) {

}

function watchForm() {
	$('form').on('submit', function(e){
		e.preventDefault();
		$('#results').empty();

		let artist = $('js-query-artist').val();
		let title = $('js-query-title').val();

		getLyrics(artist, title);
	});

}

$(watchForm);

