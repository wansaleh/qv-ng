(function() {
  var _ref;

  if ((_ref = this.app) == null) {
    this.app = {};
  }

  (function(app, _, Backbone) {
    var Data, data, i, infoName, infoVal, j, key, mapping, model, val, _i, _j, _len, _len1, _ref1, _ref2;
    Data = this.Data = {};
    mapping = {
      Sura: {
        name: 'Suras',
        keys: ['start', 'ayas', 'order', 'rukus', 'name', 'tname', 'ename', 'type']
      },
      Juz: {
        name: 'Juzs',
        keys: ['sura', 'aya']
      },
      HizbQuarter: {
        name: 'Hizbs',
        keys: ['sura', 'aya']
      },
      Manzil: {
        name: 'Manzils',
        keys: ['sura', 'aya']
      },
      Ruku: {
        name: 'Rukus',
        keys: ['sura', 'aya']
      },
      Page: {
        name: 'Pages',
        keys: ['sura', 'aya']
      },
      Sajda: {
        name: 'Sajdas',
        keys: ['sura', 'aya', 'hukm']
      }
    };
    for (infoName in mapping) {
      infoVal = mapping[infoName];
      if (infoVal.name === 'Suras') {
        Data[infoVal.name] = new Sura.Collection;
        model = Sura.Model;
      } else {
        Data[infoVal.name] = new Backbone.Collection;
        model = Backbone.Model;
      }
      i = 0;
      _ref1 = this.QuranData[infoName];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        val = _ref1[_i];
        data = {};
        data['id'] = i + 1;
        _ref2 = infoVal.keys;
        for (j = _j = 0, _len1 = _ref2.length; _j < _len1; j = ++_j) {
          key = _ref2[j];
          data[key] = val[j];
        }
        Data[infoVal.name].add(new model(data));
        i++;
      }
    }
    return Data.Markings = {
      Pause: ["\u06D6", "\u06D7", "\u06D8", "\u06D9", "\u06DA", "\u06DB"],
      Vowel: ["\u064B", "\u064C", "\u064D", "\u064E", "\u064F", "\u0650", "\u0651", "\u0652", "\u0653", "\u0654", "\u0655", "\u0656", "\u0657", "\u0658", "\u0659", "\u065A", "\u065B", "\u065C", "\u065D", "\u065E"],
      Sajda: "\u06E9"
    };
  }).call(this, app, _, Backbone);

}).call(this);
