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
    }
  }
});
