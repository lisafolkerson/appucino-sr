

$(function() {
		console.log( 'we\'ll b ok' );


		// When you click the thumbnail...
		$( '.thmb' ).on( 'click', function() {

			
			// =========== Create Vars ================

			// Create variable to switch out the image
			var thumbIndex = $(this).data('imagethumb');

			// Create variable to switch out the title of the image
			var titleText = $(this).data('titletext');

			// Create variable to switch out the subtitle of the image
			var subtitleText = $(this).data('subtitletext');

			// Create variable to switch out the instructions of the image
			var instructions = $(this).data('instructions');

			// Create variable to switch out the svg
			var svg = $(this).data('svgpath');

			
			// =========== Hide stuff ================

			// Hide the page title and intro
			$( 'header' ).addClass( 'hide' );
			
			// Set the artboard to be vsible
			$( '.artboard' ).removeClass( 'hide' );

			// Set the title to be vsible
			$( '.featured-text' ).removeClass( 'hide' );

			
			// =========== Add classes ================

			// Add swan classes
			if ($(this).hasClass( 'thmb-swan' )) {
				$( 'svg path' ).attr('class', 'path-swan' );
			}

			// Add rosetta classes
			if ($(this).hasClass( 'thmb-rosetta' )) {
				$( 'svg path' ).attr('class', 'path-rosetta' );
			}

			// Add heart classes
			if ($(this).hasClass( 'thmb-heart' )) {
				$( 'svg path' ).attr('class', 'path-heart' );
			}

			// Add tulip classes
			if ($(this).hasClass( 'thmb-tulip' )) {
				$( 'svg path' ).attr('class', 'path-tulip' );
			}
			
			// =========== Switch out stuff ================

			// Switch out the image
			$( '.featured-img img' ).attr( 'src', thumbIndex );

			// switch out the title
			$( '.featured-text h2' ).text(titleText);

			// switch out the title
			$( '.featured-text h3' ).text(subtitleText);

			// switch out the instructions
			$( '.featured-text p' ).text(instructions);

			//switch in the svg
			$( 'svg path' ).attr('d', svg);

		}); // end on .thmb click


		// close feature gallery by clicking outside it
		$( '.wrapper' ).on( 'click', function() {
			// $( 'header' ).removeClass( 'hide' );
			if ($( 'div' ).hasClass( 'thmb' )) {
				console.log('stay the same');
			} else {
				$( 'header' ).removeClass( 'hide' );
			};
		});


		// =========== Fit Text :) ================
		$("header h1").fitText(0.5);

		// ========================= 
		// NONE OF THIS SHIT WORKS ⬇︎
		// 💩💩💩💩💩💩💩💩💩💩💩💩💩💩
		// =========================

		// $( '.artboard' ).on('mouseleave',function() {
		// 	console.log('hi hi oo');

		// 	if ($( 'svg path' ).hasClass( 'path-swan' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-swan paused' );
		// } 
		// 	else if ($( 'svg path' ).hasClass( 'path-rosetta' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-rosetta paused' );
		// } 
		// 	else if ($( 'svg path' ).hasClass( 'path-tulip' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-tulip paused' );
		// } 
		// 	else {
		// 	$( 'svg path' ).attr( 'class', 'path-heart paused' );
		// 	}
		// });

		// $( '.artboard' ).on('mouseenter',function() {
		// 	console.log('auf wiedersehen');

		// 	if ($( 'svg path' ).hasClass( 'path-swan' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-swan resume' );
		// } 
		// 	else if ($( 'svg path' ).hasClass( 'path-rosetta' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-rosetta resume' );
		// } 
		// 	else if ($( 'svg path' ).hasClass( 'path-tulip' )) {
		// 	$( 'svg path' ).attr( 'class', 'path-tulip resume' );
		// } 
		// 	else {
		// 	$( 'svg path' ).attr( 'class', 'path-heart resume' );
		// 	}
		// });


}); //End jQuery
