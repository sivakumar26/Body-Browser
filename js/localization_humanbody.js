$(document).ready(function () {
    var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll">Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>';

		  $('#myList').html(content);
});


function toTelugu() {
          var home = "హోం";
          var body = "3D మానవ శరీర";
          var stats = "గణాంకాలు";
          var contact = "మమ్మల్ని సంప్రదించండి";
          var skeleton = "అస్థిపంజరం";
          var body = "శరీర";
          var hand = "చేతి";
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);
            $('#hand').html(hand);
      $('#skeleton').html(skeleton);
      $('#body').html(body);
      $('#homehref').html('మానవ అనాటమీ');
}

function toEnglish() {
  var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
      '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

      $('#myList').html(content);
      $('#hand').html('hand');
      $('#skeleton').html('skeleton');
      $('#body').html('body');
      $('#homehref').html('Human Anatomy');
}

function toSpanish() {
  var home = "casa";
          var body = "3D humano cuerpo";
          var stats = "Estadística";
          var contact = "Contáctenos";
          var skeleton = "esqueleto";
          var body = "cuerpo";
          var hand = "mano";
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);           
            $('#hand').html(hand);
      $('#skeleton').html(skeleton);
      $('#body').html(body);
      $('#homehref').html('Anatomía Humana');
}

$('#spanish').click(function() {
  toSpanish();
});

$('#telugu').click(function() {
  toTelugu();
});

$('#english').click(function() {
  toEnglish();
});


$('#mySelect').change(function() {
	var content = "";
	$('#myList').html(content);
	$('#hand').html(content);
	$('#skeleton').html(content);
	$('#body').html(content);
    if ($(this).val() === '3') {		    	    
        	var home = "హోం";
        	var body = "3D మానవ శరీర";
        	var stats = "గణాంకాలు";
        	var contact = "మమ్మల్ని సంప్రదించండి";
        	var skeleton = "అస్థిపంజరం";
        	var body = "శరీర";
        	var hand = "చేతి";
        	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
          	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
          	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
          	$('#myList').html(content);
          	$('#hand').html(hand);
			$('#skeleton').html(skeleton);
			$('#body').html(body);
			$('#homehref').html('మానవ అనాటమీ');
    }
    else if ($(this).val() === '2') {		    	    
        	var home = "casa";
        	var body = "3D humano cuerpo";
        	var stats = "Estadística";
        	var contact = "Contáctenos";
        	var skeleton = "esqueleto";
        	var body = "cuerpo";
        	var hand = "mano";
        	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
          	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
          	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
          	$('#myList').html(content);          	
          	$('#hand').html(hand);
			$('#skeleton').html(skeleton);
			$('#body').html(body);
			$('#homehref').html('Anatomía Humana');
    }
    else {
    	var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

		  $('#myList').html(content);
		  $('#hand').html('hand');
		  $('#skeleton').html('skeleton');
		  $('#body').html('body');
		  $('#homehref').html('Human Anatomy');
    }
});