import Controller from '@ember/controller';

export default Controller.extend({

  myBigTest: Ember.computed(function() {
    console.log(this);
    return this.get('model');
  }),

  actions: {
    newCourse: function(){
      const course = this.get('store').createRecord('course', {
        name: 'Rails is Omakase'
      });
      course.save();
    }
  }
});
