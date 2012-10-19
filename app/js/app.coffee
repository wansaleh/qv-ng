@app ?= {}
((app, $, _) ->

  @SurasController = ($scope) ->
    $scope.suras = Data.Suras.map (sura) ->
      _.extend sura,
        permalink: -> "sura/#{@id}"

    $scope.sort_attr = "id"

    $scope.sort = ->
      if $scope.sort_attr == "id"
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.tname
        $scope.sort_attr = "tname"
      else
        $scope.suras = _.sortBy $scope.suras, (sura) -> sura.id
        $scope.sort_attr = "id"

).call @, @app, @$, @_
