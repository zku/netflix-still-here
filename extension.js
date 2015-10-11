setTimeout(function() {
	// Gets the "Continue Playing" string in the current language from the Netflix i18n object.
	var code = function() {
		var n = window.netflix.i18n['discovery/akira/CadmiumChromePC']['ce-post-break-continue'];
		document.getElementsByTagName('body')[0].setAttribute('i18n-text', n);
	};
	
	// Inject code into the page's DOM to read out the i18n object.
	var script = document.createElement('script');
	script.textContent = '(' + code + ')();';
	(document.head || document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
	
	setTimeout(function() {
		// Grab the search text.
		var n = jQuery('body').attr('i18n-text') || 'Continue Playing';
		var searchText = new RegExp(n);
		
		// Check for the annoying button periodically.
		setInterval(function() {
			chrome.storage.sync.get({enabled: true}, function(items) {
				if (items.enabled) {
					jQuery('.continue-playing').each(function() {
						if (searchText.test(jQuery(this).html())) {
							jQuery(this).click();
						}
					});
				}
			});
		}, 250);
	}, 1000);
}, 3000);
