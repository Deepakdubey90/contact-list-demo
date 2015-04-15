/**
 *
 * Material Sidebar (Profile menu)
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this sidebar in Bootstrap (v3) projects. HTML-markup like Navbar bootstrap component will make your work easier.
 * Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js
 */

// Sidebar toggle
//
// -------------------
$(document).ready(function() {
  var overlay = $('.sidebar-overlay');

  $('.sidebar-toggle').on('click', function() {
    var sidebar = $('#sidebar');
    sidebar.toggleClass('open');
    if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
      overlay.addClass('active');
    } else {
      overlay.removeClass('active');
    }
  });

  overlay.on('click', function() {
    $(this).removeClass('active');
    $('#sidebar').removeClass('open');
  });

});

// Sidebar constructor
//
// -------------------
$(document).ready(function() {

  var sidebar = $('#sidebar');
  var sidebarHeader = $('#sidebar .sidebar-header');
  var sidebarImg = sidebarHeader.css('background-image');
  var toggleButtons = $('.sidebar-toggle');
});

/**
 * Created by Kupletsky Sergey on 08.09.14.
 *
 * Add JQuery animation to bootstrap dropdown elements.
 */

(function($) {
  var dropdown = $('.dropdown');

  // Add slidedown animation to dropdown
  dropdown.on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideup animation to dropdown
  dropdown.on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
})(jQuery);



(function(removeClass) {

  jQuery.fn.removeClass = function( value ) {
    if ( value && typeof value.test === "function" ) {
      for ( var i = 0, l = this.length; i < l; i++ ) {
	var elem = this[i];
	if ( elem.nodeType === 1 && elem.className ) {
	  var classNames = elem.className.split( /\s+/ );

	  for ( var n = classNames.length; n--; ) {
	    if ( value.test(classNames[n]) ) {
	      classNames.splice(n, 1);
	    }
	  }
	  elem.className = jQuery.trim( classNames.join(" ") );
	}
      }
    } else {
      removeClass.call(this, value);
    }
    return this;
  };

})(jQuery.fn.removeClass);