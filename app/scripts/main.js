$(document).ready(function(){
	'use strict'
	$('a').smoothScroll();
	
	
	
	$( "div.progress" ).each(function( index, element ) {
	
		var valuee = $(element).children().attr('aria-valuenow');
		var canvas = $('<canvas id="myChart'+index+'" width="90" height="90"></canvas>');
		$(element).replaceWith(canvas);
	
	var data = [
	{
        value: 100-valuee,
        color: "#D1D1D1",
        highlight: "#D1D1D1",
		label: "White",
    }
	,
    {
       
        value: valuee-0,
        color: "#FDB45C",
        highlight: "#D1D1D1",
		label: "yellow",
    }
	];
	
	// Get context with jQuery - using jQuery's .get() method.
	var ctx = canvas.get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var myDoughnutChart = new Chart(ctx).Doughnut(data, {segmentStrokeColor : "#D1D1D1", percentageInnerCutout : 70});
		
})}
);




		


