import { FlowRouter } from "meteor/kadira:flow-router"
import { BlazeLayout } from "meteor/kadira:blaze-layout"
import { Random } from 'meteor/random'

import "/imports/ui/pages/frontpage/frontpage.js"
import "/imports/ui/components/calendar/calendar.js"

// ***************************************************************
// Static pages
// ***************************************************************

// FRONTPAGE
// -------------------------------------------------------
FlowRouter.route("/", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "frontpage",
      footer: "footer"
    })
  },
  name: "frontpage"
})

// ABOUT
// -------------------------------------------------------
FlowRouter.route("/calendar/:id", {
  action: function() {
    BlazeLayout.render("layout", {
      header: "header",
      main: "calendar",
      footer: "footer"
    })
  },
  name: "calendar"
})
