/**
 * Created by dinhquangtrung on 10/4/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FriendlyLoader = (function (_React$Component) {
  _inherits(FriendlyLoader, _React$Component);

  function FriendlyLoader() {
    var _this = this;

    _classCallCheck(this, FriendlyLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(FriendlyLoader.prototype), 'constructor', this).apply(this, args);
    this.state = {
      failed: this.props.failed || false
    };
    this.lastSay = '';
    this.says = ['Be patient, your data is coming...', 'Getting data, just for you. Hang tight...', 'Please wait...', 'Loading your data...'];
    window.addEventListener('error', function () {
      _this.setState({
        failed: true
      });
    });
  }

  _createClass(FriendlyLoader, [{
    key: 'render',
    value: function render() {
      if (this.state.failed) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('i', { className: 'fa fa-frown-o' }),
          _react2['default'].createElement(
            'h5',
            null,
            'Oops! Something went wrong, please contact admin.'
          )
        );
      }
      var say = this.says[Math.floor(Math.random() * this.says.length)];
      while (say === this.lastSay) {
        say = this.says[Math.floor(Math.random() * this.says.length)];
      }
      this.lastSay = say;
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('i', { className: 'fa fa-refresh fa-spin' }),
        _react2['default'].createElement(
          'h5',
          { className: 'delay-showing' },
          this.props.message || say
        )
      );
    }
  }]);

  return FriendlyLoader;
})(_react2['default'].Component);

exports['default'] = FriendlyLoader;
module.exports = exports['default'];