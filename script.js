$(document).ready(function () {
	function updateOutput() {
		$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
		document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

	}

	$(".toggleButton").hover(function () {
		$(this).css("cursor", "pointer");
		$(this).addClass("highlighted");
	}, function () {
		$(this).removeClass("highlighted");
	});

	$(".toggleButton").click(function () {

		$(this).toggleClass("active");

		$(this).removeClass("highlighted");

		var panelId = $(this).attr("id") + "Panel";

		$("#" + panelId).toggleClass("hidden");

		var numberOfActivePanels = 4 - $(".hidden").length;

		$(".panel").width(($(window).width() / numberOfActivePanels) - 10);
	});
	$(".panel").height($(window).height() - $("#header").height() - 15);
	$(".panel").width($(window).width() / 2 - 10);
	updateOutput();

	$("textarea").on('change keyup paste', function () {
		updateOutput();
	});

});