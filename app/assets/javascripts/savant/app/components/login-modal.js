import Component from '@ember/component';

export default Component.extend({
  user: {
    email: "",
    password: ""
  },

  actions: {
    closeLoginModal() {
      this.get('parentView').set('showLoginModal', false);
    },

    authenticate() {
      console.log(this);
      console.log(this.get('parentView'));
      console.log(this.get('user'));
      console.log(this.get('user').email);
      console.log(this.get('controller').get('email'));
    },

    showCreateAccountModal(){
      this.get('parentView').set('showLoginModal', false);
      this.get('parentView').set('showCreateAccountModal', true);
    }
  }
});
