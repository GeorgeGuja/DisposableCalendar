import SimpleSchema from "simpl-schema"

let EventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this event.'
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  },
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: ['Birthday', 'Corporate', 'Team Lunch', 'After Hours Social']
  },
  'guests': {
    type: Number,
    label: 'The number of guests expected at this event.'
  },
  'calendarId': {
    type: String,
    label: 'The ID of the current calendar associated with the event.',
  },
  'createdAt': {
    type: Date,
    denyUpdate: true,
    label: 'Time of creation',
    optional: true,
    autoValue: function() {
      if (Meteor.isServer && this.isInsert) {
        return new Date();
      }
    }
  },
  'updatedAt': {
    type: Date,
    optional: true,
    label: 'Time of most recent update',
    autoValue: function() {
      if (Meteor.isServer && (this.isInsert || this.isUpdate)) {
        return new Date();
      }
    }
  },
});


export default EventsSchema