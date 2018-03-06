import Component from '@ember/component';

export default Component.extend({
  newUser: {
    username: "",
    email: "",
    password: ""
  },

  actions: {
    closeCreateAccountModal() {
      this.get('parentView').set('showCreateAccountModal', false);
    },

    createAccount(params){
      console.log(this);
      console.log(params);
      console.log(this.get('newUser'));
      console.log(this.get('newUser').email);
      console.log(this.newUser.email);
    }
  }
});
