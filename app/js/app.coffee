@app ?= {}
((app, $, _, Data) ->

  # angular.module 'quranvue', [], ($routeProvider, $locationProvider) ->
  #   $routeProvider.when '/sura/:suraId',

  app.quranvue = angular.module('quranvue.service', []).
    value('greeter', {
      salutation: 'Hello'
      localize: (localization) ->
        @salutation = localization.salutation

      greet: (name) ->
        @salutation + ' ' + name + '!'
    }).
    value('user', {
      load: (name) ->
        @name = name
    })

  angular.module('quranvue.directive', [])

  angular.module('quranvue.filter', [])

  angular.module('quranvue', ['quranvue.service', 'quranvue.directive', 'quranvue.filter']).
    run (greeter, user) ->
      # This is effectively part of the main method initialization code
      greeter.localize
        salutation: 'Bonjour'

      user.load 'World'

  # Controller
  @IndexController = ($scope) ->
    $scope.suras = Data.Suras.toJSON()
    $scope.sort_attr = "id"

    $scope.sort = ->
      if $scope.sort_attr == "id"
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.tname
        $scope.sort_attr = "tname"
      else
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.id
        $scope.sort_attr = "id"

).call @, app, $, _, Data
