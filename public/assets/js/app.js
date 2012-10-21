(function() {
  var _ref;

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, angular, $, _, Data) {
    var quranvue;
    quranvue = {};
    angular.module('quranvue.service', []).value('greeter', {
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
    return angular.module('quranvue', ['quranvue.service', 'quranvue.directive', 'quranvue.filter']).run(function(greeter, user) {
      greeter.localize({
        salutation: 'Bonjour'
      });
      return user.load('World');
    }).controller('IndexCtrl', function($scope, greeter, user) {
      $scope.greeting = greeter.greet(user.name);
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
    });
  }).call(this, app, angular, $, _, Data);

}).call(this);
