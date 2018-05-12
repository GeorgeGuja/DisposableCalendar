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

The Meteor packages 'autopublish' and 'insecure' are removed by default.

## Structure

```
client
import
  api/
    documents/
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