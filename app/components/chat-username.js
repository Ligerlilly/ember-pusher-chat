import Ember from 'ember';

export default Ember.Component.extend({
  currentUserService: Ember.inject.service('current-user'),
  actions: {
    userSubmittedName() {
      const user = this.get('userName');
      this.get('currentUserService').setUser(user);
    },
  }
});
