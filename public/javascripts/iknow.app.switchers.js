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






function proSwitcher_2(current_data_type_one, i)                                 // Анализируем выбранное пользователем и добавляем данные для первой метрики.


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
                     second_metric.push(change_data[i].user.show.settings)
                     break

                     case 'user.show.plans':
                     second_metric.push(change_data[i].user.show.plans)
                     break

                     case 'user.show.likes':
                     second_metric.push(change_data[i].user.show.likes)
                     break

                     case 'user.show.places':
                     second_metric.push(change_data[i].user.show.likes)
                     break

                     case 'user.show.events':
                     second_metric.push(change_data[i].user.show.events)
                     break

                     case 'user.show.follows':
                     second_metric.push(change_data[i].user.show.follow)
                     break

                     case 'user.show.followers':
                     second_metric.push(change_data[i].user.show.followers)
                     break

                      case 'user.show.notes':
                     second_metric.push(change_data[i].user.show.notes)
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