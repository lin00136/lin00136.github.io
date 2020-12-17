$(function () {
	var slideout = new Slideout({
		panel: document.getElementById("panel"),
		menu: document.getElementById("menu"),
		side: "left",
	});

	document
		.querySelector(".js-slideout-toggle")
		.addEventListener("click", function () {
			slideout.toggle();
		});

	document.querySelector(".menu").addEventListener("click", function (eve) {
		if (eve.target.nodeName === "A") {
			slideout.close();
		}
	});
	$("#menu .btn").on("click", function (eve) {
		slideout.close();
	});

	/* time */
	const DateTime = luxon.DateTime;
	const dt = DateTime.local();
	/* AM  */
	const hour = dt.toFormat("HH");
	let hello = "GOOD NIGHT";
	if (hour >= 6 && hour <= 12) {
		hello = "GOOD MORNING";
	} else if (hour > 12 && hour <= 18) {
		hello = "GOOD AFTERNOON";
	} else if (hour > 18 && hour < 11) {
		hello = "GOOD EVENING";
	}

	/* time */

	function setTime() {
		const DateTime = luxon.DateTime;
		const dt = DateTime.local();
		let t = null;
		let r = $("#myForm").serializeArray();
		if (r[0].value == "yes") {
			if (r[1].value == "yes") {
				t = DateTime.TIME_24_WITH_SECONDS;
			} else {
				t = DateTime.TIME_24_SIMPLE;
			}
			$(".time").text(dt.toLocaleString(t));
		} else {
			if (r[1].value == "yes") {
				t = DateTime.TIME_WITH_SECONDS;
			} else {
				t = DateTime.TIME_SIMPLE;
			}
			let text = dt.toLocaleString(t);
			text = `${text.slice(0, -2)}<span>${text.slice(-2)}</span>`;
			$(".time").html(text);
		}
		if (r[2].value == "yes") {
			$(".show .date").addClass("yes").removeClass("no");
		} else {
			$(".show .date").removeClass("yes").addClass("no");
		}
		$(".show .date").text(dt.toLocaleString(DateTime.DATE_FULL));
	}
	$("#menu .btn").on("click", function (e) {
		clearInterval(timer);
		timer = setInterval(function () {
			setTime();
		}, 1000);
		e.preventDefault();
	});
	setTime();
	let timer = setInterval(function () {
		setTime();
	}, 1000);

	$(".hello").text(hello);
	$(".week-con").html(dt.toFormat("cccc"));
	$(".month-con").html(dt.toFormat("d"));
	$(".day-year-con").html(dt.toFormat("o"));
	$(".week-year-con").html(dt.toFormat("W"));

	/* footer */

	$("footer .btn").on("click", function () {
		if ($(this).text() == "MORE") {
			$(this).text("LESS");
		} else {
			$(this).text("MORE");
		}
		$("footer > div").slideToggle("normal");
	});
// console.log(dt.toFormat('yyyy-LL-dd'));
	$.ajax({
		url: "https://api.nasa.gov/planetary/apod",
		method: "get",
		data: {
			api_key: "jYr0eAjwhRolxaZoBP7D6NmHDtyaucPFjZLGtSb6",

		},
		dataType: "json",
		success: function (data) {
			// console.log(data.url);
			$("#panel").css("background-image", `url(${data.url})`);
		},
	});
});
