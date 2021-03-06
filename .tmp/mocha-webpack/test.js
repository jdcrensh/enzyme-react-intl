/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(2);

var _enzyme = __webpack_require__(10);

var _jsonfile = __webpack_require__(1);

var _jsonfile2 = _interopRequireDefault(_jsonfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = __webpack_require__(12);
var locale = 'en';
var intl = {};
var messages = {};

/**
 * Loads translation file.
 * @param {string} localeFilePath
 * @return {object} messages
 */
function loadTranslation(localeFilePath) {
    if (typeof localeFilePath == "undefined") {
        messages = {};
        return null;
    }
    var fp = path.join(__dirname, localeFilePath);
    messages = _jsonfile2.default.readFileSync("." + fp);
    return messages;
}

/**
 * Equivalent to enzyme's 'shallow' method.
 * @param {string} node React Component that requires react-intl.
 * @return {object}
 */
function shallowWithIntl(node) {
    var intlProvider = new _reactIntl.IntlProvider({ locale: locale, messages: messages }, {});

    var _intlProvider$getChil = intlProvider.getChildContext(),
        intl = _intlProvider$getChil.intl;

    return (0, _enzyme.shallow)(_react2.default.cloneElement(node, { intl: intl }), { context: { intl: intl } });
}

/**
 * Equivalent to enzyme's 'mount' method.
 * @param {string} node React Component that requires react-intl.
 * @return {object}
 */
function mountWithIntl(node) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        context = _ref.context,
        childContextTypes = _ref.childContextTypes;

    var intlProvider = new _reactIntl.IntlProvider({ locale: locale, messages: messages }, {});

    var _intlProvider$getChil2 = intlProvider.getChildContext(),
        intl = _intlProvider$getChil2.intl;

    return (0, _enzyme.mount)(_react2.default.cloneElement(node, { intl: intl }), {
        context: Object.assign({}, context, { intl: intl }),
        childContextTypes: Object.assign({}, { intl: _reactIntl.intlShape }, childContextTypes)
    });
}

function getLocale() {
    return locale;
}

function setLocale(str) {
    locale = str;
}

var enzymeReactIntl = {
    loadTranslation: loadTranslation,
    shallowWithIntl: shallowWithIntl,
    mountWithIntl: mountWithIntl,
    setLocale: setLocale,
    getLocale: getLocale
};
module.exports = enzymeReactIntl;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9)();

var jsdom = __webpack_require__(11).jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
var i = 1;
Object.keys(document.defaultView).forEach(function (property) {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

//documentRef = document;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test(props) {
        _classCallCheck(this, Test);

        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
    }

    _createClass(Test, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'first_msg' })
            );
        }
    }]);

    return Test;
}(_react2.default.Component);

exports.default = Test;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("chai-enzyme");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chai-subset");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("enzyme");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _chai = __webpack_require__(6);

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = __webpack_require__(7);

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _index = __webpack_require__(3);

var _testComponent = __webpack_require__(5);

var _testComponent2 = _interopRequireDefault(_testComponent);

var _jsonfile = __webpack_require__(1);

var _jsonfile2 = _interopRequireDefault(_jsonfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4);

var chaiSubset = __webpack_require__(8);
_chai2.default.use(chaiSubset);

_chai2.default.use((0, _chaiEnzyme2.default)());

var testLanguageFile = './test/testLanguageFile.json';
var testLanguageFileMessages = _jsonfile2.default.readFileSync(testLanguageFile);

describe('enzymeReactIntl', function () {

    it('locale should not be empty', function () {
        var localeGet = (0, _index.getLocale)();
        (0, _chai.expect)(localeGet).to.not.equal('');
    });

    describe('setLocale', function () {
        it('should set the locale', function () {
            var localeSet = 'en-GB';
            (0, _index.setLocale)(localeSet);
            var localeGet = (0, _index.getLocale)();
            (0, _chai.expect)(localeSet).to.equal(localeGet);
        });
    });
    describe('loadTranslation', function () {
        it('should load messages from the language file', function () {
            var messages = (0, _index.loadTranslation)('/test/testLanguageFile.json');
            (0, _chai.expect)(messages).to.deep.equal(testLanguageFileMessages);
        });
    });
    describe('shallowWithIntl', function () {
        it('should have intl prop passed to the component', function () {
            (0, _index.loadTranslation)('/test/testLanguageFile.json');
            var wrapper = (0, _index.shallowWithIntl)(_react2.default.createElement(_testComponent2.default, null));
            var p = wrapper.instance().props;
            (0, _chai.expect)(p).to.contain.key('intl');
        });
    });
    describe('mountWithIntl', function () {
        it('should have intl prop passed to the component', function () {
            (0, _index.loadTranslation)('/test/testLanguageFile.json');
            var wrapper = (0, _index.mountWithIntl)(_react2.default.createElement(_testComponent2.default, null));
            var p = wrapper.instance().props;
            (0, _chai.expect)(p).to.contain.key('intl');
        });
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=test.js.map