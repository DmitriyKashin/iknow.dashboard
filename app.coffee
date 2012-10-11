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
app.get "/rose", routes.rose
mongoose = require 'mongoose' 
scheme = require './data/dataBase'
types = require './data/types'
graph_file = require './data/graph'
column_file = require './data/column'
predict_file = require './data/predict'
growth_file = require './data/growth'
events = scheme.eveTrack
#----------------------------------------------------------------Массив из 67 последних часов и минут ([0..6] часы, [7-66] минуты)
first_metric = []
#----------------------------------------------------------------Сумма событий каждого типа за последний законч. день и последняя законч. неделя (ПН-ВС)
change = []
column =
  day :null
  week :null
predict = types.eventSet()
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
      res.send
         graph_data : first_metric
         change_data: change
         column_data: column
         expected_data: predict
         growth_data: growth

#----------------------------------------------------------------------Функции для графика
for_graph = null
getDataForGraph = () ->
  graph_file.getInitData (callback) ->
    for_graph = graph_file.build_data(callback)
    first_metric = for_graph.first_metric
    change = for_graph.change
#------------------------------------------------------------------------------Функции для столбчатой диаграммы
for_column = null
getDataForColumn = () ->
  column_file.build_data (callback) -> 
    for_column=callback
    column.day = for_column.outDay
    column.week = for_column.outWeek
#-----------------------------------------------------------------------------Функции для ожидаемого
for_predict = null
tmp = null 
coeffs = null
getDataForPredict = () ->
  predict_file.getInitData (callback) ->
    data_call = callback
    coeffs = predict_file.calcCoeff(data_call)
    tmp = predict_file.prepareData(first_metric)
    predict = predict_file.build_data(tmp, data_call)
#------------------------------------------------------------------------Функции для анализа роста
getDataForGrowth = () ->
  growth_file.findTotalAndLast (callback) ->
    growth = growth_file.compareTotalAndLast(callback)

getDataForGraph()
getDataForColumn()
getDataForGrowth()

setInterval (->
  getDataForGraph()
  getDataForPredict()
), 3000

setInterval (->
  getDataForGrowth()
  getDataForColumn()
), 3600000

http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")







