(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["app", "backbone", "knockout", "knockback"], function(app, Backbone, ko, kb) {
    var Console;
    Console = app.createModule();
    Console.View = (function(_super) {

      __extends(View, _super);

      function View() {
        return View.__super__.constructor.apply(this, arguments);
      }

      View.prototype.manage = false;

      View.prototype.el = "#console";

      View.prototype.events = {
        "click #show": "showMessage",
        "click #reset": "hideMessage"
      };

      return View;

    })(Backbone.View);
    return Console;
  });

}).call(this);
