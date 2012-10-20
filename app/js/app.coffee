@app ?= {}
((app, angular, $, _, Data) ->

  # angular.module 'quranvue', [], ($routeProvider, $locationProvider) ->
  #   $routeProvider.when '/sura/:suraId',

  quranvue = {}

  quranvue.service = angular.module('quranvue.service', [])

  quranvue.service.value 'greeter',
    salutation: 'Hello'

    localize: (localization) ->
      @salutation = localization.salutation

    greet: (name) ->
      @salutation + ' ' + name + '!'

  quranvue.service.value 'user',
    load: (name) ->
      @name = name

  quranvue.directive = angular.module('quranvue.directive', [])

  quranvue.filter = angular.module('quranvue.filter', [])

  quranvue.base = angular.module('quranvue', ['quranvue.service', 'quranvue.directive', 'quranvue.filter'])

  # quranvue.base.run (greeter, user) ->
  #     # This is effectively part of the main method initialization code
  #     greeter.localize
  #       salutation: 'Bonjour'

  #     user.load 'World'

  # Controller
  quranvue.base.controller 'IndexCtrl', ($scope, greeter, user) ->
    $scope.greeting = greeter.greet(user.name);

    $scope.suras = Data.Suras.toJSON()
    $scope.sort_attr = "id"

    $scope.sort = ->
      if $scope.sort_attr == "id"
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.tname
        $scope.sort_attr = "tname"
      else
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.id
        $scope.sort_attr = "id"

).call @, app, angular, $, _, Data
