exports.index = (req, res) ->
  res.render "index",
    title: "iknow.dashboard"


exports.firstpage = (req, res) ->
  res.render "firstpage",
    title: "iknow.dashboard.first"

exports.secondpage = (req, res) ->
  res.render "firstpage",
    title: "iknow.dashboard.second"

exports.favorits = (req, res) ->
  res.render "favorits",
    title: "iknow.dashboard.favorits"


exports.description = (req, res) ->
  res.render "description",
    title: "iknow.dashboard"
