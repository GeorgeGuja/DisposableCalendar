import { Template } from "meteor/templating"
import { Events } from "/imports/api/events/both/eventsCollection.js"

import "./eventsList.html"
import "./eventItem/eventItem.js"

Template.eventsList.onCreated(function() {
  this.subscribe("events.all")
})

Template.eventsList.onRendered(function() {})

Template.eventsList.onDestroyed(function() {})

Template.eventsList.helpers({
  events() {
    // return Events.find({}, { sort: { createdAt: -1 } })
    return Events.find()
  }
})

Template.eventsList.events({})
