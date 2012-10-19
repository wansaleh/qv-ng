(function() {
  var _ref;

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(window, app, $, _) {
    return window.SurasController = function($scope) {
      $scope.suras = app.Data.Suras;
      return $scope.sort = function() {
        return $scope.suras = _.sortBy($scope.suras, function(sura) {
          return sura.tname;
        });
      };
    };
  })(this, this.app, this.$, this._);

}).call(this);
