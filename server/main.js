import { Meteor } from 'meteor/meteor';

Meteor.publish('allProteinData', function() {
  return ProteinData.find({userId: this.userId});
});

Meteor.publish('allHistory', function() {
  return History.find({userId: this.userId});
});

Meteor.startup(() => {
  // code to run on server at startup
/*
  if(Users.find().count() === 0)
  {
    ProteinData.insert({
      total : 120,
      goal: 200
    });
  }

  if(History.find().count() === 0) {
    History.insert({
      value: 50,
      date: new Date().toTimeString()
    });
      History.insert({
      value: 30,
      date: new Date().toTimeString()
    });
      History.insert({
      value: 20,
      date: new Date().toTimeString()
    });
      History.insert({
      value: 70,
      date: new Date().toTimeString()
    });
      History.insert({
      value: 20,
      date: new Date().toTimeString()
    });    
  }
  */
});
