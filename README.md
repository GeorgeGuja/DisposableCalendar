# DisposableCalendar
The purpose of DisposableCalendar is to serve as a throwaway calendar for you and your coworkers. No authorization steps, no sign ups or logins. Simply generate yourself a unique calendar and share the link with your guests. Anyone can add or edit events if they have your calendar link. Easy to share, easy to onboard. 

## Features
- Calendar: Javascript fullCalendar library used with Meteor.
- Ability to have a unique route to a calendar.
- Ability to view, create, edit, and delete events within calendar.
- Events List: Ability to view, edit, delete events across the site outside of the calendar.

## How To run
```
git clone https://github.com/GeorgeGuja/DisposableCalendar.git
cd DisposableCalendar
meteor npm install
meteor
```
## Demo
http://ec2-54-164-101-100.compute-1.amazonaws.com:3000/

## Current State
- Not production ready. Hosted on a ubuntu EC2 T2.MICRO manually. Need to implement CI workflow.
- **For demo purposes everyone can see all events** this is easy to resolve via publication change however.

## Packages used

## Atmosphere

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

## NPM

- simpl-schema
- bootstrap
- moment
- noty
- fullcalendar

## Security
Methods are located on the server and use the check package to ensure arguments past are correct. Allow/Deny rules are in place aswell. 

## Publications
We list the fields in the publication that we want to publish because in the future we may add additional fields to the document and wouldn't want those fields explicitly published. I've commented out the publication field for calendarID for demo purposes. Right now the calendar is wired to show all events in the database for DEMO purposes. 

## Autorun
Why is it important to use Tracker.autoRun? 
```
Tracker.autorun(() => {
  Events.find().fetch();
  $('#calendar-component').fullCalendar('refetchEvents');
});
```
Since the calendar is located in the onCreated function for the template the data/events will not be available on first draw. Having Meteors autorun function within the onCreated will assist in redrawing the calendar with the events that are incoming from the publication. You must have a reactive data source inside the autorun function for this to work correctly. Anytime where is a change in the collection of events the calendar will run its refetchEvents function. 



## Core Meteor Competencies in project:
- Application Structure
- Routing
- Templating
- Schemas
- Security Rules
- Publications
- Methods
- Importing 3rd party NPM packages
- Error handling

## BoilerPlate
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
