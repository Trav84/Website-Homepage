/* jshint devel:true */
$(document).ready(function() {
	'use strict';

	var about = $('.about');
	var skills = $('.skills');
	var work = $('.work');
	var contact = $('.contact');
	var body = $('body');
	var fundamentals = $('.fund');
	var tools = $('#tools');
	var libraries = $('#libs');
	var frameworks = $('#frameworks');

	$('#about').click(function() {
		body.animate({scrollTop: about.offset().top-10});
	});

	$('#skills').click(function() {
		body.animate({scrollTop: skills.offset().top-10});
	});

	$('#work').click(function() {
		body.animate({scrollTop: work.offset().top-10});
	});

	$('#contact').click(function() {
		body.animate({scrollTop: contact.offset().top});
	});

	$(fundamentals).click(function() {
		fundamentals.toggleClass('clickedSet');
		console.log('click');
	});

});
