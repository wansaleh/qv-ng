(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, Backbone) {
    this.Sura = app.Sura = {
      Views: {},
      valid: function(id) {
        return (1 <= id && id <= 114);
      },
      byId: function(id) {
        if (!Sura.valid(id)) {
          return false;
        }
        return app.Data.Suras.get(id);
      },
      permalink: function(id) {
        if (!Sura.valid(id)) {
          return false;
        }
        if (app.pushState) {
          return "/sura/" + id;
        } else {
          return "/#sura/" + id;
        }
      }
    };
    Sura.Model = (function(_super) {

      __extends(Model, _super);

      function Model() {
        return Model.__super__.constructor.apply(this, arguments);
      }

      Model.prototype.defaults = {
        id: null,
        name: null,
        tname: null,
        ename: null,
        ayas: null,
        order: null,
        rukus: null,
        type: null
      };

      Model.prototype.mutators = {
        permalink: function() {
          return Sura.permalink(this.id);
        },
        nextlink: function() {
          return Sura.permalink(this.id + 1);
        },
        prevlink: function() {
          return Sura.permalink(this.id - 1);
        },
        alfatihah: function() {
          return this.id === 1;
        }
      };

      return Model;

    })(Backbone.Model);
    Sura.Collection = (function(_super) {

      __extends(Collection, _super);

      function Collection() {
        return Collection.__super__.constructor.apply(this, arguments);
      }

      Collection.prototype.model = Sura.Model;

      Collection.prototype.url = "/api/suras";

      Collection.prototype.comparator = function(sura) {
        return sura.get("id");
      };

      return Collection;

    })(Backbone.Collection);
    Sura.Views.List = (function(_super) {

      __extends(List, _super);

      function List() {
        return List.__super__.constructor.apply(this, arguments);
      }

      List.prototype.template = "sura/list";

      List.prototype.className = "index-wrapper";

      List.prototype.initialize = function() {
        this.collection = this.options.collection;
        this.collection.on("reset", this.render, this);
        return this.collection.on("reset", this.observe, this);
      };

      List.prototype.data = function() {
        return {
          suras: this.collection.toJSON()
        };
      };

      List.prototype.beforeRender = function() {
        return this.collection.each((function(sura) {
          return this.insertView(".suras", new Sura.Views.Item({
            model: sura
          }));
        }), this);
      };

      return List;

    })(Backbone.View);
    return Sura.Views.Item = (function(_super) {

      __extends(Item, _super);

      function Item() {
        return Item.__super__.constructor.apply(this, arguments);
      }

      Item.prototype.template = "sura/item";

      Item.prototype.tagName = "a";

      Item.prototype.className = "btn btn-primary btn-round";

      Item.prototype.attributes = function() {
        return {
          "href": this.model.get("permalink"),
          "data-sura": this.model.get("id")
        };
      };

      Item.prototype.data = function() {
        return this.model.toJSON();
      };

      return Item;

    })(Backbone.View);
  }).call(this, this.app, this.Backbone);

}).call(this);
