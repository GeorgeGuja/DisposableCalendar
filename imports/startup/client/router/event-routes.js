import { Template } from "meteor/templating"
import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"

import "/imports/ui/components/events/eventsList/eventsList.js"
import "/imports/ui/components/events/edit/eventEdit.js"

// ***************************************************************
// Event routes
// ***************************************************************

// Event INDEX
// -------------------------------------------------------
FlowRouter.route("/events", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "eventsList",
      footer: "footer"
    })
  },
  name: "eventsList"
})

// Event EDIT
// -------------------------------------------------------
FlowRouter.route("/events/:eventId/edit", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "eventEdit",
      footer: "footer"
    })
  },
  name: "eventEdit"
})
