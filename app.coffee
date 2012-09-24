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

#first_metric =  [1.5,2.5,2.1,1.3,1.9,2.1,1.1]
#second_metric = [8+3.2-1.5,8+4.2-2.5,8+5.1-2.1,8+2.9-1.3,8+3.1-1.9,8+2.4-2.1,8+9.3-1.1]
#third_metric =  [3.4,5.1,4.2,1.2,3.4,2.8,3.1]


mongoose = require 'mongoose'
scheme = require './data/dataBase'
eventType = require './data/eventTrackerType'
summW = require './data/weekEvents'
mongo = mongoose.createConnection 'mongodb://194.58.155.187/dev'
events = mongo.model 'event', scheme.eventTracker
#----------------------------------------------------------------Массив из 67 последних часов и минут ([0..6] часы, [7-66] минуты)
first_metric = []

change = []

#----------------------------------------------------------------Сумма событий каждого типа за последний законч. день и последняя законч. неделя (ПН-ВС)
column =
  day :null
  week :null
#----------------------------------------------------------------Массив из 67 изменений часов и минут ([0..6] часы, [7-66] минуты)

app.get "/dataset", (req, res) ->
        
    if req.params.value is 'trouble'
      console.log 'oshibka'
      res.send null
    else 
      
      res.send
         graph_data : first_metric
         change_data: change
         column_data: column
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
    #--------------------------------------------------------------------------------Текущие последнии 7 часов
    findHourCurr.execFind (errH, resH) ->
      for recH in resH
        hour.push recH
      #------------------------------------------------------------------------Предыдущие последние 60 минут
      findMinPrev.execFind (errMinP, resMinP) ->
        for recMinP in resMinP
          minute2.push recMinP
        #----------------------------------------------------------------------Предыдущие последнии 7 часов
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









getEventsGraph()


 
setInterval (->
  getEventsGraph()
), 50000




      


http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")







