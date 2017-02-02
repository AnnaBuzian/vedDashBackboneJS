var PageableTerritories = Backbone.PageableCollection.extend({
    model: Territory,
    url: "app/examples/pageable-territories.json",
    state: {
        pageSize: 15
    },
    mode: "client" // page entirely on the client side
});

var pageableTerritories = new PageableTerritories();

// Set up a grid to use the pageable collection
var pageableGrid = new Backgrid.Grid({
    columns: [{
        // enable the select-all extension
        name: "",
        cell: "select-row",
        headerCell: "select-all"
    }].concat(columns),
    collection: pageableTerritories
});

// Render the grid
var $example2 = $("#example-2-result");
$example2.append(pageableGrid.render().el)

// Initialize the paginator
var paginator = new Backgrid.Extension.Paginator({
    collection: pageableTerritories
});

// Render the paginator
$example2.after(paginator.render().el);

// Initialize a client-side filter to filter on the client
// mode pageable collection's cache.
var filter = new Backgrid.Extension.ClientSideFilter({
    collection: pageableTerritories,
    fields: ['name']
});

// Render the filter
$example2.before(filter.render().el);

// Add some space to the filter and move it to the right
$(filter.el).css({float: "right", margin: "20px"});

// Fetch some data
pageableTerritories.fetch({reset: true});