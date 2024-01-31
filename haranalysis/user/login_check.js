

$(document).ready(function(){
    $("#login_button").click(function(){
        var username = $("#log_username").val().trim();
        var password = $("#log_password").val().trim();

        if( username != "" && password != "" ){
            $.ajax({
                url:'check_user.php',
                type:'post',
                data:{username:username,password:password},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        window.location = "user_index.php";
                    }else{
                        msg = "Wrong username and password!";
						
						window.location = "user_login.php"
						
                    }
                    $("#message").html(msg);
                }
            });
        }
    });
});
