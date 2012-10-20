(function() {
  var _ref;

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, $, _, Data) {
    app.quranvue = angular.module('quranvue.service', []).value('greeter', {
      salutation: 'Hello',
      localize: function(localization) {
        return this.salutation = localization.salutation;
      },
      greet: function(name) {
        return this.salutation + ' ' + name + '!';
      }
    }).value('user', {
      load: function(name) {
        return this.name = name;
      }
    });
    angular.module('quranvue.directive', []);
    angular.module('quranvue.filter', []);
    angular.module('quranvue', ['quranvue.service', 'quranvue.directive', 'quranvue.filter']).run(function(greeter, user) {
      greeter.localize({
        salutation: 'Bonjour'
      });
      return user.load('World');
    });
    return this.IndexController = function($scope) {
      $scope.suras = Data.Suras.toJSON();
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
  }).call(this, app, $, _, Data);

}).call(this);
