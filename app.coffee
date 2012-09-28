express = require("express")
http = require("http")
routes = require("./routes")
app = express()
app.configure ->
  app.set "port", process.env.PORT or 3000
  app.set "views", __dirname + "/views"
  app.set "view engine", "jade"
  app.use express.favicon()
  app.use express.logger("dev")
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static(__dirname + "/public")
app.configure "development", ->
  app.use express.errorHandler() 
app.get "/", routes.index
app.get "/firstpage", routes.firstpage 
app.get "/secondpage", routes.secondpage
app.get "/description", routes.description
app.get "/favorits", routes.favorits
mongoose = require 'mongoose' 
scheme = require './data/dataBase'
eventType = require './data/eventTrackerType'
summW = require './data/weekEvents'
mongo = mongoose.createConnection 'mongodb://194.58.155.187/dev'
events = mongo.model 'event', scheme.eventTracker
#----------------------------------------------------------------Массив из 67 последних часов и минут ([0..6] часы, [7-66] минуты)
first_metric = []
#----------------------------------------------------------------Сумма событий каждого типа за последний законч. день и последняя законч. неделя (ПН-ВС)
change = []
column =
  day :null
  week :null
poliSet = 
  DateTime  :[]
  pin   :
    list  :
      popular :[]
      new :[]
      contest :[]
      friends :[]
      userpins  :[]
      userlikes :[]
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    like  :[]
    unlike  :[]
    repin :[]
    comment :[]
  plan  :
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    follow  :[]
    unfollow  :[]
  user  :
    show  :[]
    showPlans :[]
    showLikes :[]
    showPlaces  :[]
    showEvents  :[]
    showNotes :[]
    showFollows :[]
    showFollowers :[]
    update  :[]
    follow  :[]
    unfollow  :[]
    registrationFinished  :[]
    invite  :
      fb  :[]
      vk  :[]
      email :[]
poliSetH = 
  DateTime  :[]
  pin   :
    list  :
      popular :[]
      new :[]
      contest :[]
      friends :[]
      userpins  :[]
      userlikes :[]
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    like  :[]
    unlike  :[]
    repin :[]
    comment :[]
  plan  :
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    follow  :[]
    unfollow  :[]
  user  :
    show  :[]
    showPlans :[]
    showLikes :[]
    showPlaces  :[]
    showEvents  :[]
    showNotes :[]
    showFollows :[]
    showFollowers :[]
    update  :[]
    follow  :[]
    unfollow  :[]
    registrationFinished  :[]
    invite  :
      fb  :[]
      vk  :[]
      email :[]
predict =  
  DateTime  :[]
  pin   :
    list  :
      popular :[]
      new :[]
      contest :[]
      friends :[]
      userpins  :[]
      userlikes :[]
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    like  :[]
    unlike  :[]
    repin :[]
    comment :[]
  plan  :
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    follow  :[]
    unfollow  :[]
  user  :
    show  :[]
    showPlans :[]
    showLikes :[]
    showPlaces  :[]
    showEvents  :[]
    showNotes :[]
    showFollows :[]
    showFollowers :[]
    update  :[]
    follow  :[]
    unfollow  :[]
    registrationFinished  :[]
    invite  :
      fb  :[]
      vk  :[]
      email :[]
for_predict =  
  DateTime  :[]
  pin   :
    list  :
      popular :[]
      new :[]
      contest :[]
      friends :[]
      userpins  :[]
      userlikes :[]
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    like  :[]
    unlike  :[]
    repin :[]
    comment :[]
  plan  :
    show  :[]
    create  :[]
    update  :[]
    delete  :[]
    follow  :[]
    unfollow  :[]
  user  :
    show  :[]
    showPlans :[]
    showLikes :[]
    showPlaces  :[]
    showEvents  :[]
    showNotes :[]
    showFollows :[]
    showFollowers :[]
    update  :[]
    follow  :[]
    unfollow  :[]
    registrationFinished  :[]
    invite  :
      fb  :[]
      vk  :[]
      email :[]
a0 = 
  pin   :
    list  :
      popular :0
      new :0
      contest :0
      friends :0
      userpins  :0
      userlikes :0
    show  :0
    create  :0
    update  :0
    delete  :0
    like  :0
    unlike  :0
    repin :0
    comment :0
  plan  :
    show  :0
    create  :0
    update  :0
    delete  :0
    follow  :0
    unfollow  :0
  user  :
    show  :0
    showPlans :0
    showLikes :0
    showPlaces  :0
    showEvents  :0
    showNotes :0
    showFollows :0
    showFollowers :0
    update  :0
    follow  :0
    unfollow  :0
    registrationFinished  :0
    invite  :
      fb  :0
      vk  :0
      email :0
a1 = 
  pin   :
    list  :
      popular :0
      new :0
      contest :0
      friends :0
      userpins  :0
      userlikes :0
    show  :0
    create  :0
    update  :0
    delete  :0
    like  :0
    unlike  :0
    repin :0
    comment :0
  plan  :
    show  :0
    create  :0
    update  :0
    delete  :0
    follow  :0
    unfollow  :0
  user  :
    show  :0
    showPlans :0
    showLikes :0
    showPlaces  :0
    showEvents  :0
    showNotes :0
    showFollows :0
    showFollowers :0
    update  :0
    follow  :0
    unfollow  :0
    registrationFinished  :0
    invite  :
      fb  :0
      vk  :0
      email :0
a0H = 
  pin   :
    list  :
      popular :0
      new :0
      contest :0
      friends :0
      userpins  :0
      userlikes :0
    show  :0
    create  :0
    update  :0
    delete  :0
    like  :0
    unlike  :0
    repin :0
    comment :0
  plan  :
    show  :0
    create  :0
    update  :0
    delete  :0
    follow  :0
    unfollow  :0
  user  :
    show  :0
    showPlans :0
    showLikes :0
    showPlaces  :0
    showEvents  :0
    showNotes :0
    showFollows :0
    showFollowers :0
    update  :0
    follow  :0
    unfollow  :0
    registrationFinished  :0
    invite  :
      fb  :0
      vk  :0
      email :0 
a1H = 
  pin   :
    list  :
      popular :0
      new :0
      contest :0
      friends :0
      userpins  :0
      userlikes :0
    show  :0
    create  :0
    update  :0
    delete  :0
    like  :0
    unlike  :0
    repin :0
    comment :0
  plan  :
    show  :0
    create  :0
    update  :0
    delete  :0
    follow  :0
    unfollow  :0
  user  :
    show  :0
    showPlans :0
    showLikes :0
    showPlaces  :0
    showEvents  :0
    showNotes :0
    showFollows :0
    showFollowers :0
    update  :0
    follow  :0
    unfollow  :0
    registrationFinished  :0
    invite  :
      fb  :0
      vk  :0
      email :0
growth =
  roots :0
  average :0
  pins  :0
  
  plans :0
  users :0 
#----------------------------------------------------------------Массив из 67 изменений часов и минут ([0..6] часы, [7-66] минуты)
app.get "/dataset", (req, res) ->
        
    if req.params.value is 'trouble'
      console.log 'oshibka'
      res.send null
    else  
      console.log first_metric
      res.send
         graph_data : first_metric
         change_data: change
         column_data: column
         expected_data: predict
         growth_data: growth
#----------------------------------------------------------------------Функции для графика
giveEventsGraph = (minutesCurr, hoursCurr, minutesPrev, hoursPrev) ->
  first_metric = []
  test_change = []
  change = []

  for hCu in hoursCurr
    first_metric.push hCu
  for mCu in minutesCurr
    first_metric.push mCu

  for hPre in hoursPrev
    change.push hPre
  for mPre in minutesPrev
    change.push mPre
getEventsGraph = () ->
  hour= []
  minute= []
  minute2 = []
  hour2 = []
  findMinCurr = events.find({"aggr":"minute"}).sort({"DateTime":-1}).limit(60)
  findHourCurr = events.find({"aggr":"hour"}).sort({"DateTime":-1}).limit(7)
  findMinPrev = events.find({"aggr":"minute"}).sort({"DateTime":-1}).skip(60).limit(60)
  findHourPrev = events.find({"aggr":"hour"}).sort({"DateTime":-1}).skip(7).limit(7)
  #----------------------------------------------------------------------------------Текущие последние 60 минут
  findMinCurr.execFind (errMin, resMin) ->
    for recMin in resMin
      minute.push recMin
    #--------------------------------------------------------------------------------Текущие последние 7 часов
    findHourCurr.execFind (errH, resH) ->
      for recH in resH
        hour.push recH
      #------------------------------------------------------------------------Предыдущие последние 60 минут
      findMinPrev.execFind (errMinP, resMinP) ->
        for recMinP in resMinP
          minute2.push recMinP
        #----------------------------------------------------------------------Предыдущие последние 7 часов
        findHourPrev.execFind (errHP, resHP) ->
          for recHP in resHP
            hour2.push recHP
          #--------------------------------------------------------------------Callback
          giveEventsGraph(minute, hour, minute2, hour2)
#------------------------------------------------------------------------------Функции для столбчатой диаграммы
giveEventsColumn = (day1, week1) ->
  column.day = day1
  column.week = summW.summWeek(week1)
getEventsColumn = () ->
  day = null
  week = []
  findLastDay = events.find({"aggr":"day"}).sort({"DateTime":-1}).limit(1)
  findLastDay.execFind (err, res) ->
    skip_n = 0
    for elem in res
      day=elem
      skip_n = elem.DateTime.getDay()
    findLastWeek = events.find({"aggr":"day"}).sort({"DateTime":-1}).skip(skip_n).limit(7)
    findLastWeek.execFind (err1, res1) ->
      for elemW in res1
        week.push elemW
      giveEventsColumn(day, week)
#-----------------------------------------------------------------------------Функции для ожидаемого
getPredicted = () ->
  predict =  
    DateTime  :[]
    pin   :
      list  :
        popular :[]
        new :[]
        contest :[]
        friends :[]
        userpins  :[]
        userlikes :[]
      show  :[]
      create  :[]
      update  :[]
      delete  :[]
      like  :[]
      unlike  :[]
      repin :[]
      comment :[]
    plan  :
      show  :[]
      create  :[]
      update  :[]
      delete  :[]
      follow  :[]
      unfollow  :[]
    user  :
      show  :[]
      showPlans :[]
      showLikes :[]
      showPlaces  :[]
      showEvents  :[]
      showNotes :[]
      showFollows :[]
      showFollowers :[]
      update  :[]
      follow  :[]
      unfollow  :[]
      registrationFinished  :[]
      invite  :
        fb  :[]
        vk  :[]
        email :[]
  for prop of for_predict
    object = for_predict[prop]
    if object.hasOwnProperty("show")
      for event_type of object 
        event_object = object[event_type]
        if (event_object.hasOwnProperty("popular") or event_object.hasOwnProperty("fb"))
          for subevent_type of event_object
            subevent_object = event_object[subevent_type]
            for i in [0..6]
              pred_elem = ((a0H[prop])[event_type])[subevent_type] + ((((for_predict[prop])[event_type])[subevent_type])[i] * ((a1H[prop])[event_type])[subevent_type])
              (((predict[prop])[event_type])[subevent_type]).push (pred_elem).toFixed(2)
            for i in [7..66]
              pred_elem = ((a0[prop])[event_type])[subevent_type] + ((((for_predict[prop])[event_type])[subevent_type])[i] * ((a1[prop])[event_type])[subevent_type])
              (((predict[prop])[event_type])[subevent_type]).push (pred_elem).toFixed(2)
        else
          for i in [0..6]
              pred_elem = ((a0H[prop])[event_type]) + ((((for_predict[prop])[event_type]))[i] * ((a1H[prop])[event_type]))
              (((predict[prop])[event_type])).push (pred_elem).toFixed(2)
              #console.log event_type+" : "+pred_elem
            for i in [7..66]
              pred_elem = ((a0[prop])[event_type]) + ((((for_predict[prop])[event_type]))[i] * ((a1[prop])[event_type]))
              (((predict[prop])[event_type])).push (pred_elem).toFixed(2)          
regressFinish = () ->
  for_predict.DateTime = []
  for_predict.pin.show = []
  for_predict.pin.repin = []
  for_predict.pin.update = []
  for_predict.pin.list.popular = []
  for_predict.pin.list.new = []
  for_predict.pin.list.contest = []
  for_predict.pin.list.friends = []
  for_predict.pin.list.userpins = []
  for_predict.pin.list.userlikes = []
  for_predict.pin.create = [] 
  for_predict.pin.delete = [] 
  for_predict.pin.like = [] 
  for_predict.pin.unlike = [] 
  for_predict.pin.comment = []
  for_predict.plan.show = []
  for_predict.plan.create = []
  for_predict.plan.update = []
  for_predict.plan.delete = []
  for_predict.plan.follow = []
  for_predict.plan.unfollow = []
  for_predict.user.show = []
  for_predict.user.showPlans = []
  for_predict.user.showLikes = [] 
  for_predict.user.showPlaces = []  
  for_predict.user.showEvents = []
  for_predict.user.showNotes = []
  for_predict.user.showFollows = [] 
  for_predict.user.showFollowers = [] 
  for_predict.user.update = []  
  for_predict.user.follow = []
  for_predict.user.unfollow = []
  for_predict.user.registrationFinished = []
  for_predict.user.invite.fb = []
  for_predict.user.invite.vk = []
  for_predict.user.invite.email = []
  for elem in first_metric
    #console.log elem
    for_predict.DateTime.push elem.DateTime 
    for_predict.pin.show.push elem.pin.show
    for_predict.pin.repin.push elem.pin.repin 
    for_predict.pin.update.push elem.pin.update
    for_predict.pin.list.popular.push elem.pin.list.popular
    for_predict.pin.list.new.push elem.pin.list.new
    for_predict.pin.list.contest.push elem.pin.list.contest
    for_predict.pin.list.friends.push elem.pin.list.friends 
    for_predict.pin.list.userpins.push elem.pin.list.userpins 
    for_predict.pin.list.userlikes.push elem.pin.list.userlikes 
    for_predict.pin.create.push elem.pin.create 
    for_predict.pin.delete.push elem.pin.delete 
    for_predict.pin.like.push elem.pin.like 
    for_predict.pin.unlike.push elem.pin.unlike 
    for_predict.pin.comment.push elem.pin.comment
    for_predict.plan.show.push elem.plan.show
    for_predict.plan.create.push elem.plan.create
    for_predict.plan.update.push elem.plan.update
    for_predict.plan.delete.push elem.plan.delete
    for_predict.plan.follow.push elem.plan.follow
    for_predict.plan.unfollow.push elem.plan.unfollow
    for_predict.user.show.push elem.user.show
    for_predict.user.showPlans.push elem.user.showPlans
    for_predict.user.showLikes.push elem.user.showLikes 
    for_predict.user.showPlaces.push elem.user.showPlaces 
    for_predict.user.showEvents.push elem.user.showEvents
    for_predict.user.showNotes.push elem.user.showNotes
    for_predict.user.showFollows.push elem.user.showFollows 
    for_predict.user.showFollowers.push elem.user.showFollowers 
    for_predict.user.update.push elem.user.update 
    for_predict.user.follow.push elem.user.follow
    for_predict.user.unfollow.push elem.user.unfollow
    for_predict.user.registrationFinished.push elem.user.registrationFinished
    for_predict.user.invite.fb.push elem.user.invite.fb
    for_predict.user.invite.vk.push elem.user.invite.vk
    for_predict.user.invite.email.push elem.user.invite.email
  getPredicted()
calcCoeff = (set, setH) ->
  #console.log setH
  det = 0
  summ_x = 0
  summ_x_2 = 0
  summ_y = 0
  len = setH.DateTime.length
  for el1 in set.DateTime
    summ_x += el1.getHours()
    summ_x_2 +=(summ_x*summ_x)
  for prop of setH
    object = setH[prop]
    if object.hasOwnProperty("show")
      for event_type of object 
        event_object = object[event_type]
        if (event_object.hasOwnProperty("popular") or event_object.hasOwnProperty("fb"))
          for subevent_type of event_object
            subevent_object = event_object[subevent_type]
            summ_y = 0
            for el_arr1 in subevent_object
              summ_y += el_arr1
            det = (summ_x_2*len)-(summ_x*summ_x)
            ((a0H[prop])[event_type])[subevent_type] = (((summ_x_2*summ_y)+(summ_x*summ_x*summ_y))/det)
            ((a1H[prop])[event_type])[subevent_type] = (((summ_x*summ_y)+(len*summ_x*summ_y))/det)
        else
          summ_y = 0
          for el_arr in event_object
            summ_y += el_arr
          det = (summ_x_2*len)-(summ_x*summ_x)
          (a0H[prop])[event_type] = (((summ_x_2*summ_y)+(summ_x*summ_x*summ_y))/det)
          (a1H[prop])[event_type] = (((summ_x*summ_y)+(len*summ_x*summ_y))/det)
          #console.log a0H
  det = 0
  summ_x = 0
  summ_x_2 = 0
  summ_y = 0
  len = set.DateTime.length
  for el in set.DateTime
    summ_x += el.getMinutes()
    summ_x_2 +=(summ_x*summ_x)
  for prop of set
    object = set[prop]
    if object.hasOwnProperty("show")
      for event_type of object 
        event_object = object[event_type]
        if (event_object.hasOwnProperty("popular") or event_object.hasOwnProperty("fb"))
          for subevent_type of event_object
            subevent_object = event_object[subevent_type]
            summ_y = 0
            for el_arr1 in subevent_object
              summ_y += el_arr1
            det = (summ_x_2*len)-(summ_x*summ_x)
            ((a0[prop])[event_type])[subevent_type] = (((summ_x_2*summ_y)+(summ_x*summ_x*summ_y))/det)
            ((a1[prop])[event_type])[subevent_type] = (((summ_x*summ_y)+(len*summ_x*summ_y))/det)
        else
          summ_y = 0
          for el_arr in event_object
            summ_y += el_arr  
          det = (summ_x_2*len)-(summ_x*summ_x)
          (a0[prop])[event_type] = (((summ_x_2*summ_y)+(summ_x*summ_x*summ_y))/det)
          (a1[prop])[event_type] = (((summ_x*summ_y)+(len*summ_x*summ_y))/det)  
regressStart = () ->
  findLast = events.find({"aggr":"minute"}).sort({$natural:-1}).skip(60).limit(180)
  findLastH = events.find({"aggr":"hour"}).sort({$natural:-1}).skip(7).limit(21)
  findLast.execFind (err, res) ->
    poliSet.DateTime = [] 
    poliSet.pin.show = []  
    poliSet.pin.repin = []    
    poliSet.pin.update = []    
    poliSet.pin.list.popular = []
    poliSet.pin.list.new = [] 
    poliSet.pin.list.contest = []
    poliSet.pin.list.friends = []
    poliSet.pin.list.userpins = []
    poliSet.pin.list.userlikes = []
    poliSet.pin.create = [] 
    poliSet.pin.delete = [] 
    poliSet.pin.like = []  
    poliSet.pin.unlike = [] 
    poliSet.pin.comment = []
    poliSet.plan.show = []
    poliSet.plan.create = []
    poliSet.plan.update = [] 
    poliSet.plan.delete = []
    poliSet.plan.follow = []
    poliSet.plan.unfollow = []
    poliSet.user.show = []
    poliSet.user.showPlans = []
    poliSet.user.showLikes = []  
    poliSet.user.showPlaces = []  
    poliSet.user.showEvents = []
    poliSet.user.showNotes = []
    poliSet.user.showFollows = [] 
    poliSet.user.showFollowers = [] 
    poliSet.user.update = []  
    poliSet.user.follow = []
    poliSet.user.unfollow = []
    poliSet.user.registrationFinished = []
    poliSet.user.invite.fb = []
    poliSet.user.invite.vk = []
    poliSet.user.invite.email = []
    for elem in res
      #console.log elem
      poliSet.DateTime.push elem.DateTime 
      poliSet.pin.show.push elem.pin.show
      poliSet.pin.repin.push elem.pin.repin 
      poliSet.pin.update.push elem.pin.update
      poliSet.pin.list.popular.push elem.pin.list.popular
      poliSet.pin.list.new.push elem.pin.list.new
      poliSet.pin.list.contest.push elem.pin.list.contest
      poliSet.pin.list.friends.push elem.pin.list.friends 
      poliSet.pin.list.userpins.push elem.pin.list.userpins 
      poliSet.pin.list.userlikes.push elem.pin.list.userlikes 
      poliSet.pin.create.push elem.pin.create 
      poliSet.pin.delete.push elem.pin.delete 
      poliSet.pin.like.push elem.pin.like 
      poliSet.pin.unlike.push elem.pin.unlike 
      poliSet.pin.comment.push elem.pin.comment
      poliSet.plan.show.push elem.plan.show
      poliSet.plan.create.push elem.plan.create
      poliSet.plan.update.push elem.plan.update
      poliSet.plan.delete.push elem.plan.delete
      poliSet.plan.follow.push elem.plan.follow
      poliSet.plan.unfollow.push elem.plan.unfollow
      poliSet.user.show.push elem.user.show
      poliSet.user.showPlans.push elem.user.showPlans
      poliSet.user.showLikes.push elem.user.showLikes 
      poliSet.user.showPlaces.push elem.user.showPlaces 
      poliSet.user.showEvents.push elem.user.showEvents
      poliSet.user.showNotes.push elem.user.showNotes
      poliSet.user.showFollows.push elem.user.showFollows 
      poliSet.user.showFollowers.push elem.user.showFollowers 
      poliSet.user.update.push elem.user.update 
      poliSet.user.follow.push elem.user.follow
      poliSet.user.unfollow.push elem.user.unfollow
      poliSet.user.registrationFinished.push elem.user.registrationFinished
      poliSet.user.invite.fb.push elem.user.invite.fb
      poliSet.user.invite.vk.push elem.user.invite.vk
      poliSet.user.invite.email.push elem.user.invite.email
    findLastH.execFind (err1, res1) ->
      poliSetH.DateTime = []
      poliSetH.pin.show = []
      poliSetH.pin.repin = []
      poliSetH.pin.update = []
      poliSetH.pin.list.popular = []
      poliSetH.pin.list.new = []
      poliSetH.pin.list.contest = []
      poliSetH.pin.list.friends = []
      poliSetH.pin.list.userpins = []
      poliSetH.pin.list.userlikes = []
      poliSetH.pin.create = []  
      poliSetH.pin.delete = []  
      poliSetH.pin.like = []  
      poliSetH.pin.unlike = []  
      poliSetH.pin.comment = []
      poliSetH.plan.show = []
      poliSetH.plan.create = []
      poliSetH.plan.update = []
      poliSetH.plan.delete = []
      poliSetH.plan.follow = []
      poliSetH.plan.unfollow = []
      poliSetH.user.show = []
      poliSetH.user.showPlans = []
      poliSetH.user.showLikes = []  
      poliSetH.user.showPlaces = [] 
      poliSetH.user.showEvents = []
      poliSetH.user.showNotes = []
      poliSetH.user.showFollows = []  
      poliSetH.user.showFollowers = []  
      poliSetH.user.update = [] 
      poliSetH.user.follow = []
      poliSetH.user.unfollow = []
      poliSetH.user.registrationFinished = []
      poliSetH.user.invite.fb = []
      poliSetH.user.invite.vk = []
      poliSetH.user.invite.email = []
      for elem1 in res1
        poliSetH.DateTime.push elem1.DateTime 
        poliSetH.pin.show.push elem1.pin.show
        poliSetH.pin.repin.push elem1.pin.repin 
        poliSetH.pin.update.push elem1.pin.update
        poliSetH.pin.list.popular.push elem1.pin.list.popular
        poliSetH.pin.list.new.push elem1.pin.list.new
        poliSetH.pin.list.contest.push elem1.pin.list.contest
        poliSetH.pin.list.friends.push elem1.pin.list.friends 
        poliSetH.pin.list.userpins.push elem1.pin.list.userpins 
        poliSetH.pin.list.userlikes.push elem1.pin.list.userlikes 
        poliSetH.pin.create.push elem1.pin.create 
        poliSetH.pin.delete.push elem1.pin.delete 
        poliSetH.pin.like.push elem1.pin.like 
        poliSetH.pin.unlike.push elem1.pin.unlike 
        poliSetH.pin.comment.push elem1.pin.comment
        poliSetH.plan.show.push elem1.plan.show
        poliSetH.plan.create.push elem1.plan.create
        poliSetH.plan.update.push elem1.plan.update
        poliSetH.plan.delete.push elem1.plan.delete
        poliSetH.plan.follow.push elem1.plan.follow
        poliSetH.plan.unfollow.push elem1.plan.unfollow
        poliSetH.user.show.push elem1.user.show
        poliSetH.user.showPlans.push elem1.user.showPlans
        poliSetH.user.showLikes.push elem1.user.showLikes 
        poliSetH.user.showPlaces.push elem1.user.showPlaces 
        poliSetH.user.showEvents.push elem1.user.showEvents
        poliSetH.user.showNotes.push elem1.user.showNotes
        poliSetH.user.showFollows.push elem1.user.showFollows 
        poliSetH.user.showFollowers.push elem1.user.showFollowers 
        poliSetH.user.update.push elem1.user.update 
        poliSetH.user.follow.push elem1.user.follow
        poliSetH.user.unfollow.push elem1.user.unfollow
        poliSetH.user.registrationFinished.push elem1.user.registrationFinished
        poliSetH.user.invite.fb.push elem1.user.invite.fb
        poliSetH.user.invite.vk.push elem1.user.invite.vk
        poliSetH.user.invite.email.push elem1.user.invite.email
      calcCoeff(poliSet, poliSetH)
#------------------------------------------------------------------------Функции для анализа роста
compareTotalAndLast = (total, last) ->
  all = []
  repin = 0
  pin=0
  plan = 0
  user = 0
  if total.pin.show isnt last.pin.show
    all.push (last.pin.show/(total.pin.show - last.pin.show))
  else if last.pin.show is 0
    all.push 0
  else 
    all.push 1
  if total.pin.repin isnt last.pin.repin
    all.push (last.pin.repin/(total.pin.repin - last.pin.repin))
    repin = (last.pin.repin/(total.pin.repin - last.pin.repin))
  else if last.pin.repin is 0
    all.push 0
  else 
    all.push 1
  if total.pin.update isnt last.pin.update
    all.push (last.pin.update/(total.pin.update - last.pin.update))
  else if last.pin.update is 0
    all.push 0
  else 
    all.push 1
  if total.pin.list.popular isnt last.pin.list.popular
    all.push (last.pin.list.popular/(total.pin.list.popular - last.pin.list.popular))
  else if last.pin.list.popular is 0
    all.push 0
  else 
    all.push 1
  if ((last.pin.list.new) isnt last.pin.list.new)
    all.push (last.pin.list.new/(total.pin.list.new - last.pin.list.new))
  else if last.pin.list.new is 0
    all.push 0
  else 
    all.push 1
  if total.pin.list.contest isnt last.pin.list.contest
    all.push (last.pin.list.contest/(total.pin.list.contest - last.pin.list.contest))
  else if last.pin.list.contest is 0
    all.push 0
  else 
    all.push 1
  if total.pin.list.friends isnt last.pin.list.friends
    all.push (last.pin.list.friends/(total.pin.list.friends - last.pin.list.friends))
  else if last.pin.list.friends is 0
    all.push 0
  else 
    all.push 1
  if total.pin.list.userpins isnt last.pin.list.userpins
    all.push (last.pin.list.userpins/(total.pin.list.userpins - last.pin.list.userpins))
  else if last.pin.list.userpins is 0
    all.push 0
  else 
    all.push 1
  if total.pin.list.userlikes isnt last.pin.list.userlikes  
    all.push (last.pin.list.userlikes/(total.pin.list.userlikes - last.pin.list.userlikes)) 
  else if last.pin.list.userlikes is 0
    all.push 0
  else 
    all.push 1
  if total.pin.create isnt last.pin.create
    all.push (last.pin.create/(total.pin.create - last.pin.create))
    pin = (last.pin.create/(total.pin.create - last.pin.create))  
  else if last.pin.create is 0
    all.push 0
  else 
    all.push 1
  if total.pin.delete isnt last.pin.delete
    all.push (last.pin.delete/(total.pin.delete - last.pin.delete))
  else if last.pin.delete is 0
    all.push 0
  else 
    all.push 1
  if total.pin.like isnt last.pin.like
    all.push (last.pin.like/(total.pin.like - last.pin.like)) 
  else if last.pin.like is 0
    all.push 0
  else 
    all.push 1
  if total.pin.unlike isnt last.pin.unlike
    all.push (last.pin.unlike/(total.pin.unlike - last.pin.unlike))
  else if last.pin.unlike is 0
    all.push 0
  else 
    all.push 1
  if total.pin.comment isnt last.pin.comment
    all.push (last.pin.comment/(total.pin.comment - last.pin.comment))
  else if last.pin.comment is 0
    all.push 0
  else 
    all.push 1
  if total.plan.show isnt last.plan.show
    all.push (last.plan.show/(total.plan.show - last.plan.show))
  else if last.plan.show is 0
    all.push 0
  else 
    all.push 1
  if total.plan.create isnt last.plan.create
    all.push (last.plan.create/(total.plan.create - last.plan.create))
    plan = (last.plan.create/(total.plan.create - last.plan.create))
  else if last.plan.create is 0
    all.push 0
  else 
    all.push 1
  if total.plan.update isnt last.plan.update
    all.push (last.plan.update/(total.plan.update - last.plan.update))
  else if last.plan.update is 0
    all.push 0
  else 
    all.push 1
  if total.plan.delete isnt last.plan.delete
    all.push (last.plan.delete/(total.plan.delete - last.plan.delete))
  else if last.plan.delete is 0
    all.push 0
  else 
    all.push 1
  if total.plan.follow isnt last.plan.follow
    all.push (last.plan.follow/(total.plan.follow - last.plan.follow))
  else if last.plan.follow is 0
    all.push 0
  else 
    all.push 1
  if total.plan.unfollow isnt last.plan.unfollow
    all.push (last.plan.unfollow/(total.plan.unfollow - last.plan.unfollow))
  else if last.plan.unfollow is 0
    all.push 0
  else 
    all.push 1
  if total.user.show isnt last.user.show
    all.push (last.user.show/(total.user.show - last.user.show))
  else if last.user.show is 0
    all.push 0
  else 
    all.push 1
  if total.user.showPlans isnt last.user.showPlans
    all.push (last.user.showPlans/(total.user.showPlans - last.user.showPlans))
  else if last.user.showPlans is 0
    all.push 0
  else 
    all.push 1
  if total.user.showLikes isnt last.user.showLikes
    all.push (last.user.showLikes/(total.user.showLikes - last.user.showLikes))
  else if last.user.showLikes is 0
    all.push 0
  else 
    all.push 1
  if total.user.showPlaces isnt last.user.showPlaces  
    all.push (last.user.showPlaces/(total.user.showPlaces - last.user.showPlaces))
  else if last.user.showPlaces is 0
    all.push 0
  else 
    all.push 1
  if total.user.showEvents isnt last.user.showEvents
    all.push (last.user.showEvents/(total.user.showEvents - last.user.showEvents))
  else if last.user.showEvents is 0
    all.push 0
  else 
    all.push 1
  if total.user.showNotes isnt last.user.showNotes
    all.push (last.user.showNotes/(total.user.showNotes - last.user.showNotes))
  else if last.user.showNotes is 0
    all.push 0
  else 
    all.push 1
  if total.user.showFollows isnt last.user.showFollows
    all.push (last.user.showFollows/(total.user.showFollows - last.user.showFollows))
  else if last.user.showFollows is 0
    all.push 0
  else 
    all.push 1
  if total.user.showFollowers isnt last.user.showFollowers  
    all.push (last.user.showFollowers/(total.user.showFollowers - last.user.showFollowers))
  else if last.user.showFollowers is 0
    all.push 0
  else 
    all.push 1
  if total.user.update isnt last.user.update  
    all.push (last.user.update/(total.user.update - last.user.update))  
  else if last.user.update is 0
    all.push 0
  else 
    all.push 1
  if total.user.follow isnt last.user.follow
    all.push (last.user.follow/(total.user.follow - last.user.follow))
  else if last.user.follow is 0
    all.push 0
  else 
    all.push 1
  if total.user.unfollow isnt last.user.unfollow
    all.push (last.user.unfollow/(total.user.unfollow - last.user.unfollow))
  else if last.user.unfollow is 0
    all.push 0
  else 
    all.push 1
  if total.user.registrationFinished isnt last.user.registrationFinished
    all.push (last.user.registrationFinished/(total.user.registrationFinished - last.user.registrationFinished))
    user = (last.user.registrationFinished/(total.user.registrationFinished - last.user.registrationFinished))
  else if last.user.registrationFinished is 0
    all.push 0
  else 
    all.push 1
  if total.user.invite.fb isnt last.user.invite.fb
    all.push (last.user.invite.fb/(total.user.invite.fb - last.user.invite.fb))
  else if last.user.invite.fb is 0
    all.push 0
  else 
    all.push 1
  if total.user.invite.vk isnt last.user.invite.vk
    all.push (last.user.invite.vk/(total.user.invite.vk - last.user.invite.vk))
  else if last.user.invite.vk is 0
    all.push 0
  else 
    all.push 1
  if total.user.invite.email isnt last.user.invite.email
    all.push (last.user.invite.email/(total.user.invite.email - last.user.invite.email))
  else if last.user.invite.email is 0
    all.push 0
  else 
    all.push 1
  pre =0
  pre2 = 0
  for elem in all
    pre +=(elem*elem)
    pre2 +=elem
  len = all.length
  result2 = pre2/len
  result = Math.sqrt(pre)
  pin_base = pin+repin
  aver = result2*100
  ppin = pin_base*100
  pplan = plan*100
  puser = user*100
  result = result*100
  result=result.toFixed(2)
  aver = aver.toFixed(2)
  ppin = ppin.toFixed(2)
  pplan= pplan.toFixed(2)
  puser = puser.toFixed(2)
  growth.roots = result
  growth.average = aver
  growth.pins = ppin
  growth.plans = pplan
  growth.users = puser
findTotalAndLast = () ->
  findTotal = events.find({"aggr":'total'})
  findLast = events.find({"aggr":"day"}).sort({"DateTime":-1}).limit(1)
  total = null
  last = null
  findTotal.execFind (errT, resT) ->
    for elemT in resT
      total = elemT
    findLast.execFind (errL, resL) ->
      for elemL in resL
        last = elemL
      compareTotalAndLast(total, last)






getEventsGraph()
getEventsColumn()
findTotalAndLast()


setInterval (->
  getEventsGraph()
  regressStart()
  regressFinish()

), 10000




setInterval (->
  findTotalAndLast()
  getEventsColumn()
), 3600000





      


http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")







