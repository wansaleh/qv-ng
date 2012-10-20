@app ?= {}
((app, Backbone) ->

  # Create a new module
  Sura = @Sura =
    # Set some helpers
    # Check validity of sura id
    valid: (id) ->
      1 <= id <= 114

    # get Sura.Model by id
    byId: (id) ->
      return false unless Sura.valid id
      app.Data.Suras.get id

    # generate permalink of the sura
    permalink: (id) ->
      return false unless Sura.valid id
      "/sura/#{id}"

  # ========================================================
  # Model
  class Sura.Model extends Backbone.Model
    defaults:
      id    : null
      name  : null
      tname : null
      ename : null
      ayas  : null
      order : null
      rukus : null
      type  : null

    mutators:
      permalink: -> Sura.permalink(@id)
      nextlink:  -> Sura.permalink(@id + 1)
      prevlink:  -> Sura.permalink(@id - 1)
      alfatihah: -> @id == 1

  # ========================================================
  # Collection
  class Sura.Collection extends Backbone.Collection
    model: Sura.Model
    url: "/api/suras"
    comparator: (sura) -> sura.get "id"

).call @, app, Backbone
