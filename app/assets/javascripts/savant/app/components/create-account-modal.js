import Component from '@ember/component';

const { service } = Ember.inject;

export default Component.extend({
  user: {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  },
  session: service('session'),

  actions: {
    submit(){
      console.log(this);
      let user = this.get('user');
      console.log(user);
      this.attrs.triggerSave(user);
    }
  }


/*  newUser: {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
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
  }*/
});
