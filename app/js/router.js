define([
  'jquery',
  'backbone',
  'views/index',
  'views/share',
  'views/funnel',
  'views/product',
  'views/matrix',
  'views/swift',
  'views/turn',
  'views/accounts',
  'views/subreport',
  'hbs!templates/partial/main-header',
  'hbs!templates/partial/menu',
  'views/partial/menu',
  'hbs!templates/partial/menu-header',
  'material',
], function ($, Backbone, index, share, funnel, product, matrix, swift, turn, accounts, subreport, mainHeader, menu,  menuContent, menuHeader, material) {

  var AppRouter = Backbone.Router.extend({
    mainContent: $("#mainContent"),
    routes: {
        ""          : "index",
        "index"     : "index",
        "share"     : "share",
        "funnel"    : "funnel",
        "product"   : "product",
        "matrix"    : "matrix",
        "swift"     : "swift",
        "turn"      : "turn",
        "accounts"  : "accounts",
        "subreport" : "subreport",
        '*other'    : 'default'
    },
    render: function(obj){
      obj.setElement(this.mainContent);
      obj.render();
      if(componentHandler){
        componentHandler.upgradeAllRegistered();
      }
    },
    index: function(id){
      console.log(id);
      this.render(index);
    },
    share: function(id) {
        console.log(id);
        console.log("It's share.");
        this.render(index);
    },
    funnel: function() {
        console.log("It's funnel.");
        this.render(index);
    },
    default: function(other) {
        alert('Не существует сттраницы. Вы находитесь на роуте ' + other);
    },
    initialize: function(id){
      $(".main-header").html(mainHeader()); 
      $(".menu").html(menu({content: menuContent() }));
      $(".menu-header").html(menuHeader());
    }
  });

  return {
    start: function() {
      var router = new AppRouter();
      Backbone.history.start();
    }
  };

});
