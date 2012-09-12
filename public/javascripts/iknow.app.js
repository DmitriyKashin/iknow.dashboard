$(function() {
		$( "#pages" ).tabs();
		
		$("#pages").fadeTo('slow',0.8);
		$( "#metrics-denide" ).buttonset();
		$( "#shows-selection" ).buttonset();
		$( "#accordion" ).accordion();
        $("button").button();
        $("#graph_div" ).draggable();

        $("#graph_div").resizable({ stop: function(event, ui) {
                $("canvas", this).each(function() { 
                    $(this).attr({ width: ui.size.width, height: ui.size.height });

                    
                    reDraw(this);
                });
            } });


        $("#graph_switcher span").click(function () {

            
            if ($(this).text()=='show last 60 minutes') {


            $(this).html('show last 7 hours');
            drawing([1.5,0.4,3.4,8.5,5.5,3.1,7.6,1.5,0.4,3.4,8.5,5.5,3.1,7.6,1.5,0.4,3.4,8.5,5.5,3.1,7.6,
                    1.5,0.4,3.4,8.5,5.5,3.1,7.6,1.5,0.4,3.4,8.5,5.5,3.1,7.6,1.5,0.4,3.4,8.5,5.5,3.1,7.6,
                    1.5,0.4,3.4,8.5,5.5,3.1,7.6,1.5,0.4,3.4,8.5,5.5,3.1,7.6,5.4,5.9,2.1,7.3],
                     null,
                      null, 
                        'minutes');
            } 
            else
            {
                $(this).html('show last 60 minutes');

                drawing(first_metric,second_metric,third_metric,'hours');
            }

         

            
        });



       
        

  
        var first_metric =  [1.5,2.5,2.1,1.3,1.9,2.1,1.1];
        var second_metric = [8+3.2-1.5,8+4.2-2.5,8+5.1-2.1,8+2.9-1.3,8+3.1-1.9,8+2.4-2.1,8+9.3-1.1];
        var third_metric =  [3.4,5.1,4.2,1.2,3.4,2.8,3.1];

        function drawing(first_metric, second_metric, third_metric, type) {

        
            RGraph.Clear(document.getElementById("cvs"));
            RGraph.ObjectRegistry.Clear();
        var line=  new RGraph.Line('cvs', first_metric, second_metric, third_metric);
     
        
 
        
        line.Set('char.ylabels.count', 3);

        line.Set('chart.linewidth', 3);
        line.Set('chart.colors', ['black']);
        line.Set('chart.ymax', 17);
        line.Set('chart.key', ['Количество событий','Изменения']);
        line.Set('chart.key.position', 'gutter');
        line.Set('chart.key.position.x', 30);
        line.Set('chart.key.position.y', 30);
        line.Set('chart.key.background', 'rgba(255,255,255,0.5)');
        line.Set('chart.key.color.shape', 'circle');
        line.Set('chart.key.shadow.color', 'white');
        
       
        

        line.Set('chart.tickmarks', 'endcircle');
        line.Set('chart.colors', ['blue','red','green']);
        line.Set('chart.background.grid.autofit', true);
        line.Set('chart.background.grid.autofit.numhlines', 10);
        line.Set('chart.background.grid.color', 'black');
        line.Set('chart.background.barcolor1', 'orange');
        line.Set('chart.background.barcolor2', 'orange');
        line.Set('chart.text.color', 'white');       
        line.Set('chart.fillstyle', ['orange']);
        line.Set('chart.shadow', true);
        line.Set('chart.shadow.offsetx', 1);
        line.Set('chart.shadow.offsety', 1);
        line.Set('chart.hmargin', 5);


       


        if (type=='minutes') {

        line.Set('chart.labels', ['1','', '', '', '5', '', '','','', '10', '', '', '', '',
            '15','', '', '', '', '20', '',
            '','', '', '25', '', '', '',
            '','30', '', '', '', '', '35',
            '','', '', '', '40', '', '',
            '','', '45', '', '', '', '',
            '50','', '', '', '', '55', '',
            '','', '', '60']);  
           };
           


        if (type=='hours') {

        
        line.Set('chart.labels', ['1','2', '3', '4', '5', '6', '7']);
        };

        RGraph.Effects.Line.jQuery.Trace(line);

       

        }

        drawing(first_metric,second_metric,null, 'hours');

       



      

         $("#m-denide-2").click(function () {

            if($("#m-denide-2").is(":checked")) {

                
                drawing(first_metric,null,null, 'hours');
                second_metric=null;


            } else 
             {
                second_metric = [8+3.2-1.5,8+4.2-2.5,8+5.1-2.1,8+2.9-1.3,8+3.1-1.9,8+2.4-2.1,8+9.3-1.1];
                drawing(first_metric,second_metric,null, 'hours');
                
             }
   
           });  

         


    
		
	

    
		
	});


            $(document).ready(function(){
                $("#tree").Tree();
            });
  