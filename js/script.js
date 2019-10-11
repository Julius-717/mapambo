$(document).ready(function () {
	$(".cont form").submit(function (event) {


		event.preventDefault()
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		$.ajax({
			url: "//formspree.io/waynejulius10@gmail.com",
			method: "POST",
			data: {
				fname: fname,
				lname: lname,
				_replyto: email,
				email: email,
				// subject:subject
				_subject: 'Contact Submission Form'
			},
			dataType: "json"

		});
		$(".cont").hide()
		$("#submited").show()

	})

	// Activate Carousel
	$("#myCarousel").carousel();

	// Enable Carousel Indicators
	$(".item").click(function () {
		$("#myCarousel").carousel(1);
	});

	// Enable Carousel Controls
	$(".left").click(function () {
		$("#myCarousel").carousel("prev");
	});
})
