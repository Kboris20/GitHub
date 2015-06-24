console.log('avantReady');

	$(document).ready(function(){
		$('a').smoothScroll();
		console.log('dansReady');
		$( 'div.progress' ).each(function( index ) {
		var myPieChart = new Chart(ctx[0]).Pie(data,options);	}
);
	});
console.log ('Après READY');

