@app ?= {}
((app, Backbone) ->

  # Create a new module
  Sura = app.Sura =
    Views: {}

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
      if app.pushState then "/sura/#{id}" else "/#sura/#{id}"

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

  # ========================================================
  # Views
  # Links of suras
  class Sura.Views.List extends Backbone.View
    template: "sura/list"
    className: "index-wrapper"

    initialize: ->
      @collection = @options.collection
      @collection.on "reset", @render, @
      @collection.on "reset", @observe, @

    data: ->
      suras: @collection.toJSON()

    beforeRender: ->
      @collection.each ((sura) ->
        @insertView ".suras", new Sura.Views.Item(model: sura)
      ), @

  # Sub View: Single sura link
  class Sura.Views.Item extends Backbone.View
    template: "sura/item"
    tagName: "a"
    className: "btn btn-primary btn-round"

    attributes: ->
      "href": @model.get "permalink"
      "data-sura": @model.get "id"

    data: ->
      @model.toJSON()

) @app, @Backbone
