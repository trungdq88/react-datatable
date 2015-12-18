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
 * - Field schema to display on DataTable
 */

var DataSource = (function () {

  /**
   * Each data source should have a unique name to make the debug
   * process easier
   */

  function DataSource(name) {
    _classCallCheck(this, DataSource);

    // Constants
    this.DEFAULT_PER_PAGE = 10;

    // Private variables
    this._event = (0, _eventEmitter2['default'])({});

    // Public variables
    this.meta = undefined;
    this.name = name;
    this.data = [];
    this.extraColums = [];
  }

  /**
   * Start to fetch data (via API or whatever)
   * Please implement this method to get data from any API endpoint
   * or from a static array. This method should assign the `this.data`
   * variable in the right schema which later will be get from `this.get()`
   * method.
   *
   * Call `this.trigger('change')` when the data is loaded
   * Call `this.trigger('failed')` when the data is failed to load
   * 
   * @page {number} requested page number
   * @search {string} keyword entered in search box
   * @sortProperty {string} property of the column that need to be sorted
   * @sortOrderDesc {boolean} equals `true` if sort in Desc order, `false` = Asc
   * @perpage {number} number of items to displayed in one page
   */

  _createClass(DataSource, [{
    key: 'fetch',
    value: function fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
      console.error('Not implemented!');
    }

    /**
     * Return fields from schema to display on DataTable concat
     * with extraColumns if any.
     * Read documentation for list fields schema.
     * (extraColumns also follow the list fields schema)
     */
  }, {
    key: 'getFields',
    value: function getFields() {
      return this.meta.listFields.concat(this.extraColums);
    }

    /**
     * Get current fetched data
     * `this.data` should returns an object with following properties:
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
  }, {
    key: 'setExtraColumns',
    value: function setExtraColumns(extraColumns) {
      this.extraColums = extraColumns;
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
  }]);

  return DataSource;
})();

exports['default'] = DataSource;
module.exports = exports['default'];