$(document).ready(function(){
	'use strict'
	$('a').smoothScroll();

	$( "div.progress" ).each(function( index, element ) {
	
		var valuee = $(element).children().attr('aria-valuenow');
		var canvas = $('<canvas id="myChart'+index+'" width="50" height="50"></canvas>');
		$(element).replaceWith(canvas);
	
	var data = [
    {
       
        value: valuee-0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow",
    }
	,
	{
        value: 100-valuee,
        color: "#FFFFFF",
        highlight: "#5AD3D1",
        label: "White"
    }
	];
	
	// Get context with jQuery - using jQuery's .get() method.
	var ctx = canvas.get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var myDoughnutChart = new Chart(ctx).Doughnut(data, {percentageInnerCutout : 50});
		
})}
);
		


