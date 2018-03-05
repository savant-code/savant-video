import Route from '@ember/routing/route';

export default Route.extend({
  mikeTest: false,
//  model() {
//    return this.store.findAll('user');
//  }
  model() {
    return ['A', 'B', 'C'];
  }
});