import Component from '@ember/component';

export default Component.extend({
  actions: {
    closeLoginModal() {
      this.get('parentView').set('showLoginModal', false);
    },

    authenticate() {
      console.log(this);
      console.log(this.get('parentView'));
      console.log(this.get('controller').get('email'));
    },

    showCreateAccountModal(){
      this.get('parentView').set('showLoginModal', false);
      this.get('parentView').set('showCreateAccountModal', true);
    }
  }
});
