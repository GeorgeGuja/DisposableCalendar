import { Meteor } from "meteor/meteor"
import SimpleSchema from "simpl-schema"

import { Events } from "../both/eventsCollection.js"

Meteor.publish('events', function() { 
    return Events.find(); 
} );


// ***************************************************************
// PUBLICATIONS (For the events collection)
// ***************************************************************

// Events List
// -------------------------------------------------------
Meteor.publish("events.all", function eventsAll() {
  return Events.find()
})

// Event Edit
// -------------------------------------------------------
Meteor.publish("events.single", function eventSingle(id) {
  new SimpleSchema({
    id: { type: String }
  }).validate({ id })

  return Events.find(id)
})
