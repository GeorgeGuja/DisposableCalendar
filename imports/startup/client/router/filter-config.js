import { FlowRouter } from "meteor/kadira:flow-router"
import { Meteor } from "meteor/meteor"

import { notify } from "/imports/modules/notifier"

// ***************************************************************
// Route filters & triggers
// ***************************************************************

// Simple redirect unless user is logged in
const mustBeLoggedIn = (context, redirect, stop) => {
  if (!Meteor.userId()) {
    redirect("frontpage")
    notify("Must be logged in!", "error")
  }
}

