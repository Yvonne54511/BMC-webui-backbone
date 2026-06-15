var PowerView = Backbone.View.extend({
	className:'power-consumption-page',

	template:_.template(`
		<h2>Power consumption</h2>
        <div class="chart-box">
            <canvas id="livePowerChart"></canvas>
        </div>
        <table class="telemetry-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>System total (W)</th>
                    <th>PSU 0 (W)</th>
                    <th>PSU 1 (W)</th>
                    <th>PSU 1 Pout (W)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%= new Date().toISOString().replace('T', ' ').substring(0, 19) %> UTC</td>
                    <td><strong><%= system_total_w %></strong></td>
                    <td><%= psu0_w %></td>
                    <td><%= psu1_w %></td>
                    <td><%= psu0_pout %></td>
                </tr>
            </tbody>
        </table>
	`),

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		_.defer(_.bind(this.initChart,this));
		return this;
	},

	initChart: function() {
        var ctx = this.$('#livePowerChart')[0].getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['09:34:00', '09:38:00', '09:42:00', '09:46:00', '09:50:00'],
                datasets: [{
                    label: 'System total (W)',
                    data: [3016, 3026, 3019, 3006, 3017],
                    borderColor: '#2b8edd',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
});