$( document ).ready(function() {
    
	$.ajax({
                url:'admin_number_of_users.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div1").html(response);
				   

                }
            });
	
	$.ajax({
                url:'admin_request_types.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div2").html(response);
				   

                }
            });
	
	$.ajax({
                url:'admin_response_status.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div3").html(response);
				   

                }
            });
	
	$.ajax({
                url:'admin_number_of_domains.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div4").html(response);
				   

                }
            });
	
	$.ajax({
                url:'admin_number_of_isps.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div5").html(response);
				   

                }
            });
	
	$.ajax({
                url:'admin_avg_age.php',

                type:'post',
                
                success:function(response){
                   

                    $("#div6").html(response);
				   

                }
            });
	
});	

