import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session'),
  
  actions: {
    save(user){
      let newUser = user;
      newUser.save().catch((error) => {
        this.set('errorMessage', error);
      })
      .then((result)=>{
        this.set('errorMessage', "Account Created!");
        this.get('session')
        .authenticate('authenticator:devise',    
          newUser.get('email'), newUser.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }
});
