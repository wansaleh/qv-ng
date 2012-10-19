@app ?= {}
((window, app, $, _) ->

  window.SurasController = ($scope) ->
    $scope.suras = app.Data.Suras

    $scope.sort = ->
      $scope.suras = _.sortBy $scope.suras, (sura) -> sura.tname

) @, @app, @$, @_
