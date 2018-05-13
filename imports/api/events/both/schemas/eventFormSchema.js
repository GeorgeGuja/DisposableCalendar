import SimpleSchema from "simpl-schema"

// ***************************************************************
// Update event schema
// ***************************************************************

const eventFormSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: false
  },
  'title': {
    type: String,
    label: 'The title of this event.'
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
  // 'start': {
  //   type: String,
  //   label: 'When this event will start.',
  // },
  // 'end': {
  //   type: String,
  //   label: 'When this event will end.'
  // },
  // 'calendarId': {
  //   type: String,
  //   label: 'The ID of the current calendar associated with the event.',
  // },
})

export default eventFormSchema
