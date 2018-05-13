# DisposableCalendar


## Packages used

### Atmosphere

- blaze-html-templates
- accounts-base
- #alanning:roles
- kadira:flow-router
- kadira:blaze-layout
- arillo:flow-router-helpers
- zimme:active-route
- aldeed:schema-deny
- aldeed:collection2-core
- aldeed:autoform
- fourseven:scss

### NPM

- simpl-schema
- bootstrap
- moment
- noty
- fullcalendar

### BoilerPlate
BoilerPlate included routing, structure, and permissions. 
https://github.com/kjetilhau/meteor-skeleton



## Structure

```
client
import
  api/
    events/
      both/
        schemas/
      server/
  modules/
  startup/
    both/
    client/
      router/
    server/
  ui/
    components/
    helpers/
    layouts/
    pages/
    shared/
    stylesheets/
      theme/
public
  img/
  fonts/
server
```

### Notes

Why is it important to use Tracker.autoRun?

  this.autorun(function () {
      Bookings.find().fetch();
      var fc = self.$('.fc');
      fc.fullCalendar('refetchEvents');
  });
  
  You must have a reactive data source inside your autorun to ensure that it executes when data changes. 
  In this case we don't actually need to get the data within the autorun since you are using the FullCalendar events callback. 
  So Bookings.find().fetch() just ensures each time the collection changes refetchEvents is run.