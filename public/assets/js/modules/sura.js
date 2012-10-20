(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, Backbone) {
    var Sura;
    Sura = this.Sura = {
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
        return "/sura/" + id;
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
    return Sura.Collection = (function(_super) {

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
  }).call(this, app, Backbone);

}).call(this);
