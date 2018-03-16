import Component from '@ember/component';

export default Component.extend({
  showCreateCourseModal: false,

  actions: {
    showCreateCourseModal(){
      this.set("showCreateCourseModal", true);
    }
  }
});
