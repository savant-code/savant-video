import Component from '@ember/component';

export default Component.extend({
  showLoginModal: false,

  actions: {
    showLoginModal(){
      this.set("showLoginModal", true);
    }
  }
});
