var x = document.getElementById('write_to_file');

x.style.display = 'none';

var y = document.getElementById('upload_to_database');

y.style.display = 'none';

document.getElementById('import').onclick = function() {
    var files = document.getElementById('selectFiles').files;
  if (files.length <= 0) {
    return false;
  }
  //diavasma arxeiou
  var fr = new FileReader();

  fr.onload = function(e) { 
    //kratame to periexomeno tou arxeiou sthn json domi tou
    var result = JSON.parse(e.target.result);
	
	  var filtered_string = "{";
	  //entries
	  filtered_string=filtered_string + "\"entries\": [";
	
	var mydata = result['log']['entries'];
	for(var i=0;i<mydata.length;i++)
	{
		filtered_string = filtered_string + "{";
		
		filtered_string  = filtered_string + "\"startedDateTime\":";
		filtered_string = filtered_string + "\"";
		filtered_string = filtered_string + mydata[i]['startedDateTime'];
		filtered_string = filtered_string + "\"";
		filtered_string = filtered_string + ",";
		
		filtered_string = filtered_string + "\"serverIPAddress\":";
		filtered_string = filtered_string + "\"";
		filtered_string = filtered_string + mydata[i]['serverIPAddress'];
		filtered_string = filtered_string + "\"";
		filtered_string = filtered_string + ",";
		
		filtered_string = filtered_string + "\"timings\": {";
		filtered_string = filtered_string + "\"wait\":";
		filtered_string = filtered_string + mydata[i]['timings']['wait'];
		filtered_string = filtered_string + "}";
		filtered_string = filtered_string + ",";
		//request
		filtered_string = filtered_string + "\"request\": {";
		
		filtered_string = filtered_string + "\"method\": ";
		filtered_string = filtered_string + "\"";
		filtered_string=filtered_string + (mydata[i]['request']['method']);
		filtered_string = filtered_string + "\"";

		filtered_string = filtered_string + ",";
		
		filtered_string = filtered_string + "\"url\": ";
		filtered_string = filtered_string + "\"";
		
		var urlParts = mydata[i]['request']['url'].replace('http://','').replace('https://','').split(/[/?#]/);
		var domain = urlParts[0];

		filtered_string = filtered_string + domain;
		filtered_string = filtered_string + "\"";

		filtered_string = filtered_string + ",";
		//header request
		filtered_string = filtered_string + "\"headers\":[";
		
	   var headers_request = mydata[i]['request']['headers'];
        //metraei ta headers pou exoyn mpei
		var counter = 0;
		for(var j = 0;j<headers_request.length;j++)
		
		{
			
		   if(headers_request[j]['name']=='Content-Type' || headers_request[j]['name']=='content-type' )
		      
			  {
			   
			   if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }
			  
	      if(headers_request[j]['name']=='Cache-Control' || headers_request[j]['name']=='cache-control'  )
		      
			  {
				  
				  
				  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
				  
				  
				  
		      }
			  
		if(headers_request[j]['name']=='pragma'||headers_request[j]['name']=='Pragma' )
		      
			  {
				  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string= filtered_string + headers_request[j]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + "}";
				  
		      }	

        if(headers_request[j]['name']=='Expires'||headers_request[j]['name']=='expires' )
		      
			  {
				  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
				  
		      }	

        if(headers_request[j]['name']=='age' || headers_request[j]['name']=='Age')
		      
			  {
		      
			  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
			  
			  
		      }


        if(headers_request[j]['name']=='last-modified'|| headers_request[j]['name']=='Last-Modified')
		      
			  {
				  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_request[j]['name'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  filtered_string = filtered_string + "\"";
			  
			  filtered_string = filtered_string + "}";
		      }


        if(headers_request[j]['name']=='Host'|| headers_request[j]['name']=='host')
		      
			  {
				  if(counter>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter = counter + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  		filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + headers_request[j]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_request[j]['value'];
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
		      }			  
		
		}
		
	    //kleinei to headers_request
        filtered_string = filtered_string + "]";		
		//kleinei to request
		filtered_string = filtered_string + "},";
		
		//response
		filtered_string = filtered_string + "\"response\":{";
		filtered_string  = filtered_string + "\"status\":";
		filtered_string = filtered_string + "\"";

		filtered_string = filtered_string + mydata[i]['response']['status'];
		filtered_string = filtered_string + "\"";

		filtered_string = filtered_string + ",";
		
		filtered_string = filtered_string + "\"statusText\":";
		filtered_string = filtered_string + "\"";

		filtered_string = filtered_string + mydata[i]['response']['statusText'];
		
		filtered_string = filtered_string + "\"";

	    filtered_string = filtered_string + ",";
        filtered_string = filtered_string + "\"headers\":[";
	   
	   //headers_response
	   var headers_response = mydata[i]['response']['headers'];
	   
        
	var counter2 = 0;
	
   for(var k = 0;k<headers_response.length;k++)
		
		{
		    if(headers_response[k]['name']=='content-type'||headers_response[k]['name']=='Content-Type')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";
 
			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }
			  
	      if(headers_response[k]['name']=='cache-control'|| headers_response[k]['name']=='Cache-Control')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";
  
			  filtered_string = filtered_string + "}";
			  
			    			  
		      }
			  
		if(headers_response[k]['name']=='pragma'||headers_response[k]['name']=='Pragma')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			   filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";
  
			  filtered_string = filtered_string + "}";
			  
		      }

        if(headers_response[k]['name']=='expires'|| headers_response[k]['name']=='Expires')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			  filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }

        if(headers_response[k]['name']=='age'||headers_response[k]['name']=='Age')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			   filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }


        if(headers_response[k]['name']=='last-modified'||headers_response[k]['name']=='Last-Modified')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			   filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";

			  
			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }

           
		   if(headers_response[k]['name']=='host'||headers_response[k]['name']=='Host')
		      
			  {
			   
			   if(counter2>=1)
			   {
				   filtered_string = filtered_string + ",";
				   
			   }
			   
			   else
				   
				   {
					   counter2 = counter2 + 1;
				   }
				
				  
			   filtered_string = filtered_string + "{";

		      filtered_string = filtered_string + "\"name\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + headers_response[k]['name'];
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string = filtered_string + ",";
			  filtered_string = filtered_string + "\"value\":";
			  
			  filtered_string = filtered_string + "\"";

			  filtered_string=filtered_string + headers_response[k]['value'];
			  
			  filtered_string = filtered_string + "\"";
		  
			  filtered_string = filtered_string + "}";
			  
			    
				  
			  
		      }
        	  
		
		}

        //kleinei to headers_response
	    filtered_string = filtered_string + "]";
		//kleinei to response
		filtered_string = filtered_string  + "}";
		//kleinei to entry
		filtered_string = filtered_string + "}";
		
		if(i!=mydata.length-1)
			
			{
				filtered_string=filtered_string + ",";
			}
		
	}
	//kleinei o pinakas me ta entries
	filtered_string = filtered_string + "]";
	//kleinei to har arxeio
	filtered_string = filtered_string + "}";
	    
	  document.getElementById("epiloges").innerHTML = "Filtering Done with success";

	  var x = document.getElementById('write_to_file');
	  
	  x.style.display = 'block';
	  
	  var y = document.getElementById('upload_to_database');
	  
	  y.style.display = 'block';

	document.getElementById("write_to_file").elements["filtered"].value = filtered_string;
		  
	document.getElementById("upload_to_database").elements["filtered"].value = filtered_string;
	
	
	document.getElementById("write_to_file").elements["filtered"].style.display='None';
	
	document.getElementById("upload_to_database").elements["filtered"].style.display = 'None';
	
	document.getElementById("upload_to_database").elements["myip"].style.display = 'None';


	
  
  }

  fr.readAsText(files.item(0));
  
};
//ip tou user
$.getJSON("https://api.ipify.org?format=json", 
                                          function(data) { 
   
    document.getElementById("upload_to_database").elements["myip"].value = data.ip;
        }) 