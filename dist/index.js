"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SnackbarContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SnackbarContext = /*#__PURE__*/_react["default"].createContext();

exports.SnackbarContext = SnackbarContext;

var SimpleSnackbar = function SimpleSnackbar(_ref) {
  var eventHideSnackbar = _ref.eventHideSnackbar;

  var snackbarState = _react["default"].useContext(SnackbarContext);

  var message = snackbarState.message;
  return /*#__PURE__*/_react["default"].createElement(_core.Snackbar, {
    open: Boolean(message),
    autoHideDuration: 6000,
    onClose: eventHideSnackbar,
    message: message
  });
};

var _default = function _default(Component) {
  return function (props) {
    var _React$useState = _react["default"].useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        message = _React$useState2[0],
        setMessage = _React$useState2[1];

    var showMessage = function showMessage(m) {
      return setMessage(m);
    };

    var eventHideSnackbar = function eventHideSnackbar() {
      return setMessage();
    };

    var snackbarContext = {
      eventHideSnackbar: eventHideSnackbar,
      showMessage: showMessage,
      message: message
    };
    return /*#__PURE__*/_react["default"].createElement(SnackbarContext.Provider, {
      value: snackbarContext
    }, /*#__PURE__*/_react["default"].createElement(Component, props), /*#__PURE__*/_react["default"].createElement(SimpleSnackbar, {
      eventHideSnackbar: eventHideSnackbar
    }));
  };
};

exports["default"] = _default;