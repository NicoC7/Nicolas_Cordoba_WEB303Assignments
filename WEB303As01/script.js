/*
	WEB 303 Assignment 1 - jQuery
	Nicolas Moreno Cordoba
*/
$(document).ready(function() {
	var x = $("#yearly-salary");
	var y = $('#percent');

	var amountSpan = $("#amount");

	x.on("change", calculateAmount);
	y.on("change", calculateAmount);


	function calculateAmount() {

		var salary = parseFloat(x.val()) || 0;
		var percent = parseFloat(y.val()) || 0;

		var amount = salary * (percent / 100);


		amountSpan.text("$" + amount.toFixed(2));

	}
});





