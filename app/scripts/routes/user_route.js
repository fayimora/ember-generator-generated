Webapp.UserRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('user', model.user_id);
    // return Webapp.User.find(model.user_id);
  }
});

