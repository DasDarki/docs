$(document).ready(function() {
	$(".server-only-label").attr("title", "server-only");
	$(".client-only-label").attr("title", "client-only");
	$(".client-read-only-label").attr("title", "client-read-only");

	$(".server-only-label").parent().parent().css("padding", "0").css("text-align", "center");
	$(".client-only-label").parent().parent().css("padding", "0").css("text-align", "center");
	$(".client-read-only-label").parent().parent().css("padding", "0").css("text-align", "center");
});

function DrawCard(url, image_url, header, body) {
	document.write(`
		<a class="nanos-card" href="${url}">
			<img src="${image_url}"/>
			<h4>${header}</h4>
			<p>${body}</p>
		</a>
	`);
}