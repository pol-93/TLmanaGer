chrome.storage.sync.get(['optDevForceview'], function(result) {

	if (typeof result.optDevForceview == 'undefined') result.optDevForceview = true;

	if (result.optDevForceview) {
		var rgx = /https?:\/\/(www)?\.?[0-9]{2,5}(\.logicommerce(\.net|\.cn|\.hk)|\.igd\.(pre\.)?production)\/?/;

		if (location.href.match(rgx)) {
			if (!document.cookie.toUpperCase().includes('FORCEVIEW=1')) {
				if (!location.href.toUpperCase().includes('FORCEVIEW')) {
					var param = location.href.includes('?') ? '&' : '?';
					window.location = window.location.href + param + 'forceview=1';
				}
			}
		}
	}

});
 
/*
	// Tests

	const regex = /https?:\/\/(www)?\.?[0-9]{2,5}(\.logicommerce(\.net|\.cn|\.hk)|\.igd\.(pre\.)?production)\/?/g;
	const str = `http://995.logicommerce.net
	http://995.logicommerce.net/asdasd
	https://995.logicommerce.net
	http://56.logicommerce.net
	http://9955.logicommerce.net

	http://995.logicommerce.cn
	http://995.logicommerce.hk?a=asd
	http://995.igd.production/a
	http://995.igd.pre.production/a`;
	let m;

	while ((m = regex.exec(str)) !== null) {
	    // This is necessary to avoid infinite loops with zero-width matches
	    if (m.index === regex.lastIndex) {
	        regex.lastIndex++;
	    }
	    
	    // The result can be accessed through the `m`-variable.
	    m.forEach((match, groupIndex) => {
	        console.log(`Found match, group ${groupIndex}: ${match}`);
	    });
	}

*/