$(document).ready(function(){
    // Initialize the router
    var appRouter = new AppRouter();

    // Start Backbone history a necessary step for routing
    Backbone.history.start();

    // Sidebar click handler
    $('.nav-links li').on('click', function() {
        var route = $(this).attr('data-navigate');
        if (route) {
            appRouter.navigate(route, {trigger: true});
        }
    });
});