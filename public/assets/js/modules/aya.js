(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, Backbone) {
    var Aya;
    Aya = this.Aya = {};
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
    return Aya.Collection = (function(_super) {

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
  }).call(this, app, Backbone);

}).call(this);
