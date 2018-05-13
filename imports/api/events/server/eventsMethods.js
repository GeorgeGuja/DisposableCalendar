import { Meteor } from "meteor/meteor"
import SimpleSchema from "simpl-schema"
import { ValidatedMethod } from "meteor/mdg:validated-method"

import { Events } from "../both/eventsCollection.js"
import eventFormSchema from "../both/schemas/eventFormSchema.js"

Meteor.methods({
  addEvent( event ) {
    check( event, {
      title: String,
      start: String,
      end: String,
      type: String,
      guests: Number,
      calendarId: String
    });

    try {
      return Events.insert( event );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  },
  editEvent( event ) {
    check( event, {
      _id:String,
      title: String,
      start: String,
      end: String,
      type: String,
      guests: Number,
      calendarId: String
    });

    try {
      return Events.update(
      event._id,
      {
        $set: {
          title: event.title,
          type: event.type,
          guests: event.guests
        }
      },
      function(error, result) {
        if (error) {
          throw new Meteor.Error(500, "Server error")
        }
      }
    )
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});


export const deleteEvent = new ValidatedMethod({
  name: "events.delete",
  validate: new SimpleSchema({
    eventId: { type: String }
  }).validator(),
  run({ eventId }) {
    // Additional data verification

    return Events.remove(eventId, function(error, result) {
      if (error) {
        throw new Meteor.Error(500, "Server error")
      }
    })
  }
})
