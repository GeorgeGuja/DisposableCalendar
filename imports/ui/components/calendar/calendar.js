import "./calendar.html"
import fullCalendar from 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css'
import { Events } from "/imports/api/events/both/eventsCollection.js"
import { Session } from 'meteor/session'
import moment from 'moment'
import "../../components/events/modals/addEditEventModal.html"
import "../../components/events/modals/addEditEventModal.js"

Template.calendar.onRendered(function() {
    let template = Template.instance();
    template.subscribe('events.all');
    let isPast = (date) => {
        let today = moment().format();
        return moment(today).isAfter(date)
    };

    calendar = $('#calendar-component').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: moment(),
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        dayClick(date) {
            Session.set('eventModal', { type: 'add', date: date.format() });
            $('#add-edit-event-modal').modal('show');
        },
        eventClick(event) {
            Session.set('eventModal', { type: 'edit', event: event._id });
            $('#add-edit-event-modal').modal('show');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events(start, end, timezone, callback) {
            let data = Events.find().fetch().map((event) => {
                event.editable = !isPast(event.start);
                return event;
            });

            if (data) {
                callback(data);
            }

        }
    }).data().fullCalendar;
    Tracker.autorun(() => {
        Events.find().fetch();
        $('#calendar-component').fullCalendar('refetchEvents');
    });

});
