
$(document).ready(function(){
	
	        //parametroi xarth
	        var mapOptions = {
            center: [38.246242, 21.735085],
            zoom: 6
         }
		 
		 //parametroi heatmap
		 let cfg = {"radius": 40,
			"maxOpacity": 2,
			"scaleRadius": false,
			"useLocalExtrema": false,
			latField: 'lat',
			lngField: 'lng',
			valueField: 'count'};	
	
		 let heatmapLayer = new HeatmapOverlay(cfg);

		 var map = new L.map('map', mapOptions);
         
         var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
         map.addLayer(layer);
         
		 map.addLayer(heatmapLayer);
	
$( document ).ready(function() {
    
	  $.ajax({
                url:'user_statistics.php',
			
               type:'post',

                
                success:function(response){
					
					 var data_array = JSON.parse(response);
					 
					 console.log(data_array)
					 
					 var objs = data_array.map(function(x) { 
                        return { 
						lat:x[0], 
						lng: x[1],
						count: x[2]
                       }; 
                       });

         
         
				let testData = {
				max: 10, data: objs};

        heatmapLayer.setData(testData);

                }
            });
	
	
	
	
});	



	

});

