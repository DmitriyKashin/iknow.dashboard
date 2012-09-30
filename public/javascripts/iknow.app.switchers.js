function proSwitcher(current_data_type_one, i, first_metric, current_data) // Анализируем выбранные пользователем события и добавляем данные для графика.


    {
        
        switch (current_data_type_one) {


        case 'pin.show':
           
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


    function proSwitcher_4(current_data_type_one, i, third_metric, expected_data) // Анализируем выбранные пользователем события и добавляем данные для графика.


    {

        switch (current_data_type_one) {


        case 'pin.show':
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






    function proSwitcher_2(current_data_type_one, i, second_metric, change_data) // Аналогично для изменений.


    {


        switch (current_data_type_one) {


        case 'pin.show':

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


    function proSwitcher_3(current_data_type_one, type, bar_graph, column_data) //  Свитчер для распределения событий. Устанавливаем значения в зависимости от выбора : день или неделя.


    {
        if (type == 'day') {
            switch (current_data_type_one) {


            case 'pin.show':
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
        } else {


            switch (current_data_type_one) {


            case 'pin.show':
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