
$( document ).ready(function() {
	
	$.ajax({
                url:'admin_content_types.php',

                type:'post',
                
                success:function(response){
                   
                    $("#content_type").html(response);
				   

                }
            });
	
    $.ajax({
                url:'admin_isps.php',

                type:'post',
                
                success:function(response){
                   

                    $("#isp").html(response);
				   

                }
            });	
   
	$.ajax({
                url:'admin_average_ttl.php',

                type:'post',
                
                success:function(response){
                   
                    $("#result").html(response);
				   

                }
            });
			
	
	$.ajax({
                url:'admin_stale_fresh.php',

                type:'post',
                
                success:function(response){
                   
                    $("#stale_fresh").html(response);
				   

                }
            });		
			
	$.ajax({
                url:'admin_cache.php',

                type:'post',
                
                success:function(response){
                   
                    $("#cacheability").html(response);
				   

                }
            });				
	
	$("#filter_button").click(function(){
        


            $.ajax({
                url:'admin_average_ttl_filters.php',
				
				data: {content_type: $( "#mycontent_type" ).val(),isp: $( "#myisp" ).val() },

                type:'post',
                
                success:function(response){

                    $("#filtered_result").html(response);					
                }
            });
			
			
 	
			 $.ajax({
                url:'admin_stale_fresh_filt.php',
				data: {content_type: $( "#mycontent_type" ).val(),isp: $( "#myisp" ).val() },

                type:'post',
                
                success:function(response){

                    $("#stale_fresh_filtered").html(response);					
                }
            });
			
		
			$.ajax({
                url:'admin_cache_filt.php',
				data: {content_type: $( "#mycontent_type" ).val(),isp: $( "#myisp" ).val() },

                type:'post',
                
                success:function(response){

                    $("#cache_filtered").html(response);					
                }
            });
        
    });				
			
	
});	

