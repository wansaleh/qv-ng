@app ?= {}
((app, Backbone) ->

  # Create a new module
  Aya = @Aya = {}

  # ========================================================
  # Model
  class Aya.Model extends Backbone.Model
    defaults:
      id          : null
      sura_id     : null
      aya         : null
      text        : null
      translation : null

    mutators:
      textalt:  -> if @sura_id != 1 && @aya == 1 then @text.slice(39) else @text
      image:    -> "/assets/images/ayas/#{@sura_id}_#{@aya}.png"
      aya_arab: -> _.arab @aya

  # ========================================================
  # Collection
  class Aya.Collection extends Backbone.Collection
    model: Aya.Model
    url: "/api/ayas"
    comparator: (aya) -> aya.get "aya"

).call @, app, Backbone
