(function() {
  var _ref;

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, $, _) {
    return this.SurasController = function($scope) {
      $scope.suras = Data.Suras.map(function(sura) {
        return _.extend(sura, {
          permalink: function() {
            return "sura/" + this.id;
          }
        });
      });
      $scope.sort_attr = "id";
      return $scope.sort = function() {
        if ($scope.sort_attr === "id") {
          $scope.suras = _.sortBy($scope.suras, function(sura) {
            return sura.tname;
          });
          return $scope.sort_attr = "tname";
        } else {
          $scope.suras = _.sortBy($scope.suras, function(sura) {
            return sura.id;
          });
          return $scope.sort_attr = "id";
        }
      };
    };
  }).call(this, this.app, this.$, this._);

}).call(this);
