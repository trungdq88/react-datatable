'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _eventEmitter = require('event-emitter');

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

/**
 * Created by dinhquangtrung on 10/2/15.
 *
 * Abstract class
 * Contains:
 * - Data source for DataTable (API or existing array of elements)
 * - List of fields to display on DataTable
 */

var DataSource = (function () {
  function DataSource(name) {
    _classCallCheck(this, DataSource);

    this.DEFAULT_PER_PAGE = 10;
    this.name = name;
    this.data = [];
    this._event = (0, _eventEmitter2['default'])({});
    this.extraParams = {};
    this.extraColums = [];
  }

  /**
   * Start to fetch data (via API or whatever)
   */

  _createClass(DataSource, [{
    key: 'fetch',
    value: function fetch() {
      console.error('Not implemented!');
    }

    /**
     * Return fields schema to display on DataTable
     */
  }, {
    key: 'getFields',
    value: function getFields() {
      console.error('Not implemented!');
    }

    /**
     * Asynchronously get current fetched data
     * Should return:
     * - total: total entity number
     * - page: current page
     * - entities: entities for current page
     * - perpage: number of results per page
     * - search: search keyword
     * - sortProperty: sort property, undefined if no sort
     * - sortOrderDesc: true of sort in descending order, false if ascending
     */
  }, {
    key: 'get',
    value: function get() {
      return this.data;
    }

    /**
     * Bind event for data source
     */
  }, {
    key: 'bind',
    value: function bind() {
      this._event.on.apply(this._event, arguments);
    }

    /**
     * Unbind event
     */
  }, {
    key: 'unbind',
    value: function unbind() {
      this._event.off.apply(this._event, arguments);
    }

    /**
     * Trigger events
     */
  }, {
    key: 'trigger',
    value: function trigger() {
      this._event.emit.apply(this._event, arguments);
    }
  }, {
    key: 'getFields',
    value: function getFields() {
      return this.entity.listFields.concat(this.extraColums);
    }
  }, {
    key: 'setExtraColumns',
    value: function setExtraColumns(extraColumns) {
      this.extraColums = extraColumns;
    }

    /**
     * Received extra param objects {key: String, value: String}
     * These params will be append to API call.
     * @param params
     */
  }, {
    key: 'setExtraParams',
    value: function setExtraParams(params) {
      this.extraParams = params;
    }
  }]);

  return DataSource;
})();

exports['default'] = DataSource;
module.exports = exports['default'];