(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":23}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":24}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":25}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":26}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":27}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":28}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":29}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":30}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":31}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":32}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":33}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":34}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":35}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":36}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/weak-map"), __esModule: true };
},{"core-js/library/fn/weak-map":37}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":7}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":8,"../core-js/object/get-prototype-of":9}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":6,"../core-js/object/set-prototype-of":11,"../helpers/typeof":22}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":22}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":1,"../core-js/is-iterable":2}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":13,"../core-js/symbol/iterator":14}],23:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":116,"../modules/es6.string.iterator":129,"../modules/web.dom.iterable":142}],24:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');

},{"../modules/core.is-iterable":117,"../modules/es6.string.iterator":129,"../modules/web.dom.iterable":142}],25:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":53}],26:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":53,"../modules/es6.map":119,"../modules/es6.object.to-string":127,"../modules/es6.string.iterator":129,"../modules/es7.map.from":132,"../modules/es7.map.of":133,"../modules/es7.map.to-json":134,"../modules/web.dom.iterable":142}],27:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":53,"../../modules/es6.object.assign":120}],28:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":53,"../../modules/es6.object.create":121}],29:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":53,"../../modules/es6.object.define-property":122}],30:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":53,"../../modules/es6.object.get-own-property-descriptor":123}],31:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":53,"../../modules/es6.object.get-prototype-of":124}],32:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":53,"../../modules/es6.object.keys":125}],33:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":53,"../../modules/es6.object.set-prototype-of":126}],34:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
require('../modules/es7.set.of');
require('../modules/es7.set.from');
module.exports = require('../modules/_core').Set;

},{"../modules/_core":53,"../modules/es6.object.to-string":127,"../modules/es6.set":128,"../modules/es6.string.iterator":129,"../modules/es7.set.from":135,"../modules/es7.set.of":136,"../modules/es7.set.to-json":137,"../modules/web.dom.iterable":142}],35:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":53,"../../modules/es6.object.to-string":127,"../../modules/es6.symbol":130,"../../modules/es7.symbol.async-iterator":138,"../../modules/es7.symbol.observable":139}],36:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":113,"../../modules/es6.string.iterator":129,"../../modules/web.dom.iterable":142}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-map');
require('../modules/es7.weak-map.of');
require('../modules/es7.weak-map.from');
module.exports = require('../modules/_core').WeakMap;

},{"../modules/_core":53,"../modules/es6.object.to-string":127,"../modules/es6.weak-map":131,"../modules/es7.weak-map.from":140,"../modules/es7.weak-map.of":141,"../modules/web.dom.iterable":142}],38:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],39:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],40:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],41:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":71}],42:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":62}],43:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":104,"./_to-iobject":106,"./_to-length":107}],44:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":46,"./_ctx":54,"./_iobject":68,"./_to-length":107,"./_to-object":108}],45:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":70,"./_is-object":71,"./_wks":114}],46:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":45}],47:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":48,"./_wks":114}],48:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],49:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":40,"./_ctx":54,"./_descriptors":56,"./_for-of":62,"./_iter-define":74,"./_iter-step":75,"./_meta":79,"./_object-create":81,"./_object-dp":82,"./_redefine-all":94,"./_set-species":99,"./_validate-collection":111}],50:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":42,"./_classof":47}],51:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":40,"./_an-object":41,"./_array-methods":44,"./_for-of":62,"./_has":64,"./_is-object":71,"./_meta":79,"./_redefine-all":94,"./_validate-collection":111}],52:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":40,"./_array-methods":44,"./_descriptors":56,"./_export":60,"./_fails":61,"./_for-of":62,"./_global":63,"./_hide":65,"./_is-object":71,"./_meta":79,"./_object-dp":82,"./_redefine-all":94,"./_set-to-string-tag":100}],53:[function(require,module,exports){
var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],54:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":38}],55:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],56:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":61}],57:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":63,"./_is-object":71}],58:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],59:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":87,"./_object-keys":90,"./_object-pie":91}],60:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":53,"./_ctx":54,"./_global":63,"./_hide":65}],61:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],62:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":41,"./_ctx":54,"./_is-array-iter":69,"./_iter-call":72,"./_to-length":107,"./core.get-iterator-method":115}],63:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],64:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],65:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":56,"./_object-dp":82,"./_property-desc":93}],66:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":63}],67:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":56,"./_dom-create":57,"./_fails":61}],68:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":48}],69:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":76,"./_wks":114}],70:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":48}],71:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],72:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":41}],73:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":65,"./_object-create":81,"./_property-desc":93,"./_set-to-string-tag":100,"./_wks":114}],74:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":60,"./_has":64,"./_hide":65,"./_iter-create":73,"./_iterators":76,"./_library":78,"./_object-gpo":88,"./_redefine":95,"./_set-to-string-tag":100,"./_wks":114}],75:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],76:[function(require,module,exports){
module.exports = {};

},{}],77:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};

},{"./_object-keys":90,"./_to-iobject":106}],78:[function(require,module,exports){
module.exports = true;

},{}],79:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":61,"./_has":64,"./_is-object":71,"./_object-dp":82,"./_uid":110}],80:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":61,"./_iobject":68,"./_object-gops":87,"./_object-keys":90,"./_object-pie":91,"./_to-object":108}],81:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":41,"./_dom-create":57,"./_enum-bug-keys":58,"./_html":66,"./_object-dps":83,"./_shared-key":101}],82:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":41,"./_descriptors":56,"./_ie8-dom-define":67,"./_to-primitive":109}],83:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":41,"./_descriptors":56,"./_object-dp":82,"./_object-keys":90}],84:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":56,"./_has":64,"./_ie8-dom-define":67,"./_object-pie":91,"./_property-desc":93,"./_to-iobject":106,"./_to-primitive":109}],85:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":86,"./_to-iobject":106}],86:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":58,"./_object-keys-internal":89}],87:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],88:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":64,"./_shared-key":101,"./_to-object":108}],89:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":43,"./_has":64,"./_shared-key":101,"./_to-iobject":106}],90:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":58,"./_object-keys-internal":89}],91:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],92:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":53,"./_export":60,"./_fails":61}],93:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],94:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":65}],95:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":65}],96:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":38,"./_ctx":54,"./_export":60,"./_for-of":62}],97:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":60}],98:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":41,"./_ctx":54,"./_is-object":71,"./_object-gopd":84}],99:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":53,"./_descriptors":56,"./_global":63,"./_object-dp":82,"./_wks":114}],100:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":64,"./_object-dp":82,"./_wks":114}],101:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":102,"./_uid":110}],102:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":63}],103:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":55,"./_to-integer":105}],104:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":105}],105:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],106:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":55,"./_iobject":68}],107:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":105}],108:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":55}],109:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":71}],110:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],111:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":71}],112:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":53,"./_global":63,"./_library":78,"./_object-dp":82,"./_wks-ext":113}],113:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":114}],114:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":63,"./_shared":102,"./_uid":110}],115:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":47,"./_core":53,"./_iterators":76,"./_wks":114}],116:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":41,"./_core":53,"./core.get-iterator-method":115}],117:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

},{"./_classof":47,"./_core":53,"./_iterators":76,"./_wks":114}],118:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":39,"./_iter-define":74,"./_iter-step":75,"./_iterators":76,"./_to-iobject":106}],119:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":52,"./_collection-strong":49,"./_validate-collection":111}],120:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":60,"./_object-assign":80}],121:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":60,"./_object-create":81}],122:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":56,"./_export":60,"./_object-dp":82}],123:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":84,"./_object-sap":92,"./_to-iobject":106}],124:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":88,"./_object-sap":92,"./_to-object":108}],125:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":90,"./_object-sap":92,"./_to-object":108}],126:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":60,"./_set-proto":98}],127:[function(require,module,exports){

},{}],128:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":52,"./_collection-strong":49,"./_validate-collection":111}],129:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":74,"./_string-at":103}],130:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var keyOf = require('./_keyof');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":41,"./_descriptors":56,"./_enum-keys":59,"./_export":60,"./_fails":61,"./_global":63,"./_has":64,"./_hide":65,"./_is-array":70,"./_keyof":77,"./_library":78,"./_meta":79,"./_object-create":81,"./_object-dp":82,"./_object-gopd":84,"./_object-gopn":86,"./_object-gopn-ext":85,"./_object-gops":87,"./_object-keys":90,"./_object-pie":91,"./_property-desc":93,"./_redefine":95,"./_set-to-string-tag":100,"./_shared":102,"./_to-iobject":106,"./_to-primitive":109,"./_uid":110,"./_wks":114,"./_wks-define":112,"./_wks-ext":113}],131:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":44,"./_collection":52,"./_collection-weak":51,"./_fails":61,"./_is-object":71,"./_meta":79,"./_object-assign":80,"./_redefine":95,"./_validate-collection":111}],132:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":96}],133:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":97}],134:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":50,"./_export":60}],135:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":96}],136:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":97}],137:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_collection-to-json":50,"./_export":60}],138:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":112}],139:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":112}],140:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":96}],141:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":97}],142:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":63,"./_hide":65,"./_iterators":76,"./_wks":114,"./es6.array.iterator":118}],143:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require('babel-runtime/helpers/get');var _get3=_interopRequireDefault(_get2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ControlImpl={properties:{position:{type:String,value:'bottomright',observer:'shouldUpdateInst'}},addInst:function addInst(parent){this.elementInst.addTo(parent)},removeInst:function removeInst(parent){this.elementInst.remove()},getInstOptions:function getInstOptions(){return{position:this._getValidPosition()}},_getValidPosition:function _getValidPosition(){var positionIsValid=/^(topright|topleft|bottomright|bottomleft)$/.test(this.position);if(!positionIsValid){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `position` attribute \''+this.position+'\' for '+this.is+'.\n          Position must be a string with one of the following values:\n          - \'topright\'\n          - \'topleft\'\n          - \'bottomright\'\n          - \'bottomleft\'\n          Defaulting to \'bottomright\'.');return'bottomright'}return this.position}};PxMapBehavior.Control=[PxMapBehavior.Layer,PxMapBehavior.ControlImpl];PxMapBehavior.ZoomControlImpl={properties:{zoomInText:{type:String,value:'<i class="fa fa-plus"></i>'},zoomOutText:{type:String,value:'<i class="fa fa-minus"></i>'},language:{type:String,value:'en'},resources:{type:Object,value:function value(){return{'en':{'Zoom in':'Zoom in','Zoom out':'Zoom out'}}}}},createInst:function createInst(options){return new PxMap.ZoomControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.position=this.position;options.zoomInText=this.zoomInText;options.zoomOutText=this.zoomOutText;if(typeof this.localize==='function'){options.zoomInTitle=this.localize('Zoom in');options.zoomOutTitle=this.localize('Zoom out')}return options}};PxMapBehavior.ZoomControl=[Polymer.AppLocalizeBehavior,PxMapBehavior.Control,PxMapBehavior.ZoomControlImpl];PxMapBehavior.ScaleControlImpl={properties:{imperialUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},metricUnits:{type:Boolean,value:false,observer:'shouldUpdateInst'},reverseColors:{type:Boolean,value:false,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.ScaleControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}if(lastOptions.reverseColors!==nextOptions.reverseColors){this.elementInst.setReverseColors(nextOptions.reverseColors)}if(lastOptions.metric!==nextOptions.metric){this.elementInst.showMetric(nextOptions.metric)}if(lastOptions.imperial!==nextOptions.imperial){this.elementInst.showImperial(nextOptions.imperial)}},getInstOptions:function getInstOptions(){var options=PxMapBehavior.ControlImpl.getInstOptions.call(this);options.imperial=this.imperialUnits;options.metric=this.metricUnits;options.reverseColors=this.reverseColors;return options}};PxMapBehavior.ScaleControl=[PxMapBehavior.Control,PxMapBehavior.ScaleControlImpl];PxMapBehavior.LocateControlImpl={properties:{locateText:{type:String,value:'<i class="fa fa-crosshairs"></i>',observer:'shouldUpdateInst'},locateTitle:{type:String,value:'Zoom to your location',observer:'shouldUpdateInst'},moveToLocation:{type:Boolean,value:false},moveMaxZoom:{type:Number,observer:'shouldUpdateInst'},lastFoundLocation:{type:Object,value:function value(){return{}},notify:true}},addInst:function addInst(parent){PxMapBehavior.ControlImpl.addInst.call(this,parent);var foundFn=this._handleLocationFound.bind(this);var errorFn=this._handleLocationError.bind(this);var tapFn=this._handleLocationTap.bind(this);this.bindEvents({'locationfound':foundFn,'locationerror':errorFn,'controlclick':tapFn})},removeInst:function removeInst(parent){PxMapBehavior.ControlImpl.removeInst.call(this,parent)},createInst:function createInst(options){return new PxMap.LocateControl(options)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.position!==nextOptions.position){this.elementInst.setPosition(nextOptions.position)}if(lastOptions.moveMaxZoom!==nextOptions.moveMaxZoom){this.elementInst.setMoveMaxZoom(nextOptions.moveMaxZoom)}},getInstOptions:function getInstOptions(){return{position:this.position,locateText:this.locateText,locateTitle:this.locateTitle,moveToLocation:this.moveToLocation,moveMaxZoom:this.moveMaxZoom}},_handleLocationFound:function _handleLocationFound(evt){if(!evt)return;var detail={lat:evt.latitude||null,lng:evt.longitude||null,timestamp:evt.timestamp||null,bounds:evt.bounds||null};detail.accuracy=evt.bounds.getCenter()&&evt.bounds.getNorthWest()?evt.bounds.getCenter().distanceTo(evt.bounds.getNorthEast()):null;this.fire('px-map-control-locate-succeeded',detail);this.set('lastFoundLocation',detail);this.notifyPath('lastFoundLocation.*')},_handleLocationError:function _handleLocationError(evt){if(!evt)return;var detail={message:evt.message||null};this.fire('px-map-control-locate-failed',detail)},_handleLocationTap:function _handleLocationTap(evt){if(!evt||evt.action!=='locate')return;this.fire('px-map-locate-button-tapped')}};PxMapBehavior.LocateControl=[PxMapBehavior.Control,PxMapBehavior.LocateControlImpl];window.PxMap=window.PxMap||{};var ScaleControl=function(_L$Control$Scale){(0,_inherits3.default)(ScaleControl,_L$Control$Scale);function ScaleControl(){(0,_classCallCheck3.default)(this,ScaleControl);return(0,_possibleConstructorReturn3.default)(this,(ScaleControl.__proto__||(0,_getPrototypeOf2.default)(ScaleControl)).apply(this,arguments))}(0,_createClass3.default)(ScaleControl,[{key:'initialize',value:function initialize(options){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'initialize',this).call(this,options)}},{key:'onAdd',value:function onAdd(map){this.__scaleContainer=(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onAdd',this).call(this,map);if(this.options.reverseColors===true){L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}return this.__scaleContainer}},{key:'onRemove',value:function onRemove(map){(0,_get3.default)(ScaleControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ScaleControl.prototype),'onRemove',this).call(this,map);this.__scaleContainer=null}},{key:'setReverseColors',value:function setReverseColors(shouldReverse){if(!this.__scaleContainer)return;if(shouldReverse&&!this.options.reverseColors){this.options.reverseColors=true;L.DomUtil.addClass(this.__scaleContainer,'leaflet-control-scale--reverse')}if(!shouldReverse&&this.options.reverseColors){this.options.reverseColors=false;L.DomUtil.removeClass(this.__scaleContainer,'leaflet-control-scale--reverse')}}},{key:'showImperial',value:function showImperial(shouldShowImperial){if(!this.__scaleContainer)return;if(shouldShowImperial&&!this.options.imperial&&!this._iScale){this._iScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.imperial=true}if(!shouldShowImperial&&this.options.imperial&&this._iScale){this.options.imperial=false;L.DomUtil.remove(this._iScale);this._iScale=null}this._update()}},{key:'showMetric',value:function showMetric(shouldShowMetric){if(!this.__scaleContainer)return;if(shouldShowMetric&&!this.options.metric&&!this._mScale){this._mScale=L.DomUtil.create('div','leaflet-control-scale-line',this.__scaleContainer);this.options.metric=true}if(!shouldShowMetric&&this.options.metric&&this._mScale){this.options.metric=false;L.DomUtil.remove(this._mScale);this._mScale=null}this._update()}}]);return ScaleControl}(L.Control.Scale);;PxMap.ScaleControl=ScaleControl;var ZoomControl=function(_L$Control$Zoom){(0,_inherits3.default)(ZoomControl,_L$Control$Zoom);function ZoomControl(){(0,_classCallCheck3.default)(this,ZoomControl);return(0,_possibleConstructorReturn3.default)(this,(ZoomControl.__proto__||(0,_getPrototypeOf2.default)(ZoomControl)).apply(this,arguments))}(0,_createClass3.default)(ZoomControl,[{key:'_zoomIn',value:function _zoomIn(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomIn',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomin'})}}},{key:'_zoomOut',value:function _zoomOut(e){(0,_get3.default)(ZoomControl.prototype.__proto__||(0,_getPrototypeOf2.default)(ZoomControl.prototype),'_zoomOut',this).call(this,e);if(this._map&&this._map.fire){this._map.fire('controlclick',{src:this,action:'zoomout'})}}},{key:'_fireZoomClickEvt',value:function _fireZoomClickEvt(evt){}}]);return ZoomControl}(L.Control.Zoom);;PxMap.ZoomControl=ZoomControl;var LocateControl=function(_L$Control){(0,_inherits3.default)(LocateControl,_L$Control);function LocateControl(){(0,_classCallCheck3.default)(this,LocateControl);return(0,_possibleConstructorReturn3.default)(this,(LocateControl.__proto__||(0,_getPrototypeOf2.default)(LocateControl)).apply(this,arguments))}(0,_createClass3.default)(LocateControl,[{key:'initialize',value:function initialize(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultOptions={position:'bottomright',className:'',locateText:'<i class="fa fa-crosshairs"></i>',locateTitle:'Zoom to your location',locateTimeout:10000,moveToLocation:true,moveMaxZoom:null};var composedOptions=(0,_assign2.default)(defaultOptions,options);L.Util.setOptions(this,composedOptions)}},{key:'onAdd',value:function onAdd(map){var locateName='leaflet-control-locate';this.__container=L.DomUtil.create('div',locateName+' leaflet-bar '+this.options.className);this.__locateButton=this._createButton(this.options.locateText,this.options.locateTitle,'leaflet-control-locate-button',this.__container);L.DomEvent.on(map,'locationfound',this._locationFound,this);L.DomEvent.on(map,'locationerror',this._locationError,this);L.DomEvent.disableClickPropagation(this.__locateButton);L.DomEvent.on(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.on(this.__locateButton,'click',this._locate,this);L.DomEvent.on(this.__locateButton,'click',this._refocusOnMap,this);return this.__container}},{key:'onRemove',value:function onRemove(map){L.DomEvent.off(map,'locationfound',this._locationFound,this);L.DomEvent.off(map,'locationerror',this._locationError,this);L.DomEvent.off(this.__locateButton,'click',L.DomEvent.stop);L.DomEvent.off(this.__locateButton,'click',this._locate,this);L.DomEvent.off(this.__locateButton,'click',this._refocusOnMap,this)}},{key:'setMoveMaxZoom',value:function setMoveMaxZoom(zoom){if(typeof zoom==='string'&&zoom.length&&!isNaN(zoom)){zoom=parseInt(zoom)}if(typeof zoom==='number'&&this.options.moveMaxZoom!==zoom){this.options.moveMaxZoom=zoom}}},{key:'on',value:function on(){var _map;if(!this._map){return undefined}return(_map=this._map).on.apply(_map,arguments)}},{key:'off',value:function off(){var _map2;if(!this._map){return undefined}return(_map2=this._map).off.apply(_map2,arguments)}},{key:'_locate',value:function _locate(evt){this._map.fire('controlclick',{src:this,action:'locate'});this.locate(evt)}},{key:'locate',value:function locate(){this.__locating=true;this._map.locate({setView:this.options.moveToLocation,maxZoom:this.options.moveMaxZoom,timeout:this.options.locateTimeout});this._setLocatingState()}},{key:'reset',value:function reset(){this._setReadyState()}},{key:'isDisabled',value:function isDisabled(){return this.__disabled||false}},{key:'_createButton',value:function _createButton(html,title,className,container,clickFn){var buttonEl=L.DomUtil.create('a',className,container);buttonEl.innerHTML=html;buttonEl.href='#';buttonEl.title=title;buttonEl.setAttribute('role','button');buttonEl.setAttribute('aria-label',title);return buttonEl}},{key:'_locationFound',value:function _locationFound(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_locationError',value:function _locationError(evt){if(this.__locating){this.__locating=false;this._setReadyState()}}},{key:'_setLocatingState',value:function _setLocatingState(){if(!this.__locateButton||!this.__locating)return;L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--locating');this.__disabled=true;this._updateDisabled()}},{key:'_setReadyState',value:function _setReadyState(){if(!this.__locateButton||this.__locating)return;this.__locateButton.innerHTML=this.options.locateText;L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--locating');L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--error');this.__disabled=false;this._updateDisabled()}},{key:'_updateDisabled',value:function _updateDisabled(){if(!this.__locateButton)return;if(this.__disabled){L.DomUtil.addClass(this.__locateButton,'leaflet-control-locate-button--disabled')}if(!this.__disabled){L.DomUtil.removeClass(this.__locateButton,'leaflet-control-locate-button--disabled')}}}]);return LocateControl}(L.Control);;PxMap.LocateControl=LocateControl})();

},{"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/get":18,"babel-runtime/helpers/inherits":19,"babel-runtime/helpers/possibleConstructorReturn":20}],144:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.ElementImpl={beforeRegister:function beforeRegister(){this.elementInst=null},attached:function attached(){this.__elAttached=true},detached:function detached(){this.__elAttached=false},notifyInstReady:function notifyInstReady(){var isReady=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!isReady)return false;this.fire('px-map-element-ready-to-add');return true},shouldAddInst:function shouldAddInst(){if(!this.elementInst){var options=this.__initialOptions=this.getInstOptions();this.elementInst=this.createInst(options);this.fire('px-map-element-instance-created')}this.__instEvents=this.__instEvents||[];this.__instEventsElementsMap=this.__instEventsElementsMap||new _weakMap2.default},shouldRemoveInst:function shouldRemoveInst(){this.unbindAllEvents(this.__instEvents,this.__instEventsElementsMap);this.__instEvents=null;this.__instEventsElementsMap=null},shouldUpdateInst:function shouldUpdateInst(){if(!this.elementInst&&this.__elAttached&&this.canAddInst()){this.notifyInstReady(this.canAddInst())}if(!this.elementInst)return;var lastOptions=this.__lastOptions||this.__initialOptions;var nextOptions=this.getInstOptions();this.updateInst(lastOptions,nextOptions);this.__lastOptions=nextOptions},createInst:function createInst(){throw new Error('The `createInst` method must be implemented.')},updateInst:function updateInst(){throw new Error('The `updateInst` method must be implemented.')},getInstOptions:function getInstOptions(){throw new Error('The `getInstOptions` method must be implemented.')},addInst:function addInst(){throw new Error('The `bindInst` method must be implemented.')},removeInst:function removeInst(){throw new Error('The `unbindInst` method must be implemented.')},extendObj:function extendObj(obj){if(!obj||!(obj instanceof Object))throw new Error('The first parameter of `extendObj` must be an object to be mutated.');for(var _len=arguments.length,properties=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){properties[_key-1]=arguments[_key]}if(properties.length){_assign2.default.apply(Object,[obj].concat(properties))}return obj},addProperties:function addProperties(){this.properties=this.properties||{};for(var _len2=arguments.length,properties=Array(_len2),_key2=0;_key2<_len2;_key2++){properties[_key2]=arguments[_key2]}if(properties.length){this.extend.apply(this,[this.properties].concat(properties))}return this.properties},bindEvents:function bindEvents(evts,target){if((typeof evts==='undefined'?'undefined':(0,_typeof3.default)(evts))!=='object'||!(0,_keys2.default)(evts).length)return;var el=target||this.elementInst;if(!el||!el.on)return;var boundEvts=this.__instEvents;var boundEvtEls=this.__instEventsElementsMap;for(var evtName in evts){var evtReference={name:evtName,fn:evts[evtName]};el.on(evtReference.name,evtReference.fn);boundEvts.push(evtReference);boundEvtEls.set(evtReference,el)}},unbindAllEvents:function unbindAllEvents(boundEvts,boundEvtEls){if(!boundEvts||!boundEvts.length||!boundEvtEls)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(boundEvts),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var evt=_step.value;var el=boundEvtEls.get(evt);if(!el||!el.off)continue;var name=evt.name,fn=evt.fn;el.off(name,fn);boundEvtEls.delete(evt)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},isShadyScoped:function isShadyScoped(){return!Polymer.Settings.useNativeShadow},getShadyScope:function getShadyScope(){return'style-scope px-map'}};PxMapBehavior.Element=[PxMapBehavior.ElementImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/weak-map":15,"babel-runtime/helpers/typeof":22}],145:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerGroupImpl={properties:{name:{type:String,notify:true}},createInst:function createInst(){return L.layerGroup()},updateInst:function updateInst(){return undefined},getInstOptions:function getInstOptions(){return{}}};PxMapBehavior.LayerGroup=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.LayerGroupImpl]})();

},{}],146:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMap=window.PxMap||{};var StaticIcon=function(){function StaticIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,StaticIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(StaticIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type=settings.type,type=_settings$type===undefined?'info':_settings$type,styleScope=settings.styleScope;var className=this._generateStaticIconClasses(type,styleScope);var html='\n        <div class="map-icon-static__wrapper">\n          <i class="map-icon-static__body"></i>\n          <i class="map-icon-static__descender"></i>\n          <i class="map-icon-static__badge"></i>\n        </div>\n      ';var iconSize=L.point(23,31);var iconAnchor=L.point(7.6,31);var popupAnchor=L.point(1,-31);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateStaticIconClasses',value:function _generateStaticIconClasses(type,styleScope){var classes=['map-icon','map-icon-static','map-icon-static--with-badge'];if(type&&type.length){classes.push('map-icon-static--'+type)}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return StaticIcon}();;PxMap.StaticIcon=StaticIcon;var SymbolIcon=function(){function SymbolIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,SymbolIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(SymbolIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _settings$type2=settings.type,type=_settings$type2===undefined?'info':_settings$type2,_settings$symbol=settings.symbol,symbol=_settings$symbol===undefined?'fa fa-bolt':_settings$symbol,styleScope=settings.styleScope;var className=this._generateSymbolIconClasses(type,styleScope);var html='\n        <div class="map-icon-symbol__wrapper">\n          <i class="map-icon-symbol__body">\n            <div class="map-icon-symbol__symbol--container flex flex--middle flex--center">\n              <i class="map-icon-symbol__symbol '+symbol+'"></i>\n            </div>\n          </i>\n          <i class="map-icon-symbol__descender"></i>\n          <i class="map-icon-symbol__badge"></i>\n        </div>\n      ';var iconSize=L.point(39,47);var iconAnchor=L.point(14.6,46);var popupAnchor=L.point(1,-45);var options={className:className,html:html,iconSize:iconSize,iconAnchor:iconAnchor,popupAnchor:popupAnchor};return L.divIcon(options)}},{key:'_generateSymbolIconClasses',value:function _generateSymbolIconClasses(type,styleScope){var classes=['map-icon','map-icon-symbol','map-icon-symbol--with-badge'];if(type&&type.length){classes.push('map-icon-symbol--'+type)}if(styleScope){classes.push(styleScope)}return classes.join(' ')}}]);return SymbolIcon}();;PxMap.SymbolIcon=SymbolIcon;var ClusterIcon=function(){function ClusterIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,ClusterIcon);this.icon=this.createIcon(settings);return this.icon}(0,_createClass3.default)(ClusterIcon,[{key:'createIcon',value:function createIcon(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var count=settings.count,countByType=settings.countByType,colorsByType=settings.colorsByType,_settings$containerSi=settings.containerSize,containerSize=_settings$containerSi===undefined?50:_settings$containerSi,_settings$pathSize=settings.pathSize,pathSize=_settings$pathSize===undefined?10:_settings$pathSize,_settings$borderSize=settings.borderSize,borderSize=_settings$borderSize===undefined?0:_settings$borderSize,_settings$className=settings.className,className=_settings$className===undefined?'':_settings$className,styleScope=settings.styleScope;var chartSize=containerSize-(borderSize>0?borderSize*2-0.5:0);var iconSize=L.point(containerSize,containerSize);var svg=this._generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize);var classes='map-icon-cluster '+(className||'')+' '+(styleScope||'');var html='\n        <div class="map-icon-cluster__container" style="width: '+containerSize+'px; height: '+containerSize+'px">\n          <i class="map-icon-cluster__svg">'+svg+'</i>\n          <div class="map-icon-cluster__body">'+count+'</div>\n        </div>\n      ';var options={iconSize:iconSize,className:classes,html:html};return L.divIcon(options)}},{key:'_generateClusterIconSVG',value:function _generateClusterIconSVG(countByType,colorsByType,chartSize,pathSize){var typeKeys=(0,_keys2.default)(countByType);var typeObjs=typeKeys.map(function(type){return{type:type,count:countByType[type],color:colorsByType[type]}});typeObjs.sort(function(a,b){return a.count-b.count});var types=[];var colors=[];var i=void 0,len=void 0,type=void 0,total=void 0;for(i=0,len=typeKeys.length;i<len;i++){type=typeKeys[i];total=countByType[type];types.push(countByType[type]);colors.push(colorsByType[type])}return this.createPieChart(types,colors,chartSize,pathSize)}},{key:'createPieChart',value:function createPieChart(groupsArray,colorsArray,chartSize,pathSize){var pieGeneratorFn=Px.d3.pie();var arcData=pieGeneratorFn(groupsArray);var radius=chartSize/2;var innerRadius=radius-pathSize;var arcPathGeneratorFn=Px.d3.arc().outerRadius(radius).innerRadius(innerRadius);var pathListTmpl=function pathListTmpl(paths){return paths.map(pathTmpl).join('')};var pathTmpl=function pathTmpl(pathData,pathIndex){return'<path d="'+arcPathGeneratorFn(pathData)+'" fill="'+colorsArray[pathIndex]+'" opacity="1"></path>'};return'\n        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+chartSize+'" height="'+chartSize+'">\n            <g transform="translate('+radius+', '+radius+')">\n                '+pathListTmpl(arcData)+'\n            </g>\n        </svg>\n      '}}]);return ClusterIcon}();;PxMap.ClusterIcon=ClusterIcon})();

},{"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17}],147:[function(require,module,exports){
'use strict';var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.IMSLayerImpl={properties:{layerName:{type:String,observer:'shouldUpdateInst'},url:{type:String},pane:{type:Object},demo:{type:Boolean,value:false},editable:{type:Boolean,value:false},featureStyle:{type:Object,observer:'shouldUpdateInst'},showFeatureProperties:{type:Boolean,value:false,observer:'shouldUpdateInst'},markerIconOptions:{type:Object,observer:'shouldUpdateInst'},sketch:{type:Boolean,value:false}},canAddInst:function canAddInst(){return this.layerName&&typeof this.layerName==='string'&&this.layerName.length>0},addInst:function addInst(parent){var _this=this;var addedFn=this._handleFeatureAdded.bind(this);var removedFn=this._handleFeatureRemoved.bind(this);this.bindEvents({'layeradd':addedFn,'layerremove':removedFn});if(this.elementInst.getLayers().length!==0){this.elementInst.eachLayer(function(layer){_this.elementInst.fire('layeradd',{layer:layer})})}PxMapBehavior.LayerImpl.addInst.call(this,parent)},createInst:function createInst(options){var _this2=this;var defaultMarkerIcon='<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';var defaultMarkerIconURL='data:image/svg+xml;base64,'+btoa(defaultMarkerIcon);var mapInst=this.parentNode.elementInst;var customPaneName=options.pane.name||options.layerName;var attributeProperties=this.getInstOptions().featureStyle;mapInst.createPane(customPaneName);mapInst.getPane(customPaneName).classList.add('custom-pane');mapInst.getPane(customPaneName).style.zIndex=options.pane.zIndex;var initialBounds=this.parentNode.elementInst.getBounds();var IMSLayer=L.geoJson(null,{pointToLayer:function pointToLayer(feature,latlng){var markerIcon=void 0;var iconOptions=options.markerIconOptions;iconOptions.iconSize=options.markerIconOptions.iconSize||[16,16];iconOptions.iconAnchor=options.markerIconOptions.iconAnchor||[8,8];if(iconOptions.divIcon){iconOptions.html=iconOptions.html||defaultMarkerIcon;markerIcon=L.divIcon(iconOptions)}else{iconOptions.iconUrl=iconOptions.iconUrl||defaultMarkerIconURL;markerIcon=L.icon(iconOptions)}return new L.Marker(latlng,{icon:markerIcon,pane:customPaneName})},onEachFeature:function onEachFeature(feature,layer){if(!options.showFeatureProperties)return;_this2._bindPopup(feature,layer)},style:function style(feature){var featureProperties=feature.properties.style||{};return _this2._getStyle(featureProperties,attributeProperties)},pane:customPaneName});if(this.editable){this._addEditableTools(mapInst,IMSLayer)}this.url='/v1/collections/'+options.layerName+'/spatial-query/bbox-interacts?'+('left='+initialBounds._southWest.lng+'&right='+initialBounds._northEast.lng+'&top='+initialBounds._northEast.lat+'&bottom='+initialBounds._southWest.lat);if(options.demo)this.url='demo/px-map-layer-geojson-data.json';this.querySelector('#get-collection').generateRequest();this.parentNode.elementInst.on({moveend:function moveend(){var bounds=_this2.parentNode.elementInst.getBounds();var boundsArray=[bounds._southWest.lng,bounds._northEast.lng,bounds._southWest.lat,bounds._northEast.lat];_this2.setNewBounds(boundsArray)}});return IMSLayer},_displayData:function _displayData(eventContext){var collectionName=eventContext.detail.url.split('/v1/collections/')[1];if(this.demo){collectionName='demo'}this.elementInst.clearLayers();this.elementInst.addData(eventContext.detail.response);this.fire('IMS-layer-ready',collectionName)},_getCollectionError:function _getCollectionError(event){if(event.detail.error.message!=='Request aborted.'){this.fire('IMS-layer-error',event.detail.error)}},_addEditableTools:function _addEditableTools(leafletMap,IMSLayer){if(!leafletMap.editTools){leafletMap.editTools=new L.Editable(leafletMap);leafletMap.editTools.addEventListener('editable:drawing:start',function(){leafletMap.doubleClickZoom.disable()});leafletMap.editTools.addEventListener('editable:drawing:end',function(){setTimeout(function(){leafletMap.doubleClickZoom.enable()},0)});leafletMap.editTools.addEventListener('editable:dragstart',function(){leafletMap.doubleClickZoom.disable()});leafletMap.editTools.addEventListener('editable:dragend',function(){setTimeout(function(){leafletMap.doubleClickZoom.enable()},0)})}if(this.sketch){leafletMap.editTools.featuresLayer=IMSLayer}this.fire('IMS-editTools-ready')},_getStyle:function _getStyle(featureProperties,attributeProperties){return{radius:featureProperties.radius||attributeProperties.radius||5,color:featureProperties.color||attributeProperties.color||'#3E87E8',fillColor:featureProperties.fillColor||attributeProperties.fillColor||'#88BDE6',weight:featureProperties.weight||attributeProperties.weight||2,opacity:featureProperties.opacity||attributeProperties.opacity||1,fillOpacity:featureProperties.fillOpacity||attributeProperties.fillOpacity||0.4}},_bindFeaturePopups:function _bindFeaturePopups(){var _this3=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this3._bindPopup(layer.feature,layer)})},_bindPopup:function _bindPopup(feature,layer){var popupDataKeys=(0,_keys2.default)(feature.properties).filter(function(key){return feature.properties.hasOwnProperty(key)&&feature.properties[key]!=='unset'&&key!=='style'});if(!popupDataKeys.length)return;var popupData=popupDataKeys.reduce(function(accum,key){accum[key]=feature.properties[key];return accum},{});var popup=new PxMap.DataPopup({title:'Feature Properties',data:popupData,autoPanPadding:[1,1]});layer.bindPopup(popup)},_unbindFeaturePopups:function _unbindFeaturePopups(){var _this4=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this4._unbindPopup(layer)})},_unbindPopup:function _unbindPopup(layer){if(typeof layer.getPopup()!=='undefined'){layer.unbindPopup()}},updateInst:function updateInst(lastOptions,nextOptions){var _this5=this;var defaultMarkerIcon='<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';var defaultMarkerIconURL='data:image/svg+xml;base64,'+btoa(defaultMarkerIcon);var customPaneName=lastOptions.pane.name||lastOptions.layerName;if(nextOptions.layerName.length<0){this.elementInst.clearLayers()}else if(nextOptions.layerName.length>0&&(lastOptions.layerName!==nextOptions.layerName||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){var styleAttributeProperties=this.getInstOptions().featureStyle;this.elementInst.clearLayers();this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this5._getStyle(featureProperties,styleAttributeProperties)};var currentBounds=this.parentNode.elementInst.getBounds();this.url='/v1/collections/'+nextOptions.layerName+'/spatial-query/bbox-interacts?'+('left='+currentBounds._southWest.lng+'&right='+currentBounds._northEast.lng+'&top='+currentBounds._northEast.lat+'&bottom='+currentBounds._southWest.lat);if(nextOptions.demo)this.url='demo/px-map-layer-geojson-data.json';this.querySelector('#get-collection').generateRequest();if(nextOptions.showFeatureProperties){this._bindFeaturePopups()}}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}else if(lastOptions.markerIconOptionsHash!==nextOptions.markerIconOptionsHash){this.elementInst.pointToLayer=function(feature,latlng){var iconOptions=nextOptions.markerIconOptions;iconOptions.iconSize=nextOptions.markerIconOptions.iconSize||[16,16];iconOptions.iconAnchor=nextOptions.markerIconOptions.iconAnchor||[8,8];iconOptions.iconUrl=nextOptions.markerIconOptions.iconSize||defaultMarkerIconURL;var markerIcon=L.icon(iconOptions);return new L.Marker(latlng,{icon:markerIcon,pane:customPaneName})};var currentData=this.elementInst.toGeoJSON();this.elementInst.clearLayers();this.elementInst.addData(currentData);if(nextOptions.showFeatureProperties){this._bindFeaturePopups()}}else if(lastOptions.pane.zIndex!==nextOptions.pane.zIndex){this.parentNode.elementInst.getPane(customPaneName).style.zIndex=nextOptions.pane.zIndex}},getInstOptions:function getInstOptions(){return{layerName:this.layerName||{},pane:this.pane||{name:null,zIndex:400},demo:this.demo,featureStyle:this.featureStyle||{},featureStyleHash:(0,_stringify2.default)(this.featureStyle||{}),featureSVG:this.featureSvg,markerIconOptions:this.markerIconOptions||{},markerIconOptionsHash:(0,_stringify2.default)(this.markerIconOptions||{}),showFeatureProperties:this.showFeatureProperties}},setNewBounds:function setNewBounds(boundsArray){if(boundsArray&&boundsArray.length===4&&!boundsArray.some(isNaN)){boundsArray[0]<-180?boundsArray[0]=-180:null;boundsArray[1]>180?boundsArray[1]=180:null;boundsArray[2]<-90?boundsArray[2]=90:null;boundsArray[3]>90?boundsArray[3]=90:null;this.url='/v1/collections/'+this.layerName+'/spatial-query/bbox-interacts?'+('left='+boundsArray[0]+'&right='+boundsArray[1]+'&top='+boundsArray[2]+'&bottom='+boundsArray[3]);if(this.demo)this.url='demo/px-map-layer-geojson-data.json';var ironAjax=this.querySelector('#get-collection');if(ironAjax.lastRequest){ironAjax.lastRequest.abort()}ironAjax.generateRequest()}},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-closed',detail)}};PxMapBehavior.IMSLayer=[PxMapBehavior.Layer,PxMapBehavior.IMSLayerImpl]})();

},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/keys":10}],148:[function(require,module,exports){
'use strict';var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.GeoJSONLayerImpl={properties:{data:{type:Object,observer:'shouldUpdateInst'},editable:{type:Boolean,value:false},pane:{type:Object},featureStyle:{type:Object,observer:'shouldUpdateInst'},showFeatureProperties:{type:Boolean,value:false,observer:'shouldUpdateInst'},markerIconOptions:{type:Object,observer:'shouldUpdateInst'},sketch:{type:Boolean,value:false}},update:function update(){if(!this.elementInst)return;this.shouldUpdateInst()},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},addInst:function addInst(parent){var _this=this;var addedFn=this._handleFeatureAdded.bind(this);var removedFn=this._handleFeatureRemoved.bind(this);this.bindEvents({'layeradd':addedFn,'layerremove':removedFn});if(this.elementInst.getLayers().length!==0){this.elementInst.eachLayer(function(layer){_this.elementInst.fire('layeradd',{layer:layer})})}PxMapBehavior.LayerImpl.addInst.call(this,parent)},createInst:function createInst(options){var _this2=this;var defaultMarkerIcon='<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';var defaultMarkerIconURL='data:image/svg+xml;base64,'+btoa(defaultMarkerIcon);var mapInst=this.parentNode.elementInst;var geoJsonPaneName=options.pane.name||'overlayPane';var attributeProperties=this.getInstOptions().featureStyle;mapInst.createPane(geoJsonPaneName);mapInst.getPane(geoJsonPaneName).classList.add('custom-pane');mapInst.getPane(geoJsonPaneName).style.zIndex=options.pane.zIndex;var geojsonLayer=L.geoJson(options.data,{pointToLayer:function pointToLayer(feature,latlng){var markerIcon=void 0;var iconOptions=options.markerIconOptions;iconOptions.iconSize=options.markerIconOptions.iconSize||[16,16];iconOptions.iconAnchor=options.markerIconOptions.iconAnchor||[8,8];if(iconOptions.divIcon){iconOptions.html=iconOptions.html||defaultMarkerIcon;markerIcon=L.divIcon(iconOptions)}else{iconOptions.iconUrl=iconOptions.iconUrl||defaultMarkerIconURL;markerIcon=L.icon(iconOptions)}return new L.Marker(latlng,{icon:markerIcon,pane:geoJsonPaneName})},onEachFeature:function onEachFeature(feature,layer){if(!_this2.showFeatureProperties)return;_this2._bindPopup(feature,layer)},style:function style(feature){var featureProperties=feature.properties.style||{};return _this2._getStyle(featureProperties,attributeProperties)},pane:geoJsonPaneName});if(this.editable){this._addEditableTools(mapInst,geojsonLayer)}return geojsonLayer},_addEditableTools:function _addEditableTools(leafletMap,geojsonLayer){if(!leafletMap.editTools){leafletMap.editTools=new L.Editable(leafletMap);leafletMap.editTools.addEventListener('editable:drawing:start',function(){leafletMap.doubleClickZoom.disable()});leafletMap.editTools.addEventListener('editable:drawing:end',function(){setTimeout(function(){leafletMap.doubleClickZoom.enable()},0)});leafletMap.editTools.addEventListener('editable:dragstart',function(){leafletMap.doubleClickZoom.disable()});leafletMap.editTools.addEventListener('editable:dragend',function(){setTimeout(function(){leafletMap.doubleClickZoom.enable()},0)})}if(this.sketch){leafletMap.editTools.featuresLayer=geojsonLayer}this.fire('geojson-editTools-ready')},_getStyle:function _getStyle(featureProperties,attributeProperties){return{radius:featureProperties.radius||attributeProperties.radius||5,color:featureProperties.color||attributeProperties.color||'#3E87E8',fillColor:featureProperties.fillColor||attributeProperties.fillColor||'#88BDE6',weight:featureProperties.weight||attributeProperties.weight||2,opacity:featureProperties.opacity||attributeProperties.opacity||1,fillOpacity:featureProperties.fillOpacity||attributeProperties.fillOpacity||0.4}},_bindFeaturePopups:function _bindFeaturePopups(){var _this3=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this3._bindPopup(layer.feature,layer)})},_bindPopup:function _bindPopup(feature,layer){var popupDataKeys=(0,_keys2.default)(feature.properties).filter(function(key){return feature.properties.hasOwnProperty(key)&&feature.properties[key]!=='unset'&&key!=='style'});if(!popupDataKeys.length)return;var popupData=popupDataKeys.reduce(function(accum,key){accum[key]=feature.properties[key];return accum},{});var popup=new PxMap.DataPopup({title:'Feature Properties',data:popupData,autoPanPadding:[1,1]});layer.bindPopup(popup)},_unbindFeaturePopups:function _unbindFeaturePopups(){var _this4=this;if(!this.elementInst)return;this.elementInst.eachLayer(function(layer){return _this4._unbindPopup(layer)})},_unbindPopup:function _unbindPopup(layer){if(typeof layer.getPopup()!=='undefined'){layer.unbindPopup()}},updateInst:function updateInst(lastOptions,nextOptions){var _this5=this;if(!(0,_keys2.default)(nextOptions.data).length){this.elementInst.clearLayers()}else if((0,_keys2.default)(nextOptions.data).length&&(lastOptions.dataHash!==nextOptions.dataHash||lastOptions.featureStyleHash!==nextOptions.featureStyleHash)){var styleAttributeProperties=this.getInstOptions().featureStyle;this.elementInst.clearLayers();this.elementInst.options.style=function(feature){var featureProperties=feature.properties.style||{};return _this5._getStyle(featureProperties,styleAttributeProperties)};this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){this._bindFeaturePopups()}}else if(lastOptions.showFeatureProperties!==nextOptions.showFeatureProperties){if(nextOptions.showFeatureProperties)this._bindFeaturePopups();if(!nextOptions.showFeatureProperties)this._unbindFeaturePopups()}else if(lastOptions.markerIconOptionsHash!==nextOptions.markerIconOptionsHash){this.elementInst.pointToLayer=function(feature,latlng){var iconOptions=nextOptions.markerIconOptions;iconOptions.iconSize=nextOptions.markerIconOptions.iconSize||[16,16];iconOptions.iconAnchor=nextOptions.markerIconOptions.iconAnchor||[8,8];iconOptions.iconUrl=nextOptions.markerIconOptions.iconSize||defaultMarkerIconURL;var markerIcon=L.icon(iconOptions);return new L.Marker(latlng,{icon:markerIcon})};this.elementInst.clearLayers();this.elementInst.addData(nextOptions.data);if(nextOptions.showFeatureProperties){this._bindFeaturePopups()}}else if(lastOptions.pane.zIndex!==nextOptions.pane.zIndex){this.parentNode.elementInst.getPane(customPaneName).style.zIndex=nextOptions.pane.zIndex}},getInstOptions:function getInstOptions(){return{data:this.data||{},dataHash:(0,_stringify2.default)(this.data||{}),featureStyle:this.featureStyle||{},featureStyleHash:(0,_stringify2.default)(this.featureStyle||{}),featureSVG:this.featureSvg,markerIconOptions:this.markerIconOptions||{},markerIconOptionsHash:(0,_stringify2.default)(this.markerIconOptions||{}),pane:this.pane||{},showFeatureProperties:this.showFeatureProperties}},_handleFeatureAdded:function _handleFeatureAdded(evt){if(!evt||!evt.layer)return;evt.layer.on('click',this._handleFeatureTapped.bind(this));evt.layer.on('popupopen',this._handleFeaturePopupOpened.bind(this));evt.layer.on('popupclose',this._handleFeaturePopupClosed.bind(this));var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-added',detail)},_handleFeatureRemoved:function _handleFeatureRemoved(evt){if(!evt||!evt.layer)return;evt.layer.off();var detail={};if(evt.layer&&evt.layer.feature){detail.feature=evt.layer.feature}this.fire('px-map-layer-geojson-feature-removed',detail)},_handleFeatureTapped:function _handleFeatureTapped(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-tapped',detail)},_handleFeaturePopupOpened:function _handleFeaturePopupOpened(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-opened',detail)},_handleFeaturePopupClosed:function _handleFeaturePopupClosed(evt){var detail={};if(evt.target&&evt.target.feature){detail.feature=evt.target.feature}this.fire('px-map-layer-geojson-feature-popup-closed',detail)}};PxMapBehavior.GeoJSONLayer=[PxMapBehavior.Layer,PxMapBehavior.GeoJSONLayerImpl]})();

},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/typeof":22}],149:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.LayerImpl={attached:function attached(){this.notifyInstReady(this.canAddInst())},detached:function detached(){this.shouldRemoveInst()},shouldAddInst:function shouldAddInst(parent){PxMapBehavior.ElementImpl.shouldAddInst.call(this,parent);if(this.elementInst&&parent){this.addInst(parent)};},shouldRemoveInst:function shouldRemoveInst(parent){PxMapBehavior.ElementImpl.shouldRemoveInst.call(this,parent);if(this.elementInst){this.removeInst(parent?parent:undefined)};},addInst:function addInst(parent){parent.addLayer(this.elementInst)},removeInst:function removeInst(parent){this.elementInst.remove()},canAddInst:function canAddInst(){return true}};PxMapBehavior.Layer=[PxMapBehavior.Element,PxMapBehavior.LayerImpl];PxMapBehavior.ParentLayerImpl={listeners:{'px-map-element-instance-created':'_tryToAddAllChildren','px-map-element-ready-to-add':'_tryToAddOneChild'},created:function created(){this._attachedChildren=this._attachedChildren||new _weakMap2.default},detached:function detached(){this._detachLayerChildren()},_tryToAddAllChildren:function _tryToAddAllChildren(evt){var localEvt=Polymer.dom(evt);if(!this.elementInst||localEvt.rootTarget!==this)return;this._attachLayerChildren()},_tryToAddOneChild:function _tryToAddOneChild(evt){var localEvt=Polymer.dom(evt);if(localEvt.rootTarget===this)return;evt.stopPropagation();if(!this.elementInst)return;this._attachLayerChild(localEvt.rootTarget)},_attachLayerChildren:function _attachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(children),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var child=_step.value;this._attachLayerChild(child)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},_attachLayerChild:function _attachLayerChild(childEl){var _this=this;if(this._attachedChildren.has(childEl)||!childEl.shouldAddInst||!childEl.canAddInst||!childEl.canAddInst())return;this._attachedChildren.set(childEl,true);this.async(function(){childEl.shouldAddInst(_this.elementInst)})},_detachLayerChildren:function _detachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(children),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var child=_step2.value;this._detachLayerChild(child)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}},_detachLayerChild:function _detachLayerChild(childEl){var _this2=this;if(!this._attachedChildren.has(childEl)||!childEl.shouldRemoveInst)return;this._attachedChildren.delete(childEl);this.async(function(){childEl.shouldRemoveInst(_this2.elementInst)})}};PxMapBehavior.ParentLayer=[PxMapBehavior.ParentLayerImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/weak-map":15}],150:[function(require,module,exports){
'use strict';var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);var _slicedToArray2=require('babel-runtime/helpers/slicedToArray');var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _weakMap=require('babel-runtime/core-js/weak-map');var _weakMap2=_interopRequireDefault(_weakMap);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _set=require('babel-runtime/core-js/set');var _set2=_interopRequireDefault(_set);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.MarkerGroupImpl={properties:{name:{type:String,notify:true},data:{type:Object,observer:'shouldUpdateInst'},colorsByType:{type:Object,value:function value(){return{'unknown':this.getComputedStyleValue('--internal-px-map-icon-unknown-color'),'info':this.getComputedStyleValue('--internal-px-map-icon-info-color'),'warning':this.getComputedStyleValue('--internal-px-map-icon-warning-color'),'important':this.getComputedStyleValue('--internal-px-map-icon-important-color')}}},iconFns:{type:Object,value:function value(){return{cluster:undefined,marker:undefined}}},clusterConfig:{type:Object}},update:function update(){if(!this.elementInst)return;var _getInstOptions=this.getInstOptions(),data=_getInstOptions.data;var features=this._syncDataWithMarkers(data.features,this.elementInst);this._notifyNewFeatures(features)},addInst:function addInst(parent){var spiderifyFn=this._handleClusterSpiderify.bind(this);var unspiderifyFn=this._handleClusterUnspiderify.bind(this);var markerTapFn=this._handleSingleMarkerTap.bind(this);var markerDoubleClickFn=this._handleSingleMarkerDoubleClick.bind(this);var clusterTapFn=this._handleClusterTap.bind(this);this.bindEvents({'spiderfied':spiderifyFn,'unspiderfied':unspiderifyFn,'click':markerTapFn,'dblclick':markerDoubleClickFn,'clusterclick':clusterTapFn});PxMapBehavior.LayerImpl.addInst.call(this,parent);this.async(function(){this.fire('px-map-marker-group-added')})},removeInst:function removeInst(parent){PxMapBehavior.LayerImpl.removeInst.call(this,parent)},createInst:function createInst(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var cluster=L.markerClusterGroup(options);if(options.data){var features=this._syncDataWithMarkers(options.data.features,cluster);this._notifyNewFeatures(features)}return cluster},updateInst:function updateInst(lastOptions,nextOptions){if(nextOptions.data){var features=this._syncDataWithMarkers(nextOptions.data.features,this.elementInst);this._notifyNewFeatures(features)}},getInstOptions:function getInstOptions(){var defaultOptions={showCoverageOnHover:true,maxClusterRadius:150,spiderifyOnMaxZoom:true,removeOutsideVisibleBounds:true,animate:true,polygonOptions:{stroke:true,color:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-stroke-color'),fillColor:this.getComputedStyleValue('--internal-px-map-marker-group-cluster-polygon-fill-color'),fillOpacity:0.4}};var options=(0,_assign2.default)(defaultOptions,this.clusterConfig||{});options.data=this._getValidData();options.iconCreateFunction=this._createClusterIcon.bind(this);return options},_notifyNewFeatures:function _notifyNewFeatures(featureSet){if(!featureSet||!(featureSet instanceof _set2.default)||!featureSet.size)return;this.async(function _notifyNewFeaturesDebounce(){var bounds=L.latLngBounds();var feature=void 0;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(featureSet),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){feature=_step.value;bounds.extend([feature.geometry.coordinates[1],feature.geometry.coordinates[0]])}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}this.fire('px-map-marker-group-features-changed',{bounds:bounds})},1)},_getValidData:function _getValidData(){if(!this.data){return undefined}var dataIsNotValid=(0,_typeof3.default)(this.data)!=='object'||this.data.type!=='FeatureCollection'||!Array.isArray(this.data.features)||!this.data.features.length||(0,_typeof3.default)(this.data.features[0])!=='object';if(dataIsNotValid){console.log('PX-MAP CONFIGURATION ERROR:\n          The `data` attribute for '+this.is+' is not valid GeoJSON. Valid GeoJSON\n          that follows the FeatureCollection standard is required to draw the\n          marker clusters. See the GeoJSON spec website (http://geojson.org/geojson-spec.html)\n          for more information on what is required.\n\n          The minimum requirements for '+this.is+' are:\n          - Must be a valid JavaScript object (or deserializable to an object)\n          - Must have key `type` with value \'FeatureCollection\'\n          - Must have key `features` with value of an array with length\n          - Each entry in `features` must be a valid object\n        ');return undefined}return this.data},_createClusterIcon:function _createClusterIcon(cluster){if(this.iconFns.cluster){return this.iconFns.cluster.call(this,cluster)}var markers=cluster.getAllChildMarkers();var count=markers.length;var types=this._indexClusterMarkersByType(markers);var colors=this.colorsByType;var containerSize=this._getClusterIconSize(count);var pathSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-path-size')||10;var borderSize=this._getStyleValueAsNum('--internal-px-map-marker-group-cluster-border-size')||0;var options={count:count,countByType:types,colorsByType:colors,containerSize:containerSize,pathSize:pathSize,borderSize:borderSize,styleScope:this.isShadyScoped()?this.getShadyScope():undefined};return new PxMap.ClusterIcon(options)},_getStyleValueAsNum:function _getStyleValueAsNum(styleValName){this.__styleVals=this.__styleVals||{};if(this.__styleVals[styleValName])return this.__styleVals[styleValName];var computedVal=this.getComputedStyleValue(styleValName);if(computedVal&&computedVal.indexOf('px')!==-1){var valWithoutSuffix=computedVal.replace('px','');var valAsNum=Math.floor(valWithoutSuffix);this.__styleVals[styleValName]=valAsNum;return valAsNum}else{return undefined}},_getClusterIconSize:function _getClusterIconSize(count){if(count<10){return 60}if(count>=10&&count<40){return 75}if(count>40){return 90}},_indexClusterMarkersByType:function _indexClusterMarkersByType(markers){return markers.reduce(function(types,marker){if(marker.featureProperties&&marker.featureProperties['marker-icon']&&marker.featureProperties['marker-icon']['icon-type']){types[marker.featureProperties['marker-icon']['icon-type']]=(types[marker.featureProperties['marker-icon']['icon-type']]||0)+1}return types},{})},_syncDataWithMarkers:function _syncDataWithMarkers(newFeatures,clusterInst){if(!newFeatures.length)return;var featuresSet=this._features=this._features||new _set2.default;var markersMap=this._markers=this._markers||new _weakMap2.default;var _diffNewFeatures=this._diffNewFeatures(newFeatures,featuresSet,markersMap),featuresToAdd=_diffNewFeatures.featuresToAdd,featuresToUpdate=_diffNewFeatures.featuresToUpdate,featuresToRemove=_diffNewFeatures.featuresToRemove,nextFeaturesSet=_diffNewFeatures.nextFeaturesSet,nextMarkersMap=_diffNewFeatures.nextMarkersMap;var feature=void 0,cachedMarker=void 0,markersToOperate=void 0;if(featuresToAdd.size){markersToOperate=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=(0,_getIterator3.default)(featuresToAdd),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){feature=_step2.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._createMarker(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}clusterInst.addLayers(markersToOperate);markersToOperate=null}if(featuresToUpdate.size){markersToOperate=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=(0,_getIterator3.default)(featuresToUpdate),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){feature=_step3.value;cachedMarker=nextMarkersMap.get(feature);cachedMarker.marker=this._updateMarker(feature,cachedMarker.marker);markersToOperate.push(cachedMarker.marker);nextMarkersMap.set(feature,cachedMarker)}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}clusterInst.refreshClusters(markersToOperate);markersToOperate=null}if(featuresToRemove.size){markersToOperate=[];var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=(0,_getIterator3.default)(featuresToRemove),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){feature=_step4.value;cachedMarker=nextMarkersMap.get(feature);markersToOperate.push(cachedMarker.marker);nextMarkersMap.delete(feature)}}catch(err){_didIteratorError4=true;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}clusterInst.removeLayers(markersToOperate);markersToOperate=null}this._features=nextFeaturesSet;this._markers=nextMarkersMap;featuresSet.clear();featuresToAdd.clear();featuresToUpdate.clear();featuresToRemove.clear();return this._features},_diffNewFeatures:function _diffNewFeatures(newFeatures,lastFeatureSet,markerMap){var nextFeaturesSet=new _set2.default;var featuresToAdd=new _set2.default;var featuresToUpdate=new _set2.default;var i=void 0,len=void 0,valid=void 0,known=void 0,cachedMarker=void 0,featureHash=void 0;for(i=0,len=newFeatures.length;i<len;i++){valid=newFeatures[i].id&&newFeatures[i].geometry&&newFeatures[i].geometry.type==='Point'&&newFeatures[i].geometry.coordinates instanceof Array&&newFeatures[i].geometry.coordinates.length===2;if(!valid)continue;known=lastFeatureSet.has(newFeatures[i]);if(!known){featuresToAdd.add(newFeatures[i]);lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i]);cachedMarker={marker:null,hash:(0,_stringify2.default)(newFeatures[i])};markerMap.set(newFeatures[i],cachedMarker);continue}if(known){cachedMarker=markerMap.get(newFeatures[i]);featureHash=(0,_stringify2.default)(newFeatures[i]);if(cachedMarker.hash!==featureHash){featuresToUpdate.add(newFeatures[i]);cachedMarker.hash=featureHash;markerMap.set(newFeatures[i],cachedMarker)}lastFeatureSet.delete(newFeatures[i]);nextFeaturesSet.add(newFeatures[i])}}var featuresToRemove=lastFeatureSet.size?lastFeatureSet:new _set2.default;lastFeatureSet=null;return{featuresToAdd:featuresToAdd,featuresToUpdate:featuresToUpdate,featuresToRemove:featuresToRemove,nextFeaturesSet:nextFeaturesSet,nextMarkersMap:markerMap}},_createMarker:function _createMarker(feature){var _feature$geometry$coo=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),lat=_feature$geometry$coo[0],lng=_feature$geometry$coo[1];var marker=L.marker([lng,lat]);var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_updateMarker:function _updateMarker(feature,marker){var _marker$getLatLng=marker.getLatLng(),lat=_marker$getLatLng.lat,lng=_marker$getLatLng.lng;var _feature$geometry$coo2=(0,_slicedToArray3.default)(feature.geometry.coordinates,2),nextLng=_feature$geometry$coo2[0],nextLat=_feature$geometry$coo2[1];if(lat!==Number(nextLat)||lng!==Number(nextLng)){marker.setLatLng([nextLat,nextLng])}var iconSettings=feature.properties['marker-icon']?this._extractMarkerIconSettings(feature.properties['marker-icon']):{};iconSettings.base=iconSettings.base||'static-icon';iconSettings.type=iconSettings.type||'info';var icon=this._createMarkerIcon(iconSettings);marker.setIcon(icon);marker.featureProperties=feature.properties;return marker},_extractMarkerIconSettings:function _extractMarkerIconSettings(featSettings){var featSettingsKeys=(0,_keys2.default)(featSettings);if(!featSettingsKeys.length)return undefined;var iconSettings={};var i=void 0,len=void 0,featKeyCamelized=void 0;for(i=0,len=featSettingsKeys.length;i<len;i++){if(featSettingsKeys[i].substring(0,5)!=='icon-')continue;featKeyCamelized=featSettingsKeys[i].substring(5).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()});iconSettings[featKeyCamelized]=featSettings[featSettingsKeys[i]]}return iconSettings},_createMarkerIcon:function _createMarkerIcon(options){if(this.iconFns.marker){return this.iconFns.marker.call(this,options)}options.styleScope=this.isShadyScoped()?this.getShadyScope():undefined;var klassName=this._strToKlassName(options.base);return new PxMap[klassName](options)},_strToKlassName:function _strToKlassName(str){return str.charAt(0).toUpperCase()+str.substring(1).replace(/(\-[a-z])/g,function(match){return match.charAt(1).toUpperCase()})},_handleClusterSpiderify:function _handleClusterSpiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='hidden'},_handleClusterUnspiderify:function _handleClusterUnspiderify(evt){if(!evt||!evt.cluster||!evt.cluster._icon)return;evt.cluster._icon.style.visibility='visible'},_handleSingleMarkerTap:function _handleSingleMarkerTap(evt){if(evt.layer&&evt.layer.getLatLng()instanceof L.LatLng){var latLng=L.latLng(evt.layer.getLatLng());var lat=latLng.lat,lng=latLng.lng;var detail={latLng:latLng,lat:lat,lng:lng,feature:evt.layer.featureProperties?evt.layer.featureProperties:undefined};this.fire('px-map-marker-group-marker-tapped',detail)}if(evt.layer&&evt.layer.featureProperties&&evt.layer.featureProperties.hasOwnProperty('marker-popup')){this._bindAndOpenPopup(evt.layer)}},_handleSingleMarkerDoubleClick:function _handleSingleMarkerDoubleClick(evt){var latLng=L.latLng(evt.layer.getLatLng());var lat=latLng.lat,lng=latLng.lng;var detail={latLng:latLng,lat:lat,lng:lng,feature:evt.layer.featureProperties?evt.layer.featureProperties:undefined};this.fire('px-map-marker-group-marker-double-clicked',detail)},_handleClusterTap:function _handleClusterTap(evt){var latLngBounds=evt.layer.getBounds();var markers=evt.layer.getAllChildMarkers();var features=[];for(var i=0;i<markers.length;i++){features.push(markers[i].featureProperties)}var detail={bounds:latLngBounds,features:features};this.fire('px-map-marker-group-cluster-tapped',detail)},_bindAndOpenPopup:function _bindAndOpenPopup(marker){if(!marker||!marker.bindPopup||!marker.openPopup)return;var popupSettings=this._featSettingsToProps(marker.featureProperties['marker-popup'],'popup');if(!popupSettings||!(0,_keys2.default)(popupSettings).length)return;var klassName=popupSettings._Base&&PxMap.hasOwnProperty(popupSettings._Base)?popupSettings._Base:'InfoPopup';var popup=new PxMap[klassName](popupSettings);marker.bindPopup(popup).openPopup();marker.__boundCloseFn=this._unbindAndClosePopup.bind(this,marker);marker.on('popupclose',marker.__boundCloseFn)},_unbindAndClosePopup:function _unbindAndClosePopup(marker){if(!marker||!marker.getPopup||!marker.getPopup())return;marker.off('popupclose',marker.__boundCloseFn);marker.__boundCloseFn=null;marker.closePopup().unbindPopup()},_featSettingsToProps:function _featSettingsToProps(settings,prefix){var keys=(0,_keys2.default)(settings);if(!keys.length)return undefined;var settingsAsProps={};var i=0,len=keys.length,newKey=void 0;for(;i<len;i++){if(prefix&&keys[i].substr(0,prefix.length)!==prefix){continue}if(/^[A-Za-z]+\-base$/.test(keys[i])){settingsAsProps['_Base']=this._strToKlassName(settings[keys[i]]);continue}newKey=keys[i].replace(/^[A-Za-z]+\-(.*)$/,'$1');settingsAsProps[newKey]=settings[keys[i]]}return settingsAsProps}};PxMapBehavior.MarkerGroup=[PxMapBehavior.Layer,PxMapBehavior.MarkerGroupImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/set":12,"babel-runtime/core-js/weak-map":15,"babel-runtime/helpers/slicedToArray":21,"babel-runtime/helpers/typeof":22}],151:[function(require,module,exports){
'use strict';var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.MarkerImpl={properties:{lat:{type:Number,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,notify:true,observer:'shouldUpdateInst'},name:{type:String,notify:true,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng)},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;console.log('PX-MAP CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.');return false},addInst:function addInst(parent){var addedFn=this._handleMarkerAdded.bind(this);var removedFn=this._handleMarkerRemoved.bind(this);var tapFn=this._handleMarkerTapped.bind(this);this.bindEvents({'add':addedFn,'remove':removedFn,'click':tapFn},this.marker);PxMapBehavior.LayerImpl.addInst.call(this,parent)},removeInst:function removeInst(parent){this._handleMarkerRemoved();PxMapBehavior.LayerImpl.removeInst.call(this,parent)},createInst:function createInst(options){this.marker=L.marker(options.geometry,options.config);this.marker.isMarker=true;return this.marker},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.elementInst.setOpacity(0)}if(!geomWasDefined&&geomIsDefined){this.elementInst.setLatLng(nextOptions.geometry);this.elementInst.setOpacity(1)}if(geomIsDifferent){this.elementInst.setLatLng(nextOptions.geometry)}if(lastOptions.config.icon!==nextOptions.config.icon){this.elementInst.setIcon(nextOptions.config.icon)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var config={};config.title=this.name||'';config.icon=this.getMarkerIcon();return{geometry:geometry,config:config}},getLatLng:function getLatLng(){if(this.latLngIsValid(this.lat,this.lng)){return L.latLng(this.lat,this.lng)}},getMarkerIcon:function getMarkerIcon(){throw new Error('The `getMarkerIcon` method must be implemented.')},_handleMarkerAdded:function _handleMarkerAdded(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-added',detail)},_handleMarkerRemoved:function _handleMarkerRemoved(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-removed',detail)},_handleMarkerTapped:function _handleMarkerTapped(){var latLng=this.getLatLng();var detail={};if(latLng){detail.latLng=latLng;detail.lat=latLng.lat;detail.lng=latLng.lng}this.fire('px-map-marker-tapped',detail)}};PxMapBehavior.Marker=[PxMapBehavior.Layer,PxMapBehavior.ParentLayer,PxMapBehavior.MarkerImpl];PxMapBehavior.SymbolMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'},symbolClass:{type:String,observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.SymbolIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type,symbol:this.symbolClass,styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.SymbolMarker=[PxMapBehavior.Marker,PxMapBehavior.SymbolMarkerImpl];PxMapBehavior.StaticMarkerImpl={properties:{type:{type:String,reflectToAttribute:true,value:'info',observer:'_updateMarkerIcon'}},getMarkerIcon:function getMarkerIcon(){if(!this.markerIcon){var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options)}return this.markerIcon},_updateMarkerIcon:function _updateMarkerIcon(){if(!this.markerIcon)return;var options=this._getMarkerIconOptions();this.markerIcon=new PxMap.StaticIcon(options);this.shouldUpdateInst()},_getMarkerIconOptions:function _getMarkerIconOptions(){return{type:this.type||'',styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.StaticMarker=[PxMapBehavior.Marker,PxMapBehavior.StaticMarkerImpl];PxMapBehavior.LocateMarkerImpl={properties:{accuracy:{type:Number,observer:'shouldUpdateInst'}},createInst:function createInst(options){this.markerBaseIcon=L.circleMarker(options.geometry,options.baseConfig);this.markerAccuracyIcon=L.circle(options.geometry,options.accuracyRadius,options.accuracyConfig);this.markerGroup=L.featureGroup([this.markerAccuracyIcon,this.markerBaseIcon]);this.markerGroup.isMarker=true;this.markerGroup.getLatLng=this.getLatLng.bind(this);return this.markerGroup},updateInst:function updateInst(lastOptions,nextOptions){var geomWasDefined=(0,_typeof3.default)(lastOptions.geometry)==='object';var geomIsDefined=(0,_typeof3.default)(nextOptions.geometry)==='object';var geomIsDifferent=geomWasDefined&&geomIsDefined&&(lastOptions.geometry.lat!==nextOptions.geometry.lat||lastOptions.geometry.lng!==nextOptions.geometry.lng);if(geomWasDefined&&!geomIsDefined){this.markerBaseIcon.setStyle({opacity:0,fillOpacity:0});this.markerAccuracyIcon.setStyle({opacity:0,fillOpacity:0})}if(!geomWasDefined&&geomIsDefined){this.markerBaseIcon.setLatLng(nextOptions.geometry);this.markerAccuracyIcon.setLatLng(nextOptions.geometry);this.markerBaseIcon.setStyle(nextOptions.baseConfig);this.markerAccuracyIcon.setStyle(nextOptions.accuracyConfig)}if(geomIsDifferent){this.markerBaseIcon.setLatLng(nextOptions.geometry);this.markerAccuracyIcon.setLatLng(nextOptions.geometry)}if(lastOptions.accuracyRadius!==nextOptions.accuracyRadius){this.markerAccuracyIcon.setRadius(nextOptions.accuracyRadius)}},getInstOptions:function getInstOptions(){var geometry=this.getLatLng();var baseConfig={};baseConfig.radius=7.5;baseConfig.stroke=true;baseConfig.color=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-border-color');baseConfig.weight=3;baseConfig.opacity=1;baseConfig.fill=true;baseConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-color');baseConfig.fillOpacity=1;baseConfig.className='map-marker-locate-base '+(this.isShadyScoped()?this.getShadyScope():'');var accuracyRadius=this.accuracy||0;var accuracyConfig={};accuracyConfig.stroke=false;accuracyConfig.opacity=0;accuracyConfig.fill=true;accuracyConfig.fillColor=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-color');accuracyConfig.fillOpacity=this.getComputedStyleValue('--internal-px-map-marker-locate-icon-accuracy-opacity');accuracyConfig.className='map-marker-locate-accuracy '+(this.isShadyScoped()?this.getShadyScope():'');return{geometry:geometry,baseConfig:baseConfig,accuracyRadius:accuracyRadius,accuracyConfig:accuracyConfig}}};PxMapBehavior.LocateMarker=[PxMapBehavior.Marker,PxMapBehavior.LocateMarkerImpl]})();

},{"babel-runtime/helpers/typeof":22}],152:[function(require,module,exports){
'use strict';var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _stringify=require('babel-runtime/core-js/json/stringify');var _stringify2=_interopRequireDefault(_stringify);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.PopupImpl={properties:{closeOnControlInteract:{type:Boolean,value:false}},addInst:function addInst(parent){if(parent&&parent.getPopup()!==this.elementInst){parent.bindPopup(this.elementInst);var controlClickFn=this._handleControlClick.bind(this,parent);this.bindEvents({'controlclick':controlClickFn},parent._mapToAdd)}},removeInst:function removeInst(parent){if(parent&&parent.getPopup&&parent.getPopup()===this.elementInst){parent.unbindPopup(this.elementInst)}},_handleControlClick:function _handleControlClick(parent){if(this.closeOnControlInteract&&parent&&parent.closePopup){parent.closePopup()}}};PxMapBehavior.Popup=[PxMapBehavior.Layer,PxMapBehavior.PopupImpl];PxMapBehavior.InfoPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},description:{type:String,observer:'shouldUpdateInst'},imgSrc:{type:String,observer:'shouldUpdateInst'}},createInst:function createInst(options){return new PxMap.InfoPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.description!==nextOptions.description){updates.description=nextOptions.description}if(lastOptions.imgSrc!==nextOptions.imgSrc){updates.imgSrc=nextOptions.imgSrc}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){return{title:this.title,description:this.description,imgSrc:this.imgSrc,styleScope:this.isShadyScoped()?this.getShadyScope():undefined}}};PxMapBehavior.InfoPopup=[PxMapBehavior.Popup,PxMapBehavior.InfoPopupImpl];PxMapBehavior.DataPopupImpl={properties:{title:{type:String,observer:'shouldUpdateInst'},data:{type:Object,value:function value(){return{}},observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return this.data&&(0,_typeof3.default)(this.data)==='object'&&(0,_keys2.default)(this.data).length},createInst:function createInst(options){return new PxMap.DataPopup(options)},updateInst:function updateInst(lastOptions,nextOptions){var updates={};if(lastOptions.title!==nextOptions.title){updates.title=nextOptions.title}if(lastOptions.dataHash!==nextOptions.dataHash){updates.data=nextOptions.data}if((0,_keys2.default)(updates).length){this.elementInst.updateSettings(updates)}},getInstOptions:function getInstOptions(){var data=this._getValidData();return{title:this.title,data:data,dataHash:(0,_stringify2.default)(data),styleScope:this.isShadyScoped()?this.getShadyScope():undefined}},_getValidData:function _getValidData(){if((0,_typeof3.default)(this.data)!=='object'){console.log('PX-MAP CONFIGURATION ERROR:\n          You entered an invalid `data` attribute for '+this.is+'. You must pass a valid object.\n          An attribute of type `'+(0,_typeof3.default)(this.data)+'` was passed.');return{}}return this.data}};PxMapBehavior.DataPopup=[PxMapBehavior.Popup,PxMapBehavior.DataPopupImpl];window.PxMap=window.PxMap||{};var InfoPopup=function(_L$Popup){(0,_inherits3.default)(InfoPopup,_L$Popup);function InfoPopup(){var _ret;var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,InfoPopup);var _this=(0,_possibleConstructorReturn3.default)(this,(InfoPopup.__proto__||(0,_getPrototypeOf2.default)(InfoPopup)).call(this));_this._createPopup(settings);return _ret=_this,(0,_possibleConstructorReturn3.default)(_this,_ret)}(0,_createClass3.default)(InfoPopup,[{key:'onAdd',value:function onAdd(map){if(map.__addShadyScope){var srcPane=this.getPane();var srcFn=srcPane.appendChild;srcPane.appendChild=function(el){map.__addShadyScope(el,false);Polymer.dom(srcPane).appendChild(el)}}L.Popup.prototype.onAdd.call(this,map);if(map.__addShadyScope){srcPane.appendChild=srcFn}}},{key:'_updateContent',value:function _updateContent(){if(this._map&&this._map.__addShadyScope&&this._content.length){var srcNode=this._contentNode;var fakeNode={innerHTML:null};this._contentNode=fakeNode}L.DivOverlay.prototype._updateContent.call(this);if(this._map&&this._map.__addShadyScope&&this._content.length){if(typeof fakeNode.innerHTML==='string'){Polymer.dom(srcNode).innerHTML=fakeNode.innerHTML}this._contentNode=srcNode}}},{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.settings=settings;var title=settings.title,description=settings.description,imgSrc=settings.imgSrc,styleScope=settings.styleScope;var content=this._generatePopupContent(title,description,imgSrc);var className='map-popup-info '+(styleScope||'');var maxWidth=400;var minWidth=300;this.initialize({className:className,maxWidth:maxWidth,minWidth:minWidth});this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,description,imgSrc){var _this2=this;var tmplFnIf=function tmplFnIf(fn){for(var _len=arguments.length,vals=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){vals[_key-1]=arguments[_key]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this2].concat(vals)):''};var imgTmpl=function imgTmpl(imgSrc){return'\n        <div class="map-box-info__image">\n          <img src="'+imgSrc+'" />\n        </div>\n      '};var titleTmpl=function titleTmpl(title){return'\n        <p class="map-box-info__title">'+title+'</p>\n      '};var descriptionTmpl=function descriptionTmpl(description){return'\n        <p class="map-box-info__description">'+description+'</p>\n      '};return'\n        <section class="map-box-info">\n          '+tmplFnIf(imgTmpl,imgSrc)+'\n          <div class="map-box-info__content">\n            '+tmplFnIf(titleTmpl,title)+'\n            '+tmplFnIf(descriptionTmpl,description)+'\n          </div>\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings=this.settings,title=_settings.title,description=_settings.description,imgSrc=_settings.imgSrc,styleScope=_settings.styleScope;var content=this._generatePopupContent(title,description,imgSrc);this.setContent(content);this.update()}}]);return InfoPopup}(L.Popup);;PxMap.InfoPopup=InfoPopup;var DataPopup=function(_L$Popup2){(0,_inherits3.default)(DataPopup,_L$Popup2);function DataPopup(){var _ret2;var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck3.default)(this,DataPopup);var _this3=(0,_possibleConstructorReturn3.default)(this,(DataPopup.__proto__||(0,_getPrototypeOf2.default)(DataPopup)).call(this));_this3._createPopup(settings);return _ret2=_this3,(0,_possibleConstructorReturn3.default)(_this3,_ret2)}(0,_createClass3.default)(DataPopup,[{key:'onAdd',value:function onAdd(map){if((0,_typeof3.default)(this.settings.data)!=='object'||(0,_keys2.default)(this.settings.data).length===0){return}if(map.__addShadyScope){var srcPane=this.getPane();var srcFn=srcPane.appendChild;srcPane.appendChild=function(el){map.__addShadyScope(el,false);Polymer.dom(srcPane).appendChild(el)}}L.Popup.prototype.onAdd.call(this,map);if(map.__addShadyScope){srcPane.appendChild=srcFn}}},{key:'_updateContent',value:function _updateContent(){if(this._map&&this._map.__addShadyScope&&this._content.length){var srcNode=this._contentNode;var fakeNode={innerHTML:null};this._contentNode=fakeNode}L.DivOverlay.prototype._updateContent.call(this);if(this._map&&this._map.__addShadyScope&&this._content.length){if(typeof fakeNode.innerHTML==='string'){Polymer.dom(srcNode).innerHTML=fakeNode.innerHTML}this._contentNode=srcNode}}},{key:'_createPopup',value:function _createPopup(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.settings=settings;var title=settings.title,data=settings.data,styleScope=settings.styleScope;var content=this._generatePopupContent(title,data);var className='map-popup-data '+(styleScope||'');var maxWidth=400;var minWidth=300;this.initialize({className:className,maxWidth:maxWidth,minWidth:minWidth});this.setContent(content)}},{key:'_generatePopupContent',value:function _generatePopupContent(title,data){var _this4=this;var tmplFnIf=function tmplFnIf(fn){for(var _len2=arguments.length,vals=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){vals[_key2-1]=arguments[_key2]}return vals.length&&vals[0]!==undefined?fn.call.apply(fn,[_this4].concat(vals)):''};var titleTmpl=function titleTmpl(title){return'\n        <div class="map-data-box__header">\n          <h3 class="map-data-box__header__text">'+title+'</h3>\n        </div>\n      '};var dataTmpl=function dataTmpl(data){var dataList=(0,_keys2.default)(data).reduce(function(accum,key){return accum.concat([dataItemTmpl(key,data[key])])},[]).join('');return'\n          <div class="map-data-box__table">\n            '+dataList+'\n          </div>\n        '};var dataItemTmpl=function dataItemTmpl(label,value){return'\n        <div class="map-data-box__table__cell"><p>'+label+'</p></div>\n        <div class="map-data-box__table__cell"><p>'+value+'</p></div>\n      '};return'\n        <section class="map-box-data">\n          '+tmplFnIf(titleTmpl,title)+'\n          '+tmplFnIf(dataTmpl,data)+'\n        </section>\n      '}},{key:'updateSettings',value:function updateSettings(){var settings=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_assign2.default)(this.settings,settings);var _settings2=this.settings,title=_settings2.title,data=_settings2.data;var content=this._generatePopupContent(title,data);if(this.isOpen()&&(0,_keys2.default)(data).length===0){this._close()}this.setContent(content);this.update()}}]);return DataPopup}(L.Popup);;PxMap.DataPopup=DataPopup})();

},{"babel-runtime/core-js/json/stringify":3,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/core-js/object/keys":10,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/inherits":19,"babel-runtime/helpers/possibleConstructorReturn":20,"babel-runtime/helpers/typeof":22}],153:[function(require,module,exports){
'use strict';var _getIterator2=require('babel-runtime/core-js/get-iterator');var _getIterator3=_interopRequireDefault(_getIterator2);var _map=require('babel-runtime/core-js/map');var _map2=_interopRequireDefault(_map);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TrackMarkersImpl={properties:{fitToMarkers:{type:Boolean,value:false,observer:'_fitMapToMarkersIfSet'},fitToMarkersPadding:{type:Number,value:0.15},fitToMarkersZoom:{type:String,value:'max'}},addInst:function addInst(parent){this.listen(this,'px-map-marker-added','_handleMarkerAdded');this.listen(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');this._knownMarkers=this._knownMarkers||new _map2.default;PxMapBehavior.LeafletRootImpl.addInst.call(this)},removeInst:function removeInst(parent){this.unlisten(this,'px-map-marker-added','_handleMarkerAdded');this.unlisten(this,'px-map-marker-group-features-changed','_handleMarkerGroupUpdated');if(this._knownMarkers&&this._knownMarkers instanceof _map2.default){this._knownMarkers.clear()}this._knownMarkers=null;PxMapBehavior.LeafletRootImpl.removeInst.call(this)},_handleMarkerAdded:function _handleMarkerAdded(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst&&localEvt.event.detail.latLng){this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.latLng);this.listen(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._fitMapToMarkersIfSet()}},_handleMarkerRemoved:function _handleMarkerRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-removed','_handleMarkerRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_handleMarkerGroupUpdated:function _handleMarkerGroupUpdated(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(localEvt.rootTarget&&localEvt.rootTarget.elementInst){if(!knownMarker){this.listen(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved')}this._knownMarkers.set(localEvt.rootTarget.elementInst,localEvt.event.detail.bounds);this._fitMapToMarkersIfSet()}},_handleMarkerGroupRemoved:function _handleMarkerGroupRemoved(evt){if(!this._knownMarkers)return;var localEvt=Polymer.dom(evt);var knownMarker=this._knownMarkers.has(localEvt.rootTarget.elementInst||null);if(knownMarker){this.unlisten(localEvt.rootTarget,'px-map-marker-group-removed','_handleMarkerGroupRemoved');this._knownMarkers.delete(localEvt.rootTarget.elementInst)}},_fitMapToMarkers:function _fitMapToMarkers(){this.debounce('fit-map-to-bounds',function(){if(!this._knownMarkers||!this._knownMarkers.size)return;var bounds=this._markersToBoundsWithPadding(this._knownMarkers,this.fitToMarkersPadding);if(bounds&&bounds.isValid()){var latLng=bounds.getCenter();var zoom=this._getZoomLevelForFit(bounds,this.fitToMarkersZoom,this.elementInst);this.elementInst.setView(latLng,zoom)}},10)},_markersToBoundsWithPadding:function _markersToBoundsWithPadding(markersMap,padding){if(!markersMap||!markersMap.size)return;var bounds=L.latLngBounds();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(markersMap.values()),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var value=_step.value;if(value instanceof L.LatLng||value instanceof L.LatLngBounds){bounds.extend(value)}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}if(bounds.isValid()&&typeof padding==='number'){bounds=bounds.pad(padding)}return bounds},_getZoomLevelForFit:function _getZoomLevelForFit(bounds,fitSetting,map){if(fitSetting==='min'){var zoom=map.getMinZoom()||0;return zoom}if(fitSetting==='max'){var _zoom=map.getBoundsZoom(bounds,true)-1;return _zoom}},_fitMapToMarkersIfSet:function _fitMapToMarkersIfSet(){if(!this.elementInst||!this.fitToMarkers)return;this._fitMapToMarkers()},fitMapToMarkers:function fitMapToMarkers(){if(!this.elementInst||!this._knownMarkers||!this._knownMarkers.size){return false}this._fitMapToMarkers();return true}};PxMapBehavior.LeafletRootImpl={properties:{crs:{type:Object},lat:{type:Number,value:37.7672375,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,value:-121.9584131,notify:true,observer:'shouldUpdateInst'},zoom:{type:Number,value:10,notify:true,observer:'shouldUpdateInst'},maxZoom:{type:Number,observer:'shouldUpdateInst'},minZoom:{type:Number,observer:'shouldUpdateInst'},maxBounds:{type:Array,observer:'shouldUpdateInst'},disableDragging:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableScrollZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableTouchZoom:{type:Boolean,value:false,observer:'shouldUpdateInst'},disableAttribution:{type:Boolean,value:false},attributionPrefix:{type:String,value:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',observer:'shouldUpdateInst'},flexToSize:{type:Boolean,reflectToAttribute:true,value:false},editable:{type:Boolean,value:false}},attached:function attached(){this.listen(this,'px-map-element-ready-to-add','shouldAddInst');if(this.canAddInst()){this.fire('px-map-element-ready-to-add')}},detached:function detached(){this.unlisten(this,'px-map-element-ready-to-add','shouldAddInst');this.shouldRemoveInst();this.removeInst()},shouldAddInst:function shouldAddInst(evt){if(Polymer.dom(evt).rootTarget!==this)return;PxMapBehavior.ElementImpl.shouldAddInst.call(this);this.addInst()},canAddInst:function canAddInst(){return this.latLngIsValid(this.lat,this.lng)},createInst:function createInst(options){var mapEl=Polymer.dom(this.root).querySelector('#map');var mapInst=L.map(mapEl,options);mapInst.attributionControl.setPrefix(options.attributionPrefix);if(this.isShadyScoped()){mapInst.__addShadyScope=this.scopeSubtree.bind(this)}return mapInst},addInst:function addInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,true)}var mapMoveFn=this._handleMapMove.bind(this);var zoomStartFn=this._handleZoomStart.bind(this);var zoomEndFn=this._handleZoomEnd.bind(this);this.bindEvents({'moveend':mapMoveFn,'zoomstart':zoomStartFn,'zoomend':zoomEndFn})},removeInst:function removeInst(){if(this.isShadyScoped()){this.scopeSubtree(this.$.map,false)}},getInstOptions:function getInstOptions(){var options={};options.zoomControl=false;options.crs=this.crs||L.CRS.EPSG3857;options.center=[this.lat,this.lng];options.zoom=this.zoom;options.minZoom=this.minZoom||0;options.maxZoom=this.maxZoom||18;options.maxBounds=this.maxBounds||undefined;options.dragging=!this.disableDragging;options.scrollWheelZoom=!this.disableScrollZoom;options.touchZoom=!this.disableTouchZoom;options.attributionControl=!this.disableAttribution;options.editable=this.editable;options.attributionPrefix=this.attributionPrefix;return options},updateInst:function updateInst(lastOptions,nextOptions){if(this.latLngIsValid(nextOptions.center[0],nextOptions.center[1])&&(lastOptions.center[0]!==nextOptions.center[0]||lastOptions.center[1]!==nextOptions.center[1]||lastOptions.zoom!==nextOptions.zoom)){this._updateMapView()}if(lastOptions.maxZoom!==nextOptions.maxZoom&&!isNaN(nextOptions.maxZoom)){this.setMaxZoom(nextOptions.maxZoom)}if(lastOptions.minZoom!==nextOptions.minZoom&&!isNaN(nextOptions.minZoom)){this.setMinZoom(nextOptions.minZoom)}if(lastOptions.maxBounds!==nextOptions.maxBounds&&!isNaN(nextOptions.maxBounds)){this.setMaxBounds(nextOptions.maxBounds)}if(!lastOptions.dragging&&nextOptions.dragging){this.elementInst.dragging.enable()}if(lastOptions.dragging&&!nextOptions.dragging){this.elementInst.dragging.disable()}if(!lastOptions.scrollWheelZoom&&nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.enable()}if(lastOptions.scrollWheelZoom&&!nextOptions.scrollWheelZoom){this.elementInst.scrollWheelZoom.disable()}if(!lastOptions.touchZoom&&nextOptions.touchZoom){this.elementInst.touchZoom.enable()}if(lastOptions.touchZoom&&!nextOptions.touchZoom){this.elementInst.touchZoom.disable()}if(lastOptions.attributionPrefix!==nextOptions.attributionPrefix){this.elementInst.attributionControl.setPrefix(nextOptions.attributionPrefix)}},_updateMapView:function _updateMapView(){if(!this.elementInst)return;this.debounce('update-map-view',function(){var _elementInst$getCente=this.elementInst.getCenter(),lat=_elementInst$getCente.lat,lng=_elementInst$getCente.lng;var zoom=this.elementInst.getZoom();if(this.lat!==lat||this.lng!==lng||this.zoom!==zoom){this.elementInst.setView([this.lat,this.lng],this.zoom)}})},_canBeNum:function _canBeNum(val){return!isNaN(val)&&val!==''},latLngIsValid:function latLngIsValid(lat,lng){var isValid=typeof lat!=='undefined'&&this._canBeNum(lat)&&typeof lng!=='undefined'&&this._canBeNum(lng);if(isValid)return true;console.log('PX-MAP CONFIGURATION ERROR:\n        You entered an invalid `lat` or `lng` attribute for '+this.is+'. You must pass a valid number.');return false},_handleMapMove:function _handleMapMove(){if(this.__isZooming){this.__onZoomEnd=this._handleMapMove.bind(this);return}this.debounce('handle-map-move',function(){var latLng=this.elementInst.getCenter();var zoom=this.elementInst.getZoom();var bounds=this.elementInst.getBounds();if(this.lat!==latLng.lat||this.lng!==latLng.lng){this.set('lat',latLng.lat);this.set('lng',latLng.lng)}if(this.zoom!==zoom){this.set('zoom',zoom)}this.fire('px-map-moved',{lat:latLng.lat,lng:latLng.lng,zoom:zoom,bounds:bounds})})},_handleZoomStart:function _handleZoomStart(){this.__isZooming=true},_handleZoomEnd:function _handleZoomEnd(){this.__isZooming=false;if(typeof this.__onZoomEnd==='function'){this.__onZoomEnd();this.__onZoomEnd=null}},getVisibleMarkers:function getVisibleMarkers(){var mapBounds=this.elementInst.getBounds();var markers=[];this.elementInst.eachLayer(function(layer){if(layer.isMarker&&layer.getLatLng){if(mapBounds.contains(layer.getLatLng())&&markers.indexOf(layer)===-1){markers.push(layer)}}if(layer._markerCluster){layer.eachLayer(function(marker){var parentCluster=layer.getVisibleParent(marker);if(parentCluster&&mapBounds.contains(parentCluster.getLatLng())&&marker&&markers.indexOf(marker)===-1){markers.push(marker)}})}});return markers}};PxMapBehavior.LeafletRoot=[PxMapBehavior.Element,PxMapBehavior.ParentLayer,PxMapBehavior.LeafletRootImpl,PxMapBehavior.TrackMarkersImpl]})();

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/map":4}],154:[function(require,module,exports){
'use strict';(function(){'use strict';window.PxMapBehavior=window.PxMapBehavior||{};PxMapBehavior.TileLayerImpl={properties:{url:{type:String,observer:'shouldUpdateInst'},decodeUrl:{type:Boolean,value:false,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return typeof this.url==='string'&&this.url.length},createInst:function createInst(options){return L.tileLayer(options.url)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.url!==nextOptions.url){this.elementInst.setUrl(nextOptions.url)}},getInstOptions:function getInstOptions(){return{url:this.decodeUrl?decodeURI(this.url):this.url}}};PxMapBehavior.TileLayer=[PxMapBehavior.Layer,PxMapBehavior.TileLayerImpl]})();

},{}]},{},[144,149,143,145,146,148,147,150,151,152,153,154]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJweC1tYXAtYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiOjIzfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCI6MjR9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIjoyNX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCI6MjZ9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCI6Mjd9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCI6Mjh9XSw3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6Mjl9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MzB9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIjozMX1dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIjozMn1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIjozM31dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcbn0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3NldFwiOjM0fV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCI6MzV9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG59LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIjozNn1dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi93ZWFrLW1hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xufSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vd2Vhay1tYXBcIjozN31dLDE2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcbn0se31dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xufSx7XCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjo3fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG59LHtcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiOjgsXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6OX1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xufSx7XCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIjo2LFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiOjExLFwiLi4vaGVscGVycy90eXBlb2ZcIjoyMn1dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG59LHtcIi4uL2hlbHBlcnMvdHlwZW9mXCI6MjJ9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcbn0se1wiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiOjJ9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcbn0se1wiLi4vY29yZS1qcy9zeW1ib2xcIjoxMyxcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI6MTR9XSwyMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cbn0se1wiLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvclwiOjExNixcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyOSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjE0Mn1dLDI0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG59LHtcIi4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZVwiOjExNyxcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyOSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjE0Mn1dLDI1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpO1xudmFyICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7IHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnkgfSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1M31dLDI2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cbn0se1wiLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vbW9kdWxlcy9lczYubWFwXCI6MTE5LFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEyNyxcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyOSxcIi4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tXCI6MTMyLFwiLi4vbW9kdWxlcy9lczcubWFwLm9mXCI6MTMzLFwiLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb25cIjoxMzQsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxNDJ9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG59LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ25cIjoxMjB9XSwyODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZVwiOjEyMX1dLDI5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eVwiOjEyMn1dLDMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MTIzfV0sMzE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZlwiOjEyNH1dLDMyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxufSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6NTMsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5c1wiOjEyNX1dLDMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2ZcIjoxMjZ9XSwzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0Lm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU2V0O1xuXG59LHtcIi4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjoxMjcsXCIuLi9tb2R1bGVzL2VzNi5zZXRcIjoxMjgsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMjksXCIuLi9tb2R1bGVzL2VzNy5zZXQuZnJvbVwiOjEzNSxcIi4uL21vZHVsZXMvZXM3LnNldC5vZlwiOjEzNixcIi4uL21vZHVsZXMvZXM3LnNldC50by1qc29uXCI6MTM3LFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTQyfV0sMzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cbn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjUzLFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEyNyxcIi4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbFwiOjEzMCxcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvclwiOjEzOCxcIi4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlXCI6MTM5fV0sMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cbn0se1wiLi4vLi4vbW9kdWxlcy9fd2tzLWV4dFwiOjExMyxcIi4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEyOSxcIi4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjE0Mn1dLDM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LndlYWstbWFwLm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy53ZWFrLW1hcC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5XZWFrTWFwO1xuXG59LHtcIi4uL21vZHVsZXMvX2NvcmVcIjo1MyxcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjoxMjcsXCIuLi9tb2R1bGVzL2VzNi53ZWFrLW1hcFwiOjEzMSxcIi4uL21vZHVsZXMvZXM3LndlYWstbWFwLmZyb21cIjoxNDAsXCIuLi9tb2R1bGVzL2VzNy53ZWFrLW1hcC5vZlwiOjE0MSxcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjE0Mn1dLDM4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxufSx7fV0sMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbn0se31dLDQwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG59LHt9XSw0MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cbn0se1wiLi9faXMtb2JqZWN0XCI6NzF9XSw0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxufSx7XCIuL19mb3Itb2ZcIjo2Mn1dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG59LHtcIi4vX3RvLWFic29sdXRlLWluZGV4XCI6MTA0LFwiLi9fdG8taW9iamVjdFwiOjEwNixcIi4vX3RvLWxlbmd0aFwiOjEwN31dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG59LHtcIi4vX2FycmF5LXNwZWNpZXMtY3JlYXRlXCI6NDYsXCIuL19jdHhcIjo1NCxcIi4vX2lvYmplY3RcIjo2OCxcIi4vX3RvLWxlbmd0aFwiOjEwNyxcIi4vX3RvLW9iamVjdFwiOjEwOH1dLDQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG59LHtcIi4vX2lzLWFycmF5XCI6NzAsXCIuL19pcy1vYmplY3RcIjo3MSxcIi4vX3drc1wiOjExNH1dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG5cbn0se1wiLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvclwiOjQ1fV0sNDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG59LHtcIi4vX2NvZlwiOjQ4LFwiLi9fd2tzXCI6MTE0fV0sNDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG59LHt9XSw0OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG5cbn0se1wiLi9fYW4taW5zdGFuY2VcIjo0MCxcIi4vX2N0eFwiOjU0LFwiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2Zvci1vZlwiOjYyLFwiLi9faXRlci1kZWZpbmVcIjo3NCxcIi4vX2l0ZXItc3RlcFwiOjc1LFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjgxLFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL19yZWRlZmluZS1hbGxcIjo5NCxcIi4vX3NldC1zcGVjaWVzXCI6OTksXCIuL192YWxpZGF0ZS1jb2xsZWN0aW9uXCI6MTExfV0sNTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICBpZiAoY2xhc3NvZih0aGlzKSAhPSBOQU1FKSB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcblxufSx7XCIuL19hcnJheS1mcm9tLWl0ZXJhYmxlXCI6NDIsXCIuL19jbGFzc29mXCI6NDd9XSw1MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBnZXRXZWFrID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWs7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJyk7XG52YXIgJGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIGFycmF5RmluZCA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpO1xudmFyIGFycmF5RmluZEluZGV4ID0gY3JlYXRlQXJyYXlNZXRob2QoNik7XG52YXIgaWQgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKHRoYXQpIHtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSgpKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uIChzdG9yZSwga2V5KSB7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpIHJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpIGVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZiAofmluZGV4KSB0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgTkFNRSkpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgTkFNRSkpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmIChkYXRhID09PSB0cnVlKSB1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfSxcbiAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxufTtcblxufSx7XCIuL19hbi1pbnN0YW5jZVwiOjQwLFwiLi9fYW4tb2JqZWN0XCI6NDEsXCIuL19hcnJheS1tZXRob2RzXCI6NDQsXCIuL19mb3Itb2ZcIjo2MixcIi4vX2hhc1wiOjY0LFwiLi9faXMtb2JqZWN0XCI6NzEsXCIuL19tZXRhXCI6NzksXCIuL19yZWRlZmluZS1hbGxcIjo5NCxcIi4vX3ZhbGlkYXRlLWNvbGxlY3Rpb25cIjoxMTF9XSw1MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgaWYgKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlKCk7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSwgZnVuY3Rpb24gKEtFWSkge1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmIChLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSkgaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmICghSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpIHJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgSVNfV0VBSyB8fCBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG59LHtcIi4vX2FuLWluc3RhbmNlXCI6NDAsXCIuL19hcnJheS1tZXRob2RzXCI6NDQsXCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9fZXhwb3J0XCI6NjAsXCIuL19mYWlsc1wiOjYxLFwiLi9fZm9yLW9mXCI6NjIsXCIuL19nbG9iYWxcIjo2MyxcIi4vX2hpZGVcIjo2NSxcIi4vX2lzLW9iamVjdFwiOjcxLFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL19yZWRlZmluZS1hbGxcIjo5NCxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6MTAwfV0sNTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4wJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxufSx7fV0sNTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG59LHtcIi4vX2EtZnVuY3Rpb25cIjozOH1dLDU1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbn0se31dLDU2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG59LHtcIi4vX2ZhaWxzXCI6NjF9XSw1NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxufSx7XCIuL19nbG9iYWxcIjo2MyxcIi4vX2lzLW9iamVjdFwiOjcxfV0sNTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cbn0se31dLDU5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbn0se1wiLi9fb2JqZWN0LWdvcHNcIjo4NyxcIi4vX29iamVjdC1rZXlzXCI6OTAsXCIuL19vYmplY3QtcGllXCI6OTF9XSw2MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxufSx7XCIuL19jb3JlXCI6NTMsXCIuL19jdHhcIjo1NCxcIi4vX2dsb2JhbFwiOjYzLFwiLi9faGlkZVwiOjY1fV0sNjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG59LHt9XSw2MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fY3R4XCI6NTQsXCIuL19pcy1hcnJheS1pdGVyXCI6NjksXCIuL19pdGVyLWNhbGxcIjo3MixcIi4vX3RvLWxlbmd0aFwiOjEwNyxcIi4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kXCI6MTE1fV0sNjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG59LHt9XSw2NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG59LHt9XSw2NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cbn0se1wiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX29iamVjdC1kcFwiOjgyLFwiLi9fcHJvcGVydHktZGVzY1wiOjkzfV0sNjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxufSx7XCIuL19nbG9iYWxcIjo2M31dLDY3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cbn0se1wiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2RvbS1jcmVhdGVcIjo1NyxcIi4vX2ZhaWxzXCI6NjF9XSw2ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG59LHtcIi4vX2NvZlwiOjQ4fV0sNjk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cbn0se1wiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTR9XSw3MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxufSx7XCIuL19jb2ZcIjo0OH1dLDcxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG59LHt9XSw3MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxufSx7XCIuL19hbi1vYmplY3RcIjo0MX1dLDczOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG59LHtcIi4vX2hpZGVcIjo2NSxcIi4vX29iamVjdC1jcmVhdGVcIjo4MSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo5MyxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6MTAwLFwiLi9fd2tzXCI6MTE0fV0sNzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxufSx7XCIuL19leHBvcnRcIjo2MCxcIi4vX2hhc1wiOjY0LFwiLi9faGlkZVwiOjY1LFwiLi9faXRlci1jcmVhdGVcIjo3MyxcIi4vX2l0ZXJhdG9yc1wiOjc2LFwiLi9fbGlicmFyeVwiOjc4LFwiLi9fb2JqZWN0LWdwb1wiOjg4LFwiLi9fcmVkZWZpbmVcIjo5NSxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6MTAwLFwiLi9fd2tzXCI6MTE0fV0sNzU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cbn0se31dLDc2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge307XG5cbn0se31dLDc3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGVsKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGlmIChPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbCkgcmV0dXJuIGtleTtcbn07XG5cbn0se1wiLi9fb2JqZWN0LWtleXNcIjo5MCxcIi4vX3RvLWlvYmplY3RcIjoxMDZ9XSw3ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cbn0se31dLDc5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxufSx7XCIuL19mYWlsc1wiOjYxLFwiLi9faGFzXCI6NjQsXCIuL19pcy1vYmplY3RcIjo3MSxcIi4vX29iamVjdC1kcFwiOjgyLFwiLi9fdWlkXCI6MTEwfV0sODA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSkgVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cbn0se1wiLi9fZmFpbHNcIjo2MSxcIi4vX2lvYmplY3RcIjo2OCxcIi4vX29iamVjdC1nb3BzXCI6ODcsXCIuL19vYmplY3Qta2V5c1wiOjkwLFwiLi9fb2JqZWN0LXBpZVwiOjkxLFwiLi9fdG8tb2JqZWN0XCI6MTA4fV0sODE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fZG9tLWNyZWF0ZVwiOjU3LFwiLi9fZW51bS1idWcta2V5c1wiOjU4LFwiLi9faHRtbFwiOjY2LFwiLi9fb2JqZWN0LWRwc1wiOjgzLFwiLi9fc2hhcmVkLWtleVwiOjEwMX1dLDgyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cbn0se1wiLi9fYW4tb2JqZWN0XCI6NDEsXCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9faWU4LWRvbS1kZWZpbmVcIjo2NyxcIi4vX3RvLXByaW1pdGl2ZVwiOjEwOX1dLDgzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxufSx7XCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX29iamVjdC1rZXlzXCI6OTB9XSw4NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxufSx7XCIuL19kZXNjcmlwdG9yc1wiOjU2LFwiLi9faGFzXCI6NjQsXCIuL19pZTgtZG9tLWRlZmluZVwiOjY3LFwiLi9fb2JqZWN0LXBpZVwiOjkxLFwiLi9fcHJvcGVydHktZGVzY1wiOjkzLFwiLi9fdG8taW9iamVjdFwiOjEwNixcIi4vX3RvLXByaW1pdGl2ZVwiOjEwOX1dLDg1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG59LHtcIi4vX29iamVjdC1nb3BuXCI6ODYsXCIuL190by1pb2JqZWN0XCI6MTA2fV0sODY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxufSx7XCIuL19lbnVtLWJ1Zy1rZXlzXCI6NTgsXCIuL19vYmplY3Qta2V5cy1pbnRlcm5hbFwiOjg5fV0sODc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxufSx7fV0sODg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cbn0se1wiLi9faGFzXCI6NjQsXCIuL19zaGFyZWQta2V5XCI6MTAxLFwiLi9fdG8tb2JqZWN0XCI6MTA4fV0sODk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbn0se1wiLi9fYXJyYXktaW5jbHVkZXNcIjo0MyxcIi4vX2hhc1wiOjY0LFwiLi9fc2hhcmVkLWtleVwiOjEwMSxcIi4vX3RvLWlvYmplY3RcIjoxMDZ9XSw5MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG59LHtcIi4vX2VudW0tYnVnLWtleXNcIjo1OCxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6ODl9XSw5MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxufSx7fV0sOTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cbn0se1wiLi9fY29yZVwiOjUzLFwiLi9fZXhwb3J0XCI6NjAsXCIuL19mYWlsc1wiOjYxfV0sOTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxufSx7fV0sOTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cbn0se1wiLi9faGlkZVwiOjY1fV0sOTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cbn0se1wiLi9faGlkZVwiOjY1fV0sOTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cbn0se1wiLi9fYS1mdW5jdGlvblwiOjM4LFwiLi9fY3R4XCI6NTQsXCIuL19leHBvcnRcIjo2MCxcIi4vX2Zvci1vZlwiOjYyfV0sOTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBBcnJheShsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGgtLSkgQVtsZW5ndGhdID0gYXJndW1lbnRzW2xlbmd0aF07XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcblxufSx7XCIuL19leHBvcnRcIjo2MH1dLDk4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxufSx7XCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2N0eFwiOjU0LFwiLi9faXMtb2JqZWN0XCI6NzEsXCIuL19vYmplY3QtZ29wZFwiOjg0fV0sOTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cbn0se1wiLi9fY29yZVwiOjUzLFwiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2dsb2JhbFwiOjYzLFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL193a3NcIjoxMTR9XSwxMDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cbn0se1wiLi9faGFzXCI6NjQsXCIuL19vYmplY3QtZHBcIjo4MixcIi4vX3drc1wiOjExNH1dLDEwMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxufSx7XCIuL19zaGFyZWRcIjoxMDIsXCIuL191aWRcIjoxMTB9XSwxMDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxufSx7XCIuL19nbG9iYWxcIjo2M31dLDEwMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG59LHtcIi4vX2RlZmluZWRcIjo1NSxcIi4vX3RvLWludGVnZXJcIjoxMDV9XSwxMDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cbn0se1wiLi9fdG8taW50ZWdlclwiOjEwNX1dLDEwNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxufSx7fV0sMTA2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cbn0se1wiLi9fZGVmaW5lZFwiOjU1LFwiLi9faW9iamVjdFwiOjY4fV0sMTA3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG59LHtcIi4vX3RvLWludGVnZXJcIjoxMDV9XSwxMDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cbn0se1wiLi9fZGVmaW5lZFwiOjU1fV0sMTA5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxufSx7XCIuL19pcy1vYmplY3RcIjo3MX1dLDExMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxufSx7fV0sMTExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cbn0se1wiLi9faXMtb2JqZWN0XCI6NzF9XSwxMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG59LHtcIi4vX2NvcmVcIjo1MyxcIi4vX2dsb2JhbFwiOjYzLFwiLi9fbGlicmFyeVwiOjc4LFwiLi9fb2JqZWN0LWRwXCI6ODIsXCIuL193a3MtZXh0XCI6MTEzfV0sMTEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG59LHtcIi4vX3drc1wiOjExNH1dLDExNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cbn0se1wiLi9fZ2xvYmFsXCI6NjMsXCIuL19zaGFyZWRcIjoxMDIsXCIuL191aWRcIjoxMTB9XSwxMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cbn0se1wiLi9fY2xhc3NvZlwiOjQ3LFwiLi9fY29yZVwiOjUzLFwiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTR9XSwxMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG59LHtcIi4vX2FuLW9iamVjdFwiOjQxLFwiLi9fY29yZVwiOjUzLFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjoxMTV9XSwxMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cbn0se1wiLi9fY2xhc3NvZlwiOjQ3LFwiLi9fY29yZVwiOjUzLFwiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTR9XSwxMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxufSx7XCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIjozOSxcIi4vX2l0ZXItZGVmaW5lXCI6NzQsXCIuL19pdGVyLXN0ZXBcIjo3NSxcIi4vX2l0ZXJhdG9yc1wiOjc2LFwiLi9fdG8taW9iamVjdFwiOjEwNn1dLDExOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG59LHtcIi4vX2NvbGxlY3Rpb25cIjo1MixcIi4vX2NvbGxlY3Rpb24tc3Ryb25nXCI6NDksXCIuL192YWxpZGF0ZS1jb2xsZWN0aW9uXCI6MTExfV0sMTIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cbn0se1wiLi9fZXhwb3J0XCI6NjAsXCIuL19vYmplY3QtYXNzaWduXCI6ODB9XSwxMjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG59LHtcIi4vX2V4cG9ydFwiOjYwLFwiLi9fb2JqZWN0LWNyZWF0ZVwiOjgxfV0sMTIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cbn0se1wiLi9fZGVzY3JpcHRvcnNcIjo1NixcIi4vX2V4cG9ydFwiOjYwLFwiLi9fb2JqZWN0LWRwXCI6ODJ9XSwxMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG59LHtcIi4vX29iamVjdC1nb3BkXCI6ODQsXCIuL19vYmplY3Qtc2FwXCI6OTIsXCIuL190by1pb2JqZWN0XCI6MTA2fV0sMTI0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxufSx7XCIuL19vYmplY3QtZ3BvXCI6ODgsXCIuL19vYmplY3Qtc2FwXCI6OTIsXCIuL190by1vYmplY3RcIjoxMDh9XSwxMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG59LHtcIi4vX29iamVjdC1rZXlzXCI6OTAsXCIuL19vYmplY3Qtc2FwXCI6OTIsXCIuL190by1vYmplY3RcIjoxMDh9XSwxMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxufSx7XCIuL19leHBvcnRcIjo2MCxcIi4vX3NldC1wcm90b1wiOjk4fV0sMTI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV0sMTI4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNFVCA9ICdTZXQnO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShTRVQsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIFNFVCksIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcblxufSx7XCIuL19jb2xsZWN0aW9uXCI6NTIsXCIuL19jb2xsZWN0aW9uLXN0cm9uZ1wiOjQ5LFwiLi9fdmFsaWRhdGUtY29sbGVjdGlvblwiOjExMX1dLDEyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxufSx7XCIuL19pdGVyLWRlZmluZVwiOjc0LFwiLi9fc3RyaW5nLWF0XCI6MTAzfV0sMTMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnLi9fa2V5b2YnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSkge1xuICAgIGlmIChpc1N5bWJvbChrZXkpKSByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxufSx7XCIuL19hbi1vYmplY3RcIjo0MSxcIi4vX2Rlc2NyaXB0b3JzXCI6NTYsXCIuL19lbnVtLWtleXNcIjo1OSxcIi4vX2V4cG9ydFwiOjYwLFwiLi9fZmFpbHNcIjo2MSxcIi4vX2dsb2JhbFwiOjYzLFwiLi9faGFzXCI6NjQsXCIuL19oaWRlXCI6NjUsXCIuL19pcy1hcnJheVwiOjcwLFwiLi9fa2V5b2ZcIjo3NyxcIi4vX2xpYnJhcnlcIjo3OCxcIi4vX21ldGFcIjo3OSxcIi4vX29iamVjdC1jcmVhdGVcIjo4MSxcIi4vX29iamVjdC1kcFwiOjgyLFwiLi9fb2JqZWN0LWdvcGRcIjo4NCxcIi4vX29iamVjdC1nb3BuXCI6ODYsXCIuL19vYmplY3QtZ29wbi1leHRcIjo4NSxcIi4vX29iamVjdC1nb3BzXCI6ODcsXCIuL19vYmplY3Qta2V5c1wiOjkwLFwiLi9fb2JqZWN0LXBpZVwiOjkxLFwiLi9fcHJvcGVydHktZGVzY1wiOjkzLFwiLi9fcmVkZWZpbmVcIjo5NSxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6MTAwLFwiLi9fc2hhcmVkXCI6MTAyLFwiLi9fdG8taW9iamVjdFwiOjEwNixcIi4vX3RvLXByaW1pdGl2ZVwiOjEwOSxcIi4vX3VpZFwiOjExMCxcIi4vX3drc1wiOjExNCxcIi4vX3drcy1kZWZpbmVcIjoxMTIsXCIuL193a3MtZXh0XCI6MTEzfV0sMTMxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKTtcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi13ZWFrJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgV0VBS19NQVAgPSAnV2Vha01hcCc7XG52YXIgZ2V0V2VhayA9IG1ldGEuZ2V0V2VhaztcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmU7XG52YXIgdG1wID0ge307XG52YXIgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgV0VBS19NQVApKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSwga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShXRUFLX01BUCwgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmIChmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3OyB9KSkge1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgV0VBS19NQVApO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHByb3RvID0gJFdlYWtNYXAucHJvdG90eXBlO1xuICAgIHZhciBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cbiAgICAgIGlmIChpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKSB7XG4gICAgICAgIGlmICghdGhpcy5fZikgdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcCgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG59LHtcIi4vX2FycmF5LW1ldGhvZHNcIjo0NCxcIi4vX2NvbGxlY3Rpb25cIjo1MixcIi4vX2NvbGxlY3Rpb24td2Vha1wiOjUxLFwiLi9fZmFpbHNcIjo2MSxcIi4vX2lzLW9iamVjdFwiOjcxLFwiLi9fbWV0YVwiOjc5LFwiLi9fb2JqZWN0LWFzc2lnblwiOjgwLFwiLi9fcmVkZWZpbmVcIjo5NSxcIi4vX3ZhbGlkYXRlLWNvbGxlY3Rpb25cIjoxMTF9XSwxMzI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG5cbn0se1wiLi9fc2V0LWNvbGxlY3Rpb24tZnJvbVwiOjk2fV0sMTMzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnTWFwJyk7XG5cbn0se1wiLi9fc2V0LWNvbGxlY3Rpb24tb2ZcIjo5N31dLDEzNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHsgdG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJykgfSk7XG5cbn0se1wiLi9fY29sbGVjdGlvbi10by1qc29uXCI6NTAsXCIuL19leHBvcnRcIjo2MH1dLDEzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQuZnJvbVxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tZnJvbScpKCdTZXQnKTtcblxufSx7XCIuL19zZXQtY29sbGVjdGlvbi1mcm9tXCI6OTZ9XSwxMzY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdTZXQnKTtcblxufSx7XCIuL19zZXQtY29sbGVjdGlvbi1vZlwiOjk3fV0sMTM3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0JywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKSB9KTtcblxufSx7XCIuL19jb2xsZWN0aW9uLXRvLWpzb25cIjo1MCxcIi4vX2V4cG9ydFwiOjYwfV0sMTM4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbnJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG59LHtcIi4vX3drcy1kZWZpbmVcIjoxMTJ9XSwxMzk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xucmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cbn0se1wiLi9fd2tzLWRlZmluZVwiOjExMn1dLDE0MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnV2Vha01hcCcpO1xuXG59LHtcIi4vX3NldC1jb2xsZWN0aW9uLWZyb21cIjo5Nn1dLDE0MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdXZWFrTWFwJyk7XG5cbn0se1wiLi9fc2V0LWNvbGxlY3Rpb24tb2ZcIjo5N31dLDE0MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5yZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG59LHtcIi4vX2dsb2JhbFwiOjYzLFwiLi9faGlkZVwiOjY1LFwiLi9faXRlcmF0b3JzXCI6NzYsXCIuL193a3NcIjoxMTQsXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiOjExOH1dLDE0MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9hc3NpZ249cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTt2YXIgX2Fzc2lnbjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTt2YXIgX2dldFByb3RvdHlwZU9mPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO3ZhciBfZ2V0UHJvdG90eXBlT2YyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTt2YXIgX2NsYXNzQ2FsbENoZWNrMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTt2YXIgX2NsYXNzQ2FsbENoZWNrMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO3ZhciBfY3JlYXRlQ2xhc3MyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO3ZhciBfY3JlYXRlQ2xhc3MzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO3ZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO3ZhciBfZ2V0Mj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0Jyk7dmFyIF9nZXQzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldDIpO3ZhciBfaW5oZXJpdHMyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO3ZhciBfaW5oZXJpdHMzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5Db250cm9sSW1wbD17cHJvcGVydGllczp7cG9zaXRpb246e3R5cGU6U3RyaW5nLHZhbHVlOidib3R0b21yaWdodCcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dGhpcy5lbGVtZW50SW5zdC5hZGRUbyhwYXJlbnQpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QocGFyZW50KXt0aGlzLmVsZW1lbnRJbnN0LnJlbW92ZSgpfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntwb3NpdGlvbjp0aGlzLl9nZXRWYWxpZFBvc2l0aW9uKCl9fSxfZ2V0VmFsaWRQb3NpdGlvbjpmdW5jdGlvbiBfZ2V0VmFsaWRQb3NpdGlvbigpe3ZhciBwb3NpdGlvbklzVmFsaWQ9L14odG9wcmlnaHR8dG9wbGVmdHxib3R0b21yaWdodHxib3R0b21sZWZ0KSQvLnRlc3QodGhpcy5wb3NpdGlvbik7aWYoIXBvc2l0aW9uSXNWYWxpZCl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBwb3NpdGlvbmAgYXR0cmlidXRlIFxcJycrdGhpcy5wb3NpdGlvbisnXFwnIGZvciAnK3RoaXMuaXMrJy5cXG4gICAgICAgICAgUG9zaXRpb24gbXVzdCBiZSBhIHN0cmluZyB3aXRoIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcXG4gICAgICAgICAgLSBcXCd0b3ByaWdodFxcJ1xcbiAgICAgICAgICAtIFxcJ3RvcGxlZnRcXCdcXG4gICAgICAgICAgLSBcXCdib3R0b21yaWdodFxcJ1xcbiAgICAgICAgICAtIFxcJ2JvdHRvbWxlZnRcXCdcXG4gICAgICAgICAgRGVmYXVsdGluZyB0byBcXCdib3R0b21yaWdodFxcJy4nKTtyZXR1cm4nYm90dG9tcmlnaHQnfXJldHVybiB0aGlzLnBvc2l0aW9ufX07UHhNYXBCZWhhdmlvci5Db250cm9sPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuQ29udHJvbEltcGxdO1B4TWFwQmVoYXZpb3IuWm9vbUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOnt6b29tSW5UZXh0Ont0eXBlOlN0cmluZyx2YWx1ZTonPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPid9LHpvb21PdXRUZXh0Ont0eXBlOlN0cmluZyx2YWx1ZTonPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT4nfSxsYW5ndWFnZTp7dHlwZTpTdHJpbmcsdmFsdWU6J2VuJ30scmVzb3VyY2VzOnt0eXBlOk9iamVjdCx2YWx1ZTpmdW5jdGlvbiB2YWx1ZSgpe3JldHVybnsnZW4nOnsnWm9vbSBpbic6J1pvb20gaW4nLCdab29tIG91dCc6J1pvb20gb3V0J319fX19LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLlpvb21Db250cm9sKG9wdGlvbnMpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKGxhc3RPcHRpb25zLnBvc2l0aW9uIT09bmV4dE9wdGlvbnMucG9zaXRpb24pe3RoaXMuZWxlbWVudEluc3Quc2V0UG9zaXRpb24obmV4dE9wdGlvbnMucG9zaXRpb24pfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt2YXIgb3B0aW9ucz1QeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLmdldEluc3RPcHRpb25zLmNhbGwodGhpcyk7b3B0aW9ucy5wb3NpdGlvbj10aGlzLnBvc2l0aW9uO29wdGlvbnMuem9vbUluVGV4dD10aGlzLnpvb21JblRleHQ7b3B0aW9ucy56b29tT3V0VGV4dD10aGlzLnpvb21PdXRUZXh0O2lmKHR5cGVvZiB0aGlzLmxvY2FsaXplPT09J2Z1bmN0aW9uJyl7b3B0aW9ucy56b29tSW5UaXRsZT10aGlzLmxvY2FsaXplKCdab29tIGluJyk7b3B0aW9ucy56b29tT3V0VGl0bGU9dGhpcy5sb2NhbGl6ZSgnWm9vbSBvdXQnKX1yZXR1cm4gb3B0aW9uc319O1B4TWFwQmVoYXZpb3IuWm9vbUNvbnRyb2w9W1BvbHltZXIuQXBwTG9jYWxpemVCZWhhdmlvcixQeE1hcEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBCZWhhdmlvci5ab29tQ29udHJvbEltcGxdO1B4TWFwQmVoYXZpb3IuU2NhbGVDb250cm9sSW1wbD17cHJvcGVydGllczp7aW1wZXJpYWxVbml0czp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWV0cmljVW5pdHM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LHJldmVyc2VDb2xvcnM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9fSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7cmV0dXJuIG5ldyBQeE1hcC5TY2FsZUNvbnRyb2wob3B0aW9ucyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobGFzdE9wdGlvbnMucG9zaXRpb24hPT1uZXh0T3B0aW9ucy5wb3NpdGlvbil7dGhpcy5lbGVtZW50SW5zdC5zZXRQb3NpdGlvbihuZXh0T3B0aW9ucy5wb3NpdGlvbil9aWYobGFzdE9wdGlvbnMucmV2ZXJzZUNvbG9ycyE9PW5leHRPcHRpb25zLnJldmVyc2VDb2xvcnMpe3RoaXMuZWxlbWVudEluc3Quc2V0UmV2ZXJzZUNvbG9ycyhuZXh0T3B0aW9ucy5yZXZlcnNlQ29sb3JzKX1pZihsYXN0T3B0aW9ucy5tZXRyaWMhPT1uZXh0T3B0aW9ucy5tZXRyaWMpe3RoaXMuZWxlbWVudEluc3Quc2hvd01ldHJpYyhuZXh0T3B0aW9ucy5tZXRyaWMpfWlmKGxhc3RPcHRpb25zLmltcGVyaWFsIT09bmV4dE9wdGlvbnMuaW1wZXJpYWwpe3RoaXMuZWxlbWVudEluc3Quc2hvd0ltcGVyaWFsKG5leHRPcHRpb25zLmltcGVyaWFsKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9UHhNYXBCZWhhdmlvci5Db250cm9sSW1wbC5nZXRJbnN0T3B0aW9ucy5jYWxsKHRoaXMpO29wdGlvbnMuaW1wZXJpYWw9dGhpcy5pbXBlcmlhbFVuaXRzO29wdGlvbnMubWV0cmljPXRoaXMubWV0cmljVW5pdHM7b3B0aW9ucy5yZXZlcnNlQ29sb3JzPXRoaXMucmV2ZXJzZUNvbG9ycztyZXR1cm4gb3B0aW9uc319O1B4TWFwQmVoYXZpb3IuU2NhbGVDb250cm9sPVtQeE1hcEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBCZWhhdmlvci5TY2FsZUNvbnRyb2xJbXBsXTtQeE1hcEJlaGF2aW9yLkxvY2F0ZUNvbnRyb2xJbXBsPXtwcm9wZXJ0aWVzOntsb2NhdGVUZXh0Ont0eXBlOlN0cmluZyx2YWx1ZTonPGkgY2xhc3M9XCJmYSBmYS1jcm9zc2hhaXJzXCI+PC9pPicsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxsb2NhdGVUaXRsZTp7dHlwZTpTdHJpbmcsdmFsdWU6J1pvb20gdG8geW91ciBsb2NhdGlvbicsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtb3ZlVG9Mb2NhdGlvbjp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxtb3ZlTWF4Wm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxsYXN0Rm91bmRMb2NhdGlvbjp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57fX0sbm90aWZ5OnRydWV9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkNvbnRyb2xJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7dmFyIGZvdW5kRm49dGhpcy5faGFuZGxlTG9jYXRpb25Gb3VuZC5iaW5kKHRoaXMpO3ZhciBlcnJvckZuPXRoaXMuX2hhbmRsZUxvY2F0aW9uRXJyb3IuYmluZCh0aGlzKTt2YXIgdGFwRm49dGhpcy5faGFuZGxlTG9jYXRpb25UYXAuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydsb2NhdGlvbmZvdW5kJzpmb3VuZEZuLCdsb2NhdGlvbmVycm9yJzplcnJvckZuLCdjb250cm9sY2xpY2snOnRhcEZufSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuQ29udHJvbEltcGwucmVtb3ZlSW5zdC5jYWxsKHRoaXMscGFyZW50KX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgUHhNYXAuTG9jYXRlQ29udHJvbChvcHRpb25zKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXtpZihsYXN0T3B0aW9ucy5wb3NpdGlvbiE9PW5leHRPcHRpb25zLnBvc2l0aW9uKXt0aGlzLmVsZW1lbnRJbnN0LnNldFBvc2l0aW9uKG5leHRPcHRpb25zLnBvc2l0aW9uKX1pZihsYXN0T3B0aW9ucy5tb3ZlTWF4Wm9vbSE9PW5leHRPcHRpb25zLm1vdmVNYXhab29tKXt0aGlzLmVsZW1lbnRJbnN0LnNldE1vdmVNYXhab29tKG5leHRPcHRpb25zLm1vdmVNYXhab29tKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3Bvc2l0aW9uOnRoaXMucG9zaXRpb24sbG9jYXRlVGV4dDp0aGlzLmxvY2F0ZVRleHQsbG9jYXRlVGl0bGU6dGhpcy5sb2NhdGVUaXRsZSxtb3ZlVG9Mb2NhdGlvbjp0aGlzLm1vdmVUb0xvY2F0aW9uLG1vdmVNYXhab29tOnRoaXMubW92ZU1heFpvb219fSxfaGFuZGxlTG9jYXRpb25Gb3VuZDpmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25Gb3VuZChldnQpe2lmKCFldnQpcmV0dXJuO3ZhciBkZXRhaWw9e2xhdDpldnQubGF0aXR1ZGV8fG51bGwsbG5nOmV2dC5sb25naXR1ZGV8fG51bGwsdGltZXN0YW1wOmV2dC50aW1lc3RhbXB8fG51bGwsYm91bmRzOmV2dC5ib3VuZHN8fG51bGx9O2RldGFpbC5hY2N1cmFjeT1ldnQuYm91bmRzLmdldENlbnRlcigpJiZldnQuYm91bmRzLmdldE5vcnRoV2VzdCgpP2V2dC5ib3VuZHMuZ2V0Q2VudGVyKCkuZGlzdGFuY2VUbyhldnQuYm91bmRzLmdldE5vcnRoRWFzdCgpKTpudWxsO3RoaXMuZmlyZSgncHgtbWFwLWNvbnRyb2wtbG9jYXRlLXN1Y2NlZWRlZCcsZGV0YWlsKTt0aGlzLnNldCgnbGFzdEZvdW5kTG9jYXRpb24nLGRldGFpbCk7dGhpcy5ub3RpZnlQYXRoKCdsYXN0Rm91bmRMb2NhdGlvbi4qJyl9LF9oYW5kbGVMb2NhdGlvbkVycm9yOmZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkVycm9yKGV2dCl7aWYoIWV2dClyZXR1cm47dmFyIGRldGFpbD17bWVzc2FnZTpldnQubWVzc2FnZXx8bnVsbH07dGhpcy5maXJlKCdweC1tYXAtY29udHJvbC1sb2NhdGUtZmFpbGVkJyxkZXRhaWwpfSxfaGFuZGxlTG9jYXRpb25UYXA6ZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uVGFwKGV2dCl7aWYoIWV2dHx8ZXZ0LmFjdGlvbiE9PSdsb2NhdGUnKXJldHVybjt0aGlzLmZpcmUoJ3B4LW1hcC1sb2NhdGUtYnV0dG9uLXRhcHBlZCcpfX07UHhNYXBCZWhhdmlvci5Mb2NhdGVDb250cm9sPVtQeE1hcEJlaGF2aW9yLkNvbnRyb2wsUHhNYXBCZWhhdmlvci5Mb2NhdGVDb250cm9sSW1wbF07d2luZG93LlB4TWFwPXdpbmRvdy5QeE1hcHx8e307dmFyIFNjYWxlQ29udHJvbD1mdW5jdGlvbihfTCRDb250cm9sJFNjYWxlKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKFNjYWxlQ29udHJvbCxfTCRDb250cm9sJFNjYWxlKTtmdW5jdGlvbiBTY2FsZUNvbnRyb2woKXsoMCxfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsU2NhbGVDb250cm9sKTtyZXR1cm4oMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywoU2NhbGVDb250cm9sLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUNvbnRyb2wpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU2NhbGVDb250cm9sLFt7a2V5Oidpbml0aWFsaXplJyx2YWx1ZTpmdW5jdGlvbiBpbml0aWFsaXplKG9wdGlvbnMpeygwLF9nZXQzLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlQ29udHJvbC5wcm90b3R5cGUpLCdpbml0aWFsaXplJyx0aGlzKS5jYWxsKHRoaXMsb3B0aW9ucyl9fSx7a2V5OidvbkFkZCcsdmFsdWU6ZnVuY3Rpb24gb25BZGQobWFwKXt0aGlzLl9fc2NhbGVDb250YWluZXI9KDAsX2dldDMuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZS5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2NhbGVDb250cm9sLnByb3RvdHlwZSksJ29uQWRkJyx0aGlzKS5jYWxsKHRoaXMsbWFwKTtpZih0aGlzLm9wdGlvbnMucmV2ZXJzZUNvbG9ycz09PXRydWUpe0wuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9fc2NhbGVDb250YWluZXIsJ2xlYWZsZXQtY29udHJvbC1zY2FsZS0tcmV2ZXJzZScpfXJldHVybiB0aGlzLl9fc2NhbGVDb250YWluZXJ9fSx7a2V5OidvblJlbW92ZScsdmFsdWU6ZnVuY3Rpb24gb25SZW1vdmUobWFwKXsoMCxfZ2V0My5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUNvbnRyb2wucHJvdG90eXBlKSwnb25SZW1vdmUnLHRoaXMpLmNhbGwodGhpcyxtYXApO3RoaXMuX19zY2FsZUNvbnRhaW5lcj1udWxsfX0se2tleTonc2V0UmV2ZXJzZUNvbG9ycycsdmFsdWU6ZnVuY3Rpb24gc2V0UmV2ZXJzZUNvbG9ycyhzaG91bGRSZXZlcnNlKXtpZighdGhpcy5fX3NjYWxlQ29udGFpbmVyKXJldHVybjtpZihzaG91bGRSZXZlcnNlJiYhdGhpcy5vcHRpb25zLnJldmVyc2VDb2xvcnMpe3RoaXMub3B0aW9ucy5yZXZlcnNlQ29sb3JzPXRydWU7TC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX19zY2FsZUNvbnRhaW5lciwnbGVhZmxldC1jb250cm9sLXNjYWxlLS1yZXZlcnNlJyl9aWYoIXNob3VsZFJldmVyc2UmJnRoaXMub3B0aW9ucy5yZXZlcnNlQ29sb3JzKXt0aGlzLm9wdGlvbnMucmV2ZXJzZUNvbG9ycz1mYWxzZTtMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fX3NjYWxlQ29udGFpbmVyLCdsZWFmbGV0LWNvbnRyb2wtc2NhbGUtLXJldmVyc2UnKX19fSx7a2V5OidzaG93SW1wZXJpYWwnLHZhbHVlOmZ1bmN0aW9uIHNob3dJbXBlcmlhbChzaG91bGRTaG93SW1wZXJpYWwpe2lmKCF0aGlzLl9fc2NhbGVDb250YWluZXIpcmV0dXJuO2lmKHNob3VsZFNob3dJbXBlcmlhbCYmIXRoaXMub3B0aW9ucy5pbXBlcmlhbCYmIXRoaXMuX2lTY2FsZSl7dGhpcy5faVNjYWxlPUwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsJ2xlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lJyx0aGlzLl9fc2NhbGVDb250YWluZXIpO3RoaXMub3B0aW9ucy5pbXBlcmlhbD10cnVlfWlmKCFzaG91bGRTaG93SW1wZXJpYWwmJnRoaXMub3B0aW9ucy5pbXBlcmlhbCYmdGhpcy5faVNjYWxlKXt0aGlzLm9wdGlvbnMuaW1wZXJpYWw9ZmFsc2U7TC5Eb21VdGlsLnJlbW92ZSh0aGlzLl9pU2NhbGUpO3RoaXMuX2lTY2FsZT1udWxsfXRoaXMuX3VwZGF0ZSgpfX0se2tleTonc2hvd01ldHJpYycsdmFsdWU6ZnVuY3Rpb24gc2hvd01ldHJpYyhzaG91bGRTaG93TWV0cmljKXtpZighdGhpcy5fX3NjYWxlQ29udGFpbmVyKXJldHVybjtpZihzaG91bGRTaG93TWV0cmljJiYhdGhpcy5vcHRpb25zLm1ldHJpYyYmIXRoaXMuX21TY2FsZSl7dGhpcy5fbVNjYWxlPUwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsJ2xlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lJyx0aGlzLl9fc2NhbGVDb250YWluZXIpO3RoaXMub3B0aW9ucy5tZXRyaWM9dHJ1ZX1pZighc2hvdWxkU2hvd01ldHJpYyYmdGhpcy5vcHRpb25zLm1ldHJpYyYmdGhpcy5fbVNjYWxlKXt0aGlzLm9wdGlvbnMubWV0cmljPWZhbHNlO0wuRG9tVXRpbC5yZW1vdmUodGhpcy5fbVNjYWxlKTt0aGlzLl9tU2NhbGU9bnVsbH10aGlzLl91cGRhdGUoKX19XSk7cmV0dXJuIFNjYWxlQ29udHJvbH0oTC5Db250cm9sLlNjYWxlKTs7UHhNYXAuU2NhbGVDb250cm9sPVNjYWxlQ29udHJvbDt2YXIgWm9vbUNvbnRyb2w9ZnVuY3Rpb24oX0wkQ29udHJvbCRab29tKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKFpvb21Db250cm9sLF9MJENvbnRyb2wkWm9vbSk7ZnVuY3Rpb24gWm9vbUNvbnRyb2woKXsoMCxfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsWm9vbUNvbnRyb2wpO3JldHVybigwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChab29tQ29udHJvbC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoWm9vbUNvbnRyb2wpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoWm9vbUNvbnRyb2wsW3trZXk6J196b29tSW4nLHZhbHVlOmZ1bmN0aW9uIF96b29tSW4oZSl7KDAsX2dldDMuZGVmYXVsdCkoWm9vbUNvbnRyb2wucHJvdG90eXBlLl9fcHJvdG9fX3x8KDAsX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShab29tQ29udHJvbC5wcm90b3R5cGUpLCdfem9vbUluJyx0aGlzKS5jYWxsKHRoaXMsZSk7aWYodGhpcy5fbWFwJiZ0aGlzLl9tYXAuZmlyZSl7dGhpcy5fbWFwLmZpcmUoJ2NvbnRyb2xjbGljaycse3NyYzp0aGlzLGFjdGlvbjonem9vbWluJ30pfX19LHtrZXk6J196b29tT3V0Jyx2YWx1ZTpmdW5jdGlvbiBfem9vbU91dChlKXsoMCxfZ2V0My5kZWZhdWx0KShab29tQ29udHJvbC5wcm90b3R5cGUuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFpvb21Db250cm9sLnByb3RvdHlwZSksJ196b29tT3V0Jyx0aGlzKS5jYWxsKHRoaXMsZSk7aWYodGhpcy5fbWFwJiZ0aGlzLl9tYXAuZmlyZSl7dGhpcy5fbWFwLmZpcmUoJ2NvbnRyb2xjbGljaycse3NyYzp0aGlzLGFjdGlvbjonem9vbW91dCd9KX19fSx7a2V5OidfZmlyZVpvb21DbGlja0V2dCcsdmFsdWU6ZnVuY3Rpb24gX2ZpcmVab29tQ2xpY2tFdnQoZXZ0KXt9fV0pO3JldHVybiBab29tQ29udHJvbH0oTC5Db250cm9sLlpvb20pOztQeE1hcC5ab29tQ29udHJvbD1ab29tQ29udHJvbDt2YXIgTG9jYXRlQ29udHJvbD1mdW5jdGlvbihfTCRDb250cm9sKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKExvY2F0ZUNvbnRyb2wsX0wkQ29udHJvbCk7ZnVuY3Rpb24gTG9jYXRlQ29udHJvbCgpeygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxMb2NhdGVDb250cm9sKTtyZXR1cm4oMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywoTG9jYXRlQ29udHJvbC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTG9jYXRlQ29udHJvbCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShMb2NhdGVDb250cm9sLFt7a2V5Oidpbml0aWFsaXplJyx2YWx1ZTpmdW5jdGlvbiBpbml0aWFsaXplKCl7dmFyIG9wdGlvbnM9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9O3ZhciBkZWZhdWx0T3B0aW9ucz17cG9zaXRpb246J2JvdHRvbXJpZ2h0JyxjbGFzc05hbWU6JycsbG9jYXRlVGV4dDonPGkgY2xhc3M9XCJmYSBmYS1jcm9zc2hhaXJzXCI+PC9pPicsbG9jYXRlVGl0bGU6J1pvb20gdG8geW91ciBsb2NhdGlvbicsbG9jYXRlVGltZW91dDoxMDAwMCxtb3ZlVG9Mb2NhdGlvbjp0cnVlLG1vdmVNYXhab29tOm51bGx9O3ZhciBjb21wb3NlZE9wdGlvbnM9KDAsX2Fzc2lnbjIuZGVmYXVsdCkoZGVmYXVsdE9wdGlvbnMsb3B0aW9ucyk7TC5VdGlsLnNldE9wdGlvbnModGhpcyxjb21wb3NlZE9wdGlvbnMpfX0se2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7dmFyIGxvY2F0ZU5hbWU9J2xlYWZsZXQtY29udHJvbC1sb2NhdGUnO3RoaXMuX19jb250YWluZXI9TC5Eb21VdGlsLmNyZWF0ZSgnZGl2Jyxsb2NhdGVOYW1lKycgbGVhZmxldC1iYXIgJyt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTt0aGlzLl9fbG9jYXRlQnV0dG9uPXRoaXMuX2NyZWF0ZUJ1dHRvbih0aGlzLm9wdGlvbnMubG9jYXRlVGV4dCx0aGlzLm9wdGlvbnMubG9jYXRlVGl0bGUsJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uJyx0aGlzLl9fY29udGFpbmVyKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9uKG1hcCwnbG9jYXRpb25lcnJvcicsdGhpcy5fbG9jYXRpb25FcnJvcix0aGlzKTtMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX19sb2NhdGVCdXR0b24pO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vbih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fbG9jYXRlLHRoaXMpO0wuRG9tRXZlbnQub24odGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX3JlZm9jdXNPbk1hcCx0aGlzKTtyZXR1cm4gdGhpcy5fX2NvbnRhaW5lcn19LHtrZXk6J29uUmVtb3ZlJyx2YWx1ZTpmdW5jdGlvbiBvblJlbW92ZShtYXApe0wuRG9tRXZlbnQub2ZmKG1hcCwnbG9jYXRpb25mb3VuZCcsdGhpcy5fbG9jYXRpb25Gb3VuZCx0aGlzKTtMLkRvbUV2ZW50Lm9mZihtYXAsJ2xvY2F0aW9uZXJyb3InLHRoaXMuX2xvY2F0aW9uRXJyb3IsdGhpcyk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLEwuRG9tRXZlbnQuc3RvcCk7TC5Eb21FdmVudC5vZmYodGhpcy5fX2xvY2F0ZUJ1dHRvbiwnY2xpY2snLHRoaXMuX2xvY2F0ZSx0aGlzKTtMLkRvbUV2ZW50Lm9mZih0aGlzLl9fbG9jYXRlQnV0dG9uLCdjbGljaycsdGhpcy5fcmVmb2N1c09uTWFwLHRoaXMpfX0se2tleTonc2V0TW92ZU1heFpvb20nLHZhbHVlOmZ1bmN0aW9uIHNldE1vdmVNYXhab29tKHpvb20pe2lmKHR5cGVvZiB6b29tPT09J3N0cmluZycmJnpvb20ubGVuZ3RoJiYhaXNOYU4oem9vbSkpe3pvb209cGFyc2VJbnQoem9vbSl9aWYodHlwZW9mIHpvb209PT0nbnVtYmVyJyYmdGhpcy5vcHRpb25zLm1vdmVNYXhab29tIT09em9vbSl7dGhpcy5vcHRpb25zLm1vdmVNYXhab29tPXpvb219fX0se2tleTonb24nLHZhbHVlOmZ1bmN0aW9uIG9uKCl7dmFyIF9tYXA7aWYoIXRoaXMuX21hcCl7cmV0dXJuIHVuZGVmaW5lZH1yZXR1cm4oX21hcD10aGlzLl9tYXApLm9uLmFwcGx5KF9tYXAsYXJndW1lbnRzKX19LHtrZXk6J29mZicsdmFsdWU6ZnVuY3Rpb24gb2ZmKCl7dmFyIF9tYXAyO2lmKCF0aGlzLl9tYXApe3JldHVybiB1bmRlZmluZWR9cmV0dXJuKF9tYXAyPXRoaXMuX21hcCkub2ZmLmFwcGx5KF9tYXAyLGFyZ3VtZW50cyl9fSx7a2V5OidfbG9jYXRlJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRlKGV2dCl7dGhpcy5fbWFwLmZpcmUoJ2NvbnRyb2xjbGljaycse3NyYzp0aGlzLGFjdGlvbjonbG9jYXRlJ30pO3RoaXMubG9jYXRlKGV2dCl9fSx7a2V5Oidsb2NhdGUnLHZhbHVlOmZ1bmN0aW9uIGxvY2F0ZSgpe3RoaXMuX19sb2NhdGluZz10cnVlO3RoaXMuX21hcC5sb2NhdGUoe3NldFZpZXc6dGhpcy5vcHRpb25zLm1vdmVUb0xvY2F0aW9uLG1heFpvb206dGhpcy5vcHRpb25zLm1vdmVNYXhab29tLHRpbWVvdXQ6dGhpcy5vcHRpb25zLmxvY2F0ZVRpbWVvdXR9KTt0aGlzLl9zZXRMb2NhdGluZ1N0YXRlKCl9fSx7a2V5OidyZXNldCcsdmFsdWU6ZnVuY3Rpb24gcmVzZXQoKXt0aGlzLl9zZXRSZWFkeVN0YXRlKCl9fSx7a2V5Oidpc0Rpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBpc0Rpc2FibGVkKCl7cmV0dXJuIHRoaXMuX19kaXNhYmxlZHx8ZmFsc2V9fSx7a2V5OidfY3JlYXRlQnV0dG9uJyx2YWx1ZTpmdW5jdGlvbiBfY3JlYXRlQnV0dG9uKGh0bWwsdGl0bGUsY2xhc3NOYW1lLGNvbnRhaW5lcixjbGlja0ZuKXt2YXIgYnV0dG9uRWw9TC5Eb21VdGlsLmNyZWF0ZSgnYScsY2xhc3NOYW1lLGNvbnRhaW5lcik7YnV0dG9uRWwuaW5uZXJIVE1MPWh0bWw7YnV0dG9uRWwuaHJlZj0nIyc7YnV0dG9uRWwudGl0bGU9dGl0bGU7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdyb2xlJywnYnV0dG9uJyk7YnV0dG9uRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyx0aXRsZSk7cmV0dXJuIGJ1dHRvbkVsfX0se2tleTonX2xvY2F0aW9uRm91bmQnLHZhbHVlOmZ1bmN0aW9uIF9sb2NhdGlvbkZvdW5kKGV2dCl7aWYodGhpcy5fX2xvY2F0aW5nKXt0aGlzLl9fbG9jYXRpbmc9ZmFsc2U7dGhpcy5fc2V0UmVhZHlTdGF0ZSgpfX19LHtrZXk6J19sb2NhdGlvbkVycm9yJyx2YWx1ZTpmdW5jdGlvbiBfbG9jYXRpb25FcnJvcihldnQpe2lmKHRoaXMuX19sb2NhdGluZyl7dGhpcy5fX2xvY2F0aW5nPWZhbHNlO3RoaXMuX3NldFJlYWR5U3RhdGUoKX19fSx7a2V5Oidfc2V0TG9jYXRpbmdTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldExvY2F0aW5nU3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8IXRoaXMuX19sb2NhdGluZylyZXR1cm47TC5Eb21VdGlsLmFkZENsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1sb2NhdGluZycpO3RoaXMuX19kaXNhYmxlZD10cnVlO3RoaXMuX3VwZGF0ZURpc2FibGVkKCl9fSx7a2V5Oidfc2V0UmVhZHlTdGF0ZScsdmFsdWU6ZnVuY3Rpb24gX3NldFJlYWR5U3RhdGUoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbnx8dGhpcy5fX2xvY2F0aW5nKXJldHVybjt0aGlzLl9fbG9jYXRlQnV0dG9uLmlubmVySFRNTD10aGlzLm9wdGlvbnMubG9jYXRlVGV4dDtMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWxvY2F0aW5nJyk7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1lcnJvcicpO3RoaXMuX19kaXNhYmxlZD1mYWxzZTt0aGlzLl91cGRhdGVEaXNhYmxlZCgpfX0se2tleTonX3VwZGF0ZURpc2FibGVkJyx2YWx1ZTpmdW5jdGlvbiBfdXBkYXRlRGlzYWJsZWQoKXtpZighdGhpcy5fX2xvY2F0ZUJ1dHRvbilyZXR1cm47aWYodGhpcy5fX2Rpc2FibGVkKXtMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fX2xvY2F0ZUJ1dHRvbiwnbGVhZmxldC1jb250cm9sLWxvY2F0ZS1idXR0b24tLWRpc2FibGVkJyl9aWYoIXRoaXMuX19kaXNhYmxlZCl7TC5Eb21VdGlsLnJlbW92ZUNsYXNzKHRoaXMuX19sb2NhdGVCdXR0b24sJ2xlYWZsZXQtY29udHJvbC1sb2NhdGUtYnV0dG9uLS1kaXNhYmxlZCcpfX19XSk7cmV0dXJuIExvY2F0ZUNvbnRyb2x9KEwuQ29udHJvbCk7O1B4TWFwLkxvY2F0ZUNvbnRyb2w9TG9jYXRlQ29udHJvbH0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6OSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiOjE2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI6MTcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCI6MTgsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjoxOSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI6MjB9XSwxNDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfZ2V0SXRlcmF0b3IyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTt2YXIgX2dldEl0ZXJhdG9yMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfdHlwZW9mMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7dmFyIF90eXBlb2YzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbD17YmVmb3JlUmVnaXN0ZXI6ZnVuY3Rpb24gYmVmb3JlUmVnaXN0ZXIoKXt0aGlzLmVsZW1lbnRJbnN0PW51bGx9LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5fX2VsQXR0YWNoZWQ9dHJ1ZX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9fZWxBdHRhY2hlZD1mYWxzZX0sbm90aWZ5SW5zdFJlYWR5OmZ1bmN0aW9uIG5vdGlmeUluc3RSZWFkeSgpe3ZhciBpc1JlYWR5PWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp0cnVlO2lmKCFpc1JlYWR5KXJldHVybiBmYWxzZTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpO3JldHVybiB0cnVlfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCl7dmFyIG9wdGlvbnM9dGhpcy5fX2luaXRpYWxPcHRpb25zPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKTt0aGlzLmVsZW1lbnRJbnN0PXRoaXMuY3JlYXRlSW5zdChvcHRpb25zKTt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LWluc3RhbmNlLWNyZWF0ZWQnKX10aGlzLl9faW5zdEV2ZW50cz10aGlzLl9faW5zdEV2ZW50c3x8W107dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD10aGlzLl9faW5zdEV2ZW50c0VsZW1lbnRzTWFwfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHR9LHNob3VsZFJlbW92ZUluc3Q6ZnVuY3Rpb24gc2hvdWxkUmVtb3ZlSW5zdCgpe3RoaXMudW5iaW5kQWxsRXZlbnRzKHRoaXMuX19pbnN0RXZlbnRzLHRoaXMuX19pbnN0RXZlbnRzRWxlbWVudHNNYXApO3RoaXMuX19pbnN0RXZlbnRzPW51bGw7dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcD1udWxsfSxzaG91bGRVcGRhdGVJbnN0OmZ1bmN0aW9uIHNob3VsZFVwZGF0ZUluc3QoKXtpZighdGhpcy5lbGVtZW50SW5zdCYmdGhpcy5fX2VsQXR0YWNoZWQmJnRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLm5vdGlmeUluc3RSZWFkeSh0aGlzLmNhbkFkZEluc3QoKSl9aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3ZhciBsYXN0T3B0aW9ucz10aGlzLl9fbGFzdE9wdGlvbnN8fHRoaXMuX19pbml0aWFsT3B0aW9uczt2YXIgbmV4dE9wdGlvbnM9dGhpcy5nZXRJbnN0T3B0aW9ucygpO3RoaXMudXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyk7dGhpcy5fX2xhc3RPcHRpb25zPW5leHRPcHRpb25zfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3JlYXRlSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdCgpe3Rocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVJbnN0YCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZ2V0SW5zdE9wdGlvbnNgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgYmluZEluc3RgIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkLicpfSxyZW1vdmVJbnN0OmZ1bmN0aW9uIHJlbW92ZUluc3QoKXt0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgdW5iaW5kSW5zdGAgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQuJyl9LGV4dGVuZE9iajpmdW5jdGlvbiBleHRlbmRPYmoob2JqKXtpZighb2JqfHwhKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgcGFyYW1ldGVyIG9mIGBleHRlbmRPYmpgIG11c3QgYmUgYW4gb2JqZWN0IHRvIGJlIG11dGF0ZWQuJyk7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscHJvcGVydGllcz1BcnJheShfbGVuPjE/X2xlbi0xOjApLF9rZXk9MTtfa2V5PF9sZW47X2tleSsrKXtwcm9wZXJ0aWVzW19rZXktMV09YXJndW1lbnRzW19rZXldfWlmKHByb3BlcnRpZXMubGVuZ3RoKXtfYXNzaWduMi5kZWZhdWx0LmFwcGx5KE9iamVjdCxbb2JqXS5jb25jYXQocHJvcGVydGllcykpfXJldHVybiBvYmp9LGFkZFByb3BlcnRpZXM6ZnVuY3Rpb24gYWRkUHJvcGVydGllcygpe3RoaXMucHJvcGVydGllcz10aGlzLnByb3BlcnRpZXN8fHt9O2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxwcm9wZXJ0aWVzPUFycmF5KF9sZW4yKSxfa2V5Mj0wO19rZXkyPF9sZW4yO19rZXkyKyspe3Byb3BlcnRpZXNbX2tleTJdPWFyZ3VtZW50c1tfa2V5Ml19aWYocHJvcGVydGllcy5sZW5ndGgpe3RoaXMuZXh0ZW5kLmFwcGx5KHRoaXMsW3RoaXMucHJvcGVydGllc10uY29uY2F0KHByb3BlcnRpZXMpKX1yZXR1cm4gdGhpcy5wcm9wZXJ0aWVzfSxiaW5kRXZlbnRzOmZ1bmN0aW9uIGJpbmRFdmVudHMoZXZ0cyx0YXJnZXQpe2lmKCh0eXBlb2YgZXZ0cz09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOigwLF90eXBlb2YzLmRlZmF1bHQpKGV2dHMpKSE9PSdvYmplY3QnfHwhKDAsX2tleXMyLmRlZmF1bHQpKGV2dHMpLmxlbmd0aClyZXR1cm47dmFyIGVsPXRhcmdldHx8dGhpcy5lbGVtZW50SW5zdDtpZighZWx8fCFlbC5vbilyZXR1cm47dmFyIGJvdW5kRXZ0cz10aGlzLl9faW5zdEV2ZW50czt2YXIgYm91bmRFdnRFbHM9dGhpcy5fX2luc3RFdmVudHNFbGVtZW50c01hcDtmb3IodmFyIGV2dE5hbWUgaW4gZXZ0cyl7dmFyIGV2dFJlZmVyZW5jZT17bmFtZTpldnROYW1lLGZuOmV2dHNbZXZ0TmFtZV19O2VsLm9uKGV2dFJlZmVyZW5jZS5uYW1lLGV2dFJlZmVyZW5jZS5mbik7Ym91bmRFdnRzLnB1c2goZXZ0UmVmZXJlbmNlKTtib3VuZEV2dEVscy5zZXQoZXZ0UmVmZXJlbmNlLGVsKX19LHVuYmluZEFsbEV2ZW50czpmdW5jdGlvbiB1bmJpbmRBbGxFdmVudHMoYm91bmRFdnRzLGJvdW5kRXZ0RWxzKXtpZighYm91bmRFdnRzfHwhYm91bmRFdnRzLmxlbmd0aHx8IWJvdW5kRXZ0RWxzKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbj10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcj1mYWxzZTt2YXIgX2l0ZXJhdG9yRXJyb3I9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcj0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGJvdW5kRXZ0cyksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBldnQ9X3N0ZXAudmFsdWU7dmFyIGVsPWJvdW5kRXZ0RWxzLmdldChldnQpO2lmKCFlbHx8IWVsLm9mZiljb250aW51ZTt2YXIgbmFtZT1ldnQubmFtZSxmbj1ldnQuZm47ZWwub2ZmKG5hbWUsZm4pO2JvdW5kRXZ0RWxzLmRlbGV0ZShldnQpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yPXRydWU7X2l0ZXJhdG9yRXJyb3I9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uJiZfaXRlcmF0b3IucmV0dXJuKXtfaXRlcmF0b3IucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3Ipe3Rocm93IF9pdGVyYXRvckVycm9yfX19fSxpc1NoYWR5U2NvcGVkOmZ1bmN0aW9uIGlzU2hhZHlTY29wZWQoKXtyZXR1cm4hUG9seW1lci5TZXR0aW5ncy51c2VOYXRpdmVTaGFkb3d9LGdldFNoYWR5U2NvcGU6ZnVuY3Rpb24gZ2V0U2hhZHlTY29wZSgpe3JldHVybidzdHlsZS1zY29wZSBweC1tYXAnfX07UHhNYXBCZWhhdmlvci5FbGVtZW50PVtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjoxMCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcFwiOjE1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTQ1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JzsoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7d2luZG93LlB4TWFwQmVoYXZpb3I9d2luZG93LlB4TWFwQmVoYXZpb3J8fHt9O1B4TWFwQmVoYXZpb3IuTGF5ZXJHcm91cEltcGw9e3Byb3BlcnRpZXM6e25hbWU6e3R5cGU6U3RyaW5nLG5vdGlmeTp0cnVlfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KCl7cmV0dXJuIEwubGF5ZXJHcm91cCgpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QoKXtyZXR1cm4gdW5kZWZpbmVkfSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybnt9fX07UHhNYXBCZWhhdmlvci5MYXllckdyb3VwPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXIsUHhNYXBCZWhhdmlvci5MYXllckdyb3VwSW1wbF19KSgpO1xuXG59LHt9XSwxNDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO3ZhciBfa2V5cz1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTt2YXIgX2tleXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO3ZhciBfY2xhc3NDYWxsQ2hlY2syPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO3ZhciBfY2xhc3NDYWxsQ2hlY2szPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7dmFyIF9jcmVhdGVDbGFzczI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7dmFyIF9jcmVhdGVDbGFzczM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcD13aW5kb3cuUHhNYXB8fHt9O3ZhciBTdGF0aWNJY29uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gU3RhdGljSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFN0YXRpY0ljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTdGF0aWNJY29uLFt7a2V5OidjcmVhdGVJY29uJyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgX3NldHRpbmdzJHR5cGU9c2V0dGluZ3MudHlwZSx0eXBlPV9zZXR0aW5ncyR0eXBlPT09dW5kZWZpbmVkPydpbmZvJzpfc2V0dGluZ3MkdHlwZSxzdHlsZVNjb3BlPXNldHRpbmdzLnN0eWxlU2NvcGU7dmFyIGNsYXNzTmFtZT10aGlzLl9nZW5lcmF0ZVN0YXRpY0ljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSk7dmFyIGh0bWw9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLXN0YXRpY19fd3JhcHBlclwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLXN0YXRpY19fYm9keVwiPjwvaT5cXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zdGF0aWNfX2Rlc2NlbmRlclwiPjwvaT5cXG4gICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zdGF0aWNfX2JhZGdlXCI+PC9pPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgJzt2YXIgaWNvblNpemU9TC5wb2ludCgyMywzMSk7dmFyIGljb25BbmNob3I9TC5wb2ludCg3LjYsMzEpO3ZhciBwb3B1cEFuY2hvcj1MLnBvaW50KDEsLTMxKTt2YXIgb3B0aW9ucz17Y2xhc3NOYW1lOmNsYXNzTmFtZSxodG1sOmh0bWwsaWNvblNpemU6aWNvblNpemUsaWNvbkFuY2hvcjppY29uQW5jaG9yLHBvcHVwQW5jaG9yOnBvcHVwQW5jaG9yfTtyZXR1cm4gTC5kaXZJY29uKG9wdGlvbnMpfX0se2tleTonX2dlbmVyYXRlU3RhdGljSWNvbkNsYXNzZXMnLHZhbHVlOmZ1bmN0aW9uIF9nZW5lcmF0ZVN0YXRpY0ljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSl7dmFyIGNsYXNzZXM9WydtYXAtaWNvbicsJ21hcC1pY29uLXN0YXRpYycsJ21hcC1pY29uLXN0YXRpYy0td2l0aC1iYWRnZSddO2lmKHR5cGUmJnR5cGUubGVuZ3RoKXtjbGFzc2VzLnB1c2goJ21hcC1pY29uLXN0YXRpYy0tJyt0eXBlKX1pZihzdHlsZVNjb3BlKXtjbGFzc2VzLnB1c2goc3R5bGVTY29wZSl9cmV0dXJuIGNsYXNzZXMuam9pbignICcpfX1dKTtyZXR1cm4gU3RhdGljSWNvbn0oKTs7UHhNYXAuU3RhdGljSWNvbj1TdGF0aWNJY29uO3ZhciBTeW1ib2xJY29uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gU3ltYm9sSWNvbigpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLFN5bWJvbEljb24pO3RoaXMuaWNvbj10aGlzLmNyZWF0ZUljb24oc2V0dGluZ3MpO3JldHVybiB0aGlzLmljb259KDAsX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTeW1ib2xJY29uLFt7a2V5OidjcmVhdGVJY29uJyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgX3NldHRpbmdzJHR5cGUyPXNldHRpbmdzLnR5cGUsdHlwZT1fc2V0dGluZ3MkdHlwZTI9PT11bmRlZmluZWQ/J2luZm8nOl9zZXR0aW5ncyR0eXBlMixfc2V0dGluZ3Mkc3ltYm9sPXNldHRpbmdzLnN5bWJvbCxzeW1ib2w9X3NldHRpbmdzJHN5bWJvbD09PXVuZGVmaW5lZD8nZmEgZmEtYm9sdCc6X3NldHRpbmdzJHN5bWJvbCxzdHlsZVNjb3BlPXNldHRpbmdzLnN0eWxlU2NvcGU7dmFyIGNsYXNzTmFtZT10aGlzLl9nZW5lcmF0ZVN5bWJvbEljb25DbGFzc2VzKHR5cGUsc3R5bGVTY29wZSk7dmFyIGh0bWw9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fd3JhcHBlclwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cIm1hcC1pY29uLXN5bWJvbF9fYm9keVwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX3N5bWJvbC0tY29udGFpbmVyIGZsZXggZmxleC0tbWlkZGxlIGZsZXgtLWNlbnRlclwiPlxcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXAtaWNvbi1zeW1ib2xfX3N5bWJvbCAnK3N5bWJvbCsnXCI+PC9pPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2k+XFxuICAgICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3ltYm9sX19kZXNjZW5kZXJcIj48L2k+XFxuICAgICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tc3ltYm9sX19iYWRnZVwiPjwvaT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICc7dmFyIGljb25TaXplPUwucG9pbnQoMzksNDcpO3ZhciBpY29uQW5jaG9yPUwucG9pbnQoMTQuNiw0Nik7dmFyIHBvcHVwQW5jaG9yPUwucG9pbnQoMSwtNDUpO3ZhciBvcHRpb25zPXtjbGFzc05hbWU6Y2xhc3NOYW1lLGh0bWw6aHRtbCxpY29uU2l6ZTppY29uU2l6ZSxpY29uQW5jaG9yOmljb25BbmNob3IscG9wdXBBbmNob3I6cG9wdXBBbmNob3J9O3JldHVybiBMLmRpdkljb24ob3B0aW9ucyl9fSx7a2V5OidfZ2VuZXJhdGVTeW1ib2xJY29uQ2xhc3NlcycsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlU3ltYm9sSWNvbkNsYXNzZXModHlwZSxzdHlsZVNjb3BlKXt2YXIgY2xhc3Nlcz1bJ21hcC1pY29uJywnbWFwLWljb24tc3ltYm9sJywnbWFwLWljb24tc3ltYm9sLS13aXRoLWJhZGdlJ107aWYodHlwZSYmdHlwZS5sZW5ndGgpe2NsYXNzZXMucHVzaCgnbWFwLWljb24tc3ltYm9sLS0nK3R5cGUpfWlmKHN0eWxlU2NvcGUpe2NsYXNzZXMucHVzaChzdHlsZVNjb3BlKX1yZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyl9fV0pO3JldHVybiBTeW1ib2xJY29ufSgpOztQeE1hcC5TeW1ib2xJY29uPVN5bWJvbEljb247dmFyIENsdXN0ZXJJY29uPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gQ2x1c3Rlckljb24oKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxDbHVzdGVySWNvbik7dGhpcy5pY29uPXRoaXMuY3JlYXRlSWNvbihzZXR0aW5ncyk7cmV0dXJuIHRoaXMuaWNvbn0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENsdXN0ZXJJY29uLFt7a2V5OidjcmVhdGVJY29uJyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVJY29uKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgY291bnQ9c2V0dGluZ3MuY291bnQsY291bnRCeVR5cGU9c2V0dGluZ3MuY291bnRCeVR5cGUsY29sb3JzQnlUeXBlPXNldHRpbmdzLmNvbG9yc0J5VHlwZSxfc2V0dGluZ3MkY29udGFpbmVyU2k9c2V0dGluZ3MuY29udGFpbmVyU2l6ZSxjb250YWluZXJTaXplPV9zZXR0aW5ncyRjb250YWluZXJTaT09PXVuZGVmaW5lZD81MDpfc2V0dGluZ3MkY29udGFpbmVyU2ksX3NldHRpbmdzJHBhdGhTaXplPXNldHRpbmdzLnBhdGhTaXplLHBhdGhTaXplPV9zZXR0aW5ncyRwYXRoU2l6ZT09PXVuZGVmaW5lZD8xMDpfc2V0dGluZ3MkcGF0aFNpemUsX3NldHRpbmdzJGJvcmRlclNpemU9c2V0dGluZ3MuYm9yZGVyU2l6ZSxib3JkZXJTaXplPV9zZXR0aW5ncyRib3JkZXJTaXplPT09dW5kZWZpbmVkPzA6X3NldHRpbmdzJGJvcmRlclNpemUsX3NldHRpbmdzJGNsYXNzTmFtZT1zZXR0aW5ncy5jbGFzc05hbWUsY2xhc3NOYW1lPV9zZXR0aW5ncyRjbGFzc05hbWU9PT11bmRlZmluZWQ/Jyc6X3NldHRpbmdzJGNsYXNzTmFtZSxzdHlsZVNjb3BlPXNldHRpbmdzLnN0eWxlU2NvcGU7dmFyIGNoYXJ0U2l6ZT1jb250YWluZXJTaXplLShib3JkZXJTaXplPjA/Ym9yZGVyU2l6ZSoyLTAuNTowKTt2YXIgaWNvblNpemU9TC5wb2ludChjb250YWluZXJTaXplLGNvbnRhaW5lclNpemUpO3ZhciBzdmc9dGhpcy5fZ2VuZXJhdGVDbHVzdGVySWNvblNWRyhjb3VudEJ5VHlwZSxjb2xvcnNCeVR5cGUsY2hhcnRTaXplLHBhdGhTaXplKTt2YXIgY2xhc3Nlcz0nbWFwLWljb24tY2x1c3RlciAnKyhjbGFzc05hbWV8fCcnKSsnICcrKHN0eWxlU2NvcGV8fCcnKTt2YXIgaHRtbD0nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWljb24tY2x1c3Rlcl9fY29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDogJytjb250YWluZXJTaXplKydweDsgaGVpZ2h0OiAnK2NvbnRhaW5lclNpemUrJ3B4XCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVwibWFwLWljb24tY2x1c3Rlcl9fc3ZnXCI+JytzdmcrJzwvaT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uLWNsdXN0ZXJfX2JvZHlcIj4nK2NvdW50Kyc8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICc7dmFyIG9wdGlvbnM9e2ljb25TaXplOmljb25TaXplLGNsYXNzTmFtZTpjbGFzc2VzLGh0bWw6aHRtbH07cmV0dXJuIEwuZGl2SWNvbihvcHRpb25zKX19LHtrZXk6J19nZW5lcmF0ZUNsdXN0ZXJJY29uU1ZHJyx2YWx1ZTpmdW5jdGlvbiBfZ2VuZXJhdGVDbHVzdGVySWNvblNWRyhjb3VudEJ5VHlwZSxjb2xvcnNCeVR5cGUsY2hhcnRTaXplLHBhdGhTaXplKXt2YXIgdHlwZUtleXM9KDAsX2tleXMyLmRlZmF1bHQpKGNvdW50QnlUeXBlKTt2YXIgdHlwZU9ianM9dHlwZUtleXMubWFwKGZ1bmN0aW9uKHR5cGUpe3JldHVybnt0eXBlOnR5cGUsY291bnQ6Y291bnRCeVR5cGVbdHlwZV0sY29sb3I6Y29sb3JzQnlUeXBlW3R5cGVdfX0pO3R5cGVPYmpzLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5jb3VudC1iLmNvdW50fSk7dmFyIHR5cGVzPVtdO3ZhciBjb2xvcnM9W107dmFyIGk9dm9pZCAwLGxlbj12b2lkIDAsdHlwZT12b2lkIDAsdG90YWw9dm9pZCAwO2ZvcihpPTAsbGVuPXR5cGVLZXlzLmxlbmd0aDtpPGxlbjtpKyspe3R5cGU9dHlwZUtleXNbaV07dG90YWw9Y291bnRCeVR5cGVbdHlwZV07dHlwZXMucHVzaChjb3VudEJ5VHlwZVt0eXBlXSk7Y29sb3JzLnB1c2goY29sb3JzQnlUeXBlW3R5cGVdKX1yZXR1cm4gdGhpcy5jcmVhdGVQaWVDaGFydCh0eXBlcyxjb2xvcnMsY2hhcnRTaXplLHBhdGhTaXplKX19LHtrZXk6J2NyZWF0ZVBpZUNoYXJ0Jyx2YWx1ZTpmdW5jdGlvbiBjcmVhdGVQaWVDaGFydChncm91cHNBcnJheSxjb2xvcnNBcnJheSxjaGFydFNpemUscGF0aFNpemUpe3ZhciBwaWVHZW5lcmF0b3JGbj1QeC5kMy5waWUoKTt2YXIgYXJjRGF0YT1waWVHZW5lcmF0b3JGbihncm91cHNBcnJheSk7dmFyIHJhZGl1cz1jaGFydFNpemUvMjt2YXIgaW5uZXJSYWRpdXM9cmFkaXVzLXBhdGhTaXplO3ZhciBhcmNQYXRoR2VuZXJhdG9yRm49UHguZDMuYXJjKCkub3V0ZXJSYWRpdXMocmFkaXVzKS5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyk7dmFyIHBhdGhMaXN0VG1wbD1mdW5jdGlvbiBwYXRoTGlzdFRtcGwocGF0aHMpe3JldHVybiBwYXRocy5tYXAocGF0aFRtcGwpLmpvaW4oJycpfTt2YXIgcGF0aFRtcGw9ZnVuY3Rpb24gcGF0aFRtcGwocGF0aERhdGEscGF0aEluZGV4KXtyZXR1cm4nPHBhdGggZD1cIicrYXJjUGF0aEdlbmVyYXRvckZuKHBhdGhEYXRhKSsnXCIgZmlsbD1cIicrY29sb3JzQXJyYXlbcGF0aEluZGV4XSsnXCIgb3BhY2l0eT1cIjFcIj48L3BhdGg+J307cmV0dXJuJ1xcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiJytjaGFydFNpemUrJ1wiIGhlaWdodD1cIicrY2hhcnRTaXplKydcIj5cXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJytyYWRpdXMrJywgJytyYWRpdXMrJylcIj5cXG4gICAgICAgICAgICAgICAgJytwYXRoTGlzdFRtcGwoYXJjRGF0YSkrJ1xcbiAgICAgICAgICAgIDwvZz5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgICd9fV0pO3JldHVybiBDbHVzdGVySWNvbn0oKTs7UHhNYXAuQ2x1c3Rlckljb249Q2x1c3Rlckljb259KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI6MTYsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjoxN31dLDE0NzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF9rZXlzPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO3ZhciBfa2V5czI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5JTVNMYXllckltcGw9e3Byb3BlcnRpZXM6e2xheWVyTmFtZTp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSx1cmw6e3R5cGU6U3RyaW5nfSxwYW5lOnt0eXBlOk9iamVjdH0sZGVtbzp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxlZGl0YWJsZTp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfSxmZWF0dXJlU3R5bGU6e3R5cGU6T2JqZWN0LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXJrZXJJY29uT3B0aW9uczp7dHlwZTpPYmplY3Qsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxza2V0Y2g6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX19LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0aGlzLmxheWVyTmFtZSYmdHlwZW9mIHRoaXMubGF5ZXJOYW1lPT09J3N0cmluZycmJnRoaXMubGF5ZXJOYW1lLmxlbmd0aD4wfSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt2YXIgX3RoaXM9dGhpczt2YXIgYWRkZWRGbj10aGlzLl9oYW5kbGVGZWF0dXJlQWRkZWQuYmluZCh0aGlzKTt2YXIgcmVtb3ZlZEZuPXRoaXMuX2hhbmRsZUZlYXR1cmVSZW1vdmVkLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnbGF5ZXJhZGQnOmFkZGVkRm4sJ2xheWVycmVtb3ZlJzpyZW1vdmVkRm59KTtpZih0aGlzLmVsZW1lbnRJbnN0LmdldExheWVycygpLmxlbmd0aCE9PTApe3RoaXMuZWxlbWVudEluc3QuZWFjaExheWVyKGZ1bmN0aW9uKGxheWVyKXtfdGhpcy5lbGVtZW50SW5zdC5maXJlKCdsYXllcmFkZCcse2xheWVyOmxheWVyfSl9KX1QeE1hcEJlaGF2aW9yLkxheWVySW1wbC5hZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dmFyIF90aGlzMj10aGlzO3ZhciBkZWZhdWx0TWFya2VySWNvbj0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiICBoZWlnaHQ9XCIxNlwiIHdpZHRoPVwiMTZcIj48Y2lyY2xlIGN4PVwiOFwiIGN5PVwiOFwiIHI9XCI2XCIgc3Ryb2tlPVwiIzNFODdFOFwiIHN0cm9rZS13aWR0aD1cIjNcIiBmaWxsPVwiIzg4QkRFNlwiIGZpbGwtb3BhY2l0eT1cIjAuNFwiLz48L3N2Zz4nO3ZhciBkZWZhdWx0TWFya2VySWNvblVSTD0nZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnK2J0b2EoZGVmYXVsdE1hcmtlckljb24pO3ZhciBtYXBJbnN0PXRoaXMucGFyZW50Tm9kZS5lbGVtZW50SW5zdDt2YXIgY3VzdG9tUGFuZU5hbWU9b3B0aW9ucy5wYW5lLm5hbWV8fG9wdGlvbnMubGF5ZXJOYW1lO3ZhciBhdHRyaWJ1dGVQcm9wZXJ0aWVzPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKS5mZWF0dXJlU3R5bGU7bWFwSW5zdC5jcmVhdGVQYW5lKGN1c3RvbVBhbmVOYW1lKTttYXBJbnN0LmdldFBhbmUoY3VzdG9tUGFuZU5hbWUpLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1wYW5lJyk7bWFwSW5zdC5nZXRQYW5lKGN1c3RvbVBhbmVOYW1lKS5zdHlsZS56SW5kZXg9b3B0aW9ucy5wYW5lLnpJbmRleDt2YXIgaW5pdGlhbEJvdW5kcz10aGlzLnBhcmVudE5vZGUuZWxlbWVudEluc3QuZ2V0Qm91bmRzKCk7dmFyIElNU0xheWVyPUwuZ2VvSnNvbihudWxsLHtwb2ludFRvTGF5ZXI6ZnVuY3Rpb24gcG9pbnRUb0xheWVyKGZlYXR1cmUsbGF0bG5nKXt2YXIgbWFya2VySWNvbj12b2lkIDA7dmFyIGljb25PcHRpb25zPW9wdGlvbnMubWFya2VySWNvbk9wdGlvbnM7aWNvbk9wdGlvbnMuaWNvblNpemU9b3B0aW9ucy5tYXJrZXJJY29uT3B0aW9ucy5pY29uU2l6ZXx8WzE2LDE2XTtpY29uT3B0aW9ucy5pY29uQW5jaG9yPW9wdGlvbnMubWFya2VySWNvbk9wdGlvbnMuaWNvbkFuY2hvcnx8WzgsOF07aWYoaWNvbk9wdGlvbnMuZGl2SWNvbil7aWNvbk9wdGlvbnMuaHRtbD1pY29uT3B0aW9ucy5odG1sfHxkZWZhdWx0TWFya2VySWNvbjttYXJrZXJJY29uPUwuZGl2SWNvbihpY29uT3B0aW9ucyl9ZWxzZXtpY29uT3B0aW9ucy5pY29uVXJsPWljb25PcHRpb25zLmljb25Vcmx8fGRlZmF1bHRNYXJrZXJJY29uVVJMO21hcmtlckljb249TC5pY29uKGljb25PcHRpb25zKX1yZXR1cm4gbmV3IEwuTWFya2VyKGxhdGxuZyx7aWNvbjptYXJrZXJJY29uLHBhbmU6Y3VzdG9tUGFuZU5hbWV9KX0sb25FYWNoRmVhdHVyZTpmdW5jdGlvbiBvbkVhY2hGZWF0dXJlKGZlYXR1cmUsbGF5ZXIpe2lmKCFvcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcylyZXR1cm47X3RoaXMyLl9iaW5kUG9wdXAoZmVhdHVyZSxsYXllcil9LHN0eWxlOmZ1bmN0aW9uIHN0eWxlKGZlYXR1cmUpe3ZhciBmZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXMuc3R5bGV8fHt9O3JldHVybiBfdGhpczIuX2dldFN0eWxlKGZlYXR1cmVQcm9wZXJ0aWVzLGF0dHJpYnV0ZVByb3BlcnRpZXMpfSxwYW5lOmN1c3RvbVBhbmVOYW1lfSk7aWYodGhpcy5lZGl0YWJsZSl7dGhpcy5fYWRkRWRpdGFibGVUb29scyhtYXBJbnN0LElNU0xheWVyKX10aGlzLnVybD0nL3YxL2NvbGxlY3Rpb25zLycrb3B0aW9ucy5sYXllck5hbWUrJy9zcGF0aWFsLXF1ZXJ5L2Jib3gtaW50ZXJhY3RzPycrKCdsZWZ0PScraW5pdGlhbEJvdW5kcy5fc291dGhXZXN0LmxuZysnJnJpZ2h0PScraW5pdGlhbEJvdW5kcy5fbm9ydGhFYXN0LmxuZysnJnRvcD0nK2luaXRpYWxCb3VuZHMuX25vcnRoRWFzdC5sYXQrJyZib3R0b209Jytpbml0aWFsQm91bmRzLl9zb3V0aFdlc3QubGF0KTtpZihvcHRpb25zLmRlbW8pdGhpcy51cmw9J2RlbW8vcHgtbWFwLWxheWVyLWdlb2pzb24tZGF0YS5qc29uJzt0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNnZXQtY29sbGVjdGlvbicpLmdlbmVyYXRlUmVxdWVzdCgpO3RoaXMucGFyZW50Tm9kZS5lbGVtZW50SW5zdC5vbih7bW92ZWVuZDpmdW5jdGlvbiBtb3ZlZW5kKCl7dmFyIGJvdW5kcz1fdGhpczIucGFyZW50Tm9kZS5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTt2YXIgYm91bmRzQXJyYXk9W2JvdW5kcy5fc291dGhXZXN0LmxuZyxib3VuZHMuX25vcnRoRWFzdC5sbmcsYm91bmRzLl9zb3V0aFdlc3QubGF0LGJvdW5kcy5fbm9ydGhFYXN0LmxhdF07X3RoaXMyLnNldE5ld0JvdW5kcyhib3VuZHNBcnJheSl9fSk7cmV0dXJuIElNU0xheWVyfSxfZGlzcGxheURhdGE6ZnVuY3Rpb24gX2Rpc3BsYXlEYXRhKGV2ZW50Q29udGV4dCl7dmFyIGNvbGxlY3Rpb25OYW1lPWV2ZW50Q29udGV4dC5kZXRhaWwudXJsLnNwbGl0KCcvdjEvY29sbGVjdGlvbnMvJylbMV07aWYodGhpcy5kZW1vKXtjb2xsZWN0aW9uTmFtZT0nZGVtbyd9dGhpcy5lbGVtZW50SW5zdC5jbGVhckxheWVycygpO3RoaXMuZWxlbWVudEluc3QuYWRkRGF0YShldmVudENvbnRleHQuZGV0YWlsLnJlc3BvbnNlKTt0aGlzLmZpcmUoJ0lNUy1sYXllci1yZWFkeScsY29sbGVjdGlvbk5hbWUpfSxfZ2V0Q29sbGVjdGlvbkVycm9yOmZ1bmN0aW9uIF9nZXRDb2xsZWN0aW9uRXJyb3IoZXZlbnQpe2lmKGV2ZW50LmRldGFpbC5lcnJvci5tZXNzYWdlIT09J1JlcXVlc3QgYWJvcnRlZC4nKXt0aGlzLmZpcmUoJ0lNUy1sYXllci1lcnJvcicsZXZlbnQuZGV0YWlsLmVycm9yKX19LF9hZGRFZGl0YWJsZVRvb2xzOmZ1bmN0aW9uIF9hZGRFZGl0YWJsZVRvb2xzKGxlYWZsZXRNYXAsSU1TTGF5ZXIpe2lmKCFsZWFmbGV0TWFwLmVkaXRUb29scyl7bGVhZmxldE1hcC5lZGl0VG9vbHM9bmV3IEwuRWRpdGFibGUobGVhZmxldE1hcCk7bGVhZmxldE1hcC5lZGl0VG9vbHMuYWRkRXZlbnRMaXN0ZW5lcignZWRpdGFibGU6ZHJhd2luZzpzdGFydCcsZnVuY3Rpb24oKXtsZWFmbGV0TWFwLmRvdWJsZUNsaWNrWm9vbS5kaXNhYmxlKCl9KTtsZWFmbGV0TWFwLmVkaXRUb29scy5hZGRFdmVudExpc3RlbmVyKCdlZGl0YWJsZTpkcmF3aW5nOmVuZCcsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGVhZmxldE1hcC5kb3VibGVDbGlja1pvb20uZW5hYmxlKCl9LDApfSk7bGVhZmxldE1hcC5lZGl0VG9vbHMuYWRkRXZlbnRMaXN0ZW5lcignZWRpdGFibGU6ZHJhZ3N0YXJ0JyxmdW5jdGlvbigpe2xlYWZsZXRNYXAuZG91YmxlQ2xpY2tab29tLmRpc2FibGUoKX0pO2xlYWZsZXRNYXAuZWRpdFRvb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXRhYmxlOmRyYWdlbmQnLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2xlYWZsZXRNYXAuZG91YmxlQ2xpY2tab29tLmVuYWJsZSgpfSwwKX0pfWlmKHRoaXMuc2tldGNoKXtsZWFmbGV0TWFwLmVkaXRUb29scy5mZWF0dXJlc0xheWVyPUlNU0xheWVyfXRoaXMuZmlyZSgnSU1TLWVkaXRUb29scy1yZWFkeScpfSxfZ2V0U3R5bGU6ZnVuY3Rpb24gX2dldFN0eWxlKGZlYXR1cmVQcm9wZXJ0aWVzLGF0dHJpYnV0ZVByb3BlcnRpZXMpe3JldHVybntyYWRpdXM6ZmVhdHVyZVByb3BlcnRpZXMucmFkaXVzfHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLnJhZGl1c3x8NSxjb2xvcjpmZWF0dXJlUHJvcGVydGllcy5jb2xvcnx8YXR0cmlidXRlUHJvcGVydGllcy5jb2xvcnx8JyMzRTg3RTgnLGZpbGxDb2xvcjpmZWF0dXJlUHJvcGVydGllcy5maWxsQ29sb3J8fGF0dHJpYnV0ZVByb3BlcnRpZXMuZmlsbENvbG9yfHwnIzg4QkRFNicsd2VpZ2h0OmZlYXR1cmVQcm9wZXJ0aWVzLndlaWdodHx8YXR0cmlidXRlUHJvcGVydGllcy53ZWlnaHR8fDIsb3BhY2l0eTpmZWF0dXJlUHJvcGVydGllcy5vcGFjaXR5fHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLm9wYWNpdHl8fDEsZmlsbE9wYWNpdHk6ZmVhdHVyZVByb3BlcnRpZXMuZmlsbE9wYWNpdHl8fGF0dHJpYnV0ZVByb3BlcnRpZXMuZmlsbE9wYWNpdHl8fDAuNH19LF9iaW5kRmVhdHVyZVBvcHVwczpmdW5jdGlvbiBfYmluZEZlYXR1cmVQb3B1cHMoKXt2YXIgX3RoaXMzPXRoaXM7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZWxlbWVudEluc3QuZWFjaExheWVyKGZ1bmN0aW9uKGxheWVyKXtyZXR1cm4gX3RoaXMzLl9iaW5kUG9wdXAobGF5ZXIuZmVhdHVyZSxsYXllcil9KX0sX2JpbmRQb3B1cDpmdW5jdGlvbiBfYmluZFBvcHVwKGZlYXR1cmUsbGF5ZXIpe3ZhciBwb3B1cERhdGFLZXlzPSgwLF9rZXlzMi5kZWZhdWx0KShmZWF0dXJlLnByb3BlcnRpZXMpLmZpbHRlcihmdW5jdGlvbihrZXkpe3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSYmZmVhdHVyZS5wcm9wZXJ0aWVzW2tleV0hPT0ndW5zZXQnJiZrZXkhPT0nc3R5bGUnfSk7aWYoIXBvcHVwRGF0YUtleXMubGVuZ3RoKXJldHVybjt2YXIgcG9wdXBEYXRhPXBvcHVwRGF0YUtleXMucmVkdWNlKGZ1bmN0aW9uKGFjY3VtLGtleSl7YWNjdW1ba2V5XT1mZWF0dXJlLnByb3BlcnRpZXNba2V5XTtyZXR1cm4gYWNjdW19LHt9KTt2YXIgcG9wdXA9bmV3IFB4TWFwLkRhdGFQb3B1cCh7dGl0bGU6J0ZlYXR1cmUgUHJvcGVydGllcycsZGF0YTpwb3B1cERhdGEsYXV0b1BhblBhZGRpbmc6WzEsMV19KTtsYXllci5iaW5kUG9wdXAocG9wdXApfSxfdW5iaW5kRmVhdHVyZVBvcHVwczpmdW5jdGlvbiBfdW5iaW5kRmVhdHVyZVBvcHVwcygpe3ZhciBfdGhpczQ9dGhpcztpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5lbGVtZW50SW5zdC5lYWNoTGF5ZXIoZnVuY3Rpb24obGF5ZXIpe3JldHVybiBfdGhpczQuX3VuYmluZFBvcHVwKGxheWVyKX0pfSxfdW5iaW5kUG9wdXA6ZnVuY3Rpb24gX3VuYmluZFBvcHVwKGxheWVyKXtpZih0eXBlb2YgbGF5ZXIuZ2V0UG9wdXAoKSE9PSd1bmRlZmluZWQnKXtsYXllci51bmJpbmRQb3B1cCgpfX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgX3RoaXM1PXRoaXM7dmFyIGRlZmF1bHRNYXJrZXJJY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiPjxjaXJjbGUgY3g9XCI4XCIgY3k9XCI4XCIgcj1cIjZcIiBzdHJva2U9XCIjM0U4N0U4XCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGZpbGw9XCIjODhCREU2XCIgZmlsbC1vcGFjaXR5PVwiMC40XCIvPjwvc3ZnPic7dmFyIGRlZmF1bHRNYXJrZXJJY29uVVJMPSdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcrYnRvYShkZWZhdWx0TWFya2VySWNvbik7dmFyIGN1c3RvbVBhbmVOYW1lPWxhc3RPcHRpb25zLnBhbmUubmFtZXx8bGFzdE9wdGlvbnMubGF5ZXJOYW1lO2lmKG5leHRPcHRpb25zLmxheWVyTmFtZS5sZW5ndGg8MCl7dGhpcy5lbGVtZW50SW5zdC5jbGVhckxheWVycygpfWVsc2UgaWYobmV4dE9wdGlvbnMubGF5ZXJOYW1lLmxlbmd0aD4wJiYobGFzdE9wdGlvbnMubGF5ZXJOYW1lIT09bmV4dE9wdGlvbnMubGF5ZXJOYW1lfHxsYXN0T3B0aW9ucy5mZWF0dXJlU3R5bGVIYXNoIT09bmV4dE9wdGlvbnMuZmVhdHVyZVN0eWxlSGFzaCkpe3ZhciBzdHlsZUF0dHJpYnV0ZVByb3BlcnRpZXM9dGhpcy5nZXRJbnN0T3B0aW9ucygpLmZlYXR1cmVTdHlsZTt0aGlzLmVsZW1lbnRJbnN0LmNsZWFyTGF5ZXJzKCk7dGhpcy5lbGVtZW50SW5zdC5vcHRpb25zLnN0eWxlPWZ1bmN0aW9uKGZlYXR1cmUpe3ZhciBmZWF0dXJlUHJvcGVydGllcz1mZWF0dXJlLnByb3BlcnRpZXMuc3R5bGV8fHt9O3JldHVybiBfdGhpczUuX2dldFN0eWxlKGZlYXR1cmVQcm9wZXJ0aWVzLHN0eWxlQXR0cmlidXRlUHJvcGVydGllcyl9O3ZhciBjdXJyZW50Qm91bmRzPXRoaXMucGFyZW50Tm9kZS5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTt0aGlzLnVybD0nL3YxL2NvbGxlY3Rpb25zLycrbmV4dE9wdGlvbnMubGF5ZXJOYW1lKycvc3BhdGlhbC1xdWVyeS9iYm94LWludGVyYWN0cz8nKygnbGVmdD0nK2N1cnJlbnRCb3VuZHMuX3NvdXRoV2VzdC5sbmcrJyZyaWdodD0nK2N1cnJlbnRCb3VuZHMuX25vcnRoRWFzdC5sbmcrJyZ0b3A9JytjdXJyZW50Qm91bmRzLl9ub3J0aEVhc3QubGF0KycmYm90dG9tPScrY3VycmVudEJvdW5kcy5fc291dGhXZXN0LmxhdCk7aWYobmV4dE9wdGlvbnMuZGVtbyl0aGlzLnVybD0nZGVtby9weC1tYXAtbGF5ZXItZ2VvanNvbi1kYXRhLmpzb24nO3RoaXMucXVlcnlTZWxlY3RvcignI2dldC1jb2xsZWN0aW9uJykuZ2VuZXJhdGVSZXF1ZXN0KCk7aWYobmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXt0aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpfX1lbHNlIGlmKGxhc3RPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyE9PW5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl7aWYobmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXRoaXMuX2JpbmRGZWF0dXJlUG9wdXBzKCk7aWYoIW5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl0aGlzLl91bmJpbmRGZWF0dXJlUG9wdXBzKCl9ZWxzZSBpZihsYXN0T3B0aW9ucy5tYXJrZXJJY29uT3B0aW9uc0hhc2ghPT1uZXh0T3B0aW9ucy5tYXJrZXJJY29uT3B0aW9uc0hhc2gpe3RoaXMuZWxlbWVudEluc3QucG9pbnRUb0xheWVyPWZ1bmN0aW9uKGZlYXR1cmUsbGF0bG5nKXt2YXIgaWNvbk9wdGlvbnM9bmV4dE9wdGlvbnMubWFya2VySWNvbk9wdGlvbnM7aWNvbk9wdGlvbnMuaWNvblNpemU9bmV4dE9wdGlvbnMubWFya2VySWNvbk9wdGlvbnMuaWNvblNpemV8fFsxNiwxNl07aWNvbk9wdGlvbnMuaWNvbkFuY2hvcj1uZXh0T3B0aW9ucy5tYXJrZXJJY29uT3B0aW9ucy5pY29uQW5jaG9yfHxbOCw4XTtpY29uT3B0aW9ucy5pY29uVXJsPW5leHRPcHRpb25zLm1hcmtlckljb25PcHRpb25zLmljb25TaXplfHxkZWZhdWx0TWFya2VySWNvblVSTDt2YXIgbWFya2VySWNvbj1MLmljb24oaWNvbk9wdGlvbnMpO3JldHVybiBuZXcgTC5NYXJrZXIobGF0bG5nLHtpY29uOm1hcmtlckljb24scGFuZTpjdXN0b21QYW5lTmFtZX0pfTt2YXIgY3VycmVudERhdGE9dGhpcy5lbGVtZW50SW5zdC50b0dlb0pTT04oKTt0aGlzLmVsZW1lbnRJbnN0LmNsZWFyTGF5ZXJzKCk7dGhpcy5lbGVtZW50SW5zdC5hZGREYXRhKGN1cnJlbnREYXRhKTtpZihuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe3RoaXMuX2JpbmRGZWF0dXJlUG9wdXBzKCl9fWVsc2UgaWYobGFzdE9wdGlvbnMucGFuZS56SW5kZXghPT1uZXh0T3B0aW9ucy5wYW5lLnpJbmRleCl7dGhpcy5wYXJlbnROb2RlLmVsZW1lbnRJbnN0LmdldFBhbmUoY3VzdG9tUGFuZU5hbWUpLnN0eWxlLnpJbmRleD1uZXh0T3B0aW9ucy5wYW5lLnpJbmRleH19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue2xheWVyTmFtZTp0aGlzLmxheWVyTmFtZXx8e30scGFuZTp0aGlzLnBhbmV8fHtuYW1lOm51bGwsekluZGV4OjQwMH0sZGVtbzp0aGlzLmRlbW8sZmVhdHVyZVN0eWxlOnRoaXMuZmVhdHVyZVN0eWxlfHx7fSxmZWF0dXJlU3R5bGVIYXNoOigwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMuZmVhdHVyZVN0eWxlfHx7fSksZmVhdHVyZVNWRzp0aGlzLmZlYXR1cmVTdmcsbWFya2VySWNvbk9wdGlvbnM6dGhpcy5tYXJrZXJJY29uT3B0aW9uc3x8e30sbWFya2VySWNvbk9wdGlvbnNIYXNoOigwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMubWFya2VySWNvbk9wdGlvbnN8fHt9KSxzaG93RmVhdHVyZVByb3BlcnRpZXM6dGhpcy5zaG93RmVhdHVyZVByb3BlcnRpZXN9fSxzZXROZXdCb3VuZHM6ZnVuY3Rpb24gc2V0TmV3Qm91bmRzKGJvdW5kc0FycmF5KXtpZihib3VuZHNBcnJheSYmYm91bmRzQXJyYXkubGVuZ3RoPT09NCYmIWJvdW5kc0FycmF5LnNvbWUoaXNOYU4pKXtib3VuZHNBcnJheVswXTwtMTgwP2JvdW5kc0FycmF5WzBdPS0xODA6bnVsbDtib3VuZHNBcnJheVsxXT4xODA/Ym91bmRzQXJyYXlbMV09MTgwOm51bGw7Ym91bmRzQXJyYXlbMl08LTkwP2JvdW5kc0FycmF5WzJdPTkwOm51bGw7Ym91bmRzQXJyYXlbM10+OTA/Ym91bmRzQXJyYXlbM109OTA6bnVsbDt0aGlzLnVybD0nL3YxL2NvbGxlY3Rpb25zLycrdGhpcy5sYXllck5hbWUrJy9zcGF0aWFsLXF1ZXJ5L2Jib3gtaW50ZXJhY3RzPycrKCdsZWZ0PScrYm91bmRzQXJyYXlbMF0rJyZyaWdodD0nK2JvdW5kc0FycmF5WzFdKycmdG9wPScrYm91bmRzQXJyYXlbMl0rJyZib3R0b209Jytib3VuZHNBcnJheVszXSk7aWYodGhpcy5kZW1vKXRoaXMudXJsPSdkZW1vL3B4LW1hcC1sYXllci1nZW9qc29uLWRhdGEuanNvbic7dmFyIGlyb25BamF4PXRoaXMucXVlcnlTZWxlY3RvcignI2dldC1jb2xsZWN0aW9uJyk7aWYoaXJvbkFqYXgubGFzdFJlcXVlc3Qpe2lyb25BamF4Lmxhc3RSZXF1ZXN0LmFib3J0KCl9aXJvbkFqYXguZ2VuZXJhdGVSZXF1ZXN0KCl9fSxfaGFuZGxlRmVhdHVyZUFkZGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlQWRkZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub24oJ2NsaWNrJyx0aGlzLl9oYW5kbGVGZWF0dXJlVGFwcGVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBvcGVuJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQuYmluZCh0aGlzKSk7ZXZ0LmxheWVyLm9uKCdwb3B1cGNsb3NlJyx0aGlzLl9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQuYmluZCh0aGlzKSk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtYWRkZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUmVtb3ZlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVJlbW92ZWQoZXZ0KXtpZighZXZ0fHwhZXZ0LmxheWVyKXJldHVybjtldnQubGF5ZXIub2ZmKCk7dmFyIGRldGFpbD17fTtpZihldnQubGF5ZXImJmV2dC5sYXllci5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQubGF5ZXIuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcmVtb3ZlZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVUYXBwZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVUYXBwZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWxheWVyLWdlb2pzb24tZmVhdHVyZS10YXBwZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cE9wZW5lZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLW9wZW5lZCcsZGV0YWlsKX0sX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtcG9wdXAtY2xvc2VkJyxkZXRhaWwpfX07UHhNYXBCZWhhdmlvci5JTVNMYXllcj1bUHhNYXBCZWhhdmlvci5MYXllcixQeE1hcEJlaGF2aW9yLklNU0xheWVySW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiOjMsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjoxMH1dLDE0ODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF9rZXlzPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO3ZhciBfa2V5czI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7dmFyIF90eXBlb2YyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5HZW9KU09OTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOntkYXRhOnt0eXBlOk9iamVjdCxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGVkaXRhYmxlOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2V9LHBhbmU6e3R5cGU6T2JqZWN0fSxmZWF0dXJlU3R5bGU6e3R5cGU6T2JqZWN0LG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXJrZXJJY29uT3B0aW9uczp7dHlwZTpPYmplY3Qsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxza2V0Y2g6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX19LHVwZGF0ZTpmdW5jdGlvbiB1cGRhdGUoKXtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5zaG91bGRVcGRhdGVJbnN0KCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0aGlzLmRhdGEmJigwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YSk9PT0nb2JqZWN0JyYmKDAsX2tleXMyLmRlZmF1bHQpKHRoaXMuZGF0YSkubGVuZ3RofSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt2YXIgX3RoaXM9dGhpczt2YXIgYWRkZWRGbj10aGlzLl9oYW5kbGVGZWF0dXJlQWRkZWQuYmluZCh0aGlzKTt2YXIgcmVtb3ZlZEZuPXRoaXMuX2hhbmRsZUZlYXR1cmVSZW1vdmVkLmJpbmQodGhpcyk7dGhpcy5iaW5kRXZlbnRzKHsnbGF5ZXJhZGQnOmFkZGVkRm4sJ2xheWVycmVtb3ZlJzpyZW1vdmVkRm59KTtpZih0aGlzLmVsZW1lbnRJbnN0LmdldExheWVycygpLmxlbmd0aCE9PTApe3RoaXMuZWxlbWVudEluc3QuZWFjaExheWVyKGZ1bmN0aW9uKGxheWVyKXtfdGhpcy5lbGVtZW50SW5zdC5maXJlKCdsYXllcmFkZCcse2xheWVyOmxheWVyfSl9KX1QeE1hcEJlaGF2aW9yLkxheWVySW1wbC5hZGRJbnN0LmNhbGwodGhpcyxwYXJlbnQpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dmFyIF90aGlzMj10aGlzO3ZhciBkZWZhdWx0TWFya2VySWNvbj0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiICBoZWlnaHQ9XCIxNlwiIHdpZHRoPVwiMTZcIj48Y2lyY2xlIGN4PVwiOFwiIGN5PVwiOFwiIHI9XCI2XCIgc3Ryb2tlPVwiIzNFODdFOFwiIHN0cm9rZS13aWR0aD1cIjNcIiBmaWxsPVwiIzg4QkRFNlwiIGZpbGwtb3BhY2l0eT1cIjAuNFwiLz48L3N2Zz4nO3ZhciBkZWZhdWx0TWFya2VySWNvblVSTD0nZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnK2J0b2EoZGVmYXVsdE1hcmtlckljb24pO3ZhciBtYXBJbnN0PXRoaXMucGFyZW50Tm9kZS5lbGVtZW50SW5zdDt2YXIgZ2VvSnNvblBhbmVOYW1lPW9wdGlvbnMucGFuZS5uYW1lfHwnb3ZlcmxheVBhbmUnO3ZhciBhdHRyaWJ1dGVQcm9wZXJ0aWVzPXRoaXMuZ2V0SW5zdE9wdGlvbnMoKS5mZWF0dXJlU3R5bGU7bWFwSW5zdC5jcmVhdGVQYW5lKGdlb0pzb25QYW5lTmFtZSk7bWFwSW5zdC5nZXRQYW5lKGdlb0pzb25QYW5lTmFtZSkuY2xhc3NMaXN0LmFkZCgnY3VzdG9tLXBhbmUnKTttYXBJbnN0LmdldFBhbmUoZ2VvSnNvblBhbmVOYW1lKS5zdHlsZS56SW5kZXg9b3B0aW9ucy5wYW5lLnpJbmRleDt2YXIgZ2VvanNvbkxheWVyPUwuZ2VvSnNvbihvcHRpb25zLmRhdGEse3BvaW50VG9MYXllcjpmdW5jdGlvbiBwb2ludFRvTGF5ZXIoZmVhdHVyZSxsYXRsbmcpe3ZhciBtYXJrZXJJY29uPXZvaWQgMDt2YXIgaWNvbk9wdGlvbnM9b3B0aW9ucy5tYXJrZXJJY29uT3B0aW9ucztpY29uT3B0aW9ucy5pY29uU2l6ZT1vcHRpb25zLm1hcmtlckljb25PcHRpb25zLmljb25TaXplfHxbMTYsMTZdO2ljb25PcHRpb25zLmljb25BbmNob3I9b3B0aW9ucy5tYXJrZXJJY29uT3B0aW9ucy5pY29uQW5jaG9yfHxbOCw4XTtpZihpY29uT3B0aW9ucy5kaXZJY29uKXtpY29uT3B0aW9ucy5odG1sPWljb25PcHRpb25zLmh0bWx8fGRlZmF1bHRNYXJrZXJJY29uO21hcmtlckljb249TC5kaXZJY29uKGljb25PcHRpb25zKX1lbHNle2ljb25PcHRpb25zLmljb25Vcmw9aWNvbk9wdGlvbnMuaWNvblVybHx8ZGVmYXVsdE1hcmtlckljb25VUkw7bWFya2VySWNvbj1MLmljb24oaWNvbk9wdGlvbnMpfXJldHVybiBuZXcgTC5NYXJrZXIobGF0bG5nLHtpY29uOm1hcmtlckljb24scGFuZTpnZW9Kc29uUGFuZU5hbWV9KX0sb25FYWNoRmVhdHVyZTpmdW5jdGlvbiBvbkVhY2hGZWF0dXJlKGZlYXR1cmUsbGF5ZXIpe2lmKCFfdGhpczIuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXJldHVybjtfdGhpczIuX2JpbmRQb3B1cChmZWF0dXJlLGxheWVyKX0sc3R5bGU6ZnVuY3Rpb24gc3R5bGUoZmVhdHVyZSl7dmFyIGZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcy5zdHlsZXx8e307cmV0dXJuIF90aGlzMi5fZ2V0U3R5bGUoZmVhdHVyZVByb3BlcnRpZXMsYXR0cmlidXRlUHJvcGVydGllcyl9LHBhbmU6Z2VvSnNvblBhbmVOYW1lfSk7aWYodGhpcy5lZGl0YWJsZSl7dGhpcy5fYWRkRWRpdGFibGVUb29scyhtYXBJbnN0LGdlb2pzb25MYXllcil9cmV0dXJuIGdlb2pzb25MYXllcn0sX2FkZEVkaXRhYmxlVG9vbHM6ZnVuY3Rpb24gX2FkZEVkaXRhYmxlVG9vbHMobGVhZmxldE1hcCxnZW9qc29uTGF5ZXIpe2lmKCFsZWFmbGV0TWFwLmVkaXRUb29scyl7bGVhZmxldE1hcC5lZGl0VG9vbHM9bmV3IEwuRWRpdGFibGUobGVhZmxldE1hcCk7bGVhZmxldE1hcC5lZGl0VG9vbHMuYWRkRXZlbnRMaXN0ZW5lcignZWRpdGFibGU6ZHJhd2luZzpzdGFydCcsZnVuY3Rpb24oKXtsZWFmbGV0TWFwLmRvdWJsZUNsaWNrWm9vbS5kaXNhYmxlKCl9KTtsZWFmbGV0TWFwLmVkaXRUb29scy5hZGRFdmVudExpc3RlbmVyKCdlZGl0YWJsZTpkcmF3aW5nOmVuZCcsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGVhZmxldE1hcC5kb3VibGVDbGlja1pvb20uZW5hYmxlKCl9LDApfSk7bGVhZmxldE1hcC5lZGl0VG9vbHMuYWRkRXZlbnRMaXN0ZW5lcignZWRpdGFibGU6ZHJhZ3N0YXJ0JyxmdW5jdGlvbigpe2xlYWZsZXRNYXAuZG91YmxlQ2xpY2tab29tLmRpc2FibGUoKX0pO2xlYWZsZXRNYXAuZWRpdFRvb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXRhYmxlOmRyYWdlbmQnLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2xlYWZsZXRNYXAuZG91YmxlQ2xpY2tab29tLmVuYWJsZSgpfSwwKX0pfWlmKHRoaXMuc2tldGNoKXtsZWFmbGV0TWFwLmVkaXRUb29scy5mZWF0dXJlc0xheWVyPWdlb2pzb25MYXllcn10aGlzLmZpcmUoJ2dlb2pzb24tZWRpdFRvb2xzLXJlYWR5Jyl9LF9nZXRTdHlsZTpmdW5jdGlvbiBfZ2V0U3R5bGUoZmVhdHVyZVByb3BlcnRpZXMsYXR0cmlidXRlUHJvcGVydGllcyl7cmV0dXJue3JhZGl1czpmZWF0dXJlUHJvcGVydGllcy5yYWRpdXN8fGF0dHJpYnV0ZVByb3BlcnRpZXMucmFkaXVzfHw1LGNvbG9yOmZlYXR1cmVQcm9wZXJ0aWVzLmNvbG9yfHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLmNvbG9yfHwnIzNFODdFOCcsZmlsbENvbG9yOmZlYXR1cmVQcm9wZXJ0aWVzLmZpbGxDb2xvcnx8YXR0cmlidXRlUHJvcGVydGllcy5maWxsQ29sb3J8fCcjODhCREU2Jyx3ZWlnaHQ6ZmVhdHVyZVByb3BlcnRpZXMud2VpZ2h0fHxhdHRyaWJ1dGVQcm9wZXJ0aWVzLndlaWdodHx8MixvcGFjaXR5OmZlYXR1cmVQcm9wZXJ0aWVzLm9wYWNpdHl8fGF0dHJpYnV0ZVByb3BlcnRpZXMub3BhY2l0eXx8MSxmaWxsT3BhY2l0eTpmZWF0dXJlUHJvcGVydGllcy5maWxsT3BhY2l0eXx8YXR0cmlidXRlUHJvcGVydGllcy5maWxsT3BhY2l0eXx8MC40fX0sX2JpbmRGZWF0dXJlUG9wdXBzOmZ1bmN0aW9uIF9iaW5kRmVhdHVyZVBvcHVwcygpe3ZhciBfdGhpczM9dGhpcztpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5lbGVtZW50SW5zdC5lYWNoTGF5ZXIoZnVuY3Rpb24obGF5ZXIpe3JldHVybiBfdGhpczMuX2JpbmRQb3B1cChsYXllci5mZWF0dXJlLGxheWVyKX0pfSxfYmluZFBvcHVwOmZ1bmN0aW9uIF9iaW5kUG9wdXAoZmVhdHVyZSxsYXllcil7dmFyIHBvcHVwRGF0YUtleXM9KDAsX2tleXMyLmRlZmF1bHQpKGZlYXR1cmUucHJvcGVydGllcykuZmlsdGVyKGZ1bmN0aW9uKGtleSl7cmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpJiZmZWF0dXJlLnByb3BlcnRpZXNba2V5XSE9PSd1bnNldCcmJmtleSE9PSdzdHlsZSd9KTtpZighcG9wdXBEYXRhS2V5cy5sZW5ndGgpcmV0dXJuO3ZhciBwb3B1cERhdGE9cG9wdXBEYXRhS2V5cy5yZWR1Y2UoZnVuY3Rpb24oYWNjdW0sa2V5KXthY2N1bVtrZXldPWZlYXR1cmUucHJvcGVydGllc1trZXldO3JldHVybiBhY2N1bX0se30pO3ZhciBwb3B1cD1uZXcgUHhNYXAuRGF0YVBvcHVwKHt0aXRsZTonRmVhdHVyZSBQcm9wZXJ0aWVzJyxkYXRhOnBvcHVwRGF0YSxhdXRvUGFuUGFkZGluZzpbMSwxXX0pO2xheWVyLmJpbmRQb3B1cChwb3B1cCl9LF91bmJpbmRGZWF0dXJlUG9wdXBzOmZ1bmN0aW9uIF91bmJpbmRGZWF0dXJlUG9wdXBzKCl7dmFyIF90aGlzND10aGlzO2lmKCF0aGlzLmVsZW1lbnRJbnN0KXJldHVybjt0aGlzLmVsZW1lbnRJbnN0LmVhY2hMYXllcihmdW5jdGlvbihsYXllcil7cmV0dXJuIF90aGlzNC5fdW5iaW5kUG9wdXAobGF5ZXIpfSl9LF91bmJpbmRQb3B1cDpmdW5jdGlvbiBfdW5iaW5kUG9wdXAobGF5ZXIpe2lmKHR5cGVvZiBsYXllci5nZXRQb3B1cCgpIT09J3VuZGVmaW5lZCcpe2xheWVyLnVuYmluZFBvcHVwKCl9fSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciBfdGhpczU9dGhpcztpZighKDAsX2tleXMyLmRlZmF1bHQpKG5leHRPcHRpb25zLmRhdGEpLmxlbmd0aCl7dGhpcy5lbGVtZW50SW5zdC5jbGVhckxheWVycygpfWVsc2UgaWYoKDAsX2tleXMyLmRlZmF1bHQpKG5leHRPcHRpb25zLmRhdGEpLmxlbmd0aCYmKGxhc3RPcHRpb25zLmRhdGFIYXNoIT09bmV4dE9wdGlvbnMuZGF0YUhhc2h8fGxhc3RPcHRpb25zLmZlYXR1cmVTdHlsZUhhc2ghPT1uZXh0T3B0aW9ucy5mZWF0dXJlU3R5bGVIYXNoKSl7dmFyIHN0eWxlQXR0cmlidXRlUHJvcGVydGllcz10aGlzLmdldEluc3RPcHRpb25zKCkuZmVhdHVyZVN0eWxlO3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKTt0aGlzLmVsZW1lbnRJbnN0Lm9wdGlvbnMuc3R5bGU9ZnVuY3Rpb24oZmVhdHVyZSl7dmFyIGZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcy5zdHlsZXx8e307cmV0dXJuIF90aGlzNS5fZ2V0U3R5bGUoZmVhdHVyZVByb3BlcnRpZXMsc3R5bGVBdHRyaWJ1dGVQcm9wZXJ0aWVzKX07dGhpcy5lbGVtZW50SW5zdC5hZGREYXRhKG5leHRPcHRpb25zLmRhdGEpO2lmKG5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl7dGhpcy5fYmluZEZlYXR1cmVQb3B1cHMoKX19ZWxzZSBpZihsYXN0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMhPT1uZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpe2lmKG5leHRPcHRpb25zLnNob3dGZWF0dXJlUHJvcGVydGllcyl0aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpO2lmKCFuZXh0T3B0aW9ucy5zaG93RmVhdHVyZVByb3BlcnRpZXMpdGhpcy5fdW5iaW5kRmVhdHVyZVBvcHVwcygpfWVsc2UgaWYobGFzdE9wdGlvbnMubWFya2VySWNvbk9wdGlvbnNIYXNoIT09bmV4dE9wdGlvbnMubWFya2VySWNvbk9wdGlvbnNIYXNoKXt0aGlzLmVsZW1lbnRJbnN0LnBvaW50VG9MYXllcj1mdW5jdGlvbihmZWF0dXJlLGxhdGxuZyl7dmFyIGljb25PcHRpb25zPW5leHRPcHRpb25zLm1hcmtlckljb25PcHRpb25zO2ljb25PcHRpb25zLmljb25TaXplPW5leHRPcHRpb25zLm1hcmtlckljb25PcHRpb25zLmljb25TaXplfHxbMTYsMTZdO2ljb25PcHRpb25zLmljb25BbmNob3I9bmV4dE9wdGlvbnMubWFya2VySWNvbk9wdGlvbnMuaWNvbkFuY2hvcnx8WzgsOF07aWNvbk9wdGlvbnMuaWNvblVybD1uZXh0T3B0aW9ucy5tYXJrZXJJY29uT3B0aW9ucy5pY29uU2l6ZXx8ZGVmYXVsdE1hcmtlckljb25VUkw7dmFyIG1hcmtlckljb249TC5pY29uKGljb25PcHRpb25zKTtyZXR1cm4gbmV3IEwuTWFya2VyKGxhdGxuZyx7aWNvbjptYXJrZXJJY29ufSl9O3RoaXMuZWxlbWVudEluc3QuY2xlYXJMYXllcnMoKTt0aGlzLmVsZW1lbnRJbnN0LmFkZERhdGEobmV4dE9wdGlvbnMuZGF0YSk7aWYobmV4dE9wdGlvbnMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzKXt0aGlzLl9iaW5kRmVhdHVyZVBvcHVwcygpfX1lbHNlIGlmKGxhc3RPcHRpb25zLnBhbmUuekluZGV4IT09bmV4dE9wdGlvbnMucGFuZS56SW5kZXgpe3RoaXMucGFyZW50Tm9kZS5lbGVtZW50SW5zdC5nZXRQYW5lKGN1c3RvbVBhbmVOYW1lKS5zdHlsZS56SW5kZXg9bmV4dE9wdGlvbnMucGFuZS56SW5kZXh9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3JldHVybntkYXRhOnRoaXMuZGF0YXx8e30sZGF0YUhhc2g6KDAsX3N0cmluZ2lmeTIuZGVmYXVsdCkodGhpcy5kYXRhfHx7fSksZmVhdHVyZVN0eWxlOnRoaXMuZmVhdHVyZVN0eWxlfHx7fSxmZWF0dXJlU3R5bGVIYXNoOigwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMuZmVhdHVyZVN0eWxlfHx7fSksZmVhdHVyZVNWRzp0aGlzLmZlYXR1cmVTdmcsbWFya2VySWNvbk9wdGlvbnM6dGhpcy5tYXJrZXJJY29uT3B0aW9uc3x8e30sbWFya2VySWNvbk9wdGlvbnNIYXNoOigwLF9zdHJpbmdpZnkyLmRlZmF1bHQpKHRoaXMubWFya2VySWNvbk9wdGlvbnN8fHt9KSxwYW5lOnRoaXMucGFuZXx8e30sc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzOnRoaXMuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzfX0sX2hhbmRsZUZlYXR1cmVBZGRlZDpmdW5jdGlvbiBfaGFuZGxlRmVhdHVyZUFkZGVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9uKCdjbGljaycsdGhpcy5faGFuZGxlRmVhdHVyZVRhcHBlZC5iaW5kKHRoaXMpKTtldnQubGF5ZXIub24oJ3BvcHVwb3BlbicsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkLmJpbmQodGhpcykpO2V2dC5sYXllci5vbigncG9wdXBjbG9zZScsdGhpcy5faGFuZGxlRmVhdHVyZVBvcHVwQ2xvc2VkLmJpbmQodGhpcykpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLWFkZGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVSZW1vdmVkKGV2dCl7aWYoIWV2dHx8IWV2dC5sYXllcilyZXR1cm47ZXZ0LmxheWVyLm9mZigpO3ZhciBkZXRhaWw9e307aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LmxheWVyLmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXJlbW92ZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlVGFwcGVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlVGFwcGVkKGV2dCl7dmFyIGRldGFpbD17fTtpZihldnQudGFyZ2V0JiZldnQudGFyZ2V0LmZlYXR1cmUpe2RldGFpbC5mZWF0dXJlPWV2dC50YXJnZXQuZmVhdHVyZX10aGlzLmZpcmUoJ3B4LW1hcC1sYXllci1nZW9qc29uLWZlYXR1cmUtdGFwcGVkJyxkZXRhaWwpfSxfaGFuZGxlRmVhdHVyZVBvcHVwT3BlbmVkOmZ1bmN0aW9uIF9oYW5kbGVGZWF0dXJlUG9wdXBPcGVuZWQoZXZ0KXt2YXIgZGV0YWlsPXt9O2lmKGV2dC50YXJnZXQmJmV2dC50YXJnZXQuZmVhdHVyZSl7ZGV0YWlsLmZlYXR1cmU9ZXZ0LnRhcmdldC5mZWF0dXJlfXRoaXMuZmlyZSgncHgtbWFwLWxheWVyLWdlb2pzb24tZmVhdHVyZS1wb3B1cC1vcGVuZWQnLGRldGFpbCl9LF9oYW5kbGVGZWF0dXJlUG9wdXBDbG9zZWQ6ZnVuY3Rpb24gX2hhbmRsZUZlYXR1cmVQb3B1cENsb3NlZChldnQpe3ZhciBkZXRhaWw9e307aWYoZXZ0LnRhcmdldCYmZXZ0LnRhcmdldC5mZWF0dXJlKXtkZXRhaWwuZmVhdHVyZT1ldnQudGFyZ2V0LmZlYXR1cmV9dGhpcy5maXJlKCdweC1tYXAtbGF5ZXItZ2VvanNvbi1mZWF0dXJlLXBvcHVwLWNsb3NlZCcsZGV0YWlsKX19O1B4TWFwQmVoYXZpb3IuR2VvSlNPTkxheWVyPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuR2VvSlNPTkxheWVySW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiOjMsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjoxMCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjoyMn1dLDE0OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO3ZhciBfZ2V0SXRlcmF0b3IzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5MYXllckltcGw9e2F0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5ub3RpZnlJbnN0UmVhZHkodGhpcy5jYW5BZGRJbnN0KCkpfSxkZXRhY2hlZDpmdW5jdGlvbiBkZXRhY2hlZCgpe3RoaXMuc2hvdWxkUmVtb3ZlSW5zdCgpfSxzaG91bGRBZGRJbnN0OmZ1bmN0aW9uIHNob3VsZEFkZEluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZEFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCYmcGFyZW50KXt0aGlzLmFkZEluc3QocGFyZW50KX07fSxzaG91bGRSZW1vdmVJbnN0OmZ1bmN0aW9uIHNob3VsZFJlbW92ZUluc3QocGFyZW50KXtQeE1hcEJlaGF2aW9yLkVsZW1lbnRJbXBsLnNob3VsZFJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCk7aWYodGhpcy5lbGVtZW50SW5zdCl7dGhpcy5yZW1vdmVJbnN0KHBhcmVudD9wYXJlbnQ6dW5kZWZpbmVkKX07fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXtwYXJlbnQuYWRkTGF5ZXIodGhpcy5lbGVtZW50SW5zdCl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe3RoaXMuZWxlbWVudEluc3QucmVtb3ZlKCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0cnVlfX07UHhNYXBCZWhhdmlvci5MYXllcj1bUHhNYXBCZWhhdmlvci5FbGVtZW50LFB4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsXTtQeE1hcEJlaGF2aW9yLlBhcmVudExheWVySW1wbD17bGlzdGVuZXJzOnsncHgtbWFwLWVsZW1lbnQtaW5zdGFuY2UtY3JlYXRlZCc6J190cnlUb0FkZEFsbENoaWxkcmVuJywncHgtbWFwLWVsZW1lbnQtcmVhZHktdG8tYWRkJzonX3RyeVRvQWRkT25lQ2hpbGQnfSxjcmVhdGVkOmZ1bmN0aW9uIGNyZWF0ZWQoKXt0aGlzLl9hdHRhY2hlZENoaWxkcmVuPXRoaXMuX2F0dGFjaGVkQ2hpbGRyZW58fG5ldyBfd2Vha01hcDIuZGVmYXVsdH0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLl9kZXRhY2hMYXllckNoaWxkcmVuKCl9LF90cnlUb0FkZEFsbENoaWxkcmVuOmZ1bmN0aW9uIF90cnlUb0FkZEFsbENoaWxkcmVuKGV2dCl7dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7aWYoIXRoaXMuZWxlbWVudEluc3R8fGxvY2FsRXZ0LnJvb3RUYXJnZXQhPT10aGlzKXJldHVybjt0aGlzLl9hdHRhY2hMYXllckNoaWxkcmVuKCl9LF90cnlUb0FkZE9uZUNoaWxkOmZ1bmN0aW9uIF90cnlUb0FkZE9uZUNoaWxkKGV2dCl7dmFyIGxvY2FsRXZ0PVBvbHltZXIuZG9tKGV2dCk7aWYobG9jYWxFdnQucm9vdFRhcmdldD09PXRoaXMpcmV0dXJuO2V2dC5zdG9wUHJvcGFnYXRpb24oKTtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dGhpcy5fYXR0YWNoTGF5ZXJDaGlsZChsb2NhbEV2dC5yb290VGFyZ2V0KX0sX2F0dGFjaExheWVyQ2hpbGRyZW46ZnVuY3Rpb24gX2F0dGFjaExheWVyQ2hpbGRyZW4oKXt2YXIgY2hpbGRyZW49dGhpcy5nZXRFZmZlY3RpdmVDaGlsZHJlbigpO2lmKCFjaGlsZHJlbnx8IWNoaWxkcmVuLmxlbmd0aClyZXR1cm47dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3I9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShjaGlsZHJlbiksX3N0ZXA7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPShfc3RlcD1faXRlcmF0b3IubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uPXRydWUpe3ZhciBjaGlsZD1fc3RlcC52YWx1ZTt0aGlzLl9hdHRhY2hMYXllckNoaWxkKGNoaWxkKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcj10cnVlO19pdGVyYXRvckVycm9yPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiYmX2l0ZXJhdG9yLnJldHVybil7X2l0ZXJhdG9yLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yKXt0aHJvdyBfaXRlcmF0b3JFcnJvcn19fX0sX2F0dGFjaExheWVyQ2hpbGQ6ZnVuY3Rpb24gX2F0dGFjaExheWVyQ2hpbGQoY2hpbGRFbCl7dmFyIF90aGlzPXRoaXM7aWYodGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5oYXMoY2hpbGRFbCl8fCFjaGlsZEVsLnNob3VsZEFkZEluc3R8fCFjaGlsZEVsLmNhbkFkZEluc3R8fCFjaGlsZEVsLmNhbkFkZEluc3QoKSlyZXR1cm47dGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5zZXQoY2hpbGRFbCx0cnVlKTt0aGlzLmFzeW5jKGZ1bmN0aW9uKCl7Y2hpbGRFbC5zaG91bGRBZGRJbnN0KF90aGlzLmVsZW1lbnRJbnN0KX0pfSxfZGV0YWNoTGF5ZXJDaGlsZHJlbjpmdW5jdGlvbiBfZGV0YWNoTGF5ZXJDaGlsZHJlbigpe3ZhciBjaGlsZHJlbj10aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKCk7aWYoIWNoaWxkcmVufHwhY2hpbGRyZW4ubGVuZ3RoKXJldHVybjt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcjI9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcjI9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShjaGlsZHJlbiksX3N0ZXAyOyEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9KF9zdGVwMj1faXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZSl7dmFyIGNoaWxkPV9zdGVwMi52YWx1ZTt0aGlzLl9kZXRhY2hMYXllckNoaWxkKGNoaWxkKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcjI9dHJ1ZTtfaXRlcmF0b3JFcnJvcjI9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiYmX2l0ZXJhdG9yMi5yZXR1cm4pe19pdGVyYXRvcjIucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3IyKXt0aHJvdyBfaXRlcmF0b3JFcnJvcjJ9fX19LF9kZXRhY2hMYXllckNoaWxkOmZ1bmN0aW9uIF9kZXRhY2hMYXllckNoaWxkKGNoaWxkRWwpe3ZhciBfdGhpczI9dGhpcztpZighdGhpcy5fYXR0YWNoZWRDaGlsZHJlbi5oYXMoY2hpbGRFbCl8fCFjaGlsZEVsLnNob3VsZFJlbW92ZUluc3QpcmV0dXJuO3RoaXMuX2F0dGFjaGVkQ2hpbGRyZW4uZGVsZXRlKGNoaWxkRWwpO3RoaXMuYXN5bmMoZnVuY3Rpb24oKXtjaGlsZEVsLnNob3VsZFJlbW92ZUluc3QoX3RoaXMyLmVsZW1lbnRJbnN0KX0pfX07UHhNYXBCZWhhdmlvci5QYXJlbnRMYXllcj1bUHhNYXBCZWhhdmlvci5QYXJlbnRMYXllckltcGxdfSkoKTtcblxufSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcFwiOjE1fV0sMTUwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTt2YXIgX3NsaWNlZFRvQXJyYXkyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7dmFyIF9zbGljZWRUb0FycmF5Mz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7dmFyIF9zdHJpbmdpZnk9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7dmFyIF9zdHJpbmdpZnkyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7dmFyIF93ZWFrTWFwPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy93ZWFrLW1hcCcpO3ZhciBfd2Vha01hcDI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2Vha01hcCk7dmFyIF90eXBlb2YyPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTt2YXIgX3R5cGVvZjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7dmFyIF9nZXRJdGVyYXRvcjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO3ZhciBfZ2V0SXRlcmF0b3IzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7dmFyIF9zZXQ9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldCcpO3ZhciBfc2V0Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXQpO3ZhciBfYXNzaWduPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7dmFyIF9hc3NpZ24yPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5NYXJrZXJHcm91cEltcGw9e3Byb3BlcnRpZXM6e25hbWU6e3R5cGU6U3RyaW5nLG5vdGlmeTp0cnVlfSxkYXRhOnt0eXBlOk9iamVjdCxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGNvbG9yc0J5VHlwZTp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57J3Vua25vd24nOnRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCctLWludGVybmFsLXB4LW1hcC1pY29uLXVua25vd24tY29sb3InKSwnaW5mbyc6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLWljb24taW5mby1jb2xvcicpLCd3YXJuaW5nJzp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtaWNvbi13YXJuaW5nLWNvbG9yJyksJ2ltcG9ydGFudCc6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLWljb24taW1wb3J0YW50LWNvbG9yJyl9fX0saWNvbkZuczp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57Y2x1c3Rlcjp1bmRlZmluZWQsbWFya2VyOnVuZGVmaW5lZH19fSxjbHVzdGVyQ29uZmlnOnt0eXBlOk9iamVjdH19LHVwZGF0ZTpmdW5jdGlvbiB1cGRhdGUoKXtpZighdGhpcy5lbGVtZW50SW5zdClyZXR1cm47dmFyIF9nZXRJbnN0T3B0aW9ucz10aGlzLmdldEluc3RPcHRpb25zKCksZGF0YT1fZ2V0SW5zdE9wdGlvbnMuZGF0YTt2YXIgZmVhdHVyZXM9dGhpcy5fc3luY0RhdGFXaXRoTWFya2VycyhkYXRhLmZlYXR1cmVzLHRoaXMuZWxlbWVudEluc3QpO3RoaXMuX25vdGlmeU5ld0ZlYXR1cmVzKGZlYXR1cmVzKX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7dmFyIHNwaWRlcmlmeUZuPXRoaXMuX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnkuYmluZCh0aGlzKTt2YXIgdW5zcGlkZXJpZnlGbj10aGlzLl9oYW5kbGVDbHVzdGVyVW5zcGlkZXJpZnkuYmluZCh0aGlzKTt2YXIgbWFya2VyVGFwRm49dGhpcy5faGFuZGxlU2luZ2xlTWFya2VyVGFwLmJpbmQodGhpcyk7dmFyIG1hcmtlckRvdWJsZUNsaWNrRm49dGhpcy5faGFuZGxlU2luZ2xlTWFya2VyRG91YmxlQ2xpY2suYmluZCh0aGlzKTt2YXIgY2x1c3RlclRhcEZuPXRoaXMuX2hhbmRsZUNsdXN0ZXJUYXAuYmluZCh0aGlzKTt0aGlzLmJpbmRFdmVudHMoeydzcGlkZXJmaWVkJzpzcGlkZXJpZnlGbiwndW5zcGlkZXJmaWVkJzp1bnNwaWRlcmlmeUZuLCdjbGljayc6bWFya2VyVGFwRm4sJ2RibGNsaWNrJzptYXJrZXJEb3VibGVDbGlja0ZuLCdjbHVzdGVyY2xpY2snOmNsdXN0ZXJUYXBGbn0pO1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCk7dGhpcy5hc3luYyhmdW5jdGlvbigpe3RoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1ncm91cC1hZGRlZCcpfSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLnJlbW92ZUluc3QuY2FsbCh0aGlzLHBhcmVudCl9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdCgpe3ZhciBvcHRpb25zPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt2YXIgY2x1c3Rlcj1MLm1hcmtlckNsdXN0ZXJHcm91cChvcHRpb25zKTtpZihvcHRpb25zLmRhdGEpe3ZhciBmZWF0dXJlcz10aGlzLl9zeW5jRGF0YVdpdGhNYXJrZXJzKG9wdGlvbnMuZGF0YS5mZWF0dXJlcyxjbHVzdGVyKTt0aGlzLl9ub3RpZnlOZXdGZWF0dXJlcyhmZWF0dXJlcyl9cmV0dXJuIGNsdXN0ZXJ9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7aWYobmV4dE9wdGlvbnMuZGF0YSl7dmFyIGZlYXR1cmVzPXRoaXMuX3N5bmNEYXRhV2l0aE1hcmtlcnMobmV4dE9wdGlvbnMuZGF0YS5mZWF0dXJlcyx0aGlzLmVsZW1lbnRJbnN0KTt0aGlzLl9ub3RpZnlOZXdGZWF0dXJlcyhmZWF0dXJlcyl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBkZWZhdWx0T3B0aW9ucz17c2hvd0NvdmVyYWdlT25Ib3Zlcjp0cnVlLG1heENsdXN0ZXJSYWRpdXM6MTUwLHNwaWRlcmlmeU9uTWF4Wm9vbTp0cnVlLHJlbW92ZU91dHNpZGVWaXNpYmxlQm91bmRzOnRydWUsYW5pbWF0ZTp0cnVlLHBvbHlnb25PcHRpb25zOntzdHJva2U6dHJ1ZSxjb2xvcjp0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWdyb3VwLWNsdXN0ZXItcG9seWdvbi1zdHJva2UtY29sb3InKSxmaWxsQ29sb3I6dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLXBvbHlnb24tZmlsbC1jb2xvcicpLGZpbGxPcGFjaXR5OjAuNH19O3ZhciBvcHRpb25zPSgwLF9hc3NpZ24yLmRlZmF1bHQpKGRlZmF1bHRPcHRpb25zLHRoaXMuY2x1c3RlckNvbmZpZ3x8e30pO29wdGlvbnMuZGF0YT10aGlzLl9nZXRWYWxpZERhdGEoKTtvcHRpb25zLmljb25DcmVhdGVGdW5jdGlvbj10aGlzLl9jcmVhdGVDbHVzdGVySWNvbi5iaW5kKHRoaXMpO3JldHVybiBvcHRpb25zfSxfbm90aWZ5TmV3RmVhdHVyZXM6ZnVuY3Rpb24gX25vdGlmeU5ld0ZlYXR1cmVzKGZlYXR1cmVTZXQpe2lmKCFmZWF0dXJlU2V0fHwhKGZlYXR1cmVTZXQgaW5zdGFuY2VvZiBfc2V0Mi5kZWZhdWx0KXx8IWZlYXR1cmVTZXQuc2l6ZSlyZXR1cm47dGhpcy5hc3luYyhmdW5jdGlvbiBfbm90aWZ5TmV3RmVhdHVyZXNEZWJvdW5jZSgpe3ZhciBib3VuZHM9TC5sYXRMbmdCb3VuZHMoKTt2YXIgZmVhdHVyZT12b2lkIDA7dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3I9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShmZWF0dXJlU2V0KSxfc3RlcDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249KF9zdGVwPV9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZSl7ZmVhdHVyZT1fc3RlcC52YWx1ZTtib3VuZHMuZXh0ZW5kKFtmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF1dKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcj10cnVlO19pdGVyYXRvckVycm9yPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiYmX2l0ZXJhdG9yLnJldHVybil7X2l0ZXJhdG9yLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yKXt0aHJvdyBfaXRlcmF0b3JFcnJvcn19fXRoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1ncm91cC1mZWF0dXJlcy1jaGFuZ2VkJyx7Ym91bmRzOmJvdW5kc30pfSwxKX0sX2dldFZhbGlkRGF0YTpmdW5jdGlvbiBfZ2V0VmFsaWREYXRhKCl7aWYoIXRoaXMuZGF0YSl7cmV0dXJuIHVuZGVmaW5lZH12YXIgZGF0YUlzTm90VmFsaWQ9KDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKSE9PSdvYmplY3QnfHx0aGlzLmRhdGEudHlwZSE9PSdGZWF0dXJlQ29sbGVjdGlvbid8fCFBcnJheS5pc0FycmF5KHRoaXMuZGF0YS5mZWF0dXJlcyl8fCF0aGlzLmRhdGEuZmVhdHVyZXMubGVuZ3RofHwoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEuZmVhdHVyZXNbMF0pIT09J29iamVjdCc7aWYoZGF0YUlzTm90VmFsaWQpe2NvbnNvbGUubG9nKCdQWC1NQVAgQ09ORklHVVJBVElPTiBFUlJPUjpcXG4gICAgICAgICAgVGhlIGBkYXRhYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnIGlzIG5vdCB2YWxpZCBHZW9KU09OLiBWYWxpZCBHZW9KU09OXFxuICAgICAgICAgIHRoYXQgZm9sbG93cyB0aGUgRmVhdHVyZUNvbGxlY3Rpb24gc3RhbmRhcmQgaXMgcmVxdWlyZWQgdG8gZHJhdyB0aGVcXG4gICAgICAgICAgbWFya2VyIGNsdXN0ZXJzLiBTZWUgdGhlIEdlb0pTT04gc3BlYyB3ZWJzaXRlIChodHRwOi8vZ2VvanNvbi5vcmcvZ2VvanNvbi1zcGVjLmh0bWwpXFxuICAgICAgICAgIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQgaXMgcmVxdWlyZWQuXFxuXFxuICAgICAgICAgIFRoZSBtaW5pbXVtIHJlcXVpcmVtZW50cyBmb3IgJyt0aGlzLmlzKycgYXJlOlxcbiAgICAgICAgICAtIE11c3QgYmUgYSB2YWxpZCBKYXZhU2NyaXB0IG9iamVjdCAob3IgZGVzZXJpYWxpemFibGUgdG8gYW4gb2JqZWN0KVxcbiAgICAgICAgICAtIE11c3QgaGF2ZSBrZXkgYHR5cGVgIHdpdGggdmFsdWUgXFwnRmVhdHVyZUNvbGxlY3Rpb25cXCdcXG4gICAgICAgICAgLSBNdXN0IGhhdmUga2V5IGBmZWF0dXJlc2Agd2l0aCB2YWx1ZSBvZiBhbiBhcnJheSB3aXRoIGxlbmd0aFxcbiAgICAgICAgICAtIEVhY2ggZW50cnkgaW4gYGZlYXR1cmVzYCBtdXN0IGJlIGEgdmFsaWQgb2JqZWN0XFxuICAgICAgICAnKTtyZXR1cm4gdW5kZWZpbmVkfXJldHVybiB0aGlzLmRhdGF9LF9jcmVhdGVDbHVzdGVySWNvbjpmdW5jdGlvbiBfY3JlYXRlQ2x1c3Rlckljb24oY2x1c3Rlcil7aWYodGhpcy5pY29uRm5zLmNsdXN0ZXIpe3JldHVybiB0aGlzLmljb25GbnMuY2x1c3Rlci5jYWxsKHRoaXMsY2x1c3Rlcil9dmFyIG1hcmtlcnM9Y2x1c3Rlci5nZXRBbGxDaGlsZE1hcmtlcnMoKTt2YXIgY291bnQ9bWFya2Vycy5sZW5ndGg7dmFyIHR5cGVzPXRoaXMuX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGUobWFya2Vycyk7dmFyIGNvbG9ycz10aGlzLmNvbG9yc0J5VHlwZTt2YXIgY29udGFpbmVyU2l6ZT10aGlzLl9nZXRDbHVzdGVySWNvblNpemUoY291bnQpO3ZhciBwYXRoU2l6ZT10aGlzLl9nZXRTdHlsZVZhbHVlQXNOdW0oJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLXBhdGgtc2l6ZScpfHwxMDt2YXIgYm9yZGVyU2l6ZT10aGlzLl9nZXRTdHlsZVZhbHVlQXNOdW0oJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1ncm91cC1jbHVzdGVyLWJvcmRlci1zaXplJyl8fDA7dmFyIG9wdGlvbnM9e2NvdW50OmNvdW50LGNvdW50QnlUeXBlOnR5cGVzLGNvbG9yc0J5VHlwZTpjb2xvcnMsY29udGFpbmVyU2l6ZTpjb250YWluZXJTaXplLHBhdGhTaXplOnBhdGhTaXplLGJvcmRlclNpemU6Ym9yZGVyU2l6ZSxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH07cmV0dXJuIG5ldyBQeE1hcC5DbHVzdGVySWNvbihvcHRpb25zKX0sX2dldFN0eWxlVmFsdWVBc051bTpmdW5jdGlvbiBfZ2V0U3R5bGVWYWx1ZUFzTnVtKHN0eWxlVmFsTmFtZSl7dGhpcy5fX3N0eWxlVmFscz10aGlzLl9fc3R5bGVWYWxzfHx7fTtpZih0aGlzLl9fc3R5bGVWYWxzW3N0eWxlVmFsTmFtZV0pcmV0dXJuIHRoaXMuX19zdHlsZVZhbHNbc3R5bGVWYWxOYW1lXTt2YXIgY29tcHV0ZWRWYWw9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoc3R5bGVWYWxOYW1lKTtpZihjb21wdXRlZFZhbCYmY29tcHV0ZWRWYWwuaW5kZXhPZigncHgnKSE9PS0xKXt2YXIgdmFsV2l0aG91dFN1ZmZpeD1jb21wdXRlZFZhbC5yZXBsYWNlKCdweCcsJycpO3ZhciB2YWxBc051bT1NYXRoLmZsb29yKHZhbFdpdGhvdXRTdWZmaXgpO3RoaXMuX19zdHlsZVZhbHNbc3R5bGVWYWxOYW1lXT12YWxBc051bTtyZXR1cm4gdmFsQXNOdW19ZWxzZXtyZXR1cm4gdW5kZWZpbmVkfX0sX2dldENsdXN0ZXJJY29uU2l6ZTpmdW5jdGlvbiBfZ2V0Q2x1c3Rlckljb25TaXplKGNvdW50KXtpZihjb3VudDwxMCl7cmV0dXJuIDYwfWlmKGNvdW50Pj0xMCYmY291bnQ8NDApe3JldHVybiA3NX1pZihjb3VudD40MCl7cmV0dXJuIDkwfX0sX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGU6ZnVuY3Rpb24gX2luZGV4Q2x1c3Rlck1hcmtlcnNCeVR5cGUobWFya2Vycyl7cmV0dXJuIG1hcmtlcnMucmVkdWNlKGZ1bmN0aW9uKHR5cGVzLG1hcmtlcil7aWYobWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzJiZtYXJrZXIuZmVhdHVyZVByb3BlcnRpZXNbJ21hcmtlci1pY29uJ10mJm1hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXVsnaWNvbi10eXBlJ10pe3R5cGVzW21hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLWljb24nXVsnaWNvbi10eXBlJ11dPSh0eXBlc1ttYXJrZXIuZmVhdHVyZVByb3BlcnRpZXNbJ21hcmtlci1pY29uJ11bJ2ljb24tdHlwZSddXXx8MCkrMX1yZXR1cm4gdHlwZXN9LHt9KX0sX3N5bmNEYXRhV2l0aE1hcmtlcnM6ZnVuY3Rpb24gX3N5bmNEYXRhV2l0aE1hcmtlcnMobmV3RmVhdHVyZXMsY2x1c3Rlckluc3Qpe2lmKCFuZXdGZWF0dXJlcy5sZW5ndGgpcmV0dXJuO3ZhciBmZWF0dXJlc1NldD10aGlzLl9mZWF0dXJlcz10aGlzLl9mZWF0dXJlc3x8bmV3IF9zZXQyLmRlZmF1bHQ7dmFyIG1hcmtlcnNNYXA9dGhpcy5fbWFya2Vycz10aGlzLl9tYXJrZXJzfHxuZXcgX3dlYWtNYXAyLmRlZmF1bHQ7dmFyIF9kaWZmTmV3RmVhdHVyZXM9dGhpcy5fZGlmZk5ld0ZlYXR1cmVzKG5ld0ZlYXR1cmVzLGZlYXR1cmVzU2V0LG1hcmtlcnNNYXApLGZlYXR1cmVzVG9BZGQ9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvQWRkLGZlYXR1cmVzVG9VcGRhdGU9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvVXBkYXRlLGZlYXR1cmVzVG9SZW1vdmU9X2RpZmZOZXdGZWF0dXJlcy5mZWF0dXJlc1RvUmVtb3ZlLG5leHRGZWF0dXJlc1NldD1fZGlmZk5ld0ZlYXR1cmVzLm5leHRGZWF0dXJlc1NldCxuZXh0TWFya2Vyc01hcD1fZGlmZk5ld0ZlYXR1cmVzLm5leHRNYXJrZXJzTWFwO3ZhciBmZWF0dXJlPXZvaWQgMCxjYWNoZWRNYXJrZXI9dm9pZCAwLG1hcmtlcnNUb09wZXJhdGU9dm9pZCAwO2lmKGZlYXR1cmVzVG9BZGQuc2l6ZSl7bWFya2Vyc1RvT3BlcmF0ZT1bXTt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjI9dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyPWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcjI9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcjI9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShmZWF0dXJlc1RvQWRkKSxfc3RlcDI7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj0oX3N0ZXAyPV9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMj10cnVlKXtmZWF0dXJlPV9zdGVwMi52YWx1ZTtjYWNoZWRNYXJrZXI9bmV4dE1hcmtlcnNNYXAuZ2V0KGZlYXR1cmUpO2NhY2hlZE1hcmtlci5tYXJrZXI9dGhpcy5fY3JlYXRlTWFya2VyKGZlYXR1cmUpO21hcmtlcnNUb09wZXJhdGUucHVzaChjYWNoZWRNYXJrZXIubWFya2VyKTtuZXh0TWFya2Vyc01hcC5zZXQoZmVhdHVyZSxjYWNoZWRNYXJrZXIpfX1jYXRjaChlcnIpe19kaWRJdGVyYXRvckVycm9yMj10cnVlO19pdGVyYXRvckVycm9yMj1lcnJ9ZmluYWxseXt0cnl7aWYoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yJiZfaXRlcmF0b3IyLnJldHVybil7X2l0ZXJhdG9yMi5yZXR1cm4oKX19ZmluYWxseXtpZihfZGlkSXRlcmF0b3JFcnJvcjIpe3Rocm93IF9pdGVyYXRvckVycm9yMn19fWNsdXN0ZXJJbnN0LmFkZExheWVycyhtYXJrZXJzVG9PcGVyYXRlKTttYXJrZXJzVG9PcGVyYXRlPW51bGx9aWYoZmVhdHVyZXNUb1VwZGF0ZS5zaXplKXttYXJrZXJzVG9PcGVyYXRlPVtdO3ZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMz10cnVlO3ZhciBfZGlkSXRlcmF0b3JFcnJvcjM9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yMz11bmRlZmluZWQ7dHJ5e2Zvcih2YXIgX2l0ZXJhdG9yMz0oMCxfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGZlYXR1cmVzVG9VcGRhdGUpLF9zdGVwMzshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zPShfc3RlcDM9X2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zPXRydWUpe2ZlYXR1cmU9X3N0ZXAzLnZhbHVlO2NhY2hlZE1hcmtlcj1uZXh0TWFya2Vyc01hcC5nZXQoZmVhdHVyZSk7Y2FjaGVkTWFya2VyLm1hcmtlcj10aGlzLl91cGRhdGVNYXJrZXIoZmVhdHVyZSxjYWNoZWRNYXJrZXIubWFya2VyKTttYXJrZXJzVG9PcGVyYXRlLnB1c2goY2FjaGVkTWFya2VyLm1hcmtlcik7bmV4dE1hcmtlcnNNYXAuc2V0KGZlYXR1cmUsY2FjaGVkTWFya2VyKX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcjM9dHJ1ZTtfaXRlcmF0b3JFcnJvcjM9ZXJyfWZpbmFsbHl7dHJ5e2lmKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyYmX2l0ZXJhdG9yMy5yZXR1cm4pe19pdGVyYXRvcjMucmV0dXJuKCl9fWZpbmFsbHl7aWYoX2RpZEl0ZXJhdG9yRXJyb3IzKXt0aHJvdyBfaXRlcmF0b3JFcnJvcjN9fX1jbHVzdGVySW5zdC5yZWZyZXNoQ2x1c3RlcnMobWFya2Vyc1RvT3BlcmF0ZSk7bWFya2Vyc1RvT3BlcmF0ZT1udWxsfWlmKGZlYXR1cmVzVG9SZW1vdmUuc2l6ZSl7bWFya2Vyc1RvT3BlcmF0ZT1bXTt2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQ9dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0PWZhbHNlO3ZhciBfaXRlcmF0b3JFcnJvcjQ9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pdGVyYXRvcjQ9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShmZWF0dXJlc1RvUmVtb3ZlKSxfc3RlcDQ7IShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uND0oX3N0ZXA0PV9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTtfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uND10cnVlKXtmZWF0dXJlPV9zdGVwNC52YWx1ZTtjYWNoZWRNYXJrZXI9bmV4dE1hcmtlcnNNYXAuZ2V0KGZlYXR1cmUpO21hcmtlcnNUb09wZXJhdGUucHVzaChjYWNoZWRNYXJrZXIubWFya2VyKTtuZXh0TWFya2Vyc01hcC5kZWxldGUoZmVhdHVyZSl9fWNhdGNoKGVycil7X2RpZEl0ZXJhdG9yRXJyb3I0PXRydWU7X2l0ZXJhdG9yRXJyb3I0PWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQmJl9pdGVyYXRvcjQucmV0dXJuKXtfaXRlcmF0b3I0LnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yNCl7dGhyb3cgX2l0ZXJhdG9yRXJyb3I0fX19Y2x1c3Rlckluc3QucmVtb3ZlTGF5ZXJzKG1hcmtlcnNUb09wZXJhdGUpO21hcmtlcnNUb09wZXJhdGU9bnVsbH10aGlzLl9mZWF0dXJlcz1uZXh0RmVhdHVyZXNTZXQ7dGhpcy5fbWFya2Vycz1uZXh0TWFya2Vyc01hcDtmZWF0dXJlc1NldC5jbGVhcigpO2ZlYXR1cmVzVG9BZGQuY2xlYXIoKTtmZWF0dXJlc1RvVXBkYXRlLmNsZWFyKCk7ZmVhdHVyZXNUb1JlbW92ZS5jbGVhcigpO3JldHVybiB0aGlzLl9mZWF0dXJlc30sX2RpZmZOZXdGZWF0dXJlczpmdW5jdGlvbiBfZGlmZk5ld0ZlYXR1cmVzKG5ld0ZlYXR1cmVzLGxhc3RGZWF0dXJlU2V0LG1hcmtlck1hcCl7dmFyIG5leHRGZWF0dXJlc1NldD1uZXcgX3NldDIuZGVmYXVsdDt2YXIgZmVhdHVyZXNUb0FkZD1uZXcgX3NldDIuZGVmYXVsdDt2YXIgZmVhdHVyZXNUb1VwZGF0ZT1uZXcgX3NldDIuZGVmYXVsdDt2YXIgaT12b2lkIDAsbGVuPXZvaWQgMCx2YWxpZD12b2lkIDAsa25vd249dm9pZCAwLGNhY2hlZE1hcmtlcj12b2lkIDAsZmVhdHVyZUhhc2g9dm9pZCAwO2ZvcihpPTAsbGVuPW5ld0ZlYXR1cmVzLmxlbmd0aDtpPGxlbjtpKyspe3ZhbGlkPW5ld0ZlYXR1cmVzW2ldLmlkJiZuZXdGZWF0dXJlc1tpXS5nZW9tZXRyeSYmbmV3RmVhdHVyZXNbaV0uZ2VvbWV0cnkudHlwZT09PSdQb2ludCcmJm5ld0ZlYXR1cmVzW2ldLmdlb21ldHJ5LmNvb3JkaW5hdGVzIGluc3RhbmNlb2YgQXJyYXkmJm5ld0ZlYXR1cmVzW2ldLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aD09PTI7aWYoIXZhbGlkKWNvbnRpbnVlO2tub3duPWxhc3RGZWF0dXJlU2V0LmhhcyhuZXdGZWF0dXJlc1tpXSk7aWYoIWtub3duKXtmZWF0dXJlc1RvQWRkLmFkZChuZXdGZWF0dXJlc1tpXSk7bGFzdEZlYXR1cmVTZXQuZGVsZXRlKG5ld0ZlYXR1cmVzW2ldKTtuZXh0RmVhdHVyZXNTZXQuYWRkKG5ld0ZlYXR1cmVzW2ldKTtjYWNoZWRNYXJrZXI9e21hcmtlcjpudWxsLGhhc2g6KDAsX3N0cmluZ2lmeTIuZGVmYXVsdCkobmV3RmVhdHVyZXNbaV0pfTttYXJrZXJNYXAuc2V0KG5ld0ZlYXR1cmVzW2ldLGNhY2hlZE1hcmtlcik7Y29udGludWV9aWYoa25vd24pe2NhY2hlZE1hcmtlcj1tYXJrZXJNYXAuZ2V0KG5ld0ZlYXR1cmVzW2ldKTtmZWF0dXJlSGFzaD0oMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KShuZXdGZWF0dXJlc1tpXSk7aWYoY2FjaGVkTWFya2VyLmhhc2ghPT1mZWF0dXJlSGFzaCl7ZmVhdHVyZXNUb1VwZGF0ZS5hZGQobmV3RmVhdHVyZXNbaV0pO2NhY2hlZE1hcmtlci5oYXNoPWZlYXR1cmVIYXNoO21hcmtlck1hcC5zZXQobmV3RmVhdHVyZXNbaV0sY2FjaGVkTWFya2VyKX1sYXN0RmVhdHVyZVNldC5kZWxldGUobmV3RmVhdHVyZXNbaV0pO25leHRGZWF0dXJlc1NldC5hZGQobmV3RmVhdHVyZXNbaV0pfX12YXIgZmVhdHVyZXNUb1JlbW92ZT1sYXN0RmVhdHVyZVNldC5zaXplP2xhc3RGZWF0dXJlU2V0Om5ldyBfc2V0Mi5kZWZhdWx0O2xhc3RGZWF0dXJlU2V0PW51bGw7cmV0dXJue2ZlYXR1cmVzVG9BZGQ6ZmVhdHVyZXNUb0FkZCxmZWF0dXJlc1RvVXBkYXRlOmZlYXR1cmVzVG9VcGRhdGUsZmVhdHVyZXNUb1JlbW92ZTpmZWF0dXJlc1RvUmVtb3ZlLG5leHRGZWF0dXJlc1NldDpuZXh0RmVhdHVyZXNTZXQsbmV4dE1hcmtlcnNNYXA6bWFya2VyTWFwfX0sX2NyZWF0ZU1hcmtlcjpmdW5jdGlvbiBfY3JlYXRlTWFya2VyKGZlYXR1cmUpe3ZhciBfZmVhdHVyZSRnZW9tZXRyeSRjb289KDAsX3NsaWNlZFRvQXJyYXkzLmRlZmF1bHQpKGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsMiksbGF0PV9mZWF0dXJlJGdlb21ldHJ5JGNvb1swXSxsbmc9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vWzFdO3ZhciBtYXJrZXI9TC5tYXJrZXIoW2xuZyxsYXRdKTt2YXIgaWNvblNldHRpbmdzPWZlYXR1cmUucHJvcGVydGllc1snbWFya2VyLWljb24nXT90aGlzLl9leHRyYWN0TWFya2VySWNvblNldHRpbmdzKGZlYXR1cmUucHJvcGVydGllc1snbWFya2VyLWljb24nXSk6e307aWNvblNldHRpbmdzLmJhc2U9aWNvblNldHRpbmdzLmJhc2V8fCdzdGF0aWMtaWNvbic7aWNvblNldHRpbmdzLnR5cGU9aWNvblNldHRpbmdzLnR5cGV8fCdpbmZvJzt2YXIgaWNvbj10aGlzLl9jcmVhdGVNYXJrZXJJY29uKGljb25TZXR0aW5ncyk7bWFya2VyLnNldEljb24oaWNvbik7bWFya2VyLmZlYXR1cmVQcm9wZXJ0aWVzPWZlYXR1cmUucHJvcGVydGllcztyZXR1cm4gbWFya2VyfSxfdXBkYXRlTWFya2VyOmZ1bmN0aW9uIF91cGRhdGVNYXJrZXIoZmVhdHVyZSxtYXJrZXIpe3ZhciBfbWFya2VyJGdldExhdExuZz1tYXJrZXIuZ2V0TGF0TG5nKCksbGF0PV9tYXJrZXIkZ2V0TGF0TG5nLmxhdCxsbmc9X21hcmtlciRnZXRMYXRMbmcubG5nO3ZhciBfZmVhdHVyZSRnZW9tZXRyeSRjb28yPSgwLF9zbGljZWRUb0FycmF5My5kZWZhdWx0KShmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLDIpLG5leHRMbmc9X2ZlYXR1cmUkZ2VvbWV0cnkkY29vMlswXSxuZXh0TGF0PV9mZWF0dXJlJGdlb21ldHJ5JGNvbzJbMV07aWYobGF0IT09TnVtYmVyKG5leHRMYXQpfHxsbmchPT1OdW1iZXIobmV4dExuZykpe21hcmtlci5zZXRMYXRMbmcoW25leHRMYXQsbmV4dExuZ10pfXZhciBpY29uU2V0dGluZ3M9ZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddP3RoaXMuX2V4dHJhY3RNYXJrZXJJY29uU2V0dGluZ3MoZmVhdHVyZS5wcm9wZXJ0aWVzWydtYXJrZXItaWNvbiddKTp7fTtpY29uU2V0dGluZ3MuYmFzZT1pY29uU2V0dGluZ3MuYmFzZXx8J3N0YXRpYy1pY29uJztpY29uU2V0dGluZ3MudHlwZT1pY29uU2V0dGluZ3MudHlwZXx8J2luZm8nO3ZhciBpY29uPXRoaXMuX2NyZWF0ZU1hcmtlckljb24oaWNvblNldHRpbmdzKTttYXJrZXIuc2V0SWNvbihpY29uKTttYXJrZXIuZmVhdHVyZVByb3BlcnRpZXM9ZmVhdHVyZS5wcm9wZXJ0aWVzO3JldHVybiBtYXJrZXJ9LF9leHRyYWN0TWFya2VySWNvblNldHRpbmdzOmZ1bmN0aW9uIF9leHRyYWN0TWFya2VySWNvblNldHRpbmdzKGZlYXRTZXR0aW5ncyl7dmFyIGZlYXRTZXR0aW5nc0tleXM9KDAsX2tleXMyLmRlZmF1bHQpKGZlYXRTZXR0aW5ncyk7aWYoIWZlYXRTZXR0aW5nc0tleXMubGVuZ3RoKXJldHVybiB1bmRlZmluZWQ7dmFyIGljb25TZXR0aW5ncz17fTt2YXIgaT12b2lkIDAsbGVuPXZvaWQgMCxmZWF0S2V5Q2FtZWxpemVkPXZvaWQgMDtmb3IoaT0wLGxlbj1mZWF0U2V0dGluZ3NLZXlzLmxlbmd0aDtpPGxlbjtpKyspe2lmKGZlYXRTZXR0aW5nc0tleXNbaV0uc3Vic3RyaW5nKDAsNSkhPT0naWNvbi0nKWNvbnRpbnVlO2ZlYXRLZXlDYW1lbGl6ZWQ9ZmVhdFNldHRpbmdzS2V5c1tpXS5zdWJzdHJpbmcoNSkucmVwbGFjZSgvKFxcLVthLXpdKS9nLGZ1bmN0aW9uKG1hdGNoKXtyZXR1cm4gbWF0Y2guY2hhckF0KDEpLnRvVXBwZXJDYXNlKCl9KTtpY29uU2V0dGluZ3NbZmVhdEtleUNhbWVsaXplZF09ZmVhdFNldHRpbmdzW2ZlYXRTZXR0aW5nc0tleXNbaV1dfXJldHVybiBpY29uU2V0dGluZ3N9LF9jcmVhdGVNYXJrZXJJY29uOmZ1bmN0aW9uIF9jcmVhdGVNYXJrZXJJY29uKG9wdGlvbnMpe2lmKHRoaXMuaWNvbkZucy5tYXJrZXIpe3JldHVybiB0aGlzLmljb25GbnMubWFya2VyLmNhbGwodGhpcyxvcHRpb25zKX1vcHRpb25zLnN0eWxlU2NvcGU9dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkO3ZhciBrbGFzc05hbWU9dGhpcy5fc3RyVG9LbGFzc05hbWUob3B0aW9ucy5iYXNlKTtyZXR1cm4gbmV3IFB4TWFwW2tsYXNzTmFtZV0ob3B0aW9ucyl9LF9zdHJUb0tsYXNzTmFtZTpmdW5jdGlvbiBfc3RyVG9LbGFzc05hbWUoc3RyKXtyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3N0ci5zdWJzdHJpbmcoMSkucmVwbGFjZSgvKFxcLVthLXpdKS9nLGZ1bmN0aW9uKG1hdGNoKXtyZXR1cm4gbWF0Y2guY2hhckF0KDEpLnRvVXBwZXJDYXNlKCl9KX0sX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnk6ZnVuY3Rpb24gX2hhbmRsZUNsdXN0ZXJTcGlkZXJpZnkoZXZ0KXtpZighZXZ0fHwhZXZ0LmNsdXN0ZXJ8fCFldnQuY2x1c3Rlci5faWNvbilyZXR1cm47ZXZ0LmNsdXN0ZXIuX2ljb24uc3R5bGUudmlzaWJpbGl0eT0naGlkZGVuJ30sX2hhbmRsZUNsdXN0ZXJVbnNwaWRlcmlmeTpmdW5jdGlvbiBfaGFuZGxlQ2x1c3RlclVuc3BpZGVyaWZ5KGV2dCl7aWYoIWV2dHx8IWV2dC5jbHVzdGVyfHwhZXZ0LmNsdXN0ZXIuX2ljb24pcmV0dXJuO2V2dC5jbHVzdGVyLl9pY29uLnN0eWxlLnZpc2liaWxpdHk9J3Zpc2libGUnfSxfaGFuZGxlU2luZ2xlTWFya2VyVGFwOmZ1bmN0aW9uIF9oYW5kbGVTaW5nbGVNYXJrZXJUYXAoZXZ0KXtpZihldnQubGF5ZXImJmV2dC5sYXllci5nZXRMYXRMbmcoKWluc3RhbmNlb2YgTC5MYXRMbmcpe3ZhciBsYXRMbmc9TC5sYXRMbmcoZXZ0LmxheWVyLmdldExhdExuZygpKTt2YXIgbGF0PWxhdExuZy5sYXQsbG5nPWxhdExuZy5sbmc7dmFyIGRldGFpbD17bGF0TG5nOmxhdExuZyxsYXQ6bGF0LGxuZzpsbmcsZmVhdHVyZTpldnQubGF5ZXIuZmVhdHVyZVByb3BlcnRpZXM/ZXZ0LmxheWVyLmZlYXR1cmVQcm9wZXJ0aWVzOnVuZGVmaW5lZH07dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLWdyb3VwLW1hcmtlci10YXBwZWQnLGRldGFpbCl9aWYoZXZ0LmxheWVyJiZldnQubGF5ZXIuZmVhdHVyZVByb3BlcnRpZXMmJmV2dC5sYXllci5mZWF0dXJlUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgnbWFya2VyLXBvcHVwJykpe3RoaXMuX2JpbmRBbmRPcGVuUG9wdXAoZXZ0LmxheWVyKX19LF9oYW5kbGVTaW5nbGVNYXJrZXJEb3VibGVDbGljazpmdW5jdGlvbiBfaGFuZGxlU2luZ2xlTWFya2VyRG91YmxlQ2xpY2soZXZ0KXt2YXIgbGF0TG5nPUwubGF0TG5nKGV2dC5sYXllci5nZXRMYXRMbmcoKSk7dmFyIGxhdD1sYXRMbmcubGF0LGxuZz1sYXRMbmcubG5nO3ZhciBkZXRhaWw9e2xhdExuZzpsYXRMbmcsbGF0OmxhdCxsbmc6bG5nLGZlYXR1cmU6ZXZ0LmxheWVyLmZlYXR1cmVQcm9wZXJ0aWVzP2V2dC5sYXllci5mZWF0dXJlUHJvcGVydGllczp1bmRlZmluZWR9O3RoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1ncm91cC1tYXJrZXItZG91YmxlLWNsaWNrZWQnLGRldGFpbCl9LF9oYW5kbGVDbHVzdGVyVGFwOmZ1bmN0aW9uIF9oYW5kbGVDbHVzdGVyVGFwKGV2dCl7dmFyIGxhdExuZ0JvdW5kcz1ldnQubGF5ZXIuZ2V0Qm91bmRzKCk7dmFyIG1hcmtlcnM9ZXZ0LmxheWVyLmdldEFsbENoaWxkTWFya2VycygpO3ZhciBmZWF0dXJlcz1bXTtmb3IodmFyIGk9MDtpPG1hcmtlcnMubGVuZ3RoO2krKyl7ZmVhdHVyZXMucHVzaChtYXJrZXJzW2ldLmZlYXR1cmVQcm9wZXJ0aWVzKX12YXIgZGV0YWlsPXtib3VuZHM6bGF0TG5nQm91bmRzLGZlYXR1cmVzOmZlYXR1cmVzfTt0aGlzLmZpcmUoJ3B4LW1hcC1tYXJrZXItZ3JvdXAtY2x1c3Rlci10YXBwZWQnLGRldGFpbCl9LF9iaW5kQW5kT3BlblBvcHVwOmZ1bmN0aW9uIF9iaW5kQW5kT3BlblBvcHVwKG1hcmtlcil7aWYoIW1hcmtlcnx8IW1hcmtlci5iaW5kUG9wdXB8fCFtYXJrZXIub3BlblBvcHVwKXJldHVybjt2YXIgcG9wdXBTZXR0aW5ncz10aGlzLl9mZWF0U2V0dGluZ3NUb1Byb3BzKG1hcmtlci5mZWF0dXJlUHJvcGVydGllc1snbWFya2VyLXBvcHVwJ10sJ3BvcHVwJyk7aWYoIXBvcHVwU2V0dGluZ3N8fCEoMCxfa2V5czIuZGVmYXVsdCkocG9wdXBTZXR0aW5ncykubGVuZ3RoKXJldHVybjt2YXIga2xhc3NOYW1lPXBvcHVwU2V0dGluZ3MuX0Jhc2UmJlB4TWFwLmhhc093blByb3BlcnR5KHBvcHVwU2V0dGluZ3MuX0Jhc2UpP3BvcHVwU2V0dGluZ3MuX0Jhc2U6J0luZm9Qb3B1cCc7dmFyIHBvcHVwPW5ldyBQeE1hcFtrbGFzc05hbWVdKHBvcHVwU2V0dGluZ3MpO21hcmtlci5iaW5kUG9wdXAocG9wdXApLm9wZW5Qb3B1cCgpO21hcmtlci5fX2JvdW5kQ2xvc2VGbj10aGlzLl91bmJpbmRBbmRDbG9zZVBvcHVwLmJpbmQodGhpcyxtYXJrZXIpO21hcmtlci5vbigncG9wdXBjbG9zZScsbWFya2VyLl9fYm91bmRDbG9zZUZuKX0sX3VuYmluZEFuZENsb3NlUG9wdXA6ZnVuY3Rpb24gX3VuYmluZEFuZENsb3NlUG9wdXAobWFya2VyKXtpZighbWFya2VyfHwhbWFya2VyLmdldFBvcHVwfHwhbWFya2VyLmdldFBvcHVwKCkpcmV0dXJuO21hcmtlci5vZmYoJ3BvcHVwY2xvc2UnLG1hcmtlci5fX2JvdW5kQ2xvc2VGbik7bWFya2VyLl9fYm91bmRDbG9zZUZuPW51bGw7bWFya2VyLmNsb3NlUG9wdXAoKS51bmJpbmRQb3B1cCgpfSxfZmVhdFNldHRpbmdzVG9Qcm9wczpmdW5jdGlvbiBfZmVhdFNldHRpbmdzVG9Qcm9wcyhzZXR0aW5ncyxwcmVmaXgpe3ZhciBrZXlzPSgwLF9rZXlzMi5kZWZhdWx0KShzZXR0aW5ncyk7aWYoIWtleXMubGVuZ3RoKXJldHVybiB1bmRlZmluZWQ7dmFyIHNldHRpbmdzQXNQcm9wcz17fTt2YXIgaT0wLGxlbj1rZXlzLmxlbmd0aCxuZXdLZXk9dm9pZCAwO2Zvcig7aTxsZW47aSsrKXtpZihwcmVmaXgmJmtleXNbaV0uc3Vic3RyKDAscHJlZml4Lmxlbmd0aCkhPT1wcmVmaXgpe2NvbnRpbnVlfWlmKC9eW0EtWmEtel0rXFwtYmFzZSQvLnRlc3Qoa2V5c1tpXSkpe3NldHRpbmdzQXNQcm9wc1snX0Jhc2UnXT10aGlzLl9zdHJUb0tsYXNzTmFtZShzZXR0aW5nc1trZXlzW2ldXSk7Y29udGludWV9bmV3S2V5PWtleXNbaV0ucmVwbGFjZSgvXltBLVphLXpdK1xcLSguKikkLywnJDEnKTtzZXR0aW5nc0FzUHJvcHNbbmV3S2V5XT1zZXR0aW5nc1trZXlzW2ldXX1yZXR1cm4gc2V0dGluZ3NBc1Byb3BzfX07UHhNYXBCZWhhdmlvci5NYXJrZXJHcm91cD1bUHhNYXBCZWhhdmlvci5MYXllcixQeE1hcEJlaGF2aW9yLk1hcmtlckdyb3VwSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCI6MyxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCI6NSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjEwLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldFwiOjEyLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3dlYWstbWFwXCI6MTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiOjIxLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTUxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLk1hcmtlckltcGw9e3Byb3BlcnRpZXM6e2xhdDp7dHlwZTpOdW1iZXIsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxsbmc6e3R5cGU6TnVtYmVyLG5vdGlmeTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbmFtZTp7dHlwZTpTdHJpbmcsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMubGF0TG5nSXNWYWxpZCh0aGlzLmxhdCx0aGlzLmxuZyl9LF9jYW5CZU51bTpmdW5jdGlvbiBfY2FuQmVOdW0odmFsKXtyZXR1cm4haXNOYU4odmFsKSYmdmFsIT09Jyd9LGxhdExuZ0lzVmFsaWQ6ZnVuY3Rpb24gbGF0TG5nSXNWYWxpZChsYXQsbG5nKXt2YXIgaXNWYWxpZD10eXBlb2YgbGF0IT09J3VuZGVmaW5lZCcmJnRoaXMuX2NhbkJlTnVtKGxhdCkmJnR5cGVvZiBsbmchPT0ndW5kZWZpbmVkJyYmdGhpcy5fY2FuQmVOdW0obG5nKTtpZihpc1ZhbGlkKXJldHVybiB0cnVlO2NvbnNvbGUubG9nKCdQWC1NQVAgQ09ORklHVVJBVElPTiBFUlJPUjpcXG4gICAgICAgIFlvdSBlbnRlcmVkIGFuIGludmFsaWQgYGxhdGAgb3IgYGxuZ2AgYXR0cmlidXRlIGZvciAnK3RoaXMuaXMrJy4gWW91IG11c3QgcGFzcyBhIHZhbGlkIG51bWJlci4nKTtyZXR1cm4gZmFsc2V9LGFkZEluc3Q6ZnVuY3Rpb24gYWRkSW5zdChwYXJlbnQpe3ZhciBhZGRlZEZuPXRoaXMuX2hhbmRsZU1hcmtlckFkZGVkLmJpbmQodGhpcyk7dmFyIHJlbW92ZWRGbj10aGlzLl9oYW5kbGVNYXJrZXJSZW1vdmVkLmJpbmQodGhpcyk7dmFyIHRhcEZuPXRoaXMuX2hhbmRsZU1hcmtlclRhcHBlZC5iaW5kKHRoaXMpO3RoaXMuYmluZEV2ZW50cyh7J2FkZCc6YWRkZWRGbiwncmVtb3ZlJzpyZW1vdmVkRm4sJ2NsaWNrJzp0YXBGbn0sdGhpcy5tYXJrZXIpO1B4TWFwQmVoYXZpb3IuTGF5ZXJJbXBsLmFkZEluc3QuY2FsbCh0aGlzLHBhcmVudCl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe3RoaXMuX2hhbmRsZU1hcmtlclJlbW92ZWQoKTtQeE1hcEJlaGF2aW9yLkxheWVySW1wbC5yZW1vdmVJbnN0LmNhbGwodGhpcyxwYXJlbnQpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dGhpcy5tYXJrZXI9TC5tYXJrZXIob3B0aW9ucy5nZW9tZXRyeSxvcHRpb25zLmNvbmZpZyk7dGhpcy5tYXJrZXIuaXNNYXJrZXI9dHJ1ZTtyZXR1cm4gdGhpcy5tYXJrZXJ9LHVwZGF0ZUluc3Q6ZnVuY3Rpb24gdXBkYXRlSW5zdChsYXN0T3B0aW9ucyxuZXh0T3B0aW9ucyl7dmFyIGdlb21XYXNEZWZpbmVkPSgwLF90eXBlb2YzLmRlZmF1bHQpKGxhc3RPcHRpb25zLmdlb21ldHJ5KT09PSdvYmplY3QnO3ZhciBnZW9tSXNEZWZpbmVkPSgwLF90eXBlb2YzLmRlZmF1bHQpKG5leHRPcHRpb25zLmdlb21ldHJ5KT09PSdvYmplY3QnO3ZhciBnZW9tSXNEaWZmZXJlbnQ9Z2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQmJihsYXN0T3B0aW9ucy5nZW9tZXRyeS5sYXQhPT1uZXh0T3B0aW9ucy5nZW9tZXRyeS5sYXR8fGxhc3RPcHRpb25zLmdlb21ldHJ5LmxuZyE9PW5leHRPcHRpb25zLmdlb21ldHJ5LmxuZyk7aWYoZ2VvbVdhc0RlZmluZWQmJiFnZW9tSXNEZWZpbmVkKXt0aGlzLmVsZW1lbnRJbnN0LnNldE9wYWNpdHkoMCl9aWYoIWdlb21XYXNEZWZpbmVkJiZnZW9tSXNEZWZpbmVkKXt0aGlzLmVsZW1lbnRJbnN0LnNldExhdExuZyhuZXh0T3B0aW9ucy5nZW9tZXRyeSk7dGhpcy5lbGVtZW50SW5zdC5zZXRPcGFjaXR5KDEpfWlmKGdlb21Jc0RpZmZlcmVudCl7dGhpcy5lbGVtZW50SW5zdC5zZXRMYXRMbmcobmV4dE9wdGlvbnMuZ2VvbWV0cnkpfWlmKGxhc3RPcHRpb25zLmNvbmZpZy5pY29uIT09bmV4dE9wdGlvbnMuY29uZmlnLmljb24pe3RoaXMuZWxlbWVudEluc3Quc2V0SWNvbihuZXh0T3B0aW9ucy5jb25maWcuaWNvbil9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBnZW9tZXRyeT10aGlzLmdldExhdExuZygpO3ZhciBjb25maWc9e307Y29uZmlnLnRpdGxlPXRoaXMubmFtZXx8Jyc7Y29uZmlnLmljb249dGhpcy5nZXRNYXJrZXJJY29uKCk7cmV0dXJue2dlb21ldHJ5Omdlb21ldHJ5LGNvbmZpZzpjb25maWd9fSxnZXRMYXRMbmc6ZnVuY3Rpb24gZ2V0TGF0TG5nKCl7aWYodGhpcy5sYXRMbmdJc1ZhbGlkKHRoaXMubGF0LHRoaXMubG5nKSl7cmV0dXJuIEwubGF0TG5nKHRoaXMubGF0LHRoaXMubG5nKX19LGdldE1hcmtlckljb246ZnVuY3Rpb24gZ2V0TWFya2VySWNvbigpe3Rocm93IG5ldyBFcnJvcignVGhlIGBnZXRNYXJrZXJJY29uYCBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKX0sX2hhbmRsZU1hcmtlckFkZGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJBZGRlZCgpe3ZhciBsYXRMbmc9dGhpcy5nZXRMYXRMbmcoKTt2YXIgZGV0YWlsPXt9O2lmKGxhdExuZyl7ZGV0YWlsLmxhdExuZz1sYXRMbmc7ZGV0YWlsLmxhdD1sYXRMbmcubGF0O2RldGFpbC5sbmc9bGF0TG5nLmxuZ310aGlzLmZpcmUoJ3B4LW1hcC1tYXJrZXItYWRkZWQnLGRldGFpbCl9LF9oYW5kbGVNYXJrZXJSZW1vdmVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJSZW1vdmVkKCl7dmFyIGxhdExuZz10aGlzLmdldExhdExuZygpO3ZhciBkZXRhaWw9e307aWYobGF0TG5nKXtkZXRhaWwubGF0TG5nPWxhdExuZztkZXRhaWwubGF0PWxhdExuZy5sYXQ7ZGV0YWlsLmxuZz1sYXRMbmcubG5nfXRoaXMuZmlyZSgncHgtbWFwLW1hcmtlci1yZW1vdmVkJyxkZXRhaWwpfSxfaGFuZGxlTWFya2VyVGFwcGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJUYXBwZWQoKXt2YXIgbGF0TG5nPXRoaXMuZ2V0TGF0TG5nKCk7dmFyIGRldGFpbD17fTtpZihsYXRMbmcpe2RldGFpbC5sYXRMbmc9bGF0TG5nO2RldGFpbC5sYXQ9bGF0TG5nLmxhdDtkZXRhaWwubG5nPWxhdExuZy5sbmd9dGhpcy5maXJlKCdweC1tYXAtbWFya2VyLXRhcHBlZCcsZGV0YWlsKX19O1B4TWFwQmVoYXZpb3IuTWFya2VyPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuUGFyZW50TGF5ZXIsUHhNYXBCZWhhdmlvci5NYXJrZXJJbXBsXTtQeE1hcEJlaGF2aW9yLlN5bWJvbE1hcmtlckltcGw9e3Byb3BlcnRpZXM6e3R5cGU6e3R5cGU6U3RyaW5nLHJlZmxlY3RUb0F0dHJpYnV0ZTp0cnVlLHZhbHVlOidpbmZvJyxvYnNlcnZlcjonX3VwZGF0ZU1hcmtlckljb24nfSxzeW1ib2xDbGFzczp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J191cGRhdGVNYXJrZXJJY29uJ319LGdldE1hcmtlckljb246ZnVuY3Rpb24gZ2V0TWFya2VySWNvbigpe2lmKCF0aGlzLm1hcmtlckljb24pe3ZhciBvcHRpb25zPXRoaXMuX2dldE1hcmtlckljb25PcHRpb25zKCk7dGhpcy5tYXJrZXJJY29uPW5ldyBQeE1hcC5TeW1ib2xJY29uKG9wdGlvbnMpfXJldHVybiB0aGlzLm1hcmtlckljb259LF91cGRhdGVNYXJrZXJJY29uOmZ1bmN0aW9uIF91cGRhdGVNYXJrZXJJY29uKCl7aWYoIXRoaXMubWFya2VySWNvbilyZXR1cm47dmFyIG9wdGlvbnM9dGhpcy5fZ2V0TWFya2VySWNvbk9wdGlvbnMoKTt0aGlzLm1hcmtlckljb249bmV3IFB4TWFwLlN5bWJvbEljb24ob3B0aW9ucyk7dGhpcy5zaG91bGRVcGRhdGVJbnN0KCl9LF9nZXRNYXJrZXJJY29uT3B0aW9uczpmdW5jdGlvbiBfZ2V0TWFya2VySWNvbk9wdGlvbnMoKXtyZXR1cm57dHlwZTp0aGlzLnR5cGUsc3ltYm9sOnRoaXMuc3ltYm9sQ2xhc3Msc3R5bGVTY29wZTp0aGlzLmlzU2hhZHlTY29wZWQoKT90aGlzLmdldFNoYWR5U2NvcGUoKTp1bmRlZmluZWR9fX07UHhNYXBCZWhhdmlvci5TeW1ib2xNYXJrZXI9W1B4TWFwQmVoYXZpb3IuTWFya2VyLFB4TWFwQmVoYXZpb3IuU3ltYm9sTWFya2VySW1wbF07UHhNYXBCZWhhdmlvci5TdGF0aWNNYXJrZXJJbXBsPXtwcm9wZXJ0aWVzOnt0eXBlOnt0eXBlOlN0cmluZyxyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSx2YWx1ZTonaW5mbycsb2JzZXJ2ZXI6J191cGRhdGVNYXJrZXJJY29uJ319LGdldE1hcmtlckljb246ZnVuY3Rpb24gZ2V0TWFya2VySWNvbigpe2lmKCF0aGlzLm1hcmtlckljb24pe3ZhciBvcHRpb25zPXRoaXMuX2dldE1hcmtlckljb25PcHRpb25zKCk7dGhpcy5tYXJrZXJJY29uPW5ldyBQeE1hcC5TdGF0aWNJY29uKG9wdGlvbnMpfXJldHVybiB0aGlzLm1hcmtlckljb259LF91cGRhdGVNYXJrZXJJY29uOmZ1bmN0aW9uIF91cGRhdGVNYXJrZXJJY29uKCl7aWYoIXRoaXMubWFya2VySWNvbilyZXR1cm47dmFyIG9wdGlvbnM9dGhpcy5fZ2V0TWFya2VySWNvbk9wdGlvbnMoKTt0aGlzLm1hcmtlckljb249bmV3IFB4TWFwLlN0YXRpY0ljb24ob3B0aW9ucyk7dGhpcy5zaG91bGRVcGRhdGVJbnN0KCl9LF9nZXRNYXJrZXJJY29uT3B0aW9uczpmdW5jdGlvbiBfZ2V0TWFya2VySWNvbk9wdGlvbnMoKXtyZXR1cm57dHlwZTp0aGlzLnR5cGV8fCcnLHN0eWxlU2NvcGU6dGhpcy5pc1NoYWR5U2NvcGVkKCk/dGhpcy5nZXRTaGFkeVNjb3BlKCk6dW5kZWZpbmVkfX19O1B4TWFwQmVoYXZpb3IuU3RhdGljTWFya2VyPVtQeE1hcEJlaGF2aW9yLk1hcmtlcixQeE1hcEJlaGF2aW9yLlN0YXRpY01hcmtlckltcGxdO1B4TWFwQmVoYXZpb3IuTG9jYXRlTWFya2VySW1wbD17cHJvcGVydGllczp7YWNjdXJhY3k6e3R5cGU6TnVtYmVyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J319LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXt0aGlzLm1hcmtlckJhc2VJY29uPUwuY2lyY2xlTWFya2VyKG9wdGlvbnMuZ2VvbWV0cnksb3B0aW9ucy5iYXNlQ29uZmlnKTt0aGlzLm1hcmtlckFjY3VyYWN5SWNvbj1MLmNpcmNsZShvcHRpb25zLmdlb21ldHJ5LG9wdGlvbnMuYWNjdXJhY3lSYWRpdXMsb3B0aW9ucy5hY2N1cmFjeUNvbmZpZyk7dGhpcy5tYXJrZXJHcm91cD1MLmZlYXR1cmVHcm91cChbdGhpcy5tYXJrZXJBY2N1cmFjeUljb24sdGhpcy5tYXJrZXJCYXNlSWNvbl0pO3RoaXMubWFya2VyR3JvdXAuaXNNYXJrZXI9dHJ1ZTt0aGlzLm1hcmtlckdyb3VwLmdldExhdExuZz10aGlzLmdldExhdExuZy5iaW5kKHRoaXMpO3JldHVybiB0aGlzLm1hcmtlckdyb3VwfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciBnZW9tV2FzRGVmaW5lZD0oMCxfdHlwZW9mMy5kZWZhdWx0KShsYXN0T3B0aW9ucy5nZW9tZXRyeSk9PT0nb2JqZWN0Jzt2YXIgZ2VvbUlzRGVmaW5lZD0oMCxfdHlwZW9mMy5kZWZhdWx0KShuZXh0T3B0aW9ucy5nZW9tZXRyeSk9PT0nb2JqZWN0Jzt2YXIgZ2VvbUlzRGlmZmVyZW50PWdlb21XYXNEZWZpbmVkJiZnZW9tSXNEZWZpbmVkJiYobGFzdE9wdGlvbnMuZ2VvbWV0cnkubGF0IT09bmV4dE9wdGlvbnMuZ2VvbWV0cnkubGF0fHxsYXN0T3B0aW9ucy5nZW9tZXRyeS5sbmchPT1uZXh0T3B0aW9ucy5nZW9tZXRyeS5sbmcpO2lmKGdlb21XYXNEZWZpbmVkJiYhZ2VvbUlzRGVmaW5lZCl7dGhpcy5tYXJrZXJCYXNlSWNvbi5zZXRTdHlsZSh7b3BhY2l0eTowLGZpbGxPcGFjaXR5OjB9KTt0aGlzLm1hcmtlckFjY3VyYWN5SWNvbi5zZXRTdHlsZSh7b3BhY2l0eTowLGZpbGxPcGFjaXR5OjB9KX1pZighZ2VvbVdhc0RlZmluZWQmJmdlb21Jc0RlZmluZWQpe3RoaXMubWFya2VyQmFzZUljb24uc2V0TGF0TG5nKG5leHRPcHRpb25zLmdlb21ldHJ5KTt0aGlzLm1hcmtlckFjY3VyYWN5SWNvbi5zZXRMYXRMbmcobmV4dE9wdGlvbnMuZ2VvbWV0cnkpO3RoaXMubWFya2VyQmFzZUljb24uc2V0U3R5bGUobmV4dE9wdGlvbnMuYmFzZUNvbmZpZyk7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0U3R5bGUobmV4dE9wdGlvbnMuYWNjdXJhY3lDb25maWcpfWlmKGdlb21Jc0RpZmZlcmVudCl7dGhpcy5tYXJrZXJCYXNlSWNvbi5zZXRMYXRMbmcobmV4dE9wdGlvbnMuZ2VvbWV0cnkpO3RoaXMubWFya2VyQWNjdXJhY3lJY29uLnNldExhdExuZyhuZXh0T3B0aW9ucy5nZW9tZXRyeSl9aWYobGFzdE9wdGlvbnMuYWNjdXJhY3lSYWRpdXMhPT1uZXh0T3B0aW9ucy5hY2N1cmFjeVJhZGl1cyl7dGhpcy5tYXJrZXJBY2N1cmFjeUljb24uc2V0UmFkaXVzKG5leHRPcHRpb25zLmFjY3VyYWN5UmFkaXVzKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIGdlb21ldHJ5PXRoaXMuZ2V0TGF0TG5nKCk7dmFyIGJhc2VDb25maWc9e307YmFzZUNvbmZpZy5yYWRpdXM9Ny41O2Jhc2VDb25maWcuc3Ryb2tlPXRydWU7YmFzZUNvbmZpZy5jb2xvcj10aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWxvY2F0ZS1pY29uLWJvcmRlci1jb2xvcicpO2Jhc2VDb25maWcud2VpZ2h0PTM7YmFzZUNvbmZpZy5vcGFjaXR5PTE7YmFzZUNvbmZpZy5maWxsPXRydWU7YmFzZUNvbmZpZy5maWxsQ29sb3I9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1sb2NhdGUtaWNvbi1jb2xvcicpO2Jhc2VDb25maWcuZmlsbE9wYWNpdHk9MTtiYXNlQ29uZmlnLmNsYXNzTmFtZT0nbWFwLW1hcmtlci1sb2NhdGUtYmFzZSAnKyh0aGlzLmlzU2hhZHlTY29wZWQoKT90aGlzLmdldFNoYWR5U2NvcGUoKTonJyk7dmFyIGFjY3VyYWN5UmFkaXVzPXRoaXMuYWNjdXJhY3l8fDA7dmFyIGFjY3VyYWN5Q29uZmlnPXt9O2FjY3VyYWN5Q29uZmlnLnN0cm9rZT1mYWxzZTthY2N1cmFjeUNvbmZpZy5vcGFjaXR5PTA7YWNjdXJhY3lDb25maWcuZmlsbD10cnVlO2FjY3VyYWN5Q29uZmlnLmZpbGxDb2xvcj10aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1pbnRlcm5hbC1weC1tYXAtbWFya2VyLWxvY2F0ZS1pY29uLWFjY3VyYWN5LWNvbG9yJyk7YWNjdXJhY3lDb25maWcuZmlsbE9wYWNpdHk9dGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0taW50ZXJuYWwtcHgtbWFwLW1hcmtlci1sb2NhdGUtaWNvbi1hY2N1cmFjeS1vcGFjaXR5Jyk7YWNjdXJhY3lDb25maWcuY2xhc3NOYW1lPSdtYXAtbWFya2VyLWxvY2F0ZS1hY2N1cmFjeSAnKyh0aGlzLmlzU2hhZHlTY29wZWQoKT90aGlzLmdldFNoYWR5U2NvcGUoKTonJyk7cmV0dXJue2dlb21ldHJ5Omdlb21ldHJ5LGJhc2VDb25maWc6YmFzZUNvbmZpZyxhY2N1cmFjeVJhZGl1czphY2N1cmFjeVJhZGl1cyxhY2N1cmFjeUNvbmZpZzphY2N1cmFjeUNvbmZpZ319fTtQeE1hcEJlaGF2aW9yLkxvY2F0ZU1hcmtlcj1bUHhNYXBCZWhhdmlvci5NYXJrZXIsUHhNYXBCZWhhdmlvci5Mb2NhdGVNYXJrZXJJbXBsXX0pKCk7XG5cbn0se1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTUyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2Fzc2lnbj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO3ZhciBfYXNzaWduMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO3ZhciBfZ2V0UHJvdG90eXBlT2Y9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7dmFyIF9nZXRQcm90b3R5cGVPZjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO3ZhciBfY2xhc3NDYWxsQ2hlY2syPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO3ZhciBfY2xhc3NDYWxsQ2hlY2szPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7dmFyIF9jcmVhdGVDbGFzczI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7dmFyIF9jcmVhdGVDbGFzczM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTt2YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yPXJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7dmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7dmFyIF9pbmhlcml0czI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7dmFyIF9pbmhlcml0czM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTt2YXIgX3N0cmluZ2lmeT1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTt2YXIgX3N0cmluZ2lmeTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTt2YXIgX3R5cGVvZjI9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO3ZhciBfdHlwZW9mMz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTt2YXIgX2tleXM9cmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7dmFyIF9rZXlzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO3dpbmRvdy5QeE1hcEJlaGF2aW9yPXdpbmRvdy5QeE1hcEJlaGF2aW9yfHx7fTtQeE1hcEJlaGF2aW9yLlBvcHVwSW1wbD17cHJvcGVydGllczp7Y2xvc2VPbkNvbnRyb2xJbnRlcmFjdDp7dHlwZTpCb29sZWFuLHZhbHVlOmZhbHNlfX0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KHBhcmVudCl7aWYocGFyZW50JiZwYXJlbnQuZ2V0UG9wdXAoKSE9PXRoaXMuZWxlbWVudEluc3Qpe3BhcmVudC5iaW5kUG9wdXAodGhpcy5lbGVtZW50SW5zdCk7dmFyIGNvbnRyb2xDbGlja0ZuPXRoaXMuX2hhbmRsZUNvbnRyb2xDbGljay5iaW5kKHRoaXMscGFyZW50KTt0aGlzLmJpbmRFdmVudHMoeydjb250cm9sY2xpY2snOmNvbnRyb2xDbGlja0ZufSxwYXJlbnQuX21hcFRvQWRkKX19LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdChwYXJlbnQpe2lmKHBhcmVudCYmcGFyZW50LmdldFBvcHVwJiZwYXJlbnQuZ2V0UG9wdXAoKT09PXRoaXMuZWxlbWVudEluc3Qpe3BhcmVudC51bmJpbmRQb3B1cCh0aGlzLmVsZW1lbnRJbnN0KX19LF9oYW5kbGVDb250cm9sQ2xpY2s6ZnVuY3Rpb24gX2hhbmRsZUNvbnRyb2xDbGljayhwYXJlbnQpe2lmKHRoaXMuY2xvc2VPbkNvbnRyb2xJbnRlcmFjdCYmcGFyZW50JiZwYXJlbnQuY2xvc2VQb3B1cCl7cGFyZW50LmNsb3NlUG9wdXAoKX19fTtQeE1hcEJlaGF2aW9yLlBvcHVwPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuUG9wdXBJbXBsXTtQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cEltcGw9e3Byb3BlcnRpZXM6e3RpdGxlOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRlc2NyaXB0aW9uOnt0eXBlOlN0cmluZyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGltZ1NyYzp7dHlwZTpTdHJpbmcsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY3JlYXRlSW5zdDpmdW5jdGlvbiBjcmVhdGVJbnN0KG9wdGlvbnMpe3JldHVybiBuZXcgUHhNYXAuSW5mb1BvcHVwKG9wdGlvbnMpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe3ZhciB1cGRhdGVzPXt9O2lmKGxhc3RPcHRpb25zLnRpdGxlIT09bmV4dE9wdGlvbnMudGl0bGUpe3VwZGF0ZXMudGl0bGU9bmV4dE9wdGlvbnMudGl0bGV9aWYobGFzdE9wdGlvbnMuZGVzY3JpcHRpb24hPT1uZXh0T3B0aW9ucy5kZXNjcmlwdGlvbil7dXBkYXRlcy5kZXNjcmlwdGlvbj1uZXh0T3B0aW9ucy5kZXNjcmlwdGlvbn1pZihsYXN0T3B0aW9ucy5pbWdTcmMhPT1uZXh0T3B0aW9ucy5pbWdTcmMpe3VwZGF0ZXMuaW1nU3JjPW5leHRPcHRpb25zLmltZ1NyY31pZigoMCxfa2V5czIuZGVmYXVsdCkodXBkYXRlcykubGVuZ3RoKXt0aGlzLmVsZW1lbnRJbnN0LnVwZGF0ZVNldHRpbmdzKHVwZGF0ZXMpfX0sZ2V0SW5zdE9wdGlvbnM6ZnVuY3Rpb24gZ2V0SW5zdE9wdGlvbnMoKXtyZXR1cm57dGl0bGU6dGhpcy50aXRsZSxkZXNjcmlwdGlvbjp0aGlzLmRlc2NyaXB0aW9uLGltZ1NyYzp0aGlzLmltZ1NyYyxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH19fTtQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cD1bUHhNYXBCZWhhdmlvci5Qb3B1cCxQeE1hcEJlaGF2aW9yLkluZm9Qb3B1cEltcGxdO1B4TWFwQmVoYXZpb3IuRGF0YVBvcHVwSW1wbD17cHJvcGVydGllczp7dGl0bGU6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGF0YTp7dHlwZTpPYmplY3QsdmFsdWU6ZnVuY3Rpb24gdmFsdWUoKXtyZXR1cm57fX0sb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHRoaXMuZGF0YSYmKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5kYXRhKT09PSdvYmplY3QnJiYoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5kYXRhKS5sZW5ndGh9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gbmV3IFB4TWFwLkRhdGFQb3B1cChvcHRpb25zKX0sdXBkYXRlSW5zdDpmdW5jdGlvbiB1cGRhdGVJbnN0KGxhc3RPcHRpb25zLG5leHRPcHRpb25zKXt2YXIgdXBkYXRlcz17fTtpZihsYXN0T3B0aW9ucy50aXRsZSE9PW5leHRPcHRpb25zLnRpdGxlKXt1cGRhdGVzLnRpdGxlPW5leHRPcHRpb25zLnRpdGxlfWlmKGxhc3RPcHRpb25zLmRhdGFIYXNoIT09bmV4dE9wdGlvbnMuZGF0YUhhc2gpe3VwZGF0ZXMuZGF0YT1uZXh0T3B0aW9ucy5kYXRhfWlmKCgwLF9rZXlzMi5kZWZhdWx0KSh1cGRhdGVzKS5sZW5ndGgpe3RoaXMuZWxlbWVudEluc3QudXBkYXRlU2V0dGluZ3ModXBkYXRlcyl9fSxnZXRJbnN0T3B0aW9uczpmdW5jdGlvbiBnZXRJbnN0T3B0aW9ucygpe3ZhciBkYXRhPXRoaXMuX2dldFZhbGlkRGF0YSgpO3JldHVybnt0aXRsZTp0aGlzLnRpdGxlLGRhdGE6ZGF0YSxkYXRhSGFzaDooMCxfc3RyaW5naWZ5Mi5kZWZhdWx0KShkYXRhKSxzdHlsZVNjb3BlOnRoaXMuaXNTaGFkeVNjb3BlZCgpP3RoaXMuZ2V0U2hhZHlTY29wZSgpOnVuZGVmaW5lZH19LF9nZXRWYWxpZERhdGE6ZnVuY3Rpb24gX2dldFZhbGlkRGF0YSgpe2lmKCgwLF90eXBlb2YzLmRlZmF1bHQpKHRoaXMuZGF0YSkhPT0nb2JqZWN0Jyl7Y29uc29sZS5sb2coJ1BYLU1BUCBDT05GSUdVUkFUSU9OIEVSUk9SOlxcbiAgICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBkYXRhYCBhdHRyaWJ1dGUgZm9yICcrdGhpcy5pcysnLiBZb3UgbXVzdCBwYXNzIGEgdmFsaWQgb2JqZWN0LlxcbiAgICAgICAgICBBbiBhdHRyaWJ1dGUgb2YgdHlwZSBgJysoMCxfdHlwZW9mMy5kZWZhdWx0KSh0aGlzLmRhdGEpKydgIHdhcyBwYXNzZWQuJyk7cmV0dXJue319cmV0dXJuIHRoaXMuZGF0YX19O1B4TWFwQmVoYXZpb3IuRGF0YVBvcHVwPVtQeE1hcEJlaGF2aW9yLlBvcHVwLFB4TWFwQmVoYXZpb3IuRGF0YVBvcHVwSW1wbF07d2luZG93LlB4TWFwPXdpbmRvdy5QeE1hcHx8e307dmFyIEluZm9Qb3B1cD1mdW5jdGlvbihfTCRQb3B1cCl7KDAsX2luaGVyaXRzMy5kZWZhdWx0KShJbmZvUG9wdXAsX0wkUG9wdXApO2Z1bmN0aW9uIEluZm9Qb3B1cCgpe3ZhciBfcmV0O3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307KDAsX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLEluZm9Qb3B1cCk7dmFyIF90aGlzPSgwLF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLChJbmZvUG9wdXAuX19wcm90b19ffHwoMCxfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEluZm9Qb3B1cCkpLmNhbGwodGhpcykpO190aGlzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyk7cmV0dXJuIF9yZXQ9X3RoaXMsKDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLF9yZXQpfSgwLF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSW5mb1BvcHVwLFt7a2V5OidvbkFkZCcsdmFsdWU6ZnVuY3Rpb24gb25BZGQobWFwKXtpZihtYXAuX19hZGRTaGFkeVNjb3BlKXt2YXIgc3JjUGFuZT10aGlzLmdldFBhbmUoKTt2YXIgc3JjRm49c3JjUGFuZS5hcHBlbmRDaGlsZDtzcmNQYW5lLmFwcGVuZENoaWxkPWZ1bmN0aW9uKGVsKXttYXAuX19hZGRTaGFkeVNjb3BlKGVsLGZhbHNlKTtQb2x5bWVyLmRvbShzcmNQYW5lKS5hcHBlbmRDaGlsZChlbCl9fUwuUG9wdXAucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcyxtYXApO2lmKG1hcC5fX2FkZFNoYWR5U2NvcGUpe3NyY1BhbmUuYXBwZW5kQ2hpbGQ9c3JjRm59fX0se2tleTonX3VwZGF0ZUNvbnRlbnQnLHZhbHVlOmZ1bmN0aW9uIF91cGRhdGVDb250ZW50KCl7aWYodGhpcy5fbWFwJiZ0aGlzLl9tYXAuX19hZGRTaGFkeVNjb3BlJiZ0aGlzLl9jb250ZW50Lmxlbmd0aCl7dmFyIHNyY05vZGU9dGhpcy5fY29udGVudE5vZGU7dmFyIGZha2VOb2RlPXtpbm5lckhUTUw6bnVsbH07dGhpcy5fY29udGVudE5vZGU9ZmFrZU5vZGV9TC5EaXZPdmVybGF5LnByb3RvdHlwZS5fdXBkYXRlQ29udGVudC5jYWxsKHRoaXMpO2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLl9fYWRkU2hhZHlTY29wZSYmdGhpcy5fY29udGVudC5sZW5ndGgpe2lmKHR5cGVvZiBmYWtlTm9kZS5pbm5lckhUTUw9PT0nc3RyaW5nJyl7UG9seW1lci5kb20oc3JjTm9kZSkuaW5uZXJIVE1MPWZha2VOb2RlLmlubmVySFRNTH10aGlzLl9jb250ZW50Tm9kZT1zcmNOb2RlfX19LHtrZXk6J19jcmVhdGVQb3B1cCcsdmFsdWU6ZnVuY3Rpb24gX2NyZWF0ZVBvcHVwKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTt0aGlzLnNldHRpbmdzPXNldHRpbmdzO3ZhciB0aXRsZT1zZXR0aW5ncy50aXRsZSxkZXNjcmlwdGlvbj1zZXR0aW5ncy5kZXNjcmlwdGlvbixpbWdTcmM9c2V0dGluZ3MuaW1nU3JjLHN0eWxlU2NvcGU9c2V0dGluZ3Muc3R5bGVTY29wZTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkZXNjcmlwdGlvbixpbWdTcmMpO3ZhciBjbGFzc05hbWU9J21hcC1wb3B1cC1pbmZvICcrKHN0eWxlU2NvcGV8fCcnKTt2YXIgbWF4V2lkdGg9NDAwO3ZhciBtaW5XaWR0aD0zMDA7dGhpcy5pbml0aWFsaXplKHtjbGFzc05hbWU6Y2xhc3NOYW1lLG1heFdpZHRoOm1heFdpZHRoLG1pbldpZHRoOm1pbldpZHRofSk7dGhpcy5zZXRDb250ZW50KGNvbnRlbnQpfX0se2tleTonX2dlbmVyYXRlUG9wdXBDb250ZW50Jyx2YWx1ZTpmdW5jdGlvbiBfZ2VuZXJhdGVQb3B1cENvbnRlbnQodGl0bGUsZGVzY3JpcHRpb24saW1nU3JjKXt2YXIgX3RoaXMyPXRoaXM7dmFyIHRtcGxGbklmPWZ1bmN0aW9uIHRtcGxGbklmKGZuKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCx2YWxzPUFycmF5KF9sZW4+MT9fbGVuLTE6MCksX2tleT0xO19rZXk8X2xlbjtfa2V5Kyspe3ZhbHNbX2tleS0xXT1hcmd1bWVudHNbX2tleV19cmV0dXJuIHZhbHMubGVuZ3RoJiZ2YWxzWzBdIT09dW5kZWZpbmVkP2ZuLmNhbGwuYXBwbHkoZm4sW190aGlzMl0uY29uY2F0KHZhbHMpKTonJ307dmFyIGltZ1RtcGw9ZnVuY3Rpb24gaW1nVG1wbChpbWdTcmMpe3JldHVybidcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtYm94LWluZm9fX2ltYWdlXCI+XFxuICAgICAgICAgIDxpbWcgc3JjPVwiJytpbWdTcmMrJ1wiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAnfTt2YXIgdGl0bGVUbXBsPWZ1bmN0aW9uIHRpdGxlVG1wbCh0aXRsZSl7cmV0dXJuJ1xcbiAgICAgICAgPHAgY2xhc3M9XCJtYXAtYm94LWluZm9fX3RpdGxlXCI+Jyt0aXRsZSsnPC9wPlxcbiAgICAgICd9O3ZhciBkZXNjcmlwdGlvblRtcGw9ZnVuY3Rpb24gZGVzY3JpcHRpb25UbXBsKGRlc2NyaXB0aW9uKXtyZXR1cm4nXFxuICAgICAgICA8cCBjbGFzcz1cIm1hcC1ib3gtaW5mb19fZGVzY3JpcHRpb25cIj4nK2Rlc2NyaXB0aW9uKyc8L3A+XFxuICAgICAgJ307cmV0dXJuJ1xcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYXAtYm94LWluZm9cIj5cXG4gICAgICAgICAgJyt0bXBsRm5JZihpbWdUbXBsLGltZ1NyYykrJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWJveC1pbmZvX19jb250ZW50XCI+XFxuICAgICAgICAgICAgJyt0bXBsRm5JZih0aXRsZVRtcGwsdGl0bGUpKydcXG4gICAgICAgICAgICAnK3RtcGxGbklmKGRlc2NyaXB0aW9uVG1wbCxkZXNjcmlwdGlvbikrJ1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAnfX0se2tleTondXBkYXRlU2V0dGluZ3MnLHZhbHVlOmZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKCl7dmFyIHNldHRpbmdzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTp7fTsoMCxfYXNzaWduMi5kZWZhdWx0KSh0aGlzLnNldHRpbmdzLHNldHRpbmdzKTt2YXIgX3NldHRpbmdzPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzLnRpdGxlLGRlc2NyaXB0aW9uPV9zZXR0aW5ncy5kZXNjcmlwdGlvbixpbWdTcmM9X3NldHRpbmdzLmltZ1NyYyxzdHlsZVNjb3BlPV9zZXR0aW5ncy5zdHlsZVNjb3BlO3ZhciBjb250ZW50PXRoaXMuX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRlc2NyaXB0aW9uLGltZ1NyYyk7dGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO3RoaXMudXBkYXRlKCl9fV0pO3JldHVybiBJbmZvUG9wdXB9KEwuUG9wdXApOztQeE1hcC5JbmZvUG9wdXA9SW5mb1BvcHVwO3ZhciBEYXRhUG9wdXA9ZnVuY3Rpb24oX0wkUG9wdXAyKXsoMCxfaW5oZXJpdHMzLmRlZmF1bHQpKERhdGFQb3B1cCxfTCRQb3B1cDIpO2Z1bmN0aW9uIERhdGFQb3B1cCgpe3ZhciBfcmV0Mjt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcyxEYXRhUG9wdXApO3ZhciBfdGhpczM9KDAsX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsKERhdGFQb3B1cC5fX3Byb3RvX198fCgwLF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGF0YVBvcHVwKSkuY2FsbCh0aGlzKSk7X3RoaXMzLl9jcmVhdGVQb3B1cChzZXR0aW5ncyk7cmV0dXJuIF9yZXQyPV90aGlzMywoMCxfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMzLF9yZXQyKX0oMCxfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKERhdGFQb3B1cCxbe2tleTonb25BZGQnLHZhbHVlOmZ1bmN0aW9uIG9uQWRkKG1hcCl7aWYoKDAsX3R5cGVvZjMuZGVmYXVsdCkodGhpcy5zZXR0aW5ncy5kYXRhKSE9PSdvYmplY3QnfHwoMCxfa2V5czIuZGVmYXVsdCkodGhpcy5zZXR0aW5ncy5kYXRhKS5sZW5ndGg9PT0wKXtyZXR1cm59aWYobWFwLl9fYWRkU2hhZHlTY29wZSl7dmFyIHNyY1BhbmU9dGhpcy5nZXRQYW5lKCk7dmFyIHNyY0ZuPXNyY1BhbmUuYXBwZW5kQ2hpbGQ7c3JjUGFuZS5hcHBlbmRDaGlsZD1mdW5jdGlvbihlbCl7bWFwLl9fYWRkU2hhZHlTY29wZShlbCxmYWxzZSk7UG9seW1lci5kb20oc3JjUGFuZSkuYXBwZW5kQ2hpbGQoZWwpfX1MLlBvcHVwLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsbWFwKTtpZihtYXAuX19hZGRTaGFkeVNjb3BlKXtzcmNQYW5lLmFwcGVuZENoaWxkPXNyY0ZufX19LHtrZXk6J191cGRhdGVDb250ZW50Jyx2YWx1ZTpmdW5jdGlvbiBfdXBkYXRlQ29udGVudCgpe2lmKHRoaXMuX21hcCYmdGhpcy5fbWFwLl9fYWRkU2hhZHlTY29wZSYmdGhpcy5fY29udGVudC5sZW5ndGgpe3ZhciBzcmNOb2RlPXRoaXMuX2NvbnRlbnROb2RlO3ZhciBmYWtlTm9kZT17aW5uZXJIVE1MOm51bGx9O3RoaXMuX2NvbnRlbnROb2RlPWZha2VOb2RlfUwuRGl2T3ZlcmxheS5wcm90b3R5cGUuX3VwZGF0ZUNvbnRlbnQuY2FsbCh0aGlzKTtpZih0aGlzLl9tYXAmJnRoaXMuX21hcC5fX2FkZFNoYWR5U2NvcGUmJnRoaXMuX2NvbnRlbnQubGVuZ3RoKXtpZih0eXBlb2YgZmFrZU5vZGUuaW5uZXJIVE1MPT09J3N0cmluZycpe1BvbHltZXIuZG9tKHNyY05vZGUpLmlubmVySFRNTD1mYWtlTm9kZS5pbm5lckhUTUx9dGhpcy5fY29udGVudE5vZGU9c3JjTm9kZX19fSx7a2V5OidfY3JlYXRlUG9wdXAnLHZhbHVlOmZ1bmN0aW9uIF9jcmVhdGVQb3B1cCgpe3ZhciBzZXR0aW5ncz1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGNvbmZpZz1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06e307dGhpcy5zZXR0aW5ncz1zZXR0aW5nczt2YXIgdGl0bGU9c2V0dGluZ3MudGl0bGUsZGF0YT1zZXR0aW5ncy5kYXRhLHN0eWxlU2NvcGU9c2V0dGluZ3Muc3R5bGVTY29wZTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTt2YXIgY2xhc3NOYW1lPSdtYXAtcG9wdXAtZGF0YSAnKyhzdHlsZVNjb3BlfHwnJyk7dmFyIG1heFdpZHRoPTQwMDt2YXIgbWluV2lkdGg9MzAwO3RoaXMuaW5pdGlhbGl6ZSh7Y2xhc3NOYW1lOmNsYXNzTmFtZSxtYXhXaWR0aDptYXhXaWR0aCxtaW5XaWR0aDptaW5XaWR0aH0pO3RoaXMuc2V0Q29udGVudChjb250ZW50KX19LHtrZXk6J19nZW5lcmF0ZVBvcHVwQ29udGVudCcsdmFsdWU6ZnVuY3Rpb24gX2dlbmVyYXRlUG9wdXBDb250ZW50KHRpdGxlLGRhdGEpe3ZhciBfdGhpczQ9dGhpczt2YXIgdG1wbEZuSWY9ZnVuY3Rpb24gdG1wbEZuSWYoZm4pe2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCx2YWxzPUFycmF5KF9sZW4yPjE/X2xlbjItMTowKSxfa2V5Mj0xO19rZXkyPF9sZW4yO19rZXkyKyspe3ZhbHNbX2tleTItMV09YXJndW1lbnRzW19rZXkyXX1yZXR1cm4gdmFscy5sZW5ndGgmJnZhbHNbMF0hPT11bmRlZmluZWQ/Zm4uY2FsbC5hcHBseShmbixbX3RoaXM0XS5jb25jYXQodmFscykpOicnfTt2YXIgdGl0bGVUbXBsPWZ1bmN0aW9uIHRpdGxlVG1wbCh0aXRsZSl7cmV0dXJuJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyXCI+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1hcC1kYXRhLWJveF9faGVhZGVyX190ZXh0XCI+Jyt0aXRsZSsnPC9oMz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICd9O3ZhciBkYXRhVG1wbD1mdW5jdGlvbiBkYXRhVG1wbChkYXRhKXt2YXIgZGF0YUxpc3Q9KDAsX2tleXMyLmRlZmF1bHQpKGRhdGEpLnJlZHVjZShmdW5jdGlvbihhY2N1bSxrZXkpe3JldHVybiBhY2N1bS5jb25jYXQoW2RhdGFJdGVtVG1wbChrZXksZGF0YVtrZXldKV0pfSxbXSkuam9pbignJyk7cmV0dXJuJ1xcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZVwiPlxcbiAgICAgICAgICAgICcrZGF0YUxpc3QrJ1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICd9O3ZhciBkYXRhSXRlbVRtcGw9ZnVuY3Rpb24gZGF0YUl0ZW1UbXBsKGxhYmVsLHZhbHVlKXtyZXR1cm4nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwLWRhdGEtYm94X190YWJsZV9fY2VsbFwiPjxwPicrbGFiZWwrJzwvcD48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXAtZGF0YS1ib3hfX3RhYmxlX19jZWxsXCI+PHA+Jyt2YWx1ZSsnPC9wPjwvZGl2PlxcbiAgICAgICd9O3JldHVybidcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFwLWJveC1kYXRhXCI+XFxuICAgICAgICAgICcrdG1wbEZuSWYodGl0bGVUbXBsLHRpdGxlKSsnXFxuICAgICAgICAgICcrdG1wbEZuSWYoZGF0YVRtcGwsZGF0YSkrJ1xcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICd9fSx7a2V5Oid1cGRhdGVTZXR0aW5ncycsdmFsdWU6ZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MoKXt2YXIgc2V0dGluZ3M9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnt9OygwLF9hc3NpZ24yLmRlZmF1bHQpKHRoaXMuc2V0dGluZ3Msc2V0dGluZ3MpO3ZhciBfc2V0dGluZ3MyPXRoaXMuc2V0dGluZ3MsdGl0bGU9X3NldHRpbmdzMi50aXRsZSxkYXRhPV9zZXR0aW5nczIuZGF0YTt2YXIgY29udGVudD10aGlzLl9nZW5lcmF0ZVBvcHVwQ29udGVudCh0aXRsZSxkYXRhKTtpZih0aGlzLmlzT3BlbigpJiYoMCxfa2V5czIuZGVmYXVsdCkoZGF0YSkubGVuZ3RoPT09MCl7dGhpcy5fY2xvc2UoKX10aGlzLnNldENvbnRlbnQoY29udGVudCk7dGhpcy51cGRhdGUoKX19XSk7cmV0dXJuIERhdGFQb3B1cH0oTC5Qb3B1cCk7O1B4TWFwLkRhdGFQb3B1cD1EYXRhUG9wdXB9KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiOjMsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiOjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIjo5LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIjoxNixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiOjE3LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI6MTksXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiOjIwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjIyfV0sMTUzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jzt2YXIgX2dldEl0ZXJhdG9yMj1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7dmFyIF9nZXRJdGVyYXRvcjM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTt2YXIgX21hcD1yZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwJyk7dmFyIF9tYXAyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9fShmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5UcmFja01hcmtlcnNJbXBsPXtwcm9wZXJ0aWVzOntmaXRUb01hcmtlcnM6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonX2ZpdE1hcFRvTWFya2Vyc0lmU2V0J30sZml0VG9NYXJrZXJzUGFkZGluZzp7dHlwZTpOdW1iZXIsdmFsdWU6MC4xNX0sZml0VG9NYXJrZXJzWm9vbTp7dHlwZTpTdHJpbmcsdmFsdWU6J21heCd9fSxhZGRJbnN0OmZ1bmN0aW9uIGFkZEluc3QocGFyZW50KXt0aGlzLmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWFkZGVkJywnX2hhbmRsZU1hcmtlckFkZGVkJyk7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLW1hcmtlci1ncm91cC1mZWF0dXJlcy1jaGFuZ2VkJywnX2hhbmRsZU1hcmtlckdyb3VwVXBkYXRlZCcpO3RoaXMuX2tub3duTWFya2Vycz10aGlzLl9rbm93bk1hcmtlcnN8fG5ldyBfbWFwMi5kZWZhdWx0O1B4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3RJbXBsLmFkZEluc3QuY2FsbCh0aGlzKX0scmVtb3ZlSW5zdDpmdW5jdGlvbiByZW1vdmVJbnN0KHBhcmVudCl7dGhpcy51bmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWFkZGVkJywnX2hhbmRsZU1hcmtlckFkZGVkJyk7dGhpcy51bmxpc3Rlbih0aGlzLCdweC1tYXAtbWFya2VyLWdyb3VwLWZlYXR1cmVzLWNoYW5nZWQnLCdfaGFuZGxlTWFya2VyR3JvdXBVcGRhdGVkJyk7aWYodGhpcy5fa25vd25NYXJrZXJzJiZ0aGlzLl9rbm93bk1hcmtlcnMgaW5zdGFuY2VvZiBfbWFwMi5kZWZhdWx0KXt0aGlzLl9rbm93bk1hcmtlcnMuY2xlYXIoKX10aGlzLl9rbm93bk1hcmtlcnM9bnVsbDtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbC5yZW1vdmVJbnN0LmNhbGwodGhpcyl9LF9oYW5kbGVNYXJrZXJBZGRlZDpmdW5jdGlvbiBfaGFuZGxlTWFya2VyQWRkZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTtpZihsb2NhbEV2dC5yb290VGFyZ2V0JiZsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0JiZsb2NhbEV2dC5ldmVudC5kZXRhaWwubGF0TG5nKXt0aGlzLl9rbm93bk1hcmtlcnMuc2V0KGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QsbG9jYWxFdnQuZXZlbnQuZGV0YWlsLmxhdExuZyk7dGhpcy5saXN0ZW4obG9jYWxFdnQucm9vdFRhcmdldCwncHgtbWFwLW1hcmtlci1yZW1vdmVkJywnX2hhbmRsZU1hcmtlclJlbW92ZWQnKTt0aGlzLl9maXRNYXBUb01hcmtlcnNJZlNldCgpfX0sX2hhbmRsZU1hcmtlclJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlclJlbW92ZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTt2YXIga25vd25NYXJrZXI9dGhpcy5fa25vd25NYXJrZXJzLmhhcyhsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0fHxudWxsKTtpZihrbm93bk1hcmtlcil7dGhpcy51bmxpc3Rlbihsb2NhbEV2dC5yb290VGFyZ2V0LCdweC1tYXAtbWFya2VyLXJlbW92ZWQnLCdfaGFuZGxlTWFya2VyUmVtb3ZlZCcpO3RoaXMuX2tub3duTWFya2Vycy5kZWxldGUobG9jYWxFdnQucm9vdFRhcmdldC5lbGVtZW50SW5zdCl9fSxfaGFuZGxlTWFya2VyR3JvdXBVcGRhdGVkOmZ1bmN0aW9uIF9oYW5kbGVNYXJrZXJHcm91cFVwZGF0ZWQoZXZ0KXtpZighdGhpcy5fa25vd25NYXJrZXJzKXJldHVybjt2YXIgbG9jYWxFdnQ9UG9seW1lci5kb20oZXZ0KTt2YXIga25vd25NYXJrZXI9dGhpcy5fa25vd25NYXJrZXJzLmhhcyhsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0fHxudWxsKTtpZihsb2NhbEV2dC5yb290VGFyZ2V0JiZsb2NhbEV2dC5yb290VGFyZ2V0LmVsZW1lbnRJbnN0KXtpZigha25vd25NYXJrZXIpe3RoaXMubGlzdGVuKGxvY2FsRXZ0LnJvb3RUYXJnZXQsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtcmVtb3ZlZCcsJ19oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQnKX10aGlzLl9rbm93bk1hcmtlcnMuc2V0KGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QsbG9jYWxFdnQuZXZlbnQuZGV0YWlsLmJvdW5kcyk7dGhpcy5fZml0TWFwVG9NYXJrZXJzSWZTZXQoKX19LF9oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQ6ZnVuY3Rpb24gX2hhbmRsZU1hcmtlckdyb3VwUmVtb3ZlZChldnQpe2lmKCF0aGlzLl9rbm93bk1hcmtlcnMpcmV0dXJuO3ZhciBsb2NhbEV2dD1Qb2x5bWVyLmRvbShldnQpO3ZhciBrbm93bk1hcmtlcj10aGlzLl9rbm93bk1hcmtlcnMuaGFzKGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3R8fG51bGwpO2lmKGtub3duTWFya2VyKXt0aGlzLnVubGlzdGVuKGxvY2FsRXZ0LnJvb3RUYXJnZXQsJ3B4LW1hcC1tYXJrZXItZ3JvdXAtcmVtb3ZlZCcsJ19oYW5kbGVNYXJrZXJHcm91cFJlbW92ZWQnKTt0aGlzLl9rbm93bk1hcmtlcnMuZGVsZXRlKGxvY2FsRXZ0LnJvb3RUYXJnZXQuZWxlbWVudEluc3QpfX0sX2ZpdE1hcFRvTWFya2VyczpmdW5jdGlvbiBfZml0TWFwVG9NYXJrZXJzKCl7dGhpcy5kZWJvdW5jZSgnZml0LW1hcC10by1ib3VuZHMnLGZ1bmN0aW9uKCl7aWYoIXRoaXMuX2tub3duTWFya2Vyc3x8IXRoaXMuX2tub3duTWFya2Vycy5zaXplKXJldHVybjt2YXIgYm91bmRzPXRoaXMuX21hcmtlcnNUb0JvdW5kc1dpdGhQYWRkaW5nKHRoaXMuX2tub3duTWFya2Vycyx0aGlzLmZpdFRvTWFya2Vyc1BhZGRpbmcpO2lmKGJvdW5kcyYmYm91bmRzLmlzVmFsaWQoKSl7dmFyIGxhdExuZz1ib3VuZHMuZ2V0Q2VudGVyKCk7dmFyIHpvb209dGhpcy5fZ2V0Wm9vbUxldmVsRm9yRml0KGJvdW5kcyx0aGlzLmZpdFRvTWFya2Vyc1pvb20sdGhpcy5lbGVtZW50SW5zdCk7dGhpcy5lbGVtZW50SW5zdC5zZXRWaWV3KGxhdExuZyx6b29tKX19LDEwKX0sX21hcmtlcnNUb0JvdW5kc1dpdGhQYWRkaW5nOmZ1bmN0aW9uIF9tYXJrZXJzVG9Cb3VuZHNXaXRoUGFkZGluZyhtYXJrZXJzTWFwLHBhZGRpbmcpe2lmKCFtYXJrZXJzTWFwfHwhbWFya2Vyc01hcC5zaXplKXJldHVybjt2YXIgYm91bmRzPUwubGF0TG5nQm91bmRzKCk7dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZTt2YXIgX2RpZEl0ZXJhdG9yRXJyb3I9ZmFsc2U7dmFyIF9pdGVyYXRvckVycm9yPXVuZGVmaW5lZDt0cnl7Zm9yKHZhciBfaXRlcmF0b3I9KDAsX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShtYXJrZXJzTWFwLnZhbHVlcygpKSxfc3RlcDshKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb249KF9zdGVwPV9pdGVyYXRvci5uZXh0KCkpLmRvbmUpO19pdGVyYXRvck5vcm1hbENvbXBsZXRpb249dHJ1ZSl7dmFyIHZhbHVlPV9zdGVwLnZhbHVlO2lmKHZhbHVlIGluc3RhbmNlb2YgTC5MYXRMbmd8fHZhbHVlIGluc3RhbmNlb2YgTC5MYXRMbmdCb3VuZHMpe2JvdW5kcy5leHRlbmQodmFsdWUpfX19Y2F0Y2goZXJyKXtfZGlkSXRlcmF0b3JFcnJvcj10cnVlO19pdGVyYXRvckVycm9yPWVycn1maW5hbGx5e3RyeXtpZighX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiYmX2l0ZXJhdG9yLnJldHVybil7X2l0ZXJhdG9yLnJldHVybigpfX1maW5hbGx5e2lmKF9kaWRJdGVyYXRvckVycm9yKXt0aHJvdyBfaXRlcmF0b3JFcnJvcn19fWlmKGJvdW5kcy5pc1ZhbGlkKCkmJnR5cGVvZiBwYWRkaW5nPT09J251bWJlcicpe2JvdW5kcz1ib3VuZHMucGFkKHBhZGRpbmcpfXJldHVybiBib3VuZHN9LF9nZXRab29tTGV2ZWxGb3JGaXQ6ZnVuY3Rpb24gX2dldFpvb21MZXZlbEZvckZpdChib3VuZHMsZml0U2V0dGluZyxtYXApe2lmKGZpdFNldHRpbmc9PT0nbWluJyl7dmFyIHpvb209bWFwLmdldE1pblpvb20oKXx8MDtyZXR1cm4gem9vbX1pZihmaXRTZXR0aW5nPT09J21heCcpe3ZhciBfem9vbT1tYXAuZ2V0Qm91bmRzWm9vbShib3VuZHMsdHJ1ZSktMTtyZXR1cm4gX3pvb219fSxfZml0TWFwVG9NYXJrZXJzSWZTZXQ6ZnVuY3Rpb24gX2ZpdE1hcFRvTWFya2Vyc0lmU2V0KCl7aWYoIXRoaXMuZWxlbWVudEluc3R8fCF0aGlzLmZpdFRvTWFya2VycylyZXR1cm47dGhpcy5fZml0TWFwVG9NYXJrZXJzKCl9LGZpdE1hcFRvTWFya2VyczpmdW5jdGlvbiBmaXRNYXBUb01hcmtlcnMoKXtpZighdGhpcy5lbGVtZW50SW5zdHx8IXRoaXMuX2tub3duTWFya2Vyc3x8IXRoaXMuX2tub3duTWFya2Vycy5zaXplKXtyZXR1cm4gZmFsc2V9dGhpcy5fZml0TWFwVG9NYXJrZXJzKCk7cmV0dXJuIHRydWV9fTtQeE1hcEJlaGF2aW9yLkxlYWZsZXRSb290SW1wbD17cHJvcGVydGllczp7Y3JzOnt0eXBlOk9iamVjdH0sbGF0Ont0eXBlOk51bWJlcix2YWx1ZTozNy43NjcyMzc1LG5vdGlmeTp0cnVlLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbG5nOnt0eXBlOk51bWJlcix2YWx1ZTotMTIxLjk1ODQxMzEsbm90aWZ5OnRydWUsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSx6b29tOnt0eXBlOk51bWJlcix2YWx1ZToxMCxub3RpZnk6dHJ1ZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LG1heFpvb206e3R5cGU6TnVtYmVyLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sbWluWm9vbTp7dHlwZTpOdW1iZXIsb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxtYXhCb3VuZHM6e3R5cGU6QXJyYXksb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlRHJhZ2dpbmc6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZSxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGRpc2FibGVTY3JvbGxab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlVG91Y2hab29tOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfSxkaXNhYmxlQXR0cmlidXRpb246e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX0sYXR0cmlidXRpb25QcmVmaXg6e3R5cGU6U3RyaW5nLHZhbHVlOic8YSBocmVmPVwiaHR0cDovL2xlYWZsZXRqcy5jb21cIiB0aXRsZT1cIkEgSlMgbGlicmFyeSBmb3IgaW50ZXJhY3RpdmUgbWFwc1wiPkxlYWZsZXQ8L2E+JyxvYnNlcnZlcjonc2hvdWxkVXBkYXRlSW5zdCd9LGZsZXhUb1NpemU6e3R5cGU6Qm9vbGVhbixyZWZsZWN0VG9BdHRyaWJ1dGU6dHJ1ZSx2YWx1ZTpmYWxzZX0sZWRpdGFibGU6e3R5cGU6Qm9vbGVhbix2YWx1ZTpmYWxzZX19LGF0dGFjaGVkOmZ1bmN0aW9uIGF0dGFjaGVkKCl7dGhpcy5saXN0ZW4odGhpcywncHgtbWFwLWVsZW1lbnQtcmVhZHktdG8tYWRkJywnc2hvdWxkQWRkSW5zdCcpO2lmKHRoaXMuY2FuQWRkSW5zdCgpKXt0aGlzLmZpcmUoJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcpfX0sZGV0YWNoZWQ6ZnVuY3Rpb24gZGV0YWNoZWQoKXt0aGlzLnVubGlzdGVuKHRoaXMsJ3B4LW1hcC1lbGVtZW50LXJlYWR5LXRvLWFkZCcsJ3Nob3VsZEFkZEluc3QnKTt0aGlzLnNob3VsZFJlbW92ZUluc3QoKTt0aGlzLnJlbW92ZUluc3QoKX0sc2hvdWxkQWRkSW5zdDpmdW5jdGlvbiBzaG91bGRBZGRJbnN0KGV2dCl7aWYoUG9seW1lci5kb20oZXZ0KS5yb290VGFyZ2V0IT09dGhpcylyZXR1cm47UHhNYXBCZWhhdmlvci5FbGVtZW50SW1wbC5zaG91bGRBZGRJbnN0LmNhbGwodGhpcyk7dGhpcy5hZGRJbnN0KCl9LGNhbkFkZEluc3Q6ZnVuY3Rpb24gY2FuQWRkSW5zdCgpe3JldHVybiB0aGlzLmxhdExuZ0lzVmFsaWQodGhpcy5sYXQsdGhpcy5sbmcpfSxjcmVhdGVJbnN0OmZ1bmN0aW9uIGNyZWF0ZUluc3Qob3B0aW9ucyl7dmFyIG1hcEVsPVBvbHltZXIuZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignI21hcCcpO3ZhciBtYXBJbnN0PUwubWFwKG1hcEVsLG9wdGlvbnMpO21hcEluc3QuYXR0cmlidXRpb25Db250cm9sLnNldFByZWZpeChvcHRpb25zLmF0dHJpYnV0aW9uUHJlZml4KTtpZih0aGlzLmlzU2hhZHlTY29wZWQoKSl7bWFwSW5zdC5fX2FkZFNoYWR5U2NvcGU9dGhpcy5zY29wZVN1YnRyZWUuYmluZCh0aGlzKX1yZXR1cm4gbWFwSW5zdH0sYWRkSW5zdDpmdW5jdGlvbiBhZGRJbnN0KCl7aWYodGhpcy5pc1NoYWR5U2NvcGVkKCkpe3RoaXMuc2NvcGVTdWJ0cmVlKHRoaXMuJC5tYXAsdHJ1ZSl9dmFyIG1hcE1vdmVGbj10aGlzLl9oYW5kbGVNYXBNb3ZlLmJpbmQodGhpcyk7dmFyIHpvb21TdGFydEZuPXRoaXMuX2hhbmRsZVpvb21TdGFydC5iaW5kKHRoaXMpO3ZhciB6b29tRW5kRm49dGhpcy5faGFuZGxlWm9vbUVuZC5iaW5kKHRoaXMpO3RoaXMuYmluZEV2ZW50cyh7J21vdmVlbmQnOm1hcE1vdmVGbiwnem9vbXN0YXJ0Jzp6b29tU3RhcnRGbiwnem9vbWVuZCc6em9vbUVuZEZufSl9LHJlbW92ZUluc3Q6ZnVuY3Rpb24gcmVtb3ZlSW5zdCgpe2lmKHRoaXMuaXNTaGFkeVNjb3BlZCgpKXt0aGlzLnNjb3BlU3VidHJlZSh0aGlzLiQubWFwLGZhbHNlKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7dmFyIG9wdGlvbnM9e307b3B0aW9ucy56b29tQ29udHJvbD1mYWxzZTtvcHRpb25zLmNycz10aGlzLmNyc3x8TC5DUlMuRVBTRzM4NTc7b3B0aW9ucy5jZW50ZXI9W3RoaXMubGF0LHRoaXMubG5nXTtvcHRpb25zLnpvb209dGhpcy56b29tO29wdGlvbnMubWluWm9vbT10aGlzLm1pblpvb218fDA7b3B0aW9ucy5tYXhab29tPXRoaXMubWF4Wm9vbXx8MTg7b3B0aW9ucy5tYXhCb3VuZHM9dGhpcy5tYXhCb3VuZHN8fHVuZGVmaW5lZDtvcHRpb25zLmRyYWdnaW5nPSF0aGlzLmRpc2FibGVEcmFnZ2luZztvcHRpb25zLnNjcm9sbFdoZWVsWm9vbT0hdGhpcy5kaXNhYmxlU2Nyb2xsWm9vbTtvcHRpb25zLnRvdWNoWm9vbT0hdGhpcy5kaXNhYmxlVG91Y2hab29tO29wdGlvbnMuYXR0cmlidXRpb25Db250cm9sPSF0aGlzLmRpc2FibGVBdHRyaWJ1dGlvbjtvcHRpb25zLmVkaXRhYmxlPXRoaXMuZWRpdGFibGU7b3B0aW9ucy5hdHRyaWJ1dGlvblByZWZpeD10aGlzLmF0dHJpYnV0aW9uUHJlZml4O3JldHVybiBvcHRpb25zfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKHRoaXMubGF0TG5nSXNWYWxpZChuZXh0T3B0aW9ucy5jZW50ZXJbMF0sbmV4dE9wdGlvbnMuY2VudGVyWzFdKSYmKGxhc3RPcHRpb25zLmNlbnRlclswXSE9PW5leHRPcHRpb25zLmNlbnRlclswXXx8bGFzdE9wdGlvbnMuY2VudGVyWzFdIT09bmV4dE9wdGlvbnMuY2VudGVyWzFdfHxsYXN0T3B0aW9ucy56b29tIT09bmV4dE9wdGlvbnMuem9vbSkpe3RoaXMuX3VwZGF0ZU1hcFZpZXcoKX1pZihsYXN0T3B0aW9ucy5tYXhab29tIT09bmV4dE9wdGlvbnMubWF4Wm9vbSYmIWlzTmFOKG5leHRPcHRpb25zLm1heFpvb20pKXt0aGlzLnNldE1heFpvb20obmV4dE9wdGlvbnMubWF4Wm9vbSl9aWYobGFzdE9wdGlvbnMubWluWm9vbSE9PW5leHRPcHRpb25zLm1pblpvb20mJiFpc05hTihuZXh0T3B0aW9ucy5taW5ab29tKSl7dGhpcy5zZXRNaW5ab29tKG5leHRPcHRpb25zLm1pblpvb20pfWlmKGxhc3RPcHRpb25zLm1heEJvdW5kcyE9PW5leHRPcHRpb25zLm1heEJvdW5kcyYmIWlzTmFOKG5leHRPcHRpb25zLm1heEJvdW5kcykpe3RoaXMuc2V0TWF4Qm91bmRzKG5leHRPcHRpb25zLm1heEJvdW5kcyl9aWYoIWxhc3RPcHRpb25zLmRyYWdnaW5nJiZuZXh0T3B0aW9ucy5kcmFnZ2luZyl7dGhpcy5lbGVtZW50SW5zdC5kcmFnZ2luZy5lbmFibGUoKX1pZihsYXN0T3B0aW9ucy5kcmFnZ2luZyYmIW5leHRPcHRpb25zLmRyYWdnaW5nKXt0aGlzLmVsZW1lbnRJbnN0LmRyYWdnaW5nLmRpc2FibGUoKX1pZighbGFzdE9wdGlvbnMuc2Nyb2xsV2hlZWxab29tJiZuZXh0T3B0aW9ucy5zY3JvbGxXaGVlbFpvb20pe3RoaXMuZWxlbWVudEluc3Quc2Nyb2xsV2hlZWxab29tLmVuYWJsZSgpfWlmKGxhc3RPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSYmIW5leHRPcHRpb25zLnNjcm9sbFdoZWVsWm9vbSl7dGhpcy5lbGVtZW50SW5zdC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpfWlmKCFsYXN0T3B0aW9ucy50b3VjaFpvb20mJm5leHRPcHRpb25zLnRvdWNoWm9vbSl7dGhpcy5lbGVtZW50SW5zdC50b3VjaFpvb20uZW5hYmxlKCl9aWYobGFzdE9wdGlvbnMudG91Y2hab29tJiYhbmV4dE9wdGlvbnMudG91Y2hab29tKXt0aGlzLmVsZW1lbnRJbnN0LnRvdWNoWm9vbS5kaXNhYmxlKCl9aWYobGFzdE9wdGlvbnMuYXR0cmlidXRpb25QcmVmaXghPT1uZXh0T3B0aW9ucy5hdHRyaWJ1dGlvblByZWZpeCl7dGhpcy5lbGVtZW50SW5zdC5hdHRyaWJ1dGlvbkNvbnRyb2wuc2V0UHJlZml4KG5leHRPcHRpb25zLmF0dHJpYnV0aW9uUHJlZml4KX19LF91cGRhdGVNYXBWaWV3OmZ1bmN0aW9uIF91cGRhdGVNYXBWaWV3KCl7aWYoIXRoaXMuZWxlbWVudEluc3QpcmV0dXJuO3RoaXMuZGVib3VuY2UoJ3VwZGF0ZS1tYXAtdmlldycsZnVuY3Rpb24oKXt2YXIgX2VsZW1lbnRJbnN0JGdldENlbnRlPXRoaXMuZWxlbWVudEluc3QuZ2V0Q2VudGVyKCksbGF0PV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sYXQsbG5nPV9lbGVtZW50SW5zdCRnZXRDZW50ZS5sbmc7dmFyIHpvb209dGhpcy5lbGVtZW50SW5zdC5nZXRab29tKCk7aWYodGhpcy5sYXQhPT1sYXR8fHRoaXMubG5nIT09bG5nfHx0aGlzLnpvb20hPT16b29tKXt0aGlzLmVsZW1lbnRJbnN0LnNldFZpZXcoW3RoaXMubGF0LHRoaXMubG5nXSx0aGlzLnpvb20pfX0pfSxfY2FuQmVOdW06ZnVuY3Rpb24gX2NhbkJlTnVtKHZhbCl7cmV0dXJuIWlzTmFOKHZhbCkmJnZhbCE9PScnfSxsYXRMbmdJc1ZhbGlkOmZ1bmN0aW9uIGxhdExuZ0lzVmFsaWQobGF0LGxuZyl7dmFyIGlzVmFsaWQ9dHlwZW9mIGxhdCE9PSd1bmRlZmluZWQnJiZ0aGlzLl9jYW5CZU51bShsYXQpJiZ0eXBlb2YgbG5nIT09J3VuZGVmaW5lZCcmJnRoaXMuX2NhbkJlTnVtKGxuZyk7aWYoaXNWYWxpZClyZXR1cm4gdHJ1ZTtjb25zb2xlLmxvZygnUFgtTUFQIENPTkZJR1VSQVRJT04gRVJST1I6XFxuICAgICAgICBZb3UgZW50ZXJlZCBhbiBpbnZhbGlkIGBsYXRgIG9yIGBsbmdgIGF0dHJpYnV0ZSBmb3IgJyt0aGlzLmlzKycuIFlvdSBtdXN0IHBhc3MgYSB2YWxpZCBudW1iZXIuJyk7cmV0dXJuIGZhbHNlfSxfaGFuZGxlTWFwTW92ZTpmdW5jdGlvbiBfaGFuZGxlTWFwTW92ZSgpe2lmKHRoaXMuX19pc1pvb21pbmcpe3RoaXMuX19vblpvb21FbmQ9dGhpcy5faGFuZGxlTWFwTW92ZS5iaW5kKHRoaXMpO3JldHVybn10aGlzLmRlYm91bmNlKCdoYW5kbGUtbWFwLW1vdmUnLGZ1bmN0aW9uKCl7dmFyIGxhdExuZz10aGlzLmVsZW1lbnRJbnN0LmdldENlbnRlcigpO3ZhciB6b29tPXRoaXMuZWxlbWVudEluc3QuZ2V0Wm9vbSgpO3ZhciBib3VuZHM9dGhpcy5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTtpZih0aGlzLmxhdCE9PWxhdExuZy5sYXR8fHRoaXMubG5nIT09bGF0TG5nLmxuZyl7dGhpcy5zZXQoJ2xhdCcsbGF0TG5nLmxhdCk7dGhpcy5zZXQoJ2xuZycsbGF0TG5nLmxuZyl9aWYodGhpcy56b29tIT09em9vbSl7dGhpcy5zZXQoJ3pvb20nLHpvb20pfXRoaXMuZmlyZSgncHgtbWFwLW1vdmVkJyx7bGF0OmxhdExuZy5sYXQsbG5nOmxhdExuZy5sbmcsem9vbTp6b29tLGJvdW5kczpib3VuZHN9KX0pfSxfaGFuZGxlWm9vbVN0YXJ0OmZ1bmN0aW9uIF9oYW5kbGVab29tU3RhcnQoKXt0aGlzLl9faXNab29taW5nPXRydWV9LF9oYW5kbGVab29tRW5kOmZ1bmN0aW9uIF9oYW5kbGVab29tRW5kKCl7dGhpcy5fX2lzWm9vbWluZz1mYWxzZTtpZih0eXBlb2YgdGhpcy5fX29uWm9vbUVuZD09PSdmdW5jdGlvbicpe3RoaXMuX19vblpvb21FbmQoKTt0aGlzLl9fb25ab29tRW5kPW51bGx9fSxnZXRWaXNpYmxlTWFya2VyczpmdW5jdGlvbiBnZXRWaXNpYmxlTWFya2Vycygpe3ZhciBtYXBCb3VuZHM9dGhpcy5lbGVtZW50SW5zdC5nZXRCb3VuZHMoKTt2YXIgbWFya2Vycz1bXTt0aGlzLmVsZW1lbnRJbnN0LmVhY2hMYXllcihmdW5jdGlvbihsYXllcil7aWYobGF5ZXIuaXNNYXJrZXImJmxheWVyLmdldExhdExuZyl7aWYobWFwQm91bmRzLmNvbnRhaW5zKGxheWVyLmdldExhdExuZygpKSYmbWFya2Vycy5pbmRleE9mKGxheWVyKT09PS0xKXttYXJrZXJzLnB1c2gobGF5ZXIpfX1pZihsYXllci5fbWFya2VyQ2x1c3Rlcil7bGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uKG1hcmtlcil7dmFyIHBhcmVudENsdXN0ZXI9bGF5ZXIuZ2V0VmlzaWJsZVBhcmVudChtYXJrZXIpO2lmKHBhcmVudENsdXN0ZXImJm1hcEJvdW5kcy5jb250YWlucyhwYXJlbnRDbHVzdGVyLmdldExhdExuZygpKSYmbWFya2VyJiZtYXJrZXJzLmluZGV4T2YobWFya2VyKT09PS0xKXttYXJrZXJzLnB1c2gobWFya2VyKX19KX19KTtyZXR1cm4gbWFya2Vyc319O1B4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3Q9W1B4TWFwQmVoYXZpb3IuRWxlbWVudCxQeE1hcEJlaGF2aW9yLlBhcmVudExheWVyLFB4TWFwQmVoYXZpb3IuTGVhZmxldFJvb3RJbXBsLFB4TWFwQmVoYXZpb3IuVHJhY2tNYXJrZXJzSW1wbF19KSgpO1xuXG59LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIjoxLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcFwiOjR9XSwxNTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt3aW5kb3cuUHhNYXBCZWhhdmlvcj13aW5kb3cuUHhNYXBCZWhhdmlvcnx8e307UHhNYXBCZWhhdmlvci5UaWxlTGF5ZXJJbXBsPXtwcm9wZXJ0aWVzOnt1cmw6e3R5cGU6U3RyaW5nLG9ic2VydmVyOidzaG91bGRVcGRhdGVJbnN0J30sZGVjb2RlVXJsOnt0eXBlOkJvb2xlYW4sdmFsdWU6ZmFsc2Usb2JzZXJ2ZXI6J3Nob3VsZFVwZGF0ZUluc3QnfX0sY2FuQWRkSW5zdDpmdW5jdGlvbiBjYW5BZGRJbnN0KCl7cmV0dXJuIHR5cGVvZiB0aGlzLnVybD09PSdzdHJpbmcnJiZ0aGlzLnVybC5sZW5ndGh9LGNyZWF0ZUluc3Q6ZnVuY3Rpb24gY3JlYXRlSW5zdChvcHRpb25zKXtyZXR1cm4gTC50aWxlTGF5ZXIob3B0aW9ucy51cmwpfSx1cGRhdGVJbnN0OmZ1bmN0aW9uIHVwZGF0ZUluc3QobGFzdE9wdGlvbnMsbmV4dE9wdGlvbnMpe2lmKGxhc3RPcHRpb25zLnVybCE9PW5leHRPcHRpb25zLnVybCl7dGhpcy5lbGVtZW50SW5zdC5zZXRVcmwobmV4dE9wdGlvbnMudXJsKX19LGdldEluc3RPcHRpb25zOmZ1bmN0aW9uIGdldEluc3RPcHRpb25zKCl7cmV0dXJue3VybDp0aGlzLmRlY29kZVVybD9kZWNvZGVVUkkodGhpcy51cmwpOnRoaXMudXJsfX19O1B4TWFwQmVoYXZpb3IuVGlsZUxheWVyPVtQeE1hcEJlaGF2aW9yLkxheWVyLFB4TWFwQmVoYXZpb3IuVGlsZUxheWVySW1wbF19KSgpO1xuXG59LHt9XX0se30sWzE0NCwxNDksMTQzLDE0NSwxNDYsMTQ4LDE0NywxNTAsMTUxLDE1MiwxNTMsMTU0XSk7XG4iXSwiZmlsZSI6InB4LW1hcC1idW5kbGUuanMifQ==
