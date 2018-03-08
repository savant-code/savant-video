import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    newCourse: function(){
      const course = this.get('store').createRecord('course', {
        name: 'Rails is Omakase'
      });
      console.log('newCourse');
      course.save();
      console.log(course);
    }
  }
});
