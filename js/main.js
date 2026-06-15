$(document).ready(function(){
	var livePowerModel = new PowerTelemetry();

	var mainDashboardView = new PowerView({model: livePowerModel});

	$('#content-payload').html(mainDashboardView.render().el);
});