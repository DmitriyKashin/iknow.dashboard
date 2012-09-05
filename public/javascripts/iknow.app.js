$(function() {
		$( "#pages" ).tabs();
		
		$("#pages").fadeTo('slow',0.8);
		$( "#metrics-denide" ).buttonset();
		$( "#shows-selection" ).buttonset();
		$( "#accordion" ).accordion();

		
			
          
          
		var line = new RGraph.Line('cvs', [84,-5,-30,-26,-45,12,84,73,60]);
        line.Set('chart.labels', ['Felicity','Gary','Neil','Jay','Helga','Ray','Kev','Luis','Pete']);
        line.Set('chart.colors', ['white','green']);
        line.Set('chart.background.grid.color', 'white');
        line.Set('chart.background.barcolor1', 'orange');
        line.Set('chart.text.color', 'white');
        line.Set('chart.background.barcolor2', 'orange');
        line.Set('chart.fillstyle', ['orange']);
        line.Set('chart.shadow', true);
        line.Set('chart.shadow.offsetx', 1);
        line.Set('chart.shadow.offsety', 1);
        line.Set('chart.linewidth', 2);
        line.Set('chart.yaxispos', 'right');
        line.Set('chart.xaxispos', 'center');
        line.Set('chart.hmargin', 5);
        RGraph.Effects.Line.jQuery.Trace(line);
    
		
	

    
		
	});

