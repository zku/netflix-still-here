$(document).ready(function() {
	$('#extension-enabled-checkbox').change(function() {
		var checked = $(this).is(':checked');
		chrome.storage.sync.set({enabled: checked});
	});
});