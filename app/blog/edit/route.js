import Route from '@ember/routing/route';
import Ember from 'ember';

const { set } = Ember;


export default Route.extend({

  setupController(controller, model) {
    set(controller, 'post', model);
    set(controller, 'editable', true);
  },

  actions: {
    goBackToIndex() {
      this.transitionTo('blog.index');
    },
    toggleEdit() {
      this.controller.toggleProperty('editable');
    },
    something() {
      console.log('hit this');
    }
  }
});
