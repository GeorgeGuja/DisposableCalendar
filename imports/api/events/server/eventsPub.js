import { Meteor } from "meteor/meteor"
import SimpleSchema from "simpl-schema"

import { Events } from "../both/eventsCollection.js"


// ***************************************************************
// PUBLICATIONS (For the events collection)
// ***************************************************************

// Events List
// -------------------------------------------------------
Meteor.publish("events.all", function eventsAll() {
  return Events.find({}, {
    fields: {
      title: 1,
      type: 1,
      start: 1,
      end: 1,
      guests: 1,
      // calendarId: 1,
      createdAt: 1,
      updatedAt :1
    }
  });
})

// Event Edit
// -------------------------------------------------------
Meteor.publish("events.single", function eventSingle(id) {
  new SimpleSchema({
    id: { type: String }
  }).validate({ id })

  return Events.find({ _id: id }, {
    fields: {
      title: 1,
      type: 1,
      start: 1,
      end: 1,
      guests: 1,
      // calendarId: 1,
      createdAt: 1
    }
  })
})
