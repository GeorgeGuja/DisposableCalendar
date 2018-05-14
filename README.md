# DisposableCalendar
The purpose of DisposableCalendar is to serve as a throwaway calendar for you and your coworkers. No authorization steps, no sign ups or logins. Simply generate yourself a unique calendar and share the link with your guests. Anyone can add or edit events if they have your calendar link. Easy to share, easy to onboard. 


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
