var Territory = Backbone.Model.extend({});

var Territories = Backbone.Collection.extend({
    model: Territory,
    url: "app/examples/territories.json"
});

var territories = new Territories();