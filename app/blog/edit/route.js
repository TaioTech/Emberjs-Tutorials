import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    goBackToIndex() {
      this.transitionTo('blog.index');
    }
  }
});
