var a = 2;

var head = '<meta charset="utf-8">'
var body = '<nav class="navbar navbar-inverse navbar-fixed-top">\
	<div class="container">\
		<div class="navbar-header">\
			<a class="navbar-brand" href="#">Lecture by @srakrn</a>\
		</div>\
	</div>\
</nav>\
<div class="container">\
	<div id="md_lecture">\
	</div>\
</div>';

$(document).ready(function(){
	// $("head").append(head);
	$("body").append(body);

	MathJax.Hub.Config({
		tex2jax: {inlineMath: [['$','$']]}
	});

	var converter = new showdown.Converter(),
		md = $("#raw_lecture").text().replace(/_/g,"\\_"),
		converted_md = converter.makeHtml(md);
	$("#md_lecture").html(converted_md);
});
