import Component from '@ember/component';

export default Component.extend({
  showLoginModal: false,

  showCreateAccountModal: false,
  
  actions: {
    showLoginModal() {
      this.set('showLoginModal', true);
    },

    showCreateAccountModal() {
      this.set('showCreateAccountModal', true);
    }
  }
});
