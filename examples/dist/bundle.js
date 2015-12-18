require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"event-emitter":undefined}],2:[function(require,module,exports){
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

/**
 * Simple component to display loading message
 */

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

},{"react":undefined}],"@trungdq88/react-datatable":[function(require,module,exports){
/**
 * Created by dinhquangtrung on 9/28/15.
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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FriendlyLoaderJs = require('./FriendlyLoader.js');

var _FriendlyLoaderJs2 = _interopRequireDefault(_FriendlyLoaderJs);

var _DataSource = require('./DataSource');

var _DataSource2 = _interopRequireDefault(_DataSource);

/**
 * Available properties:
 * - id: HTML id attribute for <table> element
 * - perpage: Number of item to display perpage
 * - dataSource: DataSource object to provide data
 * - query: default query which contains filter settings. This is used for friendly-url 
 *   when attach a DataTable to a page. See documentation for detail.
 * - onQueryChange(query): callback to receive filter settings when it changes.
 * - sortable: boolean: allow columns to be sortable or not. Sortable fields are defined
 *   in DataSource object
 * - searchable: boolean: add a searchbox at top of table. Search fields are defined in
 *   DataSource object
 */

var DataTable = (function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable() {
    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(DataTable.prototype), 'constructor', this).apply(this, args);

    // Default values
    this.DEFAULT_PER_PAGE = 10;
    this.PAGES_BEFORE = 3;
    this.PAGES_AFTER = 4;

    // Default state
    this.state = {
      total: 0,
      entities: [],
      doneLoading: false,
      page: 1,
      perpage: this.props.perpage || this.DEFAULT_PER_PAGE,
      search: undefined,
      sortProperty: undefined,
      sortOrderDesc: true,
      filter: {},
      failed: false
    };

    // Set data source
    this.dataSource = this.props.dataSource;

    // If query object is provided, load filter settings from query
    if (this.props.query) {
      this.setFilter(this.props.query);
    }

    // References to helper
    this.onDataChange = this._onDataChange.bind(this);
    this.onDataFailed = this._onDataFailed.bind(this);
  }

  // Property types

  /**
   * Bind event from data source when component is mounted
   */

  _createClass(DataTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dataSource.bind('change', this.onDataChange);
      this.dataSource.bind('failed', this.onDataFailed);
      this.fetch();
    }

    /**
     * Unbind event when component is going to be unmounted
     */
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dataSource.unbind('change', this.onDataChange);
      this.dataSource.unbind('failed', this.onDataFailed);
    }

    /**
     * Handle Enter key from search box
     */
  }, {
    key: 'onSearchBoxKeydown',
    value: function onSearchBoxKeydown(e) {
      if (e.nativeEvent.keyCode === 13) {
        this.search();
      }
    }

    /**
     * Set filter from query object
     */
  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.state.page = query.page;
      this.state.search = query.search;
      this.state.perpage = query.perpage;
      this.state.sortProperty = query.sortProperty;
      this.state.sortOrderDesc = query.sortOrderDesc;
      this.state.filter = query.filter;
    }

    /**
     * Retrieve query object from current filter settings
     */
  }, {
    key: 'getFilterQuery',
    value: function getFilterQuery() {
      return {
        page: this.state.page,
        search: this.state.search,
        perpage: this.state.perpage,
        sortProperty: this.state.sortProperty,
        sortOrderDesc: this.state.sortOrderDesc,
        filter: this.state.filter
      };
    }

    /**
     * Return true if current filter settings is not changed
     */
  }, {
    key: 'isFilterQueryChanged',
    value: function isFilterQueryChanged() {
      return !(this.state.page === 1 && this.state.search === undefined && this.state.perpage === this.DEFAULT_PER_PAGE && this.state.sortProperty === undefined && this.state.sortOrderDesc === true && Object.keys(this.state.filter).length === 0);
    }

    /**
     * Send fetching request to get data from data source
     */
  }, {
    key: 'fetch',
    value: function fetch() {
      this.dataSource.fetch(this.state.page, this.state.search, this.state.sortProperty, this.state.sortOrderDesc, this.state.filter, this.state.perpage);
    }

    /**
     * Handle data from data source changed
     */
  }, {
    key: '_onDataChange',
    value: function _onDataChange() {
      // Get data from data sources
      var data = this.dataSource.get();
      this.state.total = data.total;
      this.state.entities = data.entities;
      this.state.page = data.page;
      this.state.perpage = data.perpage;
      this.state.search = data.search;
      this.state.sortProperty = data.sortProperty;
      this.state.sortOrderDesc = data.sortOrderDesc;
      this.setState({
        doneLoading: true
      });

      // Dispatch event if query changed
      if (this.isFilterQueryChanged()) {
        this.props.onQueryChange && this.props.onQueryChange(this.getFilterQuery());
      }
    }

    /**
     * Handle data failed
     */
  }, {
    key: '_onDataFailed',
    value: function _onDataFailed() {
      this.setState({
        failed: true
      });
    }

    /**
     * Send search request.
     * Return to page 1 when search
     */
  }, {
    key: 'search',
    value: function search() {
      // Set to page 1 when trigger search.
      this.state.doneLoading = false;
      this.state.page = 1;
      this.forceUpdate();
      this.fetch();
    }

    /**
     * 
     * @sortProperty {string}: property name to be sort 
     * @sortable {boolean}: identify if the property should be sorted
     */
  }, {
    key: 'sort',
    value: function sort(sortProperty, sortable) {
      if (sortable) {
        // Do the 3-state switching: asc/desc/none
        if (this.state.sortProperty === sortProperty) {
          if (this.state.sortOrderDesc === false) this.state.sortOrderDesc = true;else if (this.state.sortOrderDesc === true) this.state.sortOrderDesc = null;else if (this.state.sortOrderDesc === null) this.state.sortOrderDesc = false;
        } else {
          this.state.sortOrderDesc = false;
        }

        // Send sort request
        this.state.sortProperty = sortProperty;
        this.state.doneLoading = false;
        this.forceUpdate();
        this.fetch();
      }
    }

    /**
     * Load new page
     */
  }, {
    key: 'goToPage',
    value: function goToPage(pageNum) {
      this.state.page = pageNum;
      this.setState({
        doneLoading: false,
        page: pageNum
      });
      this.fetch();
    }

    /**
     * Handle search keyword change
     */
  }, {
    key: 'onSearchKeywordChanged',
    value: function onSearchKeywordChanged(e) {
      this.setState({
        search: e.target.value
      });
    }

    /**
     * Filter results
     *
     * @property {string}: property name used for filter
     * @value {string}: value of the property that should only be shown
     */
  }, {
    key: 'filter',
    value: function filter(property, value) {
      if (property) {
        // Construct the `filter` object
        if (value === undefined) {
          delete this.state.filter[property];
        } else {
          this.state.filter[property] = value;
        }

        // Send filter request
        this.state.doneLoading = false;
        this.state.page = 1;
        this.forceUpdate();
        this.fetch();
      }
    }

    /**
     * Render search box
     */
  }, {
    key: 'renderSearchbox',
    value: function renderSearchbox() {
      var placeholder = 'Search...';
      if (this.dataSource.meta.searchFields) {
        placeholder = 'Search ' + this.dataSource.meta.searchFields.join(', ').replace(/_/g, ' ') + '...';
      }
      return _react2['default'].createElement(
        'div',
        { className: 'input-group search-box' },
        _react2['default'].createElement('input', { type: 'search',
          className: 'form-control',
          placeholder: placeholder,
          value: this.state.search,
          onChange: this.onSearchKeywordChanged.bind(this),
          onKeyPress: this.onSearchBoxKeydown.bind(this) }),
        _react2['default'].createElement(
          'span',
          { className: 'input-group-btn' },
          _react2['default'].createElement(
            'button',
            { className: 'btn btn-primary btn-block', onClick: this.search.bind(this) },
            _react2['default'].createElement('i', { className: 'fa fa-search' })
          )
        )
      );
    }

    /**
     * Render pagination
     */
  }, {
    key: 'renderPaging',
    value: function renderPaging() {
      var pageElements = [];

      // If the data source has no information about total page, we always display
      // one more extra page
      var totalPage = this.state.total !== undefined ? Math.ceil(this.state.total / this.state.perpage) : this.state.page + 1;

      // Only show pages when total page is > 1
      if (totalPage <= 1) return '';

      if (this.state.page > this.PAGES_BEFORE + 1) {
        pageElements.push(_react2['default'].createElement(
          'li',
          { key: 'pageLink0' },
          _react2['default'].createElement(
            'a',
            { onClick: this.goToPage.bind(this, 1) },
            'First'
          )
        ));
      }
      // Loop through 3 pages before current page to 3 pages after current page
      for (var i = this.state.page - this.PAGES_BEFORE; i < this.state.page + this.PAGES_AFTER; i++) {
        // Dont show invalid case (ex: i = -1, or i > totalPage caused by the loop range)
        if (i >= 1 && i <= totalPage) {
          if (i === this.state.page) {
            pageElements.push(_react2['default'].createElement(
              'li',
              { key: 'pageLink' + i, className: 'active' },
              _react2['default'].createElement(
                'a',
                null,
                i
              )
            ));
          } else {
            pageElements.push(_react2['default'].createElement(
              'li',
              { key: 'pageLink' + i },
              _react2['default'].createElement(
                'a',
                { onClick: this.goToPage.bind(this, i) },
                i
              )
            ));
          }
        }
      }

      if (this.state.page < totalPage - this.PAGES_AFTER + 1) {
        pageElements.push(_react2['default'].createElement(
          'li',
          { key: 'pageLink' + totalPage },
          _react2['default'].createElement(
            'a',
            { onClick: this.goToPage.bind(this, totalPage) },
            'Last'
          )
        ));
      }
      return _react2['default'].createElement(
        'nav',
        { className: 'text-right' },
        _react2['default'].createElement(
          'ul',
          { className: 'pagination' },
          pageElements
        )
      );
    }

    /**
     * Main render method.
     * @returns {XML}
     */
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      // Get all fields to be displayed from data source
      var fields = this.dataSource.getFields();

      // Generate all items as rows
      var items = this.state.entities.map(function (entity, rowIndex) {
        var values = fields.map(function (row, cellIndex) {
          var propertyObject = row[1]; // either a string or transform object
          var value = undefined;
          if (typeof propertyObject === 'string') {
            value = entity[propertyObject];
          } else if (typeof propertyObject === 'object') {
            value = propertyObject.transform.bind(entity)(entity[propertyObject.field]);
          }
          return _react2['default'].createElement(
            'td',
            { key: _this.dataSource.name + '_' + rowIndex + '_' + cellIndex },
            value
          );
        });

        return _react2['default'].createElement(
          'tr',
          { key: _this.dataSource.name + rowIndex },
          _react2['default'].createElement(
            'td',
            null,
            (_this.state.page - 1) * _this.state.perpage + rowIndex + 1
          ),
          values
        );
      });

      // Generate header row, including sort, filter button if needed
      var headings = fields.map(function (row, index) {
        var heading = row[0];
        var property = typeof row[1] === 'string' ? row[1] : row[1].field;
        var propertySortable = row[2] === undefined;
        var propertyFilterable = row[3] !== undefined;

        // Show sort icon if the list is defined as sortable and current field is sortable
        var sortable = _this.props.sortable && propertySortable;
        var sortIcon = undefined;
        if (sortable) {
          if (_this.state.sortProperty === property && _this.state.sortOrderDesc !== null) {
            sortIcon = _this.state.sortOrderDesc ? _react2['default'].createElement('i', { className: 'fa fa-sort-desc' }) : _react2['default'].createElement('i', { className: 'fa fa-sort-asc' });
          } else {
            sortIcon = _react2['default'].createElement('i', { className: 'fa fa-sort' });
          }
        }

        // Render filter icons
        var filterIcon = undefined;
        if (propertyFilterable) {
          var filterItems = row[3].map(function (value) {
            return _react2['default'].createElement(
              'li',
              { key: 'filter-value-' + property + '-' + value.id },
              _react2['default'].createElement(
                'a',
                { onClick: _this.filter.bind(_this, property, value.id) },
                _this.state.filter[property] === value.id ? _react2['default'].createElement('i', { className: 'fa fa-dot-circle-o' }) : _react2['default'].createElement('i', { className: 'fa fa-circle-o' }),
                ' ',
                value.label
              )
            );
          });
          filterIcon = _react2['default'].createElement(
            'div',
            { className: 'btn-group' },
            _react2['default'].createElement(
              'button',
              { type: 'button',
                className: 'btn btn-xs dropdown-toggle ' + (_this.state.filter[property] === undefined ? 'btn-default' : 'btn-success'),
                'data-toggle': 'dropdown',
                'aria-haspopup': 'true', 'aria-expanded': 'false' },
              _react2['default'].createElement('i', { className: 'fa fa-filter' })
            ),
            _react2['default'].createElement(
              'ul',
              { className: 'dropdown-menu' },
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { onClick: _this.filter.bind(_this, property, undefined) },
                  _react2['default'].createElement('i', { className: 'fa fa-times' }),
                  ' No filter'
                )
              ),
              _react2['default'].createElement('li', { role: 'separator', className: 'divider' }),
              filterItems
            )
          );
        }

        return _react2['default'].createElement(
          'th',
          { key: _this.dataSource.name + 'th' + index,
            className: 'has-filter-' + (propertyFilterable ? 'true' : '') },
          _react2['default'].createElement(
            'span',
            { className: 'pull-right' },
            filterIcon
          ),
          _react2['default'].createElement(
            'span',
            { className: 'sort-icon', onClick: _this.sort.bind(_this, property, sortable) },
            heading,
            ' ',
            sortIcon
          )
        );
      });

      // Build the table and return to `render` method
      return _react2['default'].createElement(
        'div',
        { className: 'react-datatable' },
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement('div', { className: 'col-sm-8' }),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-4' },
            this.props.searchable ? this.renderSearchbox() : ''
          )
        ),
        _react2['default'].createElement(
          'table',
          { className: (0, _classnames2['default'])('table table-bordered table-striped', { sortable: this.props.sortable }), id: this.props.id },
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              null,
              _react2['default'].createElement(
                'th',
                null,
                '#'
              ),
              headings
            )
          ),
          _react2['default'].createElement(
            'tbody',
            null,
            this.state.entities.length > 0 ? items : _react2['default'].createElement(
              'tr',
              null,
              _react2['default'].createElement(
                'td',
                { className: 'text-center',
                  colSpan: headings.length + 1 },
                this.state.doneLoading ? 'This list is empty' : ''
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])('overlay-all', { 'hide': this.state.doneLoading }) },
          _react2['default'].createElement(_FriendlyLoaderJs2['default'], { key: 'loader-' + this.state.failed, failed: this.state.failed })
        ),
        this.renderPaging()
      );
    }
  }]);

  return DataTable;
})(_react2['default'].Component);

DataTable.propTypes = {
  id: _react2['default'].PropTypes.string.isRequired,
  dataSource: _react2['default'].PropTypes.object.isRequired,
  perpage: _react2['default'].PropTypes.number,
  query: _react2['default'].PropTypes.string,
  onQueryChange: _react2['default'].PropTypes.func,
  sortable: _react2['default'].PropTypes.bool,
  searchable: _react2['default'].PropTypes.bool
};

DataTable.DataSource = _DataSource2['default'];
exports['default'] = DataTable;
module.exports = exports['default'];

},{"./DataSource":1,"./FriendlyLoader.js":2,"classnames":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9zcmMvRGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9GcmllbmRseUxvYWRlci5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9EYXRhVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7NEJDQXlCLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUFTbkIsVUFBVTs7Ozs7OztBQU1sQixXQU5RLFVBQVUsQ0FNakIsSUFBSSxFQUFFOzBCQU5DLFVBQVU7OztBQVEzQixRQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOzs7QUFHM0IsUUFBSSxDQUFDLE1BQU0sR0FBRywrQkFBYSxFQUFFLENBQUMsQ0FBQzs7O0FBRy9CLFFBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7R0FDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFsQmtCLFVBQVU7O1dBb0N4QixlQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQ2hFLGFBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7OztXQVFRLHFCQUFHO0FBQ1YsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcs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QUFNO0FBQzdCLGVBQWEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNuQyxVQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDOUIsWUFBVSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJO0NBQ25DLENBQUM7O0FBRUYsU0FBUyxDQUFDLFVBQVUsMEJBQWEsQ0FBQztxQkFDbkIsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50LWVtaXR0ZXInO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEwLzIvMTUuXG4gKlxuICogQWJzdHJhY3QgY2xhc3NcbiAqIENvbnRhaW5zOlxuICogLSBEYXRhIHNvdXJjZSBmb3IgRGF0YVRhYmxlIChBUEkgb3IgZXhpc3RpbmcgYXJyYXkgb2YgZWxlbWVudHMpXG4gKiAtIEZpZWxkIHNjaGVtYSB0byBkaXNwbGF5IG9uIERhdGFUYWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU291cmNlIHtcblxuICAvKipcbiAgICogRWFjaCBkYXRhIHNvdXJjZSBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBuYW1lIHRvIG1ha2UgdGhlIGRlYnVnXG4gICAqIHByb2Nlc3MgZWFzaWVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgLy8gQ29uc3RhbnRzXG4gICAgdGhpcy5ERUZBVUxUX1BFUl9QQUdFID0gMTA7XG5cbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHRoaXMuX2V2ZW50ID0gRXZlbnRFbWl0dGVyKHt9KTtcblxuICAgIC8vIFB1YmxpYyB2YXJpYWJsZXNcbiAgICB0aGlzLm1ldGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmV4dHJhQ29sdW1zID0gW107XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gZmV0Y2ggZGF0YSAodmlhIEFQSSBvciB3aGF0ZXZlcilcbiAgICogUGxlYXNlIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byBnZXQgZGF0YSBmcm9tIGFueSBBUEkgZW5kcG9pbnRcbiAgICogb3IgZnJvbSBhIHN0YXRpYyBhcnJheS4gVGhpcyBtZXRob2Qgc2hvdWxkIGFzc2lnbiB0aGUgYHRoaXMuZGF0YWBcbiAgICogdmFyaWFibGUgaW4gdGhlIHJpZ2h0IHNjaGVtYSB3aGljaCBsYXRlciB3aWxsIGJlIGdldCBmcm9tIGB0aGlzLmdldCgpYFxuICAgKiBtZXRob2QuXG4gICAqXG4gICAqIENhbGwgYHRoaXMudHJpZ2dlcignY2hhbmdlJylgIHdoZW4gdGhlIGRhdGEgaXMgbG9hZGVkXG4gICAqIENhbGwgYHRoaXMudHJpZ2dlcignZmFpbGVkJylgIHdoZW4gdGhlIGRhdGEgaXMgZmFpbGVkIHRvIGxvYWRcbiAgICogXG4gICAqIEBwYWdlIHtudW1iZXJ9IHJlcXVlc3RlZCBwYWdlIG51bWJlclxuICAgKiBAc2VhcmNoIHtzdHJpbmd9IGtleXdvcmQgZW50ZXJlZCBpbiBzZWFyY2ggYm94XG4gICAqIEBzb3J0UHJvcGVydHkge3N0cmluZ30gcHJvcGVydHkgb2YgdGhlIGNvbHVtbiB0aGF0IG5lZWQgdG8gYmUgc29ydGVkXG4gICAqIEBzb3J0T3JkZXJEZXNjIHtib29sZWFufSBlcXVhbHMgYHRydWVgIGlmIHNvcnQgaW4gRGVzYyBvcmRlciwgYGZhbHNlYCA9IEFzY1xuICAgKiBAcGVycGFnZSB7bnVtYmVyfSBudW1iZXIgb2YgaXRlbXMgdG8gZGlzcGxheWVkIGluIG9uZSBwYWdlXG4gICAqL1xuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcignTm90IGltcGxlbWVudGVkIScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBmaWVsZHMgZnJvbSBzY2hlbWEgdG8gZGlzcGxheSBvbiBEYXRhVGFibGUgY29uY2F0XG4gICAqIHdpdGggZXh0cmFDb2x1bW5zIGlmIGFueS5cbiAgICogUmVhZCBkb2N1bWVudGF0aW9uIGZvciBsaXN0IGZpZWxkcyBzY2hlbWEuXG4gICAqIChleHRyYUNvbHVtbnMgYWxzbyBmb2xsb3cgdGhlIGxpc3QgZmllbGRzIHNjaGVtYSlcbiAgICovXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLmxpc3RGaWVsZHMuY29uY2F0KHRoaXMuZXh0cmFDb2x1bXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IGZldGNoZWQgZGF0YVxuICAgKiBgdGhpcy5kYXRhYCBzaG91bGQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICogLSB0b3RhbDogdG90YWwgZW50aXR5IG51bWJlclxuICAgKiAtIHBhZ2U6IGN1cnJlbnQgcGFnZVxuICAgKiAtIGVudGl0aWVzOiBlbnRpdGllcyBmb3IgY3VycmVudCBwYWdlXG4gICAqIC0gcGVycGFnZTogbnVtYmVyIG9mIHJlc3VsdHMgcGVyIHBhZ2VcbiAgICogLSBzZWFyY2g6IHNlYXJjaCBrZXl3b3JkXG4gICAqIC0gc29ydFByb3BlcnR5OiBzb3J0IHByb3BlcnR5LCB1bmRlZmluZWQgaWYgbm8gc29ydFxuICAgKiAtIHNvcnRPcmRlckRlc2M6IHRydWUgb2Ygc29ydCBpbiBkZXNjZW5kaW5nIG9yZGVyLCBmYWxzZSBpZiBhc2NlbmRpbmdcbiAgICovXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgc2V0RXh0cmFDb2x1bW5zKGV4dHJhQ29sdW1ucykge1xuICAgIHRoaXMuZXh0cmFDb2x1bXMgPSBleHRyYUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudCBmb3IgZGF0YSBzb3VyY2VcbiAgICovXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5fZXZlbnQub24uYXBwbHkodGhpcy5fZXZlbnQsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGV2ZW50XG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5fZXZlbnQub2ZmLmFwcGx5KHRoaXMuX2V2ZW50LCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXZlbnRzXG4gICAqL1xuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX2V2ZW50LmVtaXQuYXBwbHkodGhpcy5fZXZlbnQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMC80LzE1LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogU2ltcGxlIGNvbXBvbmVudCB0byBkaXNwbGF5IGxvYWRpbmcgbWVzc2FnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRseUxvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFpbGVkOiB0aGlzLnByb3BzLmZhaWxlZCB8fCBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMubGFzdFNheSA9ICcnO1xuICAgIHRoaXMuc2F5cyA9IFtcbiAgICAgICdCZSBwYXRpZW50LCB5b3VyIGRhdGEgaXMgY29taW5nLi4uJyxcbiAgICAgICdHZXR0aW5nIGRhdGEsIGp1c3QgZm9yIHlvdS4gSGFuZyB0aWdodC4uLicsXG4gICAgICAnUGxlYXNlIHdhaXQuLi4nLFxuICAgICAgJ0xvYWRpbmcgeW91ciBkYXRhLi4uJyxcbiAgICBdO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmYWlsZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmFpbGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZyb3duLW9cIj48L2k+XG4gICAgICAgICAgPGg1Pk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgY29udGFjdCBhZG1pbi48L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBzYXkgPSB0aGlzLnNheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zYXlzLmxlbmd0aCldO1xuICAgIHdoaWxlIChzYXkgPT09IHRoaXMubGFzdFNheSkge1xuICAgICAgc2F5ID0gdGhpcy5zYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2F5cy5sZW5ndGgpXTtcbiAgICB9XG4gICAgdGhpcy5sYXN0U2F5ID0gc2F5O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJkZWxheS1zaG93aW5nXCI+e3RoaXMucHJvcHMubWVzc2FnZSB8fCBzYXl9PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzI4LzE1LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGcmllbmRseUxvYWRlciBmcm9tICcuL0ZyaWVuZGx5TG9hZGVyLmpzJztcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vRGF0YVNvdXJjZSc7XG5cbi8qKlxuICogQXZhaWxhYmxlIHByb3BlcnRpZXM6XG4gKiAtIGlkOiBIVE1MIGlkIGF0dHJpYnV0ZSBmb3IgPHRhYmxlPiBlbGVtZW50XG4gKiAtIHBlcnBhZ2U6IE51bWJlciBvZiBpdGVtIHRvIGRpc3BsYXkgcGVycGFnZVxuICogLSBkYXRhU291cmNlOiBEYXRhU291cmNlIG9iamVjdCB0byBwcm92aWRlIGRhdGFcbiAqIC0gcXVlcnk6IGRlZmF1bHQgcXVlcnkgd2hpY2ggY29udGFpbnMgZmlsdGVyIHNldHRpbmdzLiBUaGlzIGlzIHVzZWQgZm9yIGZyaWVuZGx5LXVybCBcbiAqICAgd2hlbiBhdHRhY2ggYSBEYXRhVGFibGUgdG8gYSBwYWdlLiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsLlxuICogLSBvblF1ZXJ5Q2hhbmdlKHF1ZXJ5KTogY2FsbGJhY2sgdG8gcmVjZWl2ZSBmaWx0ZXIgc2V0dGluZ3Mgd2hlbiBpdCBjaGFuZ2VzLlxuICogLSBzb3J0YWJsZTogYm9vbGVhbjogYWxsb3cgY29sdW1ucyB0byBiZSBzb3J0YWJsZSBvciBub3QuIFNvcnRhYmxlIGZpZWxkcyBhcmUgZGVmaW5lZFxuICogICBpbiBEYXRhU291cmNlIG9iamVjdFxuICogLSBzZWFyY2hhYmxlOiBib29sZWFuOiBhZGQgYSBzZWFyY2hib3ggYXQgdG9wIG9mIHRhYmxlLiBTZWFyY2ggZmllbGRzIGFyZSBkZWZpbmVkIGluXG4gKiAgIERhdGFTb3VyY2Ugb2JqZWN0XG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8vIERlZmF1bHQgdmFsdWVzXG4gICAgdGhpcy5ERUZBVUxUX1BFUl9QQUdFID0gMTA7XG4gICAgdGhpcy5QQUdFU19CRUZPUkUgPSAzO1xuICAgIHRoaXMuUEFHRVNfQUZURVIgPSA0O1xuXG4gICAgLy8gRGVmYXVsdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwZXJwYWdlOiB0aGlzLnByb3BzLnBlcnBhZ2UgfHwgdGhpcy5ERUZBVUxUX1BFUl9QQUdFLFxuICAgICAgc2VhcmNoOiB1bmRlZmluZWQsXG4gICAgICBzb3J0UHJvcGVydHk6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnRPcmRlckRlc2M6IHRydWUsXG4gICAgICBmaWx0ZXI6IHt9LFxuICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgLy8gU2V0IGRhdGEgc291cmNlXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xuXG4gICAgLy8gSWYgcXVlcnkgb2JqZWN0IGlzIHByb3ZpZGVkLCBsb2FkIGZpbHRlciBzZXR0aW5ncyBmcm9tIHF1ZXJ5XG4gICAgaWYgKHRoaXMucHJvcHMucXVlcnkpIHtcbiAgICAgIHRoaXMuc2V0RmlsdGVyKHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cblxuICAgIC8vIFJlZmVyZW5jZXMgdG8gaGVscGVyXG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UgPSB0aGlzLl9vbkRhdGFDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0YUZhaWxlZCA9IHRoaXMuX29uRGF0YUZhaWxlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgZnJvbSBkYXRhIHNvdXJjZSB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuYmluZCgnY2hhbmdlJywgdGhpcy5vbkRhdGFDaGFuZ2UpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5iaW5kKCdmYWlsZWQnLCB0aGlzLm9uRGF0YUZhaWxlZCk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudCB3aGVuIGNvbXBvbmVudCBpcyBnb2luZyB0byBiZSB1bm1vdW50ZWRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS51bmJpbmQoJ2NoYW5nZScsIHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UudW5iaW5kKCdmYWlsZWQnLCB0aGlzLm9uRGF0YUZhaWxlZCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIEVudGVyIGtleSBmcm9tIHNlYXJjaCBib3hcbiAgICovXG4gIG9uU2VhcmNoQm94S2V5ZG93bihlKSB7XG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmaWx0ZXIgZnJvbSBxdWVyeSBvYmplY3RcbiAgICovXG4gIHNldEZpbHRlcihxdWVyeSkge1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHF1ZXJ5LnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zZWFyY2ggPSBxdWVyeS5zZWFyY2g7XG4gICAgdGhpcy5zdGF0ZS5wZXJwYWdlID0gcXVlcnkucGVycGFnZTtcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IHF1ZXJ5LnNvcnRQcm9wZXJ0eTtcbiAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBxdWVyeS5zb3J0T3JkZXJEZXNjO1xuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gcXVlcnkuZmlsdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHF1ZXJ5IG9iamVjdCBmcm9tIGN1cnJlbnQgZmlsdGVyIHNldHRpbmdzXG4gICAqL1xuICBnZXRGaWx0ZXJRdWVyeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLnNlYXJjaCxcbiAgICAgIHBlcnBhZ2U6IHRoaXMuc3RhdGUucGVycGFnZSxcbiAgICAgIHNvcnRQcm9wZXJ0eTogdGhpcy5zdGF0ZS5zb3J0UHJvcGVydHksXG4gICAgICBzb3J0T3JkZXJEZXNjOiB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MsXG4gICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgY3VycmVudCBmaWx0ZXIgc2V0dGluZ3MgaXMgbm90IGNoYW5nZWRcbiAgICovXG4gIGlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkge1xuICAgIHJldHVybiAhKHRoaXMuc3RhdGUucGFnZSA9PT0gMSAmJlxuICAgIHRoaXMuc3RhdGUuc2VhcmNoID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPT09IHRoaXMuREVGQVVMVF9QRVJfUEFHRSAmJlxuICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUgJiZcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZpbHRlcikubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGZldGNoaW5nIHJlcXVlc3QgdG8gZ2V0IGRhdGEgZnJvbSBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZmV0Y2goKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZldGNoKFxuICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2gsXG4gICAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSxcbiAgICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyxcbiAgICAgIHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgdGhpcy5zdGF0ZS5wZXJwYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgZGF0YSBmcm9tIGRhdGEgc291cmNlIGNoYW5nZWRcbiAgICovXG4gIF9vbkRhdGFDaGFuZ2UoKSB7XG4gICAgLy8gR2V0IGRhdGEgZnJvbSBkYXRhIHNvdXJjZXNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmdldCgpO1xuICAgIHRoaXMuc3RhdGUudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgIHRoaXMuc3RhdGUuZW50aXRpZXMgPSBkYXRhLmVudGl0aWVzO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IGRhdGEucGFnZTtcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPSBkYXRhLnBlcnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zZWFyY2ggPSBkYXRhLnNlYXJjaDtcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IGRhdGEuc29ydFByb3BlcnR5O1xuICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IGRhdGEuc29ydE9yZGVyRGVzYztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggZXZlbnQgaWYgcXVlcnkgY2hhbmdlZFxuICAgIGlmICh0aGlzLmlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25RdWVyeUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uUXVlcnlDaGFuZ2UodGhpcy5nZXRGaWx0ZXJRdWVyeSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGRhdGEgZmFpbGVkXG4gICAqL1xuICBfb25EYXRhRmFpbGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmFpbGVkOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgc2VhcmNoIHJlcXVlc3QuXG4gICAqIFJldHVybiB0byBwYWdlIDEgd2hlbiBzZWFyY2hcbiAgICovXG4gIHNlYXJjaCgpIHtcbiAgICAvLyBTZXQgdG8gcGFnZSAxIHdoZW4gdHJpZ2dlciBzZWFyY2guXG4gICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IDE7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHNvcnRQcm9wZXJ0eSB7c3RyaW5nfTogcHJvcGVydHkgbmFtZSB0byBiZSBzb3J0IFxuICAgKiBAc29ydGFibGUge2Jvb2xlYW59OiBpZGVudGlmeSBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIHNvcnRlZFxuICAgKi9cbiAgc29ydChzb3J0UHJvcGVydHksIHNvcnRhYmxlKSB7XG4gICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAvLyBEbyB0aGUgMy1zdGF0ZSBzd2l0Y2hpbmc6IGFzYy9kZXNjL25vbmVcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9PT0gc29ydFByb3BlcnR5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IGZhbHNlKSB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUpIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IG51bGw7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9PT0gbnVsbCkgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VuZCBzb3J0IHJlcXVlc3RcbiAgICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnR5O1xuICAgICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5ldyBwYWdlXG4gICAqL1xuICBnb1RvUGFnZShwYWdlTnVtKSB7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gcGFnZU51bTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IHBhZ2VOdW0sXG4gICAgfSk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzZWFyY2gga2V5d29yZCBjaGFuZ2VcbiAgICovXG4gIG9uU2VhcmNoS2V5d29yZENoYW5nZWQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgcmVzdWx0c1xuICAgKlxuICAgKiBAcHJvcGVydHkge3N0cmluZ306IHByb3BlcnR5IG5hbWUgdXNlZCBmb3IgZmlsdGVyXG4gICAqIEB2YWx1ZSB7c3RyaW5nfTogdmFsdWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgc2hvdWxkIG9ubHkgYmUgc2hvd25cbiAgICovXG4gIGZpbHRlcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgYGZpbHRlcmAgb2JqZWN0XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbmQgZmlsdGVyIHJlcXVlc3RcbiAgICAgIHRoaXMuc3RhdGUuZG9uZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUucGFnZSA9IDE7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBzZWFyY2ggYm94XG4gICAqL1xuICByZW5kZXJTZWFyY2hib3goKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5tZXRhLnNlYXJjaEZpZWxkcykge1xuICAgICAgcGxhY2Vob2xkZXIgPSAnU2VhcmNoICcgKyB0aGlzLmRhdGFTb3VyY2UubWV0YVxuICAgICAgICAgIC5zZWFyY2hGaWVsZHMuam9pbignLCAnKS5yZXBsYWNlKC9fL2csICcgJykgKyAnLi4uJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgc2VhcmNoLWJveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hLZXl3b3JkQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vblNlYXJjaEJveEtleWRvd24uYmluZCh0aGlzKX0vPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgcGFnaW5hdGlvblxuICAgKi9cbiAgcmVuZGVyUGFnaW5nKCkge1xuICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgdGhlIGRhdGEgc291cmNlIGhhcyBubyBpbmZvcm1hdGlvbiBhYm91dCB0b3RhbCBwYWdlLCB3ZSBhbHdheXMgZGlzcGxheVxuICAgIC8vIG9uZSBtb3JlIGV4dHJhIHBhZ2VcbiAgICBjb25zdCB0b3RhbFBhZ2UgPSB0aGlzLnN0YXRlLnRvdGFsICE9PSB1bmRlZmluZWQgP1xuICAgICAgTWF0aC5jZWlsKHRoaXMuc3RhdGUudG90YWwgLyB0aGlzLnN0YXRlLnBlcnBhZ2UpIDogdGhpcy5zdGF0ZS5wYWdlICsgMTtcblxuICAgIC8vIE9ubHkgc2hvdyBwYWdlcyB3aGVuIHRvdGFsIHBhZ2UgaXMgPiAxXG4gICAgaWYgKHRvdGFsUGFnZSA8PSAxKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYWdlID4gdGhpcy5QQUdFU19CRUZPUkUgKyAxKSB7XG4gICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rMCd9PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhZ2UuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICBGaXJzdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIExvb3AgdGhyb3VnaCAzIHBhZ2VzIGJlZm9yZSBjdXJyZW50IHBhZ2UgdG8gMyBwYWdlcyBhZnRlciBjdXJyZW50IHBhZ2VcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGF0ZS5wYWdlIC0gdGhpcy5QQUdFU19CRUZPUkU7XG4gICAgICAgICBpIDwgdGhpcy5zdGF0ZS5wYWdlICsgdGhpcy5QQUdFU19BRlRFUjsgaSsrKSB7XG4gICAgICAvLyBEb250IHNob3cgaW52YWxpZCBjYXNlIChleDogaSA9IC0xLCBvciBpID4gdG90YWxQYWdlIGNhdXNlZCBieSB0aGUgbG9vcCByYW5nZSlcbiAgICAgIGlmIChpID49IDEgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgICAgaWYgKGkgPT09IHRoaXMuc3RhdGUucGFnZSkge1xuICAgICAgICAgIHBhZ2VFbGVtZW50cy5wdXNoKFxuICAgICAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rJyArIGl9IGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhPntpfTwvYT48L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUVsZW1lbnRzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXsncGFnZUxpbmsnICsgaX0+PGEgb25DbGljaz17dGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMsIGkpfT57aX08L2E+PC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA8IHRvdGFsUGFnZSAtIHRoaXMuUEFHRVNfQUZURVIgKyAxKSB7XG4gICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rJyArIHRvdGFsUGFnZX0+XG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMsIHRvdGFsUGFnZSl9PlxuICAgICAgICAgICAgTGFzdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICB7cGFnZUVsZW1lbnRzfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIHJlbmRlciBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtYTUx9XG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy8gR2V0IGFsbCBmaWVsZHMgdG8gYmUgZGlzcGxheWVkIGZyb20gZGF0YSBzb3VyY2VcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0RmllbGRzKCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhbGwgaXRlbXMgYXMgcm93c1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5lbnRpdGllcy5tYXAoKGVudGl0eSwgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGZpZWxkcy5tYXAoKHJvdywgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5T2JqZWN0ID0gcm93WzFdOyAvLyBlaXRoZXIgYSBzdHJpbmcgb3IgdHJhbnNmb3JtIG9iamVjdFxuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlPYmplY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsdWUgPSBlbnRpdHlbcHJvcGVydHlPYmplY3RdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wZXJ0eU9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5T2JqZWN0LnRyYW5zZm9ybVxuICAgICAgICAgICAgLmJpbmQoZW50aXR5KShlbnRpdHlbcHJvcGVydHlPYmplY3QuZmllbGRdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZCBrZXk9e3RoaXMuZGF0YVNvdXJjZS5uYW1lICsgJ18nICsgcm93SW5kZXggKyAnXycgKyBjZWxsSW5kZXh9PlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyByb3dJbmRleH0+XG4gICAgICAgICAgPHRkPnsodGhpcy5zdGF0ZS5wYWdlIC0gMSkgKiB0aGlzLnN0YXRlLnBlcnBhZ2UgKyByb3dJbmRleCArIDF9PC90ZD5cbiAgICAgICAgICB7dmFsdWVzfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIEdlbmVyYXRlIGhlYWRlciByb3csIGluY2x1ZGluZyBzb3J0LCBmaWx0ZXIgYnV0dG9uIGlmIG5lZWRlZFxuICAgIGNvbnN0IGhlYWRpbmdzID0gZmllbGRzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGluZyA9IHJvd1swXTtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdHlwZW9mIHJvd1sxXSA9PT0gJ3N0cmluZycgPyByb3dbMV0gOiByb3dbMV0uZmllbGQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eVNvcnRhYmxlID0gcm93WzJdID09PSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eUZpbHRlcmFibGUgPSByb3dbM10gIT09IHVuZGVmaW5lZDtcblxuICAgICAgLy8gU2hvdyBzb3J0IGljb24gaWYgdGhlIGxpc3QgaXMgZGVmaW5lZCBhcyBzb3J0YWJsZSBhbmQgY3VycmVudCBmaWVsZCBpcyBzb3J0YWJsZVxuICAgICAgY29uc3Qgc29ydGFibGUgPSB0aGlzLnByb3BzLnNvcnRhYmxlICYmIHByb3BlcnR5U29ydGFibGU7XG4gICAgICBsZXQgc29ydEljb247XG4gICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID09PSBwcm9wZXJ0eSAmJiB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgICAgICBzb3J0SWNvbiA9ICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWRlc2NcIi8+IDpcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtYXNjXCIvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEljb24gPSA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0XCIvPjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW5kZXIgZmlsdGVyIGljb25zXG4gICAgICBsZXQgZmlsdGVySWNvbjtcbiAgICAgIGlmIChwcm9wZXJ0eUZpbHRlcmFibGUpIHtcbiAgICAgICAgY29uc3QgZmlsdGVySXRlbXMgPSByb3dbM10ubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsnZmlsdGVyLXZhbHVlLScgKyBwcm9wZXJ0eSArICctJyArIHZhbHVlLmlkfT5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5maWx0ZXIuYmluZCh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUuaWQpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB2YWx1ZS5pZCA/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3QtY2lyY2xlLW9cIi8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIi8+fSB7dmFsdWUubGFiZWx9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbHRlckljb24gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biBidG4teHMgZHJvcGRvd24tdG9nZ2xlICdcbiAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAnYnRuLWRlZmF1bHQnIDogJ2J0bi1zdWNjZXNzJyl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXJcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZpbHRlci5iaW5kKHRoaXMsIHByb3BlcnR5LCB1bmRlZmluZWQpfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPiBObyBmaWx0ZXI8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyAndGgnICsgaW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9eydoYXMtZmlsdGVyLScgKyAocHJvcGVydHlGaWx0ZXJhYmxlID8gJ3RydWUnIDogJycpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICB7ZmlsdGVySWNvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1pY29uXCIgb25DbGljaz17dGhpcy5zb3J0LmJpbmQodGhpcywgcHJvcGVydHksIHNvcnRhYmxlKX0+XG4gICAgICAgICAgICB7aGVhZGluZ30ge3NvcnRJY29ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgdGFibGUgYW5kIHJldHVybiB0byBgcmVuZGVyYCBtZXRob2RcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kYXRhdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gdGhpcy5yZW5kZXJTZWFyY2hib3goKSA6ICcnfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkJyxcbiAgICAgICAgIHtzb3J0YWJsZTogdGhpcy5wcm9wcy5zb3J0YWJsZX0pfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgIHtoZWFkaW5nc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVudGl0aWVzLmxlbmd0aCA+IDAgPyBpdGVtcyA6XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb2xTcGFuPXtoZWFkaW5ncy5sZW5ndGggKyAxfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb25lTG9hZGluZyA/ICdUaGlzIGxpc3QgaXMgZW1wdHknIDogJyd9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPn1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdvdmVybGF5LWFsbCcsIHsnaGlkZSc6IHRoaXMuc3RhdGUuZG9uZUxvYWRpbmd9KX0+XG4gICAgICAgICAgPEZyaWVuZGx5TG9hZGVyIGtleT17J2xvYWRlci0nICsgdGhpcy5zdGF0ZS5mYWlsZWR9IGZhaWxlZD17dGhpcy5zdGF0ZS5mYWlsZWR9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RoaXMucmVuZGVyUGFnaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFByb3BlcnR5IHR5cGVzXG5EYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YVNvdXJjZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHBlcnBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25RdWVyeUNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc29ydGFibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaGFibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5EYXRhVGFibGUuRGF0YVNvdXJjZSA9IERhdGFTb3VyY2U7XG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iXX0=
