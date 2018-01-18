import Component from '@ember/component';

export default Component.extend({
  showCreateAccountModal: false,

  actions: {
    showCreateAccountModal(){
      this.set("showCreateAccountModal", true);
    }
  }
});
