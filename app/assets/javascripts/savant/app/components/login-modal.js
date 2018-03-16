import Component from '@ember/component';

const { service } = Ember.inject;

export default Component.extend({
  session: service('session'),

  actions: {
    closeLoginModal() {
      this.get('parentView').set('showLoginModal', false);
    },

    authenticate() {
      let { identification, password } =      
this.getProperties('identification', 'password');  
      console.log(identification);
      this.get('session')
        .authenticate('authenticator:devise',      
          identification, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
    });
   },
 }


  /*user: {
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
  }*/
});
