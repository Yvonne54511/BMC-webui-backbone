var AppRouter = Backbone.Router.extend({
    routes: {
        "power": "showPower",
        "*actions": "defaultRoute"
    },

    showPower: function() {
        var livePowerModel = new PowerTelemetry();
        var view = new PowerView({model: livePowerModel});
        $('#content-payload').html(view.render().el);
        this.updateSidebar('power');
    },

    defaultRoute: function(actions) {
        $('#content-payload').html('<h2>Welcome</h2><p>Select "Resource management" to see the Power Dashboard.</p>');
        this.updateSidebar(actions);
    },

    updateSidebar: function(route) {
        $('.nav-links li').removeClass('active');
        if (route) {
            $('.nav-links li[data-navigate="' + route + '"]').addClass('active');
        }
    }
});