
import { FlowRouter } from "meteor/kadira:flow-router"

import { Events } from "/imports/api/events/both/eventsCollection.js"
import eventFormSchema from "/imports/api/events/both/schemas/eventFormSchema.js"


import "./eventEditHooks.js"
import "./eventEdit.html"

Template.eventEdit.onCreated(function() {
  this.getEventId = () => FlowRouter.getParam("eventId")

  this.autorun(() => {
    this.subscribe("events.single", this.getEventId())
  })
})



Template.eventEdit.helpers({
  eventFormSchema: function() {
    return eventFormSchema
  },
  event() {
    return Events.findOne({ _id: Template.instance().getEventId() }) || {}
  }
})

