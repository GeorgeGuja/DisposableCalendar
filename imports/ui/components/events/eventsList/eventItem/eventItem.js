import { Template } from "meteor/templating"
import SimpleSchema from "simpl-schema"
import { notify } from "/imports/modules/notifier"

import "./eventItem.html"

Template.eventItem.onCreated(function() {
  this.getEventid = () => Template.instance().data.event._id
})

Template.eventItem.onRendered(function() {})

Template.eventItem.onDestroyed(function() {})

Template.eventItem.helpers({})

Template.eventItem.events({
  "click .js-delete-event"(event, instance) {
    event.preventDefault()

    if (confirm("Are you sure?")) {
      let eventId = Template.instance().getEventid()

      Meteor.call('events.delete',
        {
          eventId: eventId
        },
        (error, result) => {
          if (error) {
            console.log(error.error)
          } else {
            notify("Event deleted!", "error")
          }
        }
      )
    }
  }
})
