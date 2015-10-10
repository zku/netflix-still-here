var intervalId = setInterval(function() {
	chrome.storage.sync.get({enabled: true}, function(items) {
		if (items.enabled) {
			jQuery('.continue-playing').each(function() {
				if (/Continue Playing/.test(jQuery(this).html())) {
					jQuery(this).click();
				}
			});
		}
	});
}, 500);