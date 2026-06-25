var AppRouter = Backbone.Router.extend({
    routes: {
        //"URL":"callback functionName" //route to function mapping
        "power": "showPower", //route to show the power dashboard
        "login":"showLogin", //route to show the login page
        "*actions": "defaultRoute"//*:any uri that are not matched will be redirected to defaultRoute
    },
 
    // below are the callback functions(Actions) for the routes defined above
    // showLogin: function(){
    //     var liveLoginModel = new LoginAuth(); //setup the model to fetch the data from the server
    //     var view = new LoginView({model: liveLoginModel}); //setup the view to render the data
    //     $('#content-payload').html(view.render().el);//looks for the div with id content-payload in index.htmland renders the view inside it
    //     this.updateSidebar('login');
    // },

    showLogin:function(){
        var loginModel = new LoginModel();
        var loginView = new LoginView({model:loginModel});//the constructor of view is designed to  accept model input
        $('#content-payload').html(loginView.render().el);
    },
    showPower: function() {
        var livePowerModel = new PowerTelemetry();//setup the model to fetch the data from the server
        var view = new PowerView({model: livePowerModel}); //setup the view to render the data
        $('#content-payload').html(view.render().el);//looks for the div with id content-payload in index.htmland renders the view inside it
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