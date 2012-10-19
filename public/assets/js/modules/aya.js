(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, Backbone) {
    var Aya;
    Aya = app.Aya = {
      Views: {}
    };
    Aya.Model = (function(_super) {

      __extends(Model, _super);

      function Model() {
        return Model.__super__.constructor.apply(this, arguments);
      }

      Model.prototype.defaults = {
        id: null,
        sura_id: null,
        aya: null,
        text: null,
        translation: null
      };

      Model.prototype.mutators = {
        textalt: function() {
          if (this.sura_id !== 1 && this.aya === 1) {
            return this.text.slice(39);
          } else {
            return this.text;
          }
        },
        image: function() {
          return "/assets/images/ayas/" + this.sura_id + "_" + this.aya + ".png";
        },
        aya_arab: function() {
          return _.arab(this.aya);
        }
      };

      return Model;

    })(Backbone.Model);
    Aya.Collection = (function(_super) {

      __extends(Collection, _super);

      function Collection() {
        return Collection.__super__.constructor.apply(this, arguments);
      }

      Collection.prototype.model = Aya.Model;

      Collection.prototype.url = "/api/ayas";

      Collection.prototype.comparator = function(aya) {
        return aya.get("aya");
      };

      return Collection;

    })(Backbone.Collection);
    Aya.Views.List = (function(_super) {

      __extends(List, _super);

      function List() {
        return List.__super__.constructor.apply(this, arguments);
      }

      List.prototype.template = "aya/list";

      List.prototype.className = "ayas-wrapper";

      List.prototype.attributes = function() {
        return {
          "data-sura": this.options.info.get("id")
        };
      };

      List.prototype.initialize = function() {
        this.info = this.options.info;
        this.collection = this.options.collection;
        this.collection.on("reset", this.render, this);
        return this.collection.on("change", this.render, this);
      };

      List.prototype.data = function() {
        return this.info.toJSON();
      };

      List.prototype.beforeRender = function() {
        return this.collection.each((function(aya) {
          return this.insertView(".ayas", new Aya.Views.Item({
            model: aya
          }));
        }), this);
      };

      return List;

    })(Backbone.View);
    Aya.Views.Item = (function(_super) {

      __extends(Item, _super);

      function Item() {
        return Item.__super__.constructor.apply(this, arguments);
      }

      Item.prototype.template = "aya/item";

      Item.prototype.tagName = "div";

      Item.prototype.className = "aya-wrapper";

      Item.prototype.attributes = function() {
        return {
          "data-aya": this.model.get("aya")
        };
      };

      Item.prototype.data = function() {
        return this.model.toJSON();
      };

      return Item;

    })(Backbone.View);
    return Aya;
  })(this.app, this.Backbone);

}).call(this);
