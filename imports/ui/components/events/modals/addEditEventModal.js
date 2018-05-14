import { Events } from "/imports/api/events/both/eventsCollection.js"
import { FlowRouter } from "meteor/kadira:flow-router"
import { notify } from "/imports/modules/notifier"


Template.addEditEventModal.helpers({
  modalType(type) {
    let eventModal = Session.get('eventModal');
    if (eventModal) {
      return eventModal.type === type;
    }
  },
  modalLabel() {
    let eventModal = Session.get('eventModal');

    if (eventModal) {
      return {
        button: eventModal.type === 'edit' ? 'Edit' : 'Add',
        label: eventModal.type === 'edit' ? 'Edit' : 'Add an'
      };
    }
  },
  selectedValue(eventType, selectOption) {
    return eventType === selectOption;
  },
  event() {
    let eventModal = Session.get('eventModal');

    if (eventModal) {
      return eventModal.type === 'edit' ? Events.findOne(eventModal.event) : {
        start: eventModal.date,
        end: eventModal.date
      };
    }
  }
});

Template.addEditEventModal.events({
  'submit form' (event, template) {
    event.preventDefault();

    let closeModal = () => {
      $('#add-edit-event-modal').find('form')[0].reset();
      $('#add-edit-event-modal').modal('hide');
      $('.modal-backdrop').fadeOut();
    };

    let eventModal = Session.get('eventModal'),
      submitType = eventModal.type === 'edit' ? 'editEvent' : 'addEvent',
      eventItem = {};

    if (submitType === 'addEvent') {
      eventItem = {
        title: template.find('[name="title"]').value,
        start: template.find('[name="start"]').value,
        end: template.find('[name="end"]').value,
        type: template.find('[name="type"] option:selected').value,
        guests: parseInt(template.find('[name="guests"]').value, 10),
        calendarId: FlowRouter.getParam("id")
      };
    }


    if (submitType === 'editEvent') {
      eventItem = {
        title: template.find('[name="title"]').value,
        type: template.find('[name="type"] option:selected').value,
        guests: parseInt(template.find('[name="guests"]').value, 10),
      };
      eventItem._id = eventModal.event;
    }

    Meteor.call(submitType, eventItem, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      }
      else {
        Bert.alert(`Event ${ eventModal.type }ed!`, 'success');
        closeModal();
      }
    });
  },
  "click .delete-event" (event, instance) {
    event.preventDefault()

    if (confirm("Are you sure?")) {
      let eventId = event.currentTarget.id

      Meteor.call('events.delete', {
          eventId: eventId
        },
        (error, result) => {
          if (error) {
            console.log(error.error)
          }
          else {
            notify("Event deleted!", "error")
            $('#add-edit-event-modal').modal('hide');
            $('.modal-backdrop').fadeOut();
          }
        }
      )
    }
  }
});