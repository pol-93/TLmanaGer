window.mdc.autoInit();

// messages
const snackbar = mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

function execMasonry() {
	$('.content-options .panel').each(function(index, el) {
		$(this).masonry({
			itemSelector: '.option-block',
			columnWidth: '.option-block',
			percentPosition: true
		});
	});
}

$(document).ready(function() {
	// set version
	$('.aside-1 .mdc-drawer__header-content small')
		.text('v' + chrome.runtime.getManifest().version);

	new Tooltip($('#reset-options')[0], {
		placement: 'left',
		title: 'Reset options'
	});

	if (location.hash.length) {
		$('#options-menu [data-panel]').removeClass('active');
		$('[data-panel="' + location.hash.replace('#', '') + '"]').addClass('active');

		$('.panel').removeClass('active');
		$('.' + location.hash.replace('#', '')).addClass('active');

		execMasonry();
	}

	$('#options-menu [data-panel]').click(function(event) {
		$('#options-menu [data-panel]').removeClass('active');
		$(this).addClass('active');

		$('.panel').removeClass('active');
		$('.' + $(this).data('panel')).addClass('active');
		location.hash = '#' + $(this).data('panel');

		execMasonry();
	});

	// Set avatars
	var $gridAvatars = $('.grid-avatar');
	$.each(AVATARS, function(index, avatar) {
		$gridAvatars.append(`
			<div class="avatar">
				<input type="radio" id="radio-${index}" name="opt-profile-avatar" value="${avatar.img}">
				<label for="radio-${index}">
					<img src="../../${avatar.img}" title="${avatar.title}">
				</label>
			</div>
		`);
	});

	// Set changelog
	var $changelogList = $('.changelog-list');
	$.each(CHANGELOG, function(index, item) {
		$changelogList.append(`
			<li class="mdc-list-item mdc-ripple-upgraded" data-mdc-auto-init="MDCRipple">
				<svg class="mdc-list-item__graphic icon"><use xlink:href="#icon-merge"></use></svg>
				<a class="mdc-list-item__text" href="https://github.com/joelthorner/TLmanaGer/releases/tag/v${item.version}" target="_blank">
					<span class="mdc-list-item__primary-text">v${item.version}</span>
					<span class="mdc-list-item__secondary-text">${item.date}</span>
				</a>
			</li>
			<li class="sublist">
				<ul>
					<li>${item.lines.join('</li><li>')}</li>
				</ul>
			</li>
			<li class="mdc-list-divider" role="separator"></li>
		`);
	});

	execMasonry();
});