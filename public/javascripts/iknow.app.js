$(document).ready(function(){

        var current_data = []
        var first_metric =  []
        var second_metric = []
        var third_metric =  []
        var lines = new Array();
        var tooltip_metric = new Array();
        var tooltip_count = 0;
        var current_code = 'trouble';
        var data_type=[];
        var current_data_type=[];


    $.ajax('/dataset', {                                            // Получаем первый набор данных.
        type: 'GET',
        dataType: 'json',
        success: function(data) {  

            current_data = data.graph_data;



    },
        error  : function()     {  }
    });


        
		$( "#pages" ).tabs();	
		$("#pages").fadeTo('slow',0.8);                             // Интерфейс jQuery UI + грузим дерево.
		$( "#metrics-denide" ).buttonset();
		$( "#shows-selection" ).buttonset();
		$( "#accordion" ).accordion();
        $("#tree").Tree();




        function newLife() {                                        // Функция добавляет ресайз, перенос, и вид кнопки для каждого нового графика.


        $("button").button();
        $(".drogable" ).draggable();


        $(".drogable").resizable({ stop: function(event, ui) {
                $("canvas", this).each(function() { 
                    $(this).attr({ width: ui.size.width, height: ui.size.height });

                    
                    reDraw(this);
                });
            } });



        
    }

newLife();


  


function drawing(first_metric, second_metric, third_metric, type, graph_id) {                                       // Функция отрисовки графиков. Тип - часы\минуты, graph_id - id канвас элемента

        
            RGraph.Clear(document.getElementById(graph_id));
            RGraph.ObjectRegistry.Clear(graph_id);
            
            
        lines[graph_id]=  new RGraph.Line(graph_id, first_metric, second_metric, third_metric);

        tooltip_count++;
        tooltip_metric[tooltip_count] = new Array();
        
     
     for (i=0;i<first_metric.length;i++) {

tooltip_metric[tooltip_count][i] = '<b style="color:green;"> Реальное: '+first_metric[i].toString()+'</b><br><b style="color:red;"> Ожидаемое:</b>';



     }
      
        lines[graph_id].Set('char.ylabels.count', 3);
        lines[graph_id].Set('chart.linewidth', 3);
        lines[graph_id].Set('chart.colors', ['black']);    
        lines[graph_id].Set('chart.key', ['Количество событий','Изменения']);
        lines[graph_id].Set('chart.key.position', 'gutter');
        lines[graph_id].Set('chart.key.position.x', 30);
        lines[graph_id].Set('chart.key.position.y', 30);
        lines[graph_id].Set('chart.key.background', 'rgba(255,255,255,0.5)');
        lines[graph_id].Set('chart.key.color.shape', 'circle');
        lines[graph_id].Set('chart.key.shadow.color', 'white');
        lines[graph_id].Set('chart.tickmarks', 'circle');
        lines[graph_id].Set('chart.colors', ['blue','red','green']);
        lines[graph_id].Set('chart.background.grid.autofit', true);
        lines[graph_id].Set('chart.tooltips', tooltip_metric[tooltip_count]);
        lines[graph_id].Set('chart.shadow', true);
        lines[graph_id].Set('chart.shadow.offsetx', 0);
        lines[graph_id].Set('chart.shadow.offsety', 0);
        lines[graph_id].Set('chart.background.grid.autofit.numhlines', 10);
        lines[graph_id].Set('chart.background.grid.color', 'black');
        lines[graph_id].Set('chart.background.barcolor1', 'orange');
        lines[graph_id].Set('chart.background.barcolor2', 'orange');
        lines[graph_id].Set('chart.text.color', 'white');       
        lines[graph_id].Set('chart.fillstyle', ['orange']);
        lines[graph_id].Set('chart.shadow', true);
        lines[graph_id].Set('chart.shadow.offsetx', 1);
        lines[graph_id].Set('chart.shadow.offsety', 1);
        lines[graph_id].Set('chart.hmargin', 5);


       


        if (type=='minutes') {

        lines[graph_id].Set('chart.labels', ['1','', '', '', '5', '', '','','', '10', '', '', '', '',
            '15','', '', '', '', '20', '',
            '','', '', '25', '', '', '',
            '','30', '', '', '', '', '35',
            '','', '', '', '40', '', '',
            '','', '45', '', '', '', '',
            '50','', '', '', '', '55', '',
            '','', '', '60']);  

         lines[graph_id].Set('chart.ymax', Math.max(first_metric)+Math.max(first_metric)/10);

           };
         // Максимальное значение для оси Y, когда показ по минутам. Потом сделаем динамически меняющимся.




        if (type=='hours') {

        
        lines[graph_id].Set('chart.labels', ['1','2', '3', '4', '5', '6', '7']);
        lines[graph_id].Set('chart.ymax', Math.max(first_metric)+Math.max(first_metric)/10);
        };
         // Максимальное значение для оси Y, когда показ по часам. Потом сделаем динамически меняющимся.

        lines[graph_id].Draw();


       

        }

 




function proSwitcher(current_data_type_one, i)                                 // Анализируем выбранное пользователем и добавляем данные для первой метрики.


{



    switch (current_data_type_one) {

                     case 'pin.show' :
                     first_metric.push(current_data[i].pin.show)
                     break

                     case 'pin.update':
                     first_metric.push(current_data[i].pin.update)
                     break

                    case 'pin.list.contest':
                     first_metric.push(current_data[i].pin.list.contest)
                     break

                    case 'pin.list.new':
                     first_metric.push(current_data[i].pin.list.new)
                     break

                    case 'pin.list.popular':
                     first_metric.push(current_data[i].pin.list.popular)
                     break

                     case 'pin.list.friends':
                     first_metric.push(current_data[i].pin.list.friends)
                     break
                     case 'pin.list.userpins':
                     first_metric.push(current_data[i].pin.list.userpins)
                     break
                     case 'pin.list.userlikes':
                     first_metric.push(current_data[i].pin.list.userlikes)
                     break

                     case 'pin.create':
                     first_metric.push(current_data[i].pin.create)
                     break

                     case 'pin.delete':
                     first_metric.push(current_data[i].pin.delete)
                     break

                     case 'pin.like':
                     first_metric.push(current_data[i].pin.like)
                     break

                     case 'pin.unlike':
                     first_metric.push(current_data[i].pin.unlike)
                     break

                     case 'pin.unlike':
                     first_metric.push(current_data[i].pin.unlike)
                     break

                     case 'pin.repin':
                     first_metric.push(current_data[i].pin.repin)
                     break

                     case 'pin.comment':
                     first_metric.push(current_data[i].pin.comment)
                     break


                     case 'user.show.settings':
                     first_metric.push(current_data[i].user.show.settings)
                     break

                     case 'user.show.plans':
                     first_metric.push(current_data[i].user.show.plans)
                     break

                     case 'user.show.likes':
                     first_metric.push(current_data[i].user.show.likes)
                     break

                     case 'user.show.places':
                     first_metric.push(current_data[i].user.show.likes)
                     break

                     case 'user.show.events':
                     first_metric.push(current_data[i].user.show.events)
                     break

                     case 'user.show.follows':
                     first_metric.push(current_data[i].user.show.follow)
                     break

                     case 'user.show.followers':
                     first_metric.push(current_data[i].user.show.followers)
                     break

                      case 'user.show.notes':
                     first_metric.push(current_data[i].user.show.notes)
                     break

                      case 'user.update':
                     first_metric.push(current_data[i].user.update)
                     break

                      case 'user.follow':
                     first_metric.push(current_data[i].user.follow)
                     break

                      case 'user.unfollow':
                     first_metric.push(current_data[i].user.unfollow)
                     break

                      case 'user.registrationFinished':
                     first_metric.push(current_data[i].user.registrationFinished)
                     break

                      case 'user.invite':
                     first_metric.push(current_data[i].user.invite)
                     break

                      case 'plan.show':
                     first_metric.push(current_data[i].plan.show)
                     break
                     case 'plan.update':
                     first_metric.push(current_data[i].plan.update)
                     break
                     case 'plan.create':
                     first_metric.push(current_data[i].plan.create)
                     break
                     case 'plan.delete':
                     first_metric.push(current_data[i].plan.delete)
                     break
                     case 'plan.follow':
                     first_metric.push(current_data[i].plan.follow)
                     break
                     case 'plan.show':
                     first_metric.push(current_data[i].plan.show)
                     break
                     case 'plan.unfollow':
                     first_metric.push(current_data[i].plan.unfollow)
                     break



                    }
                    return first_metric;

}

function data_selection(current_data_type_one, graph_numb)                                              // Проверка на часы\минуты, запуск отрисовки, запуск вышестоящего анализатора.
{


first_metric = [];



        if ($("#graph_switcher-"+graph_numb+" span").text() =='show last 60 minutes') 

        {
            
          
            for (i=6; i>-1;i--) 
            { 
                
                if (current_data[i].aggr=='hour') 


                {
              
                   
                        first_metric = proSwitcher(current_data_type_one, i);

                    

                }
            }



         drawing(first_metric, null, null , 'hours', graph_numb);  


        }


        if ($("#graph_switcher-"+graph_numb+" span").text()=='show last 7 hours') {
            

             for (i=73; i>=14; i--) 
            { 
                
                if (current_data[i].aggr=='minute') 
                {


                   first_metric = proSwitcher(current_data_type_one, i);
                   

                }
            }

        drawing(first_metric, null, null , 'minutes', graph_numb); 

        }


}


function data_selection_bar(current_data_type, graph_numb)
{

var bar_graph = new Array();
var bar_count = 0;

for (i=0;i<current_data_type.length;i++)
{

if ((i+1)%3==0) {

    bar_graph[bar_count] = new Array();

    // здесь Push 3ех выбранных чисел и вызов рисовки
    bar_count++;
}

}

}

$("#show_graph").click(function()                 // Рисуем графики по нажатию на кнопку. Удаляем все предыдущие. Проверяем на лже-графики (pin, list..)


{
    data_selection_bar(current_data_type, 0);


$(".drogable").remove();


if ($("#select").val()=='iknow.dashboard.first') {

for (j=0; j<current_data_type.length; j++){
    
    if ((current_data_type[j] != 'pin.list') && (current_data_type[j] != 'user') && (current_data_type[j] != 'pin') && (current_data_type[j] != 'plan') && (current_data_type[j] != 'user.show') )  {

    $("body").append('<div id="graph_div-'+j+'" style="margin-top:10px; margin-left:50%; border:3px solid white; width:720px; height:380px; padding:10px;" class="drogable"><b style="color:white;">'+current_data_type[j]+'</b><button style=" color:white;font-size: 10px; height:25px;width:200px;margin-left:100px;" id="graph_switcher-'+j+'" class="switcher">show last 60 minutes</button><button style="color:white;font-size: 10px; height:25px;width:200px;margin-left:100px; float:right; " class = "changer" id="changes_denide-'+j+'">Denide changes</button><canvas id="'+j+'" width="700" style="max-width: 1200px;" height="350" no="" canvas="" support=""></canvas></div>  '); 
    count=j;
    newLife();
    
    data_selection(current_data_type[j], count);
    
    j=count;
} 
}
}

if ($("#select").val()=='iknow.dashboard.second') {

for (j=0; j<current_data_type.length; j++){
    
    if ((current_data_type[j] != 'pin.list') && (current_data_type[j] != 'user') && (current_data_type[j] != 'pin') && (current_data_type[j] != 'plan') && (current_data_type[j] != 'user.show') )  {

    $("body").append('<div id="graph_div-'+j+'" style="margin-top:10px; margin-left:50%; border:3px solid white; width:720px; height:380px; padding:10px;" class="drogable"><b style="color:white; float:left;">'+current_data_type[j]+'</b><div id="radio" style="font-size:10px;float:left; margin-left:100px;"><input type="radio" id="radio1"  checked="checked" name="radio" /><label for="radio1">Last Week</label><input type="radio" id="radio2" name="radio" /><label for="radio2">Last Day</label></div><button style="color:white;font-size: 10px; height:25px;width:150px;margin-left:100px;" class = "changer" id="changes_denide-'+j+'">Denide changes</button><canvas id="'+j+'" width="700" style="max-width: 1200px;" height="350" no="" canvas="" support=""></canvas></div> '); 
    count=j;
    newLife();
    
    data_selection(current_data_type[j], count);
    
    j=count;
} 
}
}

$("#radio").buttonset();




$(".switcher span").click(function () {   // Отрисовываем график заного при переключении


      
            if ($(this).text()=='show last 60 minutes') {

                     $(this).html('show last 7 hours');
            
            
            graph_numb = parseInt($(this).parent().attr('id')[15] + $(this).parent().attr('id')[16]);
            
            data_selection(current_data_type[graph_numb], graph_numb);
            

            } 

            else
                
            {   
                

                $(this).html('show last 60 minutes');

                graph_numb = parseInt($(this).parent().attr('id')[15] + $(this).parent().attr('id')[16]);
            
                data_selection(current_data_type[graph_numb], graph_numb);

                
            }

         

            
        });

$(".changer span").click(function() {


if ($(this).text()=='Denide changes') {

    $(this).html('Enable changes');
}

else

{
    $(this).html('Denide changes');
}




});



});



setInterval (function() {     // Получаем актуальную информацию каждые 10 сек.

    $.ajax('/dataset', {
        type: 'GET',
        dataType: 'json',
        success: function(data) {  

            current_data = data.graph_data;

            for (i=0; i < count; i++){


            data_selection(current_data_type[i], i);  

            }          



    },
        error  : function()     {  alert('gg'); }
    });


}, 60000);


            
               



    $("#tree  label input").click(function() //  Добавляем выбранные пользователем фильтры в нужном нам формате. Без таймера не работает.


                    {    

                    setTimeout(function() {


                                    $("#tree  label input").each(function()

                                      {
                                
                                            if ($(this).is(':checked')) {
                
                                            data_type.push($(this).parent().attr('id'));
                                            
                                    
                                     } 
                                

                   
                                });


                     current_data_type=data_type;
                     
                     data_type=[];


                 } , 100);

  
         });

localStorage.current_data_type_1 = JSON.stringify(current_data_type); // Заносим в localStorage необходимую информацию для страницы 'Избранное'
     });


         
  