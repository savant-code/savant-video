import Component from '@ember/component';

export default Component.extend({
  newCourse: {
    name: ""
  },

  actions: {
    closeCreateCourseModal() {
      this.get('parentView').set('showCreateCourseModal', false);
    },

    createCourse(params){
      console.log(this);
      console.log(this.newCourse.name);
      const course = this.get('parentView').get('store').createRecord('course', {
        name: this.newCourse.name
      });
      course.save();
    }
  }
});
