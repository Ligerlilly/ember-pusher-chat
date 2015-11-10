import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  currentUserService: Ember.inject.service('current-user'),
  pusherService: Ember.inject.service('pusher'),
  messages: [],
  init() {
    this._super(...arguments);
    var context = this;
    this.get('pusherService').onMessage(function (data) {
      context.get('messages').pushObject(data);
    });
  },
  actions: {
    newMessage() {
      const text = this.get('newMessage');
      const username = this.get('currentUserService').get('user');
      const time = new Date();
      $.post('http://localhost:4567/messages', {text, username, time});
    }
  }
});
