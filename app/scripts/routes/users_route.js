Webapp.UsersRoute = Ember.Route.extend({
  model: function() {
    return Webapp.User.find();
  }
});

