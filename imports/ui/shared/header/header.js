import './header.html'
import { Random } from 'meteor/random'

Template.header.helpers({
  randomId(){
    return Random.id()
  }
})