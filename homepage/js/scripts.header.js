$(function(){
	// Megamenu push-down
    // On li.main hover:
    // 1. Give it 200 milliseconds before doing anything
    // 2. Check if another megamenu is already visible (the user is quickly going from link to link). If so, show the content of the new megamenu without any slide animation and hide the previous one. If no megamenu is currently visible and the hovered li.main has a megamenu, slide it down

    var $siteheader = $('#siteheader');
    var $megamenu = $siteheader.find('.avery-mainmenu li .megamenu');
    var $pagecontent = $('#pagecontent');
    var $megafullbg = $('.megamenu-bg-fullwidth')

    // initiate timeout variables
    hoverTimeout = "";
    leaveTimeout = "";
    $siteheader.find('.avery-mainmenu li.main').mouseenter(function() {
        var $thisMegamenu = $(this).find('.megamenu')
        // stop any leaveTimeouts if they were triggered through guick back-and-forth hovering
        clearTimeout(leaveTimeout);
        // 1.
        hoverTimeout = setTimeout(function() {
          // 2. Another megamenu already open?
          if( $megamenu.is(':visible') ) {
            // if new hovered li has megamenu, hide old menu and show the new, otherwise slide everything back up
            if( $thisMegamenu.length ) {
              // stop any other hoverTimeouts triggered through guick back-and-forth hovering
              clearTimeout(hoverTimeout); 
              $megamenu.filter(':visible').stop(true, true).hide();
              $thisMegamenu.stop(true, true).show();
              $megafullbg.css(true, true).show();
            } else {
            	$megafullbg.stop(true, true).slideUp(500);
              $megamenu.filter(':visible').stop(true, true).slideUp(500);
              $pagecontent.stop(true, true).animate({ paddingTop: '0'}, 500);
            }
          } else {
            if( $thisMegamenu.length ) {
              // stop any other hoverTimeouts triggered through guick back-and-forth hovering
              clearTimeout(hoverTimeout);
              $thisMegamenu.stop(true, true).slideDown(500);
              $megafullbg.stop(true, true).slideDown(500);
              /* 16.5em is the set height of the megamenu + negative margin of .avery-mainmenu ul */
              $pagecontent.stop(true, true).animate({ paddingTop: '210px'}, 500);
            }
          }
        }, 200);
    });
    // Leaving li item (if another li is hovered over quickly after, this is cleared)
    $siteheader.find('.avery-mainmenu li.main').mouseleave(function() {
      clearTimeout(hoverTimeout);
      leaveTimeout = setTimeout(function() {
        if( $megamenu.is(':visible') ) {
        	$megafullbg.stop(true, true).slideUp(500);
          $megamenu.filter(':visible').stop(true, true).slideUp(500);
          $pagecontent.stop(true, true).animate({ paddingTop: '0'}, 500);
        }
      }, 200);
    });

		// js to wrap megamenu every set of 5 li's in div columns
		var $link = $(".dd-products li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		};

		var $link = $(".dd-templates li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		};

		var $link = $(".dd-weprint li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		};

		var $link = $(".dd-ideas li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		};

		var $link = $(".dd-help li");
		for (var i = 0; i < $link.length; i += 5) {
		  var $div = $('<div/>', {"class": 'col-xs-3'});
		  $link.slice(i, i + 5).wrapAll($div);
		};

    $('.avery-mainmenu li').hover(function(e) {    
      $(this).toggleClass('active');
    });
});