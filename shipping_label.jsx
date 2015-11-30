Label = new Mongo.Collection("label");

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<Global />, document.getElementById("content"));
  });
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    Label.remove({});
    Label.insert({currentLabel: ""});
  });
}