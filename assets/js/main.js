(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$main = $('#main'),
		$panels = $main.children('.panel'),
		$nav = $('#nav'), $nav_links = $nav.children('a');

		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$nav_links
			.on('click', function(event) {

				var href = $(this).attr('href');

					if (href.charAt(0) != '#'
					||	$panels.filter(href).length == 0)
						return;

					event.preventDefault();
					event.stopPropagation();

					if (window.location.hash != href)
						window.location.hash = href;

			});


			$('form input').on('keypress', function(e) {
				if (e.which == 13) { 
					   e.preventDefault();
				   }
		
		


			(function() {

				var $panel, $link;

					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

					}

					if (!$panel
					||	$panel.length == 0) {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

					$panels.not($panel)
						.addClass('inactive')
						.hide();

					$link
						.addClass('active');

					$window.scrollTop(0);

			})();

			$window.on('hashchange', function(event) {

				var $panel, $link;

					if (window.location.hash) {

				 		$panel = $panels.filter(window.location.hash);
						$link = $nav_links.filter('[href="' + window.location.hash + '"]');

							if ($panel.length == 0)
								return;

					}

					else {

						$panel = $panels.first();
						$link = $nav_links.first();

					}

					$panels.addClass('inactive');

					$nav_links.removeClass('active');

					$link.addClass('active');

					$main
						.css('max-height', $main.height() + 'px')
						.css('min-height', $main.height() + 'px');

					setTimeout(function() {

							$panels.hide();

							$panel.show();

							$main
								.css('max-height', $panel.outerHeight() + 'px')
								.css('min-height', $panel.outerHeight() + 'px');

							$window.scrollTop(0);

							window.setTimeout(function() {

									$panel.removeClass('inactive');

									$main
										.css('max-height', '')
										.css('min-height', '');

									$window.triggerHandler('--refresh');

									locked = false;

							}, (breakpoints.active('small') ? 0 : 500));

					}, 250);

					

			});
			
	$(document).ready(function() {
		$('.row img').on('click', function() {
			var src = $(this).attr('src');
        	var fileName = src.split('/').pop().split('.').shift();
        	var fullTitle = fileName + ' dungeon';

        	var $form = $('#Dungeon.panel form');

        	$('#Dungeon.panel h3.generated').remove();

        	if ($('#Dungeon.panel h3:contains("' + fullTitle + '")').length === 0) {

           		 $('<h3 class="generated">' + fullTitle + '</h3>').insertBefore($form);
        }

		
    });
});
})(jQuery);