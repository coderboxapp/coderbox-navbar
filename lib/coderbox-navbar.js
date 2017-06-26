(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-router"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("coderbox-navbar", ["react", "prop-types", "react-router", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["coderbox-navbar"] = factory(require("react"), require("prop-types"), require("react-router"), require("styled-components"));
	else
		root["coderbox-navbar"] = factory(root["react"], root["prop-types"], root["react-router"], root["styled-components"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _reactRouter = __webpack_require__(2);

var _NavbarBrand = __webpack_require__("./src/components/NavbarBrand.js");

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarToggler = __webpack_require__("./src/components/NavbarToggler.js");

var _NavbarToggler2 = _interopRequireDefault(_NavbarToggler);

var _NavbarBody = __webpack_require__("./src/components/NavbarBody.js");

var _NavbarBody2 = _interopRequireDefault(_NavbarBody);

var _styles = __webpack_require__("./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components


// styles


var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (_reactRouter.browserHistory) {
        _reactRouter.browserHistory.listen(function () {
          return _this2.setState({ open: false });
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          brand = _props.brand,
          fixed = _props.fixed,
          className = _props.className;


      return _react2.default.createElement(
        _styles.NavbarStyle,
        {
          fixed: fixed,
          className: 'Navbar ' + (className || '') },
        _react2.default.createElement(_NavbarToggler2.default, { onClick: function onClick() {
            return _this3.toggle();
          } }),
        _react2.default.createElement(
          _NavbarBrand2.default,
          null,
          brand
        ),
        _react2.default.createElement(
          _NavbarBody2.default,
          { isOpen: this.state.open, onClose: function onClose() {
              return _this3.toggle();
            } },
          this.props.children
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

Navbar.propTypes = {
  fixed: _propTypes.bool,
  brand: (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string, _propTypes.object]),
  className: _propTypes.string
};
Navbar.contextTypes = { router: _propTypes.object };
exports.default = Navbar;

/***/ }),

/***/ "./src/components/NavbarBody.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarBody = function NavbarBody(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      children = _ref.children;

  return _react2.default.createElement(
    _styles.NavbarBodyStyle,
    { isOpen: isOpen, className: 'NavbarBody' },
    children,
    _react2.default.createElement('div', { className: 'overlay', onClick: onClose })
  );
};

exports.default = NavbarBody;

/***/ }),

/***/ "./src/components/NavbarBrand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarBrand = function NavbarBrand(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _styles.NavbarBrandStyle,
    { className: 'NavbarBrand' },
    children
  );
};

exports.default = NavbarBrand;

/***/ }),

/***/ "./src/components/NavbarItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _styles = __webpack_require__("./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarItem = function (_React$Component) {
  _inherits(NavbarItem, _React$Component);

  function NavbarItem() {
    _classCallCheck(this, NavbarItem);

    return _possibleConstructorReturn(this, (NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).apply(this, arguments));
  }

  _createClass(NavbarItem, [{
    key: 'isActive',
    value: function isActive(name) {
      var router = this.context.router;


      if (router) {
        return router.getCurrentLocation().pathname === name;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          icon = _props.icon,
          text = _props.text,
          hide = _props.hide,
          onClick = _props.onClick;

      if (hide) return null;

      var isActive = this.isActive(href, null, false) ? ' active' : '';

      return _react2.default.createElement(
        _styles.NavbarItemStyle,
        {
          className: 'NavbarItem' + isActive,
          href: href,
          onClick: onClick },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          icon
        ),
        ' ',
        text
      );
    }
  }]);

  return NavbarItem;
}(_react2.default.Component);

NavbarItem.propTypes = {
  icon: _propTypes.string,
  text: _propTypes.string,
  href: _propTypes.string,
  hide: _propTypes.bool,
  onClick: _propTypes.func
};
NavbarItem.defaultProps = {
  href: '',
  hide: false,
  onClick: function onClick() {
    return true;
  }
};
NavbarItem.contextTypes = { router: _propTypes.object };
exports.default = NavbarItem;

/***/ }),

/***/ "./src/components/NavbarToggler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__("./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarToggler = function NavbarToggler(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    _styles.NavbarTogglerStyle,
    { className: 'NavbarToggler' },
    _react2.default.createElement(
      'i',
      { className: 'material-icons btn-open', onClick: onClick },
      'menu'
    )
  );
};

exports.default = NavbarToggler;

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarItem = exports.Navbar = undefined;

var _Navbar = __webpack_require__("./src/components/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavbarItem = __webpack_require__("./src/components/NavbarItem.js");

var _NavbarItem2 = _interopRequireDefault(_NavbarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Navbar = _Navbar2.default;
exports.NavbarItem = _NavbarItem2.default;

/***/ }),

/***/ "./src/queries.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var breakpoints = exports.breakpoints = {
  MOBILE: '340px',
  TABLET: '740px',
  DESKTOP: '980px'
};

var MOBILE = breakpoints.MOBILE,
    TABLET = breakpoints.TABLET;
var mq = exports.mq = function mq(_ref) {
  var from = _ref.from,
      to = _ref.to;

  if (!from) {
    return '@media (max-width: ' + to + ') ';
  }

  if (from && !to) {
    return '@media (min-width: ' + from + ')';
  }

  var media = '@media (min-width: ' + from + ') and (max-width: ' + to + ') ';
  return media;
};

var onlyOnMobile = exports.onlyOnMobile = mq({ from: 0, to: MOBILE });
var onlyOnTablet = exports.onlyOnTablet = mq({ from: MOBILE, to: TABLET });
var mobileAndTablet = exports.mobileAndTablet = mq({ from: 0, to: TABLET });

/***/ }),

/***/ "./src/styles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarBrandStyle = exports.NavbarTogglerStyle = exports.NavbarItemStyle = exports.NavbarBodyStyle = exports.NavbarStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: ', ';\n  z-index: 1000;\n  min-height: 50px;\n  box-sizing: border-box;\n  padding-bottom: 3px;\n  background: white;\n  width: 100%;\n\n  &:after {\n    background: linear-gradient(to right, ', ', ', ');\n    content: \'\';\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: ', ';\n  z-index: 1000;\n  min-height: 50px;\n  box-sizing: border-box;\n  padding-bottom: 3px;\n  background: white;\n  width: 100%;\n\n  &:after {\n    background: linear-gradient(to right, ', ', ', ');\n    content: \'\';\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  & .items { z-index: 200; }\n  & .overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4);\n    transition: opacity 0.25s;\n    z-index: 100;\n  }\n\n  ', ' {\n    & .items {\n      position: fixed;\n      flex-direction: column;\n      top: 0;\n      right: ', ';\n      width: 140px;\n      bottom: 0;\n      background: white;\n      box-shadow: ', ';\n      transition: right 0.25s;\n    }\n    & .overlay {\n      display: ', ';\n    }\n  }\n'], ['\n  & .items { z-index: 200; }\n  & .overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4);\n    transition: opacity 0.25s;\n    z-index: 100;\n  }\n\n  ', ' {\n    & .items {\n      position: fixed;\n      flex-direction: column;\n      top: 0;\n      right: ', ';\n      width: 140px;\n      bottom: 0;\n      background: white;\n      box-shadow: ', ';\n      transition: right 0.25s;\n    }\n    & .overlay {\n      display: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  padding: 8px 16px;\n  margin: 0px;\n  color: black;\n  font-family: inherit;\n  box-sizing: border-box;\n  i {\n    display: block;\n  }\n  &:hover, &.active {\n    color: ', ';\n  }\n\n  ', ' {\n    width: 100%;\n    padding: 15px 15px;\n    border-bottom: 1px solid #ECEFF2;\n  }\n'], ['\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  padding: 8px 16px;\n  margin: 0px;\n  color: black;\n  font-family: inherit;\n  box-sizing: border-box;\n  i {\n    display: block;\n  }\n  &:hover, &.active {\n    color: ', ';\n  }\n\n  ', ' {\n    width: 100%;\n    padding: 15px 15px;\n    border-bottom: 1px solid #ECEFF2;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: none;\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  i {\n    color: ', ';\n    font-size: 33px;\n  }\n\n  ', ' {\n    display: block;\n  }\n'], ['\n  display: none;\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  i {\n    color: ', ';\n    font-size: 33px;\n  }\n\n  ', ' {\n    display: block;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 10px;\n  border-right: 1px solid #ECEFF2;\n  svg {\n    fill: ', ';\n  }\n'], ['\n  padding: 10px;\n  border-right: 1px solid #ECEFF2;\n  svg {\n    fill: ', ';\n  }\n']);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _queries = __webpack_require__("./src/queries.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarStyle = exports.NavbarStyle = _styledComponents2.default.div(_templateObject, function (p) {
  return p.fixed ? 'fixed' : 'relative';
}, function (p) {
  return p.theme.colors.primary;
}, function (p) {
  return p.theme.colors.primaryLight;
});

var NavbarBodyStyle = exports.NavbarBodyStyle = _styledComponents2.default.div(_templateObject2, _queries.mobileAndTablet, function (p) {
  return p.isOpen ? '0px' : '-141px';
}, function (p) {
  return p.theme.shadow;
}, function (p) {
  return p.isOpen ? 'block' : 'none';
});

var NavbarItemStyle = exports.NavbarItemStyle = _styledComponents2.default.a(_templateObject3, function (p) {
  return p.theme.colors.primary;
}, _queries.mobileAndTablet);

var NavbarTogglerStyle = exports.NavbarTogglerStyle = _styledComponents2.default.a(_templateObject4, function (p) {
  return p.theme.colors.gray;
}, _queries.mobileAndTablet);

var NavbarBrandStyle = exports.NavbarBrandStyle = _styledComponents2.default.div(_templateObject5, function (p) {
  return p.theme.colors.primary;
});

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
});
//# sourceMappingURL=coderbox-navbar.js.map