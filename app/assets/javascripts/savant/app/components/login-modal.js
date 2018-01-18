import Component from '@ember/component';

export default Component.extend({
  actions: {
    closeLoginModal() {
      this.get('parentView').set('showLoginModal', false);
    }
  }
});
