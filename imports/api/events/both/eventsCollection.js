import { Mongo } from "meteor/mongo"

import EventsSchema from "./schemas/eventsSchema"

// ***************************************************************
// Events Collection
// ***************************************************************

export const Events = new Mongo.Collection("events")

// We use explicit methods, so deny everything
Events.allow({
  insert() {
    return false
  },
  update() {
    return false
  },
  remove() {
    return false
  }
})

Events.deny({
  insert() {
    return true
  },
  update() {
    return true
  },
  remove() {
    return true
  }
})

// Must remember to attach the schema to the collection
Events.attachSchema(EventsSchema)
