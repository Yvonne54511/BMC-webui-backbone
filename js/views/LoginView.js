var LoginView = Backbone.View.extend({
    
    //event delegation
    event:{
        //condition that triggers : function triggered
        "submit #login-form":"handleLogin"
    },
    // render login page
    render: function() {
        //    TODO : change css style
        this.$el.html(`
            <h2>系統登入</h2>
            <div>
                <form id="login-form">
                    <input type="text" id="username" placeholder="請輸入帳號">
                    <input type="text" id="password" placeholder="請輸入密碼">
                    <button type="submit">登入</button>
                </form>
            </div>
            
        `);
        return this;
    },

    handleLogin:function(event){
       event.preventDefault();
       
       var username=this.$("#username").val();
       var password=this.$("#password").val(); 

        // "this model refers to?" model binding??  
       $this.model.set({
            username:this.$('#username').val(),
            password:this.$('#password').val()
       })
       
    //    TODO :login authentication
       
    }
});


