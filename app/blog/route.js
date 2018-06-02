import Route from '@ember/routing/route';
import Ember from 'ember';

const { set } = Ember;

export default Route.extend({

  model() {
    return this.store.createRecord('post', {
      title: 'Tutorial blog post',
      author: 'This Guy',
      content: 'Default content'
    });
  },

  setupController(controller, model) {
    set(controller, 'post', model);
  }
});
