$( document ).ready(function() {
	
	meso_wait = new Array();
	
	filtered_meso_wait  = new Array();

	
	$.ajax({
                url:'admin_average_waiting.php',

                type:'post',
                
                success:function(response){
                   					
					meso_wait = JSON.parse(response);
										
					const ctx = document.getElementById('histogram').getContext('2d');
//dimiourgia stigmiotupou tis klasis chart
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0],
    datasets: [{
      label: 'Average Response Time',
      data: meso_wait,
      backgroundColor: 'navy',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1,
        ticks: {
          max: 24,
        }
      }, {
        display: true,
        ticks: {
          autoSkip: false,
          max: 24,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
					
                }
            });	
	
    
	$.ajax({
                url:'admin_content_types.php',

                type:'post',
                
                success:function(response){
                   

                    $("#content_type").html(response);
				   

                }
            });
	
	
	$.ajax({
                url:'admin_method_types.php',

                type:'post',
                
                success:function(response){
                   

                    $("#method_type").html(response);
				   

                }
            });
			
	$.ajax({
                url:'admin_isps.php',

                type:'post',
                
                success:function(response){
                   

                    $("#isp").html(response);
				   

                }
            });		
	
	
	
	$("#filter_button").click(function(){
        
            $.ajax({
                url:'admin_avg_waiting_filter.php',
				data: {content_type: $( "#mycontent_type" ).val(),day: $( "#day" ).val(), method_type: $( "#mymethod_type" ).val(),isp: $( "#myisp" ).val() },

                type:'post',
                
                success:function(response){
										
					filtered_meso_wait = JSON.parse(response);
										
					const ctx = document.getElementById('histogram').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0],
    datasets: [{
      label: 'Average Response Time',
      data: filtered_meso_wait,
      backgroundColor: 'red',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1,
        ticks: {
          max: 24,
        }
      }, {
        display: true,
        ticks: {
          autoSkip: false,
          max: 24,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
									
                }
            });
        
    });		
	
	
	
	
	
});	

