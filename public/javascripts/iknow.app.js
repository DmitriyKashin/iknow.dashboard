$(function() {
		$( "#pages" ).tabs();
		
		$("#pages").fadeTo('slow',0.8);
		$( "#metrics-denide" ).buttonset();
		$( "#shows-selection" ).buttonset();
		$( "#accordion" ).accordion();
       
        

		
			
          
          
		
          
       
       
  
        var first_metric = [1.5,2.5,2.1,1.3,1.9,2.1,1.1];
        var second_metric = [2,3,4,5,2.9,3.1,2.4];
        var third_metric =  [3.4,5,4.2,1.2,3.4,2.8];

        function drawing(first_metric, second_metric, third_metric) {


         var line = new RGraph.Line('cvs', first_metric, second_metric, third_metric);
        line.Set('chart.linewidth', 3);
        line.Set('chart.colors', ['black']);
        line.Set('chart.ymax', 10);
        line.Set('chart.tickmarks', 'endcircle');
        line.Set('chart.tooltips', ['Charles','Rick','Huey','Pob','Kevin','Louis','John']);
        line.Set('chart.colors', ['white','green','blue']);
        line.Set('chart.background.grid.color', 'white');
        line.Set('chart.background.barcolor1', 'orange');
        line.Set('chart.background.barcolor2', 'orange');
        line.Set('chart.text.color', 'white');       
        line.Set('chart.fillstyle', ['orange']);
        line.Set('chart.shadow', true);
        line.Set('chart.shadow.offsetx', 1);
        line.Set('chart.shadow.offsety', 1);
        line.Set('chart.linewidth', 2);
        line.Set('chart.yaxispos', 'right');
        line.Set('chart.xaxispos', 'center');
        line.Set('chart.hmargin', 5);
        RGraph.Effects.Line.jQuery.Trace(line);



        }

        drawing(first_metric,second_metric,third_metric);

      

         $("#m-denide-2").click(function () {

            if($("#m-denide-2").is(":checked")) {

                
                drawing(first_metric,null,third_metric);
                second_metric=null;


            } else 
             {
                second_metric=[2,3,4,5,2.9,3.1,2.4];
                drawing(first_metric,second_metric,third_metric);
                
             }
   
           });  

         $("#m-denide-3").click(function () {

            if($("#m-denide-3").is(":checked")) {

               
                 drawing(first_metric,second_metric,null);
                 third_metric=null;
               


            } else {
                third_metric =  [3.4,5,4.2,1.2,3.4,2.8];
                drawing(first_metric,second_metric,third_metric);
            }
   
           });


    
		
	

    
		
	});


            $(document).ready(function(){
                $("#tree").Tree();
            });
  