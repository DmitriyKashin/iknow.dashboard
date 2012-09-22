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
mongo = mongoose.createConnection 'mongodb://194.58.155.187/dev'
events = mongo.model 'event', scheme.eventTracker

first_metric = []
app.get "/dataset", (req, res) ->
    console.log first_metric[14].DateTime    
    if req.params.value is 'trouble'
      console.log 'oshibka'
      res.send null

    else 
      res.send
         graph_data : first_metric

giveEvents = (minutes, hours) ->
  first_metric = []
  for elem in hours
    first_metric.push elem
    
  for elem1 in minutes
    first_metric.push elem1
 
  
   

 
getEvents = () ->
  hour= []
  minute= []
  
  findMin = events.find({"aggr":"minute"}).sort({"DateTime":-1}).limit(120)
  findHour = events.find({"aggr":"hour"}).sort({"DateTime":-1}).limit(14)
  findMin.execFind (errMin, resMin) ->
    for recMin in resMin
      minute.push recMin
      
      
    findHour.execFind (errH, resH) ->
      for recH in resH
        hour.push recH

      giveEvents(minute, hour)
getEvents()

 
setInterval (->
  getEvents()
), 5000




      


http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")







