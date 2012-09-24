eventType = require './eventTrackerType'
summWeek = (week) ->
	summ = eventType.eventTrackerType
	for w in week
		
		summ.aggr="day"
		summ.pin.show+=w.pin.show
		summ.pin.repin+=w.pin.repin
		summ.pin.update+=w.pin.update
		summ.pin.list.popular+=w.pin.list.popular
		summ.pin.list.new+=w.pin.list.new
		summ.pin.list.contest+=w.pin.list.contest
		summ.pin.list.friends+=w.pin.list.friends
		summ.pin.list.userpins+=w.pin.list.userpins
		summ.pin.list.userlikes+=w.pin.list.userlikes
		summ.pin.create+=w.pin.create
		summ.pin.delete+=w.pin.delete
		summ.pin.like+=w.pin.like
		summ.pin.unlike+=w.pin.unlike
		summ.pin.comment+=w.pin.comment
		summ.plan.show+=w.plan.show
		summ.plan.create+=w.plan.create
		summ.plan.update+=w.plan.update
		summ.plan.delete+=w.plan.delete
		summ.plan.follow+=w.plan.follow
		summ.plan.unfollow+=w.plan.unfollow
		summ.user.show+=w.user.show
		summ.user.showPlans+=w.user.showPlans
		summ.user.showLikes+=w.user.showLikes
		summ.user.showPlaces+=w.user.showPlaces
		summ.user.showEvents+=w.user.showEvents
		summ.user.showNotes+=w.user.showNotes
		summ.user.showFollows+=w.user.showFollows
		summ.user.showFollowers+=w.user.showFollowers
		summ.user.update+=w.user.update
		summ.user.follow+=w.user.follow
		summ.user.unfollow+=w.user.unfollow
		summ.user.registrationFinished+=w.user.registrationFinished
		summ.user.invite.fb+=w.user.invite.fb
		summ.user.invite.vk+=w.user.invite.vk
		summ.user.invite.email+=w.user.invite.email
	summ

#Exports 
exports.summWeek = summWeek