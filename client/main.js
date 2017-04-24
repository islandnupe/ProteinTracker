import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe('allProteinData');

Meteor.subscribe('allHistory');

Template.userDetails.helpers({
  user: function() {  
    var data = ProteinData.findOne();
    if(!data) {
      data = { userId : Meteor.userId(),
      total:0,
      goal:200
      }; 
     ProteinData.insert(data);
    }
   return data;
  }
});

Template.history.helpers({
  historyItem: function () {
    return History.find({}, {sort:{ date:-1}, limit: 5});
  }
});

Template.userDetails.events({
  'click #addAmount' : function(e) {
    e.preventDefault();

    var amount = parseInt($('#amount').val());
    ProteinData.update(this._id, {$inc: {total : amount}}); 
    History.insert({
      value: amount,
      date: new Date().toTimeString(),
      userID: this.userId
    });
  }
});
/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/