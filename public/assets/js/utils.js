(function() {

  (function($, _) {
    var arabicNums;
    arabicNums = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"];
    _.mixin(_.str.exports());
    _.mixin({
      to_i: function(obj, base) {
        var number;
        if (_.isString(obj)) {
          number = obj.match(/\d+/g);
          return parseInt((number != null ? number.join('') : null), base);
        } else if (_.isNumber(obj)) {
          return parseInt(obj, base);
        }
      },
      to_s: function(obj) {
        return (new String(obj)).toString();
      },
      w: function(string) {
        return _.trim(string).replace(/\s+/g, ' ').split(' ');
      },
      sample: function(array) {
        if (_.isArray(array)) {
          return _.first(_.shuffle(array));
        } else {
          return array;
        }
      },
      arab: function(number) {
        return _.to_s(number).replace(/[0-9]/g, function(w) {
          return arabicNums[+w];
        });
      },
      ordinal: function(number) {
        var n, ord, suffix;
        number = _.to_i(number);
        n = number % 100;
        suffix = _.w('th st nd rd th');
        ord = n < 21 ? (n < 4 ? suffix[n] : suffix[0]) : (n % 10 > 4 ? suffix[0] : suffix[n % 10]);
        return number + ord;
      }
    });
    _.each = (function() {
      var each;
      each = _.each;
      return function() {
        var args, obj;
        args = Array.prototype.slice.call(arguments);
        obj = args.shift();
        if (_.isString(obj)) {
          obj = _.w(obj);
        }
        return each.apply(_, [obj].concat(args));
      };
    })();
    $.fn.scrollTo = function(options) {
      if (options == null) {
        options = {};
      }
      options = _.defaults(options, {
        duration: 1000,
        callback: $.noop,
        offset: 0
      });
      $('body').animate({
        scrollTop: $(this).offset().top + options.offset
      }, options.duration, options.callback.bind(this));
      return this;
    };
    this.log = function() {
      return console.log.apply(console, arguments);
    };
    return (function() {
      var methods;
      methods = ['each', 'map', 'reduce', 'reduceRight', 'detect', 'select', 'reject', 'all', 'any', 'include', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size', 'first', 'rest', 'last', 'without', 'indexOf', 'lastIndexOf', 'isEmpty'];
      return _.each(methods, function(method) {
        return Array.prototype[method] = function() {
          return _[method].apply(_, [this].concat(_.toArray(arguments)));
        };
      });
    })();
  }).call(this, this.$, this._);

}).call(this);
