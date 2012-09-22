exports.index = (req, res) ->
  res.render "index",
    title: "iknow.dashboard"


exports.firstpage = (req, res) ->
  res.render "firstpage",
    title: "iknow.dashboard.first"

exports.secondpage = (req, res) ->
  res.render "firstpage",
    title: "iknow.dashboard.second"


exports.description = (req, res) ->
  res.render "description",
    title: "iknow.dashboard"
