Webapp.UserEditRoute = Ember.Route.extend({
  model: function(model) {
    return Webapp.User.find(model.user_id);
  }
});

