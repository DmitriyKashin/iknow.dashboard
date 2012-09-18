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
app.get "/description", routes.description

first_metric =  [1.5,2.5,2.1,1.3,1.9,2.1,1.1]
second_metric = [8+3.2-1.5,8+4.2-2.5,8+5.1-2.1,8+2.9-1.3,8+3.1-1.9,8+2.4-2.1,8+9.3-1.1]
third_metric =  [3.4,5.1,4.2,1.2,3.4,2.8,3.1]

app.get "/dataset", (req, res) ->

    res.send
      fm: first_metric
      sm: second_metric
      tm: third_metric

      


http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")







