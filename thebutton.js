var cssify = function() {

	// Code courtsy of /u/metaname
	// https://www.reddit.com/r/thebutton/comments/320p3v/color_changing_header/cq6qcfk

	var code = " \n\
	$('.thebutton-form').css('background-image', 'radial-gradient(50% 125%,rgba(0, 0, 0, 0) 25%,rgba(255, 255, 255, 0.2) 100%)'); \n\
	$('.thebutton-wrap h1, .thebutton-counter span').css('color', 'white'); \n\
	colorTimer = window.setInterval(function(){ \n\
		var s = r.thebutton._msgSecondsLeft; \n\
		var ring = $('.thebutton-container, .thebutton-form, .thebutton-wrap') \n\
		ring.css('-webkit-transition', 'background-color 0.4s') \n\
		    .css('-moz-transition', 'background-color 0.4s') \n\
		    .css('-ms-transition', 'background-color 0.4s') \n\
		    .css('-o-transition', 'background-color 0.4s') \n\
		    .css('transition', 'background-color 0.4s'); \n\
		if (s < 12) { ring.css('background-color', '#e50000') } else \n\
		if (s < 22) { ring.css('background-color', '#e59500') } else \n\
		if (s < 32) { ring.css('background-color', '#e5d900') } else \n\
		if (s < 42) { ring.css('background-color', '#02be01') } else \n\
		if (s < 52) { ring.css('background-color', '#0083c7') } else \n\
		{ ring.css('background-color', '#820080') } \n\
	}, 10);"

	var script_element = document.createElement("script");
	script_element.innerHTML = code;
	document.head.appendChild(script_element);
};

window.addEventListener('load', function() {
    setTimeout(function() {
        cssify();
    }, 2000);
}, false);
