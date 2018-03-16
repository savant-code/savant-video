import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend({
  model() {
    return this.store.createRecord('user')
  },

  actions: {
    debug(){
      console.log(this);
      console.log(this.controller.model);
    }
  }
});
