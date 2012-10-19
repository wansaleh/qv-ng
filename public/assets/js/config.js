(function() {
  var prefix;

  prefix = {};

  prefix.js = "/assets/js";

  prefix.libs = "" + prefix.js + "/libs";

  prefix.plugins = "" + prefix.js + "/plugins";

  require.config({
    urlArgs: "cb=" + (new Date()).getTime(),
    deps: ["main"],
    baseUrl: "/assets/js",
    paths: {
      jquery: "" + prefix.libs + "/jquery",
      underscore: "" + prefix.libs + "/underscore",
      backbone: "" + prefix.libs + "/backbone",
      knockout: "" + prefix.libs + "/knockout",
      knockback: "" + prefix.libs + "/knockback-core",
      handlebars: "" + prefix.libs + "/handlebars",
      "underscore.string": "" + prefix.plugins + "/underscore.string",
      qurandata: "/assets/js/qurandata"
    },
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      "backbone.layoutmanager": ["backbone"],
      "backbone.mutators": ["backbone"],
      "backbone.spark": ["backbone"],
      qurandata: {
        exports: "QuranData"
      }
    }
  });

}).call(this);
