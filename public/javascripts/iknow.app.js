$(document).ready(function(){

   


        var expected_data;
        var growth_data   =[]
        var current_data = []   // Данные для динамики событий
        var change_data = []    // Изменения для динамики событий
        var column_data = []    // Данные для распределения событий. День\ неделя.
        var first_metric =  []  // Первая линия на графике
        var second_metric = []  // Вторая ( у нас - изменения)
        var third_metric =  []  // Потенциальная третья ( например ожидаемая)
        var lines = new Array(); // Массив объектов для динамики событий
        var bars = new Array();  // Массив объектов для распределения событий
        var tooltip_metric = new Array(); // Подсказки для динамики событий
        var tooltip_count = 0; // Счетчик подсказок
         
        var bar_graph_labels = []; // Лэйблы для отрисовки распределения событий. (Максимум - 5)
        var bar_count = 0;        // Счетчик для того, чтобы отрисовать распределения выбранных пользователем событий с рассчетом 5 на 1 график
        var current_code = 'trouble'; // Код ошибки, чтобы сервер не обрабатывал ошибочный запрос. (Отсылается 3 почему-то)
        var data_type=[];             // Временная переменная для создания current_data_type
        var bar_graph = [];           // Данные для отрисовки распределения событий ( Максимум -5)
        var current_data_type=[];     // Выбранные на текущий момент пользователем события
        var temp_id = 0;               // Показатель, необходимый для корректной отрисовки распределения событий
        var fake = 0;                  // 
        var bar;       
        var fake_count = 0;            // fake, fake_count  - Работа с фиктивным точками в дереве событий. (Например, pin.list, user, ...  - не должно учитываться при построении)




    $.ajax('/dataset', {                                            // Получаем первый набор данных.
        type: 'GET',
        dataType: 'json',
        success: function(data) {  

            current_data = data.graph_data;
            change_data  = data.change_data;
            column_data  = data.column_data;
            expected_data = data.expected_data;
            growth_data = data.growth_data;
            if ($("#select").val()=='iknow.dashboard.second')
            window.parent.$('#param').append('<b>Growth (root) : '+growth_data.roots+'%</b> &nbsp&nbsp&nbsp <b>Growth (average) : '+growth_data.average+'%</b>&nbsp&nbsp&nbsp<b>Pins: '+growth_data.pins+'%</b>&nbsp&nbsp&nbsp<b>Plans: '+growth_data.plans+'%</b>&nbsp&nbsp&nbsp<b>Users: '+growth_data.users+'%</b>');


                    



            

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

if ($("#select").val()=='iknow.dashboard.first')                  // Если мы находимся на странице динамики событий

 { 


// Добавляем в массив линий новую, соответствующую входным параметрам

        lines[graph_id]=  new RGraph.Line(graph_id, first_metric, second_metric);
        tooltip_count++;
        tooltip_metric[tooltip_count] = new Array();
        
// Генерируем подсказки
        if (type=='hours') {
        for (i=0;i<first_metric.length;i++) {
        if (second_metric!=null) tooltip_metric[tooltip_count][i] = '<b style="color:green;"> Реальное: '+first_metric[i].toString()+'</b><br><b style="color:red;"> Изменения: '+(-second_metric[i]+first_metric[i]).toString()+'</b><br><b style="color:blue;"> Ожидаемое: '+third_metric[i]+'</b>';
        else tooltip_metric[tooltip_count][i] = '<b style="color:green;"> Реальное: '+first_metric[i].toString()+'</b>';
    }
    }

     else 
     {
        for (i=0;i<first_metric.length;i++) {
        if (second_metric!=null) tooltip_metric[tooltip_count][i] = '<b style="color:green;"> Реальное: '+first_metric[i].toString()+'</b><br><b style="color:red;"> Изменения: '+(-second_metric[i]+first_metric[i]).toString()+'</b><br><b style="color:blue;"> Ожидаемое: '+third_metric[i+7]+'</b>';
        else tooltip_metric[tooltip_count][i] = '<b style="color:green;"> Реальное: '+first_metric[i].toString()+'</b>';
     }


     }
// Устанавливаем свойства объекта - графика.
      
        lines[graph_id].Set('char.ylabels.count', 3);
        lines[graph_id].Set('chart.linewidth', 3);
        lines[graph_id].Set('chart.colors', ['black']);    
        lines[graph_id].Set('chart.key', ['Количество событий','Предыдущий период']);
        lines[graph_id].Set('chart.key.position', 'gutter');
        lines[graph_id].Set('chart.key.position.x', 30);
        lines[graph_id].Set('chart.key.position.y', 30);
        lines[graph_id].Set('chart.key.background', 'rgba(255,255,255,0.5)');
        lines[graph_id].Set('chart.key.color.shape', 'circle');
        lines[graph_id].Set('chart.key.shadow.color', 'white');
        lines[graph_id].Set('chart.tickmarks', 'circle');
        lines[graph_id].Set('chart.colors', ['#2E2EB8','rgba(255,255,255,0.5)','green']);
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


       
// Для минут и часов  - labels должны быть разными. Динамически меняем максимальное значение по Y - максимум из значений текущих и за прошлый период + 10% сверху от этого для наглядности

        if (type=='minutes') {

        lines[graph_id].Set('chart.labels', ['1','', '', '', '5', '', '','','', '10', '', '', '', '',
            '15','', '', '', '', '20', '',
            '','', '', '25', '', '', '',
            '','30', '', '', '', '', '35',
            '','', '', '', '40', '', '',
            '','', '45', '', '', '', '',
            '50','', '', '', '', '55', '',
            '','', '', '60']);  

         lines[graph_id].Set('chart.ymax', Math.max(Math.max.apply(null,first_metric),Math.max.apply(null,second_metric)) + Math.max(Math.max.apply(null,first_metric),Math.max.apply(null,second_metric)) / 10);
        

           };
        




        if (type=='hours') {

        
        lines[graph_id].Set('chart.labels', ['1','2', '3', '4', '5', '6', '7']);
        lines[graph_id].Set('chart.ymax', Math.max(Math.max.apply(null,first_metric),Math.max.apply(null,second_metric)) + Math.max(Math.max.apply(null,first_metric),Math.max.apply(null,second_metric)) / 10);
       
        };
         

        lines[graph_id].Draw();


    }


    if ($("#select").val()=='iknow.dashboard.second')   // Если находимся на странице распределения событий

 { 
            // Новый объект столбчатой диаграммы. 
            bars[graph_id] = new RGraph.Bar(graph_id, first_metric);
          
            bars[graph_id].Set('chart.labels', bar_graph_labels);      
            bars[graph_id].Set('chart.background.grid.autofit', true);
        
            bars[graph_id].Set('chart.hmargin', 15);
            bars[graph_id].Set('chart.gutter.left', 45);
            bars[graph_id].Set('chart.background.grid.autofit.numhlines', 10);
            bars[graph_id].Set('chart.background.grid.color', 'black');
            bars[graph_id].Set('chart.background.barcolor1', 'orange');
            bars[graph_id].Set('chart.background.barcolor2', 'orange');
            bars[graph_id].Set('chart.text.color', 'white');       
            bars[graph_id].Set('chart.fillstyle', ['orange']);
           
            bars[graph_id].Set('chart.hmargin', 5);
            bars[graph_id].Draw();
            



 }

        }

 




function proSwitcher(current_data_type_one, i)                                 // Анализируем выбранные пользователем события и добавляем данные для графика.


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
                     first_metric.push(current_data[i].user.show)
                     break

                     case 'user.show.plans':
                     first_metric.push(current_data[i].user.showPlans)
                     break

                     case 'user.show.likes':
                     first_metric.push(current_data[i].user.showLikes)
                     break

                     case 'user.show.places':
                     first_metric.push(current_data[i].user.showPlaces)

                     break

                     case 'user.show.events':
                     first_metric.push(current_data[i].user.showEvents)
                     break

                     case 'user.show.follows':
                     first_metric.push(current_data[i].user.showFollows)
                     break

                     case 'user.show.followers':
                     first_metric.push(current_data[i].user.showFollowers)
                     break

                      case 'user.show.notes':
                     first_metric.push(current_data[i].user.showNotes)
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


function proSwitcher_4(current_data_type_one, i)                                 // Анализируем выбранные пользователем события и добавляем данные для графика.


{

    switch (current_data_type_one) {


                     case 'pin.show' :
                     third_metric.push(expected_data.pin.show[i])
                     break

                     case 'pin.update':
                     third_metric.push(expected_data.pin.update[i])
                     break

                    case 'pin.list.contest':
                     third_metric.push(expected_data.pin.list.contest[i])
                     break

                    case 'pin.list.new':
                     third_metric.push(expected_data.pin.list.new[i])
                     break

                    case 'pin.list.popular':
                     third_metric.push(expected_data.pin.list.popular[i])
                     break

                     case 'pin.list.friends':
                     third_metric.push(expected_data.pin.list.friends[i])
                     break
                     case 'pin.list.userpins':
                     third_metric.push(expected_data.pin.list.userpins[i])
                     break
                     case 'pin.list.userlikes':
                     third_metric.push(expected_data.pin.list.userlikes[i])
                     break

                     case 'pin.create':
                     third_metric.push(expected_data.pin.create[i])
                     break

                     case 'pin.delete':
                     third_metric.push(expected_data.pin.delete[i])
                     break

                     case 'pin.like':
                     third_metric.push(expected_data.pin.like[i])
                     break

                     case 'pin.unlike':
                     third_metric.push(expected_data.pin.unlike[i])
                     break

                     case 'pin.unlike':
                     third_metric.push(expected_data.pin.unlike[i])
                     break

                     case 'pin.repin':
                     third_metric.push(expected_data.pin.repin[i])
                     break

                     case 'pin.comment':
                     third_metric.push(expected_data.pin.comment[i])
                     break


                     case 'user.show.settings':
                     third_metric.push(expected_data.user.show[i])
                     break

                     case 'user.show.plans':
                     third_metric.push(expected_data.user.showPlans[i])
                     break

                     case 'user.show.likes':
                     third_metric.push(expected_data.user.showLikes[i])
                     break

                     case 'user.show.places':
                     third_metric.push(expected_data.user.showPlaces)

                     break

                     case 'user.show.events':
                     third_metric.push(expected_data.user.showEvents[i])
                     break

                     case 'user.show.follows':
                     third_metric.push(expected_data.user.showFollows[i])
                     break

                     case 'user.show.followers':
                     third_metric.push(expected_data.user.showFollowers[i])
                     break

                      case 'user.show.notes':
                     third_metric.push(expected_data.user.showNotes[i])
                     break

                      case 'user.update':
                     third_metric.push(expected_data.user.update[i])
                     break

                      case 'user.follow':
                     third_metric.push(expected_data.user.follow[i])
                     break

                      case 'user.unfollow':
                     third_metric.push(expected_data.user.unfollow[i])
                     break

                      case 'user.registrationFinished':
                     third_metric.push(expected_data.user.registrationFinished[i])
                     break

                      case 'user.invite':
                     third_metric.push(expected_data.user.invite[i])
                     break

                     case 'plan.show':
                     third_metric.push(expected_data.plan.show[i])
                     break
                     case 'plan.update':
                     third_metric.push(expected_data.plan.update[i])
                     break
                     case 'plan.create':
                     third_metric.push(expected_data.plan.create[i])
                     break
                     case 'plan.delete':
                     third_metric.push(expected_data.plan.delete[i])
                     break
                     case 'plan.follow':
                     third_metric.push(expected_data.plan.follow[i])
                     break
                     case 'plan.show':
                     third_metric.push(expected_data.plan.show[i])
                     break
                     case 'plan.unfollow':
                     third_metric.push(expected_data.plan.unfollow[i])
                     break
                    }



                
       

                    return third_metric;

}






function proSwitcher_2(current_data_type_one, i)                                 // Аналогично для изменений.


{


    switch (current_data_type_one) {


                     case 'pin.show' :

                     second_metric.push(change_data[i].pin.show)

                     break

                     case 'pin.update':
                     second_metric.push(change_data[i].pin.update)
                     break

                    case 'pin.list.contest':
                     second_metric.push(change_data[i].pin.list.contest)
                     break

                    case 'pin.list.new':
                     second_metric.push(change_data[i].pin.list.new)
                     break

                    case 'pin.list.popular':
                     second_metric.push(change_data[i].pin.list.popular)
                     break

                     case 'pin.list.friends':
                     second_metric.push(change_data[i].pin.list.friends)
                     break
                     case 'pin.list.userpins':
                     second_metric.push(change_data[i].pin.list.userpins)
                     break
                     case 'pin.list.userlikes':
                     second_metric.push(change_data[i].pin.list.userlikes)
                     break

                     case 'pin.create':
                     second_metric.push(change_data[i].pin.create)
                     break

                     case 'pin.delete':
                     second_metric.push(change_data[i].pin.delete)
                     break

                     case 'pin.like':
                     second_metric.push(change_data[i].pin.like)
                     break

                     case 'pin.unlike':
                     second_metric.push(change_data[i].pin.unlike)
                     break

                     case 'pin.unlike':
                     second_metric.push(change_data[i].pin.unlike)
                     break

                     case 'pin.repin':
                     second_metric.push(change_data[i].pin.repin)
                     break

                     case 'pin.comment':
                     second_metric.push(change_data[i].pin.comment)
                     break


                     case 'user.show.settings':
                     second_metric.push(change_data[i].user.show)
                     break

                     case 'user.show.plans':
                     second_metric.push(change_data[i].user.showPlans)
                     break

                     case 'user.show.likes':
                     second_metric.push(change_data[i].user.showLikes)
                     break

                     case 'user.show.places':
                     second_metric.push(change_data[i].user.showPlaces)
                     break

                     case 'user.show.events':
                     second_metric.push(change_data[i].user.showEvents)
                     break

                     case 'user.show.follows':
                     second_metric.push(change_data[i].user.showFollows)
                     break

                     case 'user.show.followers':
                     second_metric.push(change_data[i].user.showFollowers)
                     break

                      case 'user.show.notes':
                     second_metric.push(change_data[i].user.showNotes)
                     break

                      case 'user.update':
                     second_metric.push(change_data[i].user.update)
                     break

                      case 'user.follow':
                     second_metric.push(change_data[i].user.follow)
                     break

                      case 'user.unfollow':
                    second_metric.push(change_data[i].user.unfollow)
                     break

                      case 'user.registrationFinished':
                     second_metric.push(change_data[i].user.registrationFinished)
                     break

                    case 'user.invite':
                     second_metric.push(change_data[i].user.invite)
                     break

                    case 'plan.show':
                     second_metric.push(change_data[i].plan.show)
                     break
                     case 'plan.update':
                     second_metric.push(change_data[i].plan.update)
                     break
                     case 'plan.create':
                     second_metric.push(change_data[i].plan.create)
                     break
                     case 'plan.delete':
                     second_metric.push(change_data[i].plan.delete)
                     break
                     case 'plan.follow':
                     second_metric.push(change_data[i].plan.follow)
                     break
                     case 'plan.show':
                     second_metric.push(change_data[i].plan.show)
                     break
                     case 'plan.unfollow':
                     second_metric.push(change_data[i].plan.unfollow)
                     break
                    }




                    return second_metric;

}


function proSwitcher_3(current_data_type_one, type)                                 //  Свитчер для распределения событий. Устанавливаем значения в зависимости от выбора : день или неделя.


{
  if (type=='day') {
    switch (current_data_type_one) {


                     case 'pin.show' :
                     bar_graph.push(column_data.day.pin.show)
                     break

                     case 'pin.update':
                     bar_graph.push(column_data.day.pin.update)
                     break

                     case 'pin.list.contest':
                     bar_graph.push(column_data.day.pin.list.contest)
                     break

                     case 'pin.list.new':
                     bar_graph.push(column_data.day.pin.list.new)
                     break

                     case 'pin.list.popular':
                     bar_graph.push(column_data.day.pin.list.popular)
                     break

                     case 'pin.list.friends':
                     bar_graph.push(column_data.day.pin.list.friends)
                     break

                     case 'pin.list.userpins':
                     bar_graph.push(column_data.day.pin.list.userpins)
                     break

                     case 'pin.list.userlikes':
                     bar_graph.push(column_data.day.pin.list.userlikes)
                     break

                     case 'pin.create':
                     bar_graph.push(column_data.day.pin.create)
                     break

                     case 'pin.delete':
                     bar_graph.push(column_data.day.pin.delete)
                     break

                     case 'pin.like':
                     bar_graph.push(column_data.day.pin.like)
                     break

                     case 'pin.unlike':
                     bar_graph.push(column_data.day.pin.unlike)
                     break

                     case 'pin.unlike':
                     bar_graph.push(column_data.day.pin.unlike)
                     break

                     case 'pin.repin':
                     bar_graph.push(column_data.day.pin.repin)
                     break

                     case 'pin.comment':
                     bar_graph.push(column_data.day.pin.comment)
                     break


                     case 'user.show.settings':
                     bar_graph.push(column_data.day.user.show)
                     break

                     case 'user.show.plans':
                     bar_graph.push(column_data.day.user.showPlans)
                     break

                     case 'user.show.likes':
                     bar_graph.push(column_data.day.user.showLikes)
                     break

                     case 'user.show.places':
                     bar_graph.push(column_data.day.user.showPlaces)
                     break

                     case 'user.show.events':
                     bar_graph.push(column_data.day.user.showEvents)
                     break

                     case 'user.show.follows':
                     bar_graph.push(column_data.day.user.showFollows)
                     break

                     case 'user.show.followers':
                     bar_graph.push(column_data.day.user.showFollowers)
                     break

                     case 'user.show.notes':
                     bar_graph.push(column_data.day.user.showNotes)
                     break

                     case 'user.update':
                     bar_graph.push(column_data.day.user.update)
                     break

                     case 'user.follow':
                     bar_graph.push(column_data.day.user.follow)
                     break

                     case 'user.unfollow':
                     bar_graph.push(column_data.day.user.unfollow)
                     break

                     case 'user.registrationFinished':
                     bar_graph.push(column_data.day.user.registrationFinished)
                     break

                     case 'user.invite':
                     bar_graph.push(column_data.day.user.invite)
                     break

                     case 'plan.show':
                     bar_graph.push(column_data.day.plan.show)
                     break

                     case 'plan.update':
                     bar_graph.push(column_data.day.plan.update)
                     break

                     case 'plan.create':
                     bar_graph.push(column_data.day.plan.create)
                     break

                     case 'plan.delete':
                     bar_graph.push(column_data.day.plan.delete)
                     break

                     case 'plan.follow':
                     bar_graph.push(column_data.day.plan.follow)
                     break

                     case 'plan.show':
                     bar_graph.push(column_data.day.plan.show)
                     break

                     case 'plan.unfollow':
                     bar_graph.push(column_data.day.plan.unfollow)
                     break
                    }
                }
            else {


                switch (current_data_type_one) {


                     case 'pin.show' :
                     bar_graph.push(column_data.week.pin.show)
                     break

                     case 'pin.update':
                     bar_graph.push(column_data.week.pin.update)
                     break

                     case 'pin.list.contest':
                     bar_graph.push(column_data.week.pin.list.contest)
                     break

                     case 'pin.list.new':
                     bar_graph.push(column_data.week.pin.list.new)
                     break

                     case 'pin.list.popular':
                     bar_graph.push(column_data.week.pin.list.popular)
                     break

                     case 'pin.list.friends':
                     bar_graph.push(column_data.week.pin.list.friends)
                     break

                     case 'pin.list.userpins':
                     bar_graph.push(column_data.week.pin.list.userpins)
                     break

                     case 'pin.list.userlikes':
                     bar_graph.push(column_data.week.pin.list.userlikes)
                     break

                     case 'pin.create':
                     bar_graph.push(column_data.week.pin.create)
                     break

                     case 'pin.delete':
                     bar_graph.push(column_data.week.pin.delete)
                     break

                     case 'pin.like':
                     bar_graph.push(column_data.week.pin.like)
                     break

                     case 'pin.unlike':
                     bar_graph.push(column_data.week.pin.unlike)
                     break

                     case 'pin.unlike':
                     bar_graph.push(column_data.week.pin.unlike)
                     break

                     case 'pin.repin':
                     bar_graph.push(column_data.week.pin.repin)
                     break

                     case 'pin.comment':
                     bar_graph.push(column_data.week.pin.comment)
                     break


                     case 'user.show.settings':
                     bar_graph.push(column_data.week.user.show)
                     break

                     case 'user.show.plans':
                     bar_graph.push(column_data.week.user.showPlans)
                     break

                     case 'user.show.likes':
                     bar_graph.push(column_data.week.user.showLikes)
                     break

                     case 'user.show.places':
                     bar_graph.push(column_data.week.user.showPlaces)
                     break

                     case 'user.show.events':
                     bar_graph.push(column_data.week.user.showEvents)
                     break

                     case 'user.show.follows':
                     bar_graph.push(column_data.week.user.showFollows)
                     break

                     case 'user.show.followers':
                     bar_graph.push(column_data.week.user.showFollowers)
                     break

                     case 'user.show.notes':
                     bar_graph.push(column_data.week.user.showNotes)
                     break

                     case 'user.update':
                     bar_graph.push(column_data.week.user.update)
                     break

                     case 'user.follow':
                     bar_graph.push(column_data.week.user.follow)
                     break

                     case 'user.unfollow':
                     bar_graph.push(column_data.week.user.unfollow)
                     break

                     case 'user.registrationFinished':
                     bar_graph.push(column_data.week.user.registrationFinished)
                     break

                     case 'user.invite':
                     bar_graph.push(column_data.week.user.invite)
                     break

                     case 'plan.show':
                     bar_graph.push(column_data.week.plan.show)
                     break

                     case 'plan.update':
                     bar_graph.push(column_data.week.plan.update)
                     break

                     case 'plan.create':
                     bar_graph.push(column_data.week.plan.create)
                     break

                     case 'plan.delete':
                     bar_graph.push(column_data.week.plan.delete)
                     break

                     case 'plan.follow':
                     bar_graph.push(column_data.week.plan.follow)
                     break

                     case 'plan.show':
                     bar_graph.push(column_data.week.plan.show)
                     break

                     case 'plan.unfollow':
                     bar_graph.push(column_data.week.plan.unfollow)
                     break
                    }

            }


                
                    return bar_graph;

}



function data_selection(current_data_type_one, graph_numb)                                              // Проверка на часы\минуты, запуск отрисовки, запуск вышестоящего анализатора.
{


first_metric = [];
second_metric = [];



        if ($("#graph_switcher-"+graph_numb+" span").text() =='show last 60 minutes') 

        {
            
          
            for (i=6; i>-1;i--) 
            { 
                
                if (current_data[i].aggr=='hour') 


                {
              
                   
                        first_metric = proSwitcher(current_data_type_one, i);
                        second_metric = proSwitcher_2(current_data_type_one, i);
                        third_metric = proSwitcher_4(current_data_type_one, i);
                        
                       

                    

                }
            }


         if ($("#changes_denide-"+graph_numb+" span").text()=='Denide changes') {
         drawing(first_metric, second_metric, third_metric , 'hours', graph_numb);  

         }
         else { 

        drawing(first_metric, null, third_metric , 'hours', graph_numb); 
        }


        }


        if ($("#graph_switcher-"+graph_numb+" span").text()=='show last 7 hours') {

            
            

             for (i=66; i>=7; i--) 
            { 
                
                if (current_data[i].aggr=='minute') 
                {


                   first_metric = proSwitcher(current_data_type_one, i);
                   second_metric = proSwitcher_2(current_data_type_one, i);
                   third_metric = proSwitcher_4(current_data_type_one, i);
                   

                }
            }

         if ($("#changes_denide-"+graph_numb+" span").text()=='Denide changes') {
         drawing(first_metric, second_metric, third_metric , 'minutes', graph_numb);  

         }
         else { 

        drawing(first_metric, null, third_metric , 'minutes', graph_numb); 
        } 

        }
}





function data_selection_bar(current_data_type_one, graph_numb)            // Здесь готовим данные по 5 единиц для создания графиков на странице распределения событий.

{

bar_count++;

bar_graph = proSwitcher_3(current_data_type_one,'day');
bar_graph_labels.push(current_data_type_one.toString());

    if ( (bar_count==5) || (bar_count==10) || (bar_count==15) || (bar_count==20) || (bar_count==25) || (bar_count==30) )
                           
                            {
                                
                                drawing(bar_graph, null, null, 'bar', graph_numb);
                                bar_graph=[];
                                bar_graph_labels=[];


                            }
    else



    if (current_data_type.length-fake_count==bar_count) {
            

                                drawing(bar_graph, null, null, 'bar', graph_numb);
                                bar_graph=[];
                                bar_graph_labels=[];
    }

}









$("#show_graph").click(function()                 // Рисуем графики по нажатию на кнопку. Удаляем все предыдущие. Проверяем на лже-графики (pin, list..)


{


$(".drogable").remove();

var fg=1; // Для обозначения первого отрисованного графика. Его свойства немного отличаются. ( отступ сверху, например, другой)

// Если мы на странице динамики :

if ($("#select").val()=='iknow.dashboard.first') {

for (j=0; j<current_data_type.length; j++){
    
    
    if ((current_data_type[j] != 'pin.list') && (current_data_type[j] != 'user') && (current_data_type[j] != 'pin') && (current_data_type[j] != 'plan') && (current_data_type[j] != 'user.show') )  {

    if (fg==1)
    $("body").append('<div style="width:1000px; height:400px; margin-top:-100px; margin-left:40%;"> <div id="graph_div-'+j+'" style=" min-width:800px; min-height:350px;border:3px solid white; width:1000px; height:380px; padding-bottom:40px; padding-top:10px; padding-left:10px;"  class="drogable"><b style="color:white; ">'+current_data_type[j]+'</b><button style=" color:white;font-size: 10px; height:25px;width:200px;margin-left:100px; " id="graph_switcher-'+j+'" class="switcher">show last 60 minutes</button><button style="color:white;font-size: 10px; height:25px;width:200px;margin-left:20%;  " class = "changer" id="changes_denide-'+j+'">Denide changes</button><canvas id="'+j+'" width="1000" style="max-width: 1200px; min-width:700px; min-height:350px;" height="350" no="" canvas="" support=""></canvas></div> </div> ');    
    else   
    $("body").append('<div style="width:1000px; height:400px; margin-top:50px; margin-left:40%;"><div id="graph_div-'+j+'" style="min-width:800px;  min-height:350px;border:3px solid white; width:1000px; height:380px; padding-bottom:40px; padding-top:10px; padding-left:10px;"  class="drogable"><b style="color:white; ">'+current_data_type[j]+'</b><button style=" color:white;font-size: 10px; height:25px;width:200px;margin-left:100px; " id="graph_switcher-'+j+'" class="switcher">show last 60 minutes</button><button style="color:white;font-size: 10px; height:25px;width:200px;margin-left:20%;  " class = "changer" id="changes_denide-'+j+'">Denide changes</button><canvas id="'+j+'" width="1000" style="max-width: 1200px; min-width:700px; min-height:350px;" height="350" no="" canvas="" support=""></canvas></div> </div> ');    
            
    count=j;
    fg=0;
    newLife();
    data_selection(current_data_type[j], count); 
    j=count;
} 
}
}

// Если на странице распределений
if ($("#select").val()=='iknow.dashboard.second') {

bar_graph=[];
bar_graph_labels=[];   // Зануляем предыдущие 5 точек и лэйблы для них
bar_count = 0;
temp_id=0;
fake=0;               // Fake - "Чистый" счетчик, который отбрасывает фиктивные точки, в отличие от j.
fake_count=0;


for (j=0; j<(current_data_type.length); j++){

    // Проверяем точки в дереве на фиктивность
    
    if ((current_data_type[j] != 'pin.list') && (current_data_type[j] != 'user') && (current_data_type[j] != 'pin') && (current_data_type[j] != 'plan') && (current_data_type[j] != 'user.show') )  {
  
 //Первый график
 if (fake==0) {
    $("body").append('<div style="width:1000px; height:400px; margin-top:-100px; margin-left:40%;"><div id="graph_div-'+fake+'" style=" min-width:700px; min-height:350px;border:3px solid white; width:1000px; height:380px; padding-bottom:40px; padding-top:10px; padding-left:10px;"  class="drogable"><button style="color:white;font-size: 10px; height:25px;width:200px;margin-left:20%;   " class = "changer" id="changes_denide-'+fake+'">Denide changes</button> <div id="radio'+fake+'" class ="radio" style="font-size:10px;  margin-top:-25px; width:200px; margin-left:60%; "><input type="radio" id="radio_1'+fake+'"   name="radio'+fake+'" /><label for="radio_1'+fake+'">Last Week</label><input type="radio" id="radio_2'+fake+'" checked="checked" name="radio'+fake+'" /><label for="radio_2'+fake+'">Last Day</label></div><canvas id="'+fake+'" width="1000" style="max-width: 1200px; min-width:700px; min-height:320px;" height="350" no="" canvas="" support=""></canvas></div>  </div>');    
    temp_id = 0;
    } 
    else
   // Если пора рисовать новый график из 5 элементов - мы это делаем.
    if ( (fake==5) || (fake==10) || (fake==15) || (fake==20) || (fake==25) || (fake==30) ) {
    $("body").append('<div style="width:1000px; height:400px; margin-top:50px; margin-left:40%;"><div id="graph_div-'+fake+'" style=" min-width:700px; min-height:350px;border:3px solid white; width:1000px; height:380px; padding-bottom:40px; padding-top:10px; padding-left:10px;"  class="drogable"><button style="color:white;font-size: 10px; height:25px;width:200px;margin-left:20%;   " class = "changer" id="changes_denide-'+fake+'">Denide changes</button> <div id="radio'+fake+'" class ="radio" style="font-size:10px;  margin-top:-25px; width:200px; margin-left:60%; "><input type="radio" id="radio_1'+fake+'"   name="radio'+fake+'" /><label for="radio_1'+fake+'">Last Week</label><input type="radio" id="radio_2'+fake+'" checked="checked" name="radio'+fake+'" /><label for="radio_2'+fake+'">Last Day</label></div><canvas id="'+fake+'" width="1000" style="max-width: 1200px; min-width:700px; min-height:320px;" height="350" no="" canvas="" support=""></canvas></div> </div> ');    
    temp_id = fake;
}
    count=j;
    newLife();
    data_selection_bar(current_data_type[j], temp_id); 
    fake++;
    j=count;
} else fake_count++;  // Fake_count - количество фиктивных точек в выбранном дереве событий. Используется в data_selection_bar для четкого перехода к новому графику.

}
}


 
$(".radio").buttonset();  // Отрисовка всех добавленных элементов на основе jQuery UI


$(".radio input").click(function(){  // Меняем день на неделю и обратно у выбранного графика на странице распределения событий

   bar_graph=[];
   bar_graph_labels = [];
    
   var change_id = parseInt($(this).attr('id')[7] +  $(this).attr('id')[8]);

   bar_graph_labels = bars[change_id].Get('chart.labels');

   if ($(this).attr('id')[6]=='1') {

   for (i=0;i<bar_graph_labels.length;i++) {
   bar_graph = proSwitcher_3(bar_graph_labels[i],'week');}

   }

   else
   {

   for (i=0;i<bar_graph_labels.length;i++) {
   bar_graph = proSwitcher_3(bar_graph_labels[i],'day');}
   }


   
   drawing(bar_graph, null , null, 'bar', change_id);
   
   

    
})

$(".switcher span").click(function () {   // Отрисовываем график заного при переключении на часы\минуты


      
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

$(".changer span").click(function() {  // Убераем изменения или добавляем их на выбранные график на странице динамики событий.


if ($(this).text()=='Denide changes') {

    $(this).html('Enable changes');
    
    graph_numb = parseInt($(this).parent().attr('id')[15] + $(this).parent().attr('id')[16]);

    data_selection(current_data_type[graph_numb], graph_numb);

}

else

{
    $(this).html('Denide changes');
    graph_numb = parseInt($(this).parent().attr('id')[15] + $(this).parent().attr('id')[16]);
    data_selection(current_data_type[graph_numb], graph_numb);

}




});



});



setInterval (function() {     // Получаем актуальную информацию каждые 60 сек.

    $.ajax('/dataset', {
        type: 'GET',
        dataType: 'json',
        success: function(data) {  

            current_data = data.graph_data;
            change_data  = data.change_data;
            column_data  = data.column_data;
            expected_data = data.expected_data;
            growth_data = data.growth_data;


        if ($("#select").val()=='iknow.dashboard.first') {       // Обновляем все текущие графики на странице динамики событий.

                    for (j=0; j < count+1; j++){

                    data_selection(current_data_type[j], j);
                    

                    }          
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


$("#favorites").click(function()

{

if ($("#select").val()=='iknow.dashboard.first') 
localStorage.current_data_type_1 = JSON.stringify(current_data_type); // Заносим в localStorage необходимую информацию для страницы 'Избранное'
if ($("#select").val()=='iknow.dashboard.second')
localStorage.current_data_type_2 = JSON.stringify(current_data_type);


})

     });


         
  