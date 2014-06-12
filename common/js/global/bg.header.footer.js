$(document).ready(function() {

	// creates random background image for div, on page load
	// add ending image string to array (i.e. '_tile_01.png, etc.')
	var bgImgHead = ['_tile_01.png', '_tile_02.png'];
	$('#averyHeader .myavery-login').css({'background-image': 'url(http://preview.avery.com/vgnfiles/images/common/header' + bgImgHead[Math.floor(Math.random() * bgImgHead.length)] + ')'});

	var hdrRow = $('#averyHeader .myavery-login');
	var ftrRow = $('.footer-copyright');
	var matchBg = $(hdrRow).css('background-image').replace(/header/gi, "footer");

	// match footer accent bg image to header bg img w/changed value of header - to - footer
	$(ftrRow).css('background-image', matchBg);

});	