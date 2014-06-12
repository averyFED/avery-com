$(window).bind("load", function() {

		// js for megamenu
		$(".avery-mainmenu li").on("click", function(e) {

		  // find megamenu with same class as current li
		  // toggle "open" class on megamenu with same class
		  var navClass = $(this).attr("class");
		  $('.megamenu.' + navClass).toggleClass('open').siblings().removeClass('open');

		  // change height on place holder div to push content down
		  if ($('.megamenu').hasClass('open')) {
		  	$(".nav-plchldr").css('height', '300');
		  } else {
		  	$(".nav-plchldr").css('height', '90');
		  }
		  
		  // toggle tab class on li
		  $(this).children().toggleClass('active');
		  $(this).siblings().children().removeClass('active');

		});

		// toggle dropdown if body is clicked
		$(".bodywrap").click(function() {
			$('.megamenu').removeClass('open');
			$('.avery-mainmenu li a').removeClass('active')
			$(".nav-plchldr").css('height', '90');
		});

		// js to wrap megamenu li's
		var $link = $(".dd-products li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		}

		var $link = $(".dd-templates li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		}

		var $link = $(".dd-ideas li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		}

		var $link = $(".dd-help li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		}

	});
	
	