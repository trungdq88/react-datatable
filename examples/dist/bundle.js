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
   */

  _createClass(DataSource, [{
    key: 'fetch',
    value: function fetch() {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9zcmMvRGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9GcmllbmRseUxvYWRlci5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9EYXRhVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7NEJDQXlCLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUFTbkIsVUFBVTs7Ozs7OztBQU1sQixXQU5RLFVBQVUsQ0FNakIsSUFBSSxFQUFFOzBCQU5DLFVBQVU7OztBQVEzQixRQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOzs7QUFHM0IsUUFBSSxDQUFDLE1BQU0sR0FBRywrQkFBYSxFQUFFLENBQUMsQ0FBQzs7O0FBRy9CLFFBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7R0FDdkI7Ozs7Ozs7Ozs7ZUFsQmtCLFVBQVU7O1dBMkJ4QixpQkFBRztBQUNOLGFBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7OztXQVFRLHFCQUFHO0FBQ1YsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3REOzs7Ozs7Ozs7Ozs7Ozs7V0FhRSxlQUFHO0FBQ0osYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFD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SUFBSTtBQUM5QixZQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7Q0FDbkMsQ0FBQzs7QUFFRixTQUFTLENBQUMsVUFBVSwwQkFBYSxDQUFDO3FCQUNuQixTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnQtZW1pdHRlcic7XG4vKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTAvMi8xNS5cbiAqXG4gKiBBYnN0cmFjdCBjbGFzc1xuICogQ29udGFpbnM6XG4gKiAtIERhdGEgc291cmNlIGZvciBEYXRhVGFibGUgKEFQSSBvciBleGlzdGluZyBhcnJheSBvZiBlbGVtZW50cylcbiAqIC0gRmllbGQgc2NoZW1hIHRvIGRpc3BsYXkgb24gRGF0YVRhYmxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTb3VyY2Uge1xuXG4gIC8qKlxuICAgKiBFYWNoIGRhdGEgc291cmNlIHNob3VsZCBoYXZlIGEgdW5pcXVlIG5hbWUgdG8gbWFrZSB0aGUgZGVidWdcbiAgICogcHJvY2VzcyBlYXNpZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAvLyBDb25zdGFudHNcbiAgICB0aGlzLkRFRkFVTFRfUEVSX1BBR0UgPSAxMDtcblxuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gICAgdGhpcy5fZXZlbnQgPSBFdmVudEVtaXR0ZXIoe30pO1xuXG4gICAgLy8gUHVibGljIHZhcmlhYmxlc1xuICAgIHRoaXMubWV0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZXh0cmFDb2x1bXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0byBmZXRjaCBkYXRhICh2aWEgQVBJIG9yIHdoYXRldmVyKVxuICAgKiBQbGVhc2UgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIGdldCBkYXRhIGZyb20gYW55IEFQSSBlbmRwb2ludFxuICAgKiBvciBmcm9tIGEgc3RhdGljIGFycmF5LiBUaGlzIG1ldGhvZCBzaG91bGQgYXNzaWduIHRoZSBgdGhpcy5kYXRhYFxuICAgKiB2YXJpYWJsZSBpbiB0aGUgcmlnaHQgc2NoZW1hIHdoaWNoIGxhdGVyIHdpbGwgYmUgZ2V0IGZyb20gYHRoaXMuZ2V0KClgXG4gICAqIG1ldGhvZC5cbiAgICovXG4gIGZldGNoKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBpbXBsZW1lbnRlZCEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZmllbGRzIGZyb20gc2NoZW1hIHRvIGRpc3BsYXkgb24gRGF0YVRhYmxlIGNvbmNhdFxuICAgKiB3aXRoIGV4dHJhQ29sdW1ucyBpZiBhbnkuXG4gICAqIFJlYWQgZG9jdW1lbnRhdGlvbiBmb3IgbGlzdCBmaWVsZHMgc2NoZW1hLlxuICAgKiAoZXh0cmFDb2x1bW5zIGFsc28gZm9sbG93IHRoZSBsaXN0IGZpZWxkcyBzY2hlbWEpXG4gICAqL1xuICBnZXRGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YS5saXN0RmllbGRzLmNvbmNhdCh0aGlzLmV4dHJhQ29sdW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBmZXRjaGVkIGRhdGFcbiAgICogYHRoaXMuZGF0YWAgc2hvdWxkIHJldHVybnMgYW4gb2JqZWN0IHdpdGggZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAqIC0gdG90YWw6IHRvdGFsIGVudGl0eSBudW1iZXJcbiAgICogLSBwYWdlOiBjdXJyZW50IHBhZ2VcbiAgICogLSBlbnRpdGllczogZW50aXRpZXMgZm9yIGN1cnJlbnQgcGFnZVxuICAgKiAtIHBlcnBhZ2U6IG51bWJlciBvZiByZXN1bHRzIHBlciBwYWdlXG4gICAqIC0gc2VhcmNoOiBzZWFyY2gga2V5d29yZFxuICAgKiAtIHNvcnRQcm9wZXJ0eTogc29ydCBwcm9wZXJ0eSwgdW5kZWZpbmVkIGlmIG5vIHNvcnRcbiAgICogLSBzb3J0T3JkZXJEZXNjOiB0cnVlIG9mIHNvcnQgaW4gZGVzY2VuZGluZyBvcmRlciwgZmFsc2UgaWYgYXNjZW5kaW5nXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIHNldEV4dHJhQ29sdW1ucyhleHRyYUNvbHVtbnMpIHtcbiAgICB0aGlzLmV4dHJhQ29sdW1zID0gZXh0cmFDb2x1bW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgZm9yIGRhdGEgc291cmNlXG4gICAqL1xuICBiaW5kKCkge1xuICAgIHRoaXMuX2V2ZW50Lm9uLmFwcGx5KHRoaXMuX2V2ZW50LCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudFxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuX2V2ZW50Lm9mZi5hcHBseSh0aGlzLl9ldmVudCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGV2ZW50c1xuICAgKi9cbiAgdHJpZ2dlcigpIHtcbiAgICB0aGlzLl9ldmVudC5lbWl0LmFwcGx5KHRoaXMuX2V2ZW50LCBhcmd1bWVudHMpO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTAvNC8xNS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRseUxvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFpbGVkOiB0aGlzLnByb3BzLmZhaWxlZCB8fCBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMubGFzdFNheSA9ICcnO1xuICAgIHRoaXMuc2F5cyA9IFtcbiAgICAgICdCZSBwYXRpZW50LCB5b3VyIGRhdGEgaXMgY29taW5nLi4uJyxcbiAgICAgICdHZXR0aW5nIGRhdGEsIGp1c3QgZm9yIHlvdS4gSGFuZyB0aWdodC4uLicsXG4gICAgICAnUGxlYXNlIHdhaXQuLi4nLFxuICAgICAgJ0xvYWRpbmcgeW91ciBkYXRhLi4uJyxcbiAgICBdO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmYWlsZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmFpbGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZyb3duLW9cIj48L2k+XG4gICAgICAgICAgPGg1Pk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgY29udGFjdCBhZG1pbi48L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBzYXkgPSB0aGlzLnNheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zYXlzLmxlbmd0aCldO1xuICAgIHdoaWxlIChzYXkgPT09IHRoaXMubGFzdFNheSkge1xuICAgICAgc2F5ID0gdGhpcy5zYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2F5cy5sZW5ndGgpXTtcbiAgICB9XG4gICAgdGhpcy5sYXN0U2F5ID0gc2F5O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJkZWxheS1zaG93aW5nXCI+e3RoaXMucHJvcHMubWVzc2FnZSB8fCBzYXl9PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzI4LzE1LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGcmllbmRseUxvYWRlciBmcm9tICcuL0ZyaWVuZGx5TG9hZGVyLmpzJztcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vRGF0YVNvdXJjZSc7XG5cbi8qKlxuICogQXZhaWxhYmxlIHByb3BlcnRpZXM6XG4gKiAtIGlkOiBIVE1MIGlkIGF0dHJpYnV0ZSBmb3IgPHRhYmxlPiBlbGVtZW50XG4gKiAtIHBlcnBhZ2U6IE51bWJlciBvZiBpdGVtIHRvIGRpc3BsYXkgcGVycGFnZVxuICogLSBkYXRhU291cmNlOiBEYXRhU291cmNlIG9iamVjdCB0byBwcm92aWRlIGRhdGFcbiAqIC0gcXVlcnk6IGRlZmF1bHQgcXVlcnkgd2hpY2ggY29udGFpbnMgZmlsdGVyIHNldHRpbmdzLiBUaGlzIGlzIHVzZWQgZm9yIGZyaWVuZGx5LXVybCBcbiAqICAgd2hlbiBhdHRhY2ggYSBEYXRhVGFibGUgdG8gYSBwYWdlLiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsLlxuICogLSBvblF1ZXJ5Q2hhbmdlKHF1ZXJ5KTogY2FsbGJhY2sgdG8gcmVjZWl2ZSBmaWx0ZXIgc2V0dGluZ3Mgd2hlbiBpdCBjaGFuZ2VzLlxuICogLSBzb3J0YWJsZTogYm9vbGVhbjogYWxsb3cgY29sdW1ucyB0byBiZSBzb3J0YWJsZSBvciBub3QuIFNvcnRhYmxlIGZpZWxkcyBhcmUgZGVmaW5lZFxuICogICBpbiBEYXRhU291cmNlIG9iamVjdFxuICogLSBzZWFyY2hhYmxlOiBib29sZWFuOiBhZGQgYSBzZWFyY2hib3ggYXQgdG9wIG9mIHRhYmxlLiBTZWFyY2ggZmllbGRzIGFyZSBkZWZpbmVkIGluXG4gKiAgIERhdGFTb3VyY2Ugb2JqZWN0XG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8vIERlZmF1bHQgdmFsdWVzXG4gICAgdGhpcy5ERUZBVUxUX1BFUl9QQUdFID0gMTA7XG4gICAgdGhpcy5QQUdFU19CRUZPUkUgPSAzO1xuICAgIHRoaXMuUEFHRVNfQUZURVIgPSA0O1xuXG4gICAgLy8gRGVmYXVsdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwZXJwYWdlOiB0aGlzLnByb3BzLnBlcnBhZ2UgfHwgdGhpcy5ERUZBVUxUX1BFUl9QQUdFLFxuICAgICAgc2VhcmNoOiB1bmRlZmluZWQsXG4gICAgICBzb3J0UHJvcGVydHk6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnRPcmRlckRlc2M6IHRydWUsXG4gICAgICBmaWx0ZXI6IHt9LFxuICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgLy8gU2V0IGRhdGEgc291cmNlXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xuXG4gICAgLy8gSWYgcXVlcnkgb2JqZWN0IGlzIHByb3ZpZGVkLCBsb2FkIGZpbHRlciBzZXR0aW5ncyBmcm9tIHF1ZXJ5XG4gICAgaWYgKHRoaXMucHJvcHMucXVlcnkpIHtcbiAgICAgIHRoaXMuc2V0RmlsdGVyKHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cblxuICAgIC8vIFJlZmVyZW5jZXMgdG8gaGVscGVyXG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UgPSB0aGlzLl9vbkRhdGFDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0YUZhaWxlZCA9IHRoaXMuX29uRGF0YUZhaWxlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgZnJvbSBkYXRhIHNvdXJjZSB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuYmluZCgnY2hhbmdlJywgdGhpcy5vbkRhdGFDaGFuZ2UpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5iaW5kKCdmYWlsZWQnLCB0aGlzLm9uRGF0YUZhaWxlZCk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBldmVudCB3aGVuIGNvbXBvbmVudCBpcyBnb2luZyB0byBiZSB1bm1vdW50ZWRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS51bmJpbmQoJ2NoYW5nZScsIHRoaXMub25EYXRhQ2hhbmdlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UudW5iaW5kKCdmYWlsZWQnLCB0aGlzLm9uRGF0YUZhaWxlZCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIEVudGVyIGtleSBmcm9tIHNlYXJjaCBib3hcbiAgICovXG4gIG9uU2VhcmNoQm94S2V5ZG93bihlKSB7XG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmaWx0ZXIgZnJvbSBxdWVyeSBvYmplY3RcbiAgICovXG4gIHNldEZpbHRlcihxdWVyeSkge1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHF1ZXJ5LnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zZWFyY2ggPSBxdWVyeS5zZWFyY2g7XG4gICAgdGhpcy5zdGF0ZS5wZXJwYWdlID0gcXVlcnkucGVycGFnZTtcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IHF1ZXJ5LnNvcnRQcm9wZXJ0eTtcbiAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBxdWVyeS5zb3J0T3JkZXJEZXNjO1xuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gcXVlcnkuZmlsdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHF1ZXJ5IG9iamVjdCBmcm9tIGN1cnJlbnQgZmlsdGVyIHNldHRpbmdzXG4gICAqL1xuICBnZXRGaWx0ZXJRdWVyeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLnNlYXJjaCxcbiAgICAgIHBlcnBhZ2U6IHRoaXMuc3RhdGUucGVycGFnZSxcbiAgICAgIHNvcnRQcm9wZXJ0eTogdGhpcy5zdGF0ZS5zb3J0UHJvcGVydHksXG4gICAgICBzb3J0T3JkZXJEZXNjOiB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MsXG4gICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgY3VycmVudCBmaWx0ZXIgc2V0dGluZ3MgaXMgbm90IGNoYW5nZWRcbiAgICovXG4gIGlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkge1xuICAgIHJldHVybiAhKHRoaXMuc3RhdGUucGFnZSA9PT0gMSAmJlxuICAgIHRoaXMuc3RhdGUuc2VhcmNoID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPT09IHRoaXMuREVGQVVMVF9QRVJfUEFHRSAmJlxuICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUgJiZcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZpbHRlcikubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGZldGNoaW5nIHJlcXVlc3QgdG8gZ2V0IGRhdGEgZnJvbSBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZmV0Y2goKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZldGNoKFxuICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2gsXG4gICAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSxcbiAgICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyxcbiAgICAgIHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgdGhpcy5zdGF0ZS5wZXJwYWdlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgZGF0YSBmcm9tIGRhdGEgc291cmNlIGNoYW5nZWRcbiAgICovXG4gIF9vbkRhdGFDaGFuZ2UoKSB7XG4gICAgLy8gR2V0IGRhdGEgZnJvbSBkYXRhIHNvdXJjZXNcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmdldCgpO1xuICAgIHRoaXMuc3RhdGUudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgIHRoaXMuc3RhdGUuZW50aXRpZXMgPSBkYXRhLmVudGl0aWVzO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IGRhdGEucGFnZTtcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPSBkYXRhLnBlcnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zZWFyY2ggPSBkYXRhLnNlYXJjaDtcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IGRhdGEuc29ydFByb3BlcnR5O1xuICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IGRhdGEuc29ydE9yZGVyRGVzYztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggZXZlbnQgaWYgcXVlcnkgY2hhbmdlZFxuICAgIGlmICh0aGlzLmlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25RdWVyeUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uUXVlcnlDaGFuZ2UodGhpcy5nZXRGaWx0ZXJRdWVyeSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGRhdGEgZmFpbGVkXG4gICAqL1xuICBfb25EYXRhRmFpbGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmFpbGVkOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgc2VhcmNoIHJlcXVlc3QuXG4gICAqIFJldHVybiB0byBwYWdlIDEgd2hlbiBzZWFyY2hcbiAgICovXG4gIHNlYXJjaCgpIHtcbiAgICAvLyBTZXQgdG8gcGFnZSAxIHdoZW4gdHJpZ2dlciBzZWFyY2guXG4gICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IDE7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHNvcnRQcm9wZXJ0eSB7c3RyaW5nfTogcHJvcGVydHkgbmFtZSB0byBiZSBzb3J0IFxuICAgKiBAc29ydGFibGUge2Jvb2xlYW59OiBpZGVudGlmeSBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIHNvcnRlZFxuICAgKi9cbiAgc29ydChzb3J0UHJvcGVydHksIHNvcnRhYmxlKSB7XG4gICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAvLyBEbyB0aGUgMy1zdGF0ZSBzd2l0Y2hpbmc6IGFzYy9kZXNjL25vbmVcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9PT0gc29ydFByb3BlcnR5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IGZhbHNlKSB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUpIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IG51bGw7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9PT0gbnVsbCkgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VuZCBzb3J0IHJlcXVlc3RcbiAgICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnR5O1xuICAgICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5ldyBwYWdlXG4gICAqL1xuICBnb1RvUGFnZShwYWdlTnVtKSB7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gcGFnZU51bTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IHBhZ2VOdW0sXG4gICAgfSk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzZWFyY2gga2V5d29yZCBjaGFuZ2VcbiAgICovXG4gIG9uU2VhcmNoS2V5d29yZENoYW5nZWQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXIgcmVzdWx0c1xuICAgKlxuICAgKiBAcHJvcGVydHkge3N0cmluZ306IHByb3BlcnR5IG5hbWUgdXNlZCBmb3IgZmlsdGVyXG4gICAqIEB2YWx1ZSB7c3RyaW5nfTogdmFsdWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgc2hvdWxkIG9ubHkgYmUgc2hvd25cbiAgICovXG4gIGZpbHRlcihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgYGZpbHRlcmAgb2JqZWN0XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbmQgZmlsdGVyIHJlcXVlc3RcbiAgICAgIHRoaXMuc3RhdGUuZG9uZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUucGFnZSA9IDE7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBzZWFyY2ggYm94XG4gICAqL1xuICByZW5kZXJTZWFyY2hib3goKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5tZXRhLnNlYXJjaEZpZWxkcykge1xuICAgICAgcGxhY2Vob2xkZXIgPSAnU2VhcmNoICcgKyB0aGlzLmRhdGFTb3VyY2UubWV0YVxuICAgICAgICAgIC5zZWFyY2hGaWVsZHMuam9pbignLCAnKS5yZXBsYWNlKC9fL2csICcgJykgKyAnLi4uJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgc2VhcmNoLWJveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hLZXl3b3JkQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vblNlYXJjaEJveEtleWRvd24uYmluZCh0aGlzKX0vPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgcGFnaW5hdGlvblxuICAgKi9cbiAgcmVuZGVyUGFnaW5nKCkge1xuICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgdGhlIGRhdGEgc291cmNlIGhhcyBubyBpbmZvcm1hdGlvbiBhYm91dCB0b3RhbCBwYWdlLCB3ZSBhbHdheXMgZGlzcGxheVxuICAgIC8vIG9uZSBtb3JlIGV4dHJhIHBhZ2VcbiAgICBjb25zdCB0b3RhbFBhZ2UgPSB0aGlzLnN0YXRlLnRvdGFsICE9PSB1bmRlZmluZWQgP1xuICAgICAgTWF0aC5jZWlsKHRoaXMuc3RhdGUudG90YWwgLyB0aGlzLnN0YXRlLnBlcnBhZ2UpIDogdGhpcy5zdGF0ZS5wYWdlICsgMTtcblxuICAgIC8vIE9ubHkgc2hvdyBwYWdlcyB3aGVuIHRvdGFsIHBhZ2UgaXMgPiAxXG4gICAgaWYgKHRvdGFsUGFnZSA8PSAxKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYWdlID4gdGhpcy5QQUdFU19CRUZPUkUgKyAxKSB7XG4gICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rMCd9PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhZ2UuYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgICBGaXJzdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIExvb3AgdGhyb3VnaCAzIHBhZ2VzIGJlZm9yZSBjdXJyZW50IHBhZ2UgdG8gMyBwYWdlcyBhZnRlciBjdXJyZW50IHBhZ2VcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zdGF0ZS5wYWdlIC0gdGhpcy5QQUdFU19CRUZPUkU7XG4gICAgICAgICBpIDwgdGhpcy5zdGF0ZS5wYWdlICsgdGhpcy5QQUdFU19BRlRFUjsgaSsrKSB7XG4gICAgICAvLyBEb250IHNob3cgaW52YWxpZCBjYXNlIChleDogaSA9IC0xLCBvciBpID4gdG90YWxQYWdlIGNhdXNlZCBieSB0aGUgbG9vcCByYW5nZSlcbiAgICAgIGlmIChpID49IDEgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgICAgaWYgKGkgPT09IHRoaXMuc3RhdGUucGFnZSkge1xuICAgICAgICAgIHBhZ2VFbGVtZW50cy5wdXNoKFxuICAgICAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rJyArIGl9IGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxhPntpfTwvYT48L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUVsZW1lbnRzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXsncGFnZUxpbmsnICsgaX0+PGEgb25DbGljaz17dGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMsIGkpfT57aX08L2E+PC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA8IHRvdGFsUGFnZSAtIHRoaXMuUEFHRVNfQUZURVIgKyAxKSB7XG4gICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rJyArIHRvdGFsUGFnZX0+XG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMsIHRvdGFsUGFnZSl9PlxuICAgICAgICAgICAgTGFzdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICB7cGFnZUVsZW1lbnRzfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIHJlbmRlciBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtYTUx9XG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy8gR2V0IGFsbCBmaWVsZHMgdG8gYmUgZGlzcGxheWVkIGZyb20gZGF0YSBzb3VyY2VcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0RmllbGRzKCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhbGwgaXRlbXMgYXMgcm93c1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5lbnRpdGllcy5tYXAoKGVudGl0eSwgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGZpZWxkcy5tYXAoKHJvdywgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5T2JqZWN0ID0gcm93WzFdOyAvLyBlaXRoZXIgYSBzdHJpbmcgb3IgdHJhbnNmb3JtIG9iamVjdFxuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlPYmplY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsdWUgPSBlbnRpdHlbcHJvcGVydHlPYmplY3RdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wZXJ0eU9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5T2JqZWN0LnRyYW5zZm9ybVxuICAgICAgICAgICAgLmJpbmQoZW50aXR5KShlbnRpdHlbcHJvcGVydHlPYmplY3QuZmllbGRdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZCBrZXk9e3RoaXMuZGF0YVNvdXJjZS5uYW1lICsgJ18nICsgcm93SW5kZXggKyAnXycgKyBjZWxsSW5kZXh9PlxuICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRyIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyByb3dJbmRleH0+XG4gICAgICAgICAgPHRkPnsodGhpcy5zdGF0ZS5wYWdlIC0gMSkgKiB0aGlzLnN0YXRlLnBlcnBhZ2UgKyByb3dJbmRleCArIDF9PC90ZD5cbiAgICAgICAgICB7dmFsdWVzfVxuICAgICAgICA8L3RyPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIEdlbmVyYXRlIGhlYWRlciByb3csIGluY2x1ZGluZyBzb3J0LCBmaWx0ZXIgYnV0dG9uIGlmIG5lZWRlZFxuICAgIGNvbnN0IGhlYWRpbmdzID0gZmllbGRzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGluZyA9IHJvd1swXTtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdHlwZW9mIHJvd1sxXSA9PT0gJ3N0cmluZycgPyByb3dbMV0gOiByb3dbMV0uZmllbGQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eVNvcnRhYmxlID0gcm93WzJdID09PSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eUZpbHRlcmFibGUgPSByb3dbM10gIT09IHVuZGVmaW5lZDtcblxuICAgICAgLy8gU2hvdyBzb3J0IGljb24gaWYgdGhlIGxpc3QgaXMgZGVmaW5lZCBhcyBzb3J0YWJsZSBhbmQgY3VycmVudCBmaWVsZCBpcyBzb3J0YWJsZVxuICAgICAgY29uc3Qgc29ydGFibGUgPSB0aGlzLnByb3BzLnNvcnRhYmxlICYmIHByb3BlcnR5U29ydGFibGU7XG4gICAgICBsZXQgc29ydEljb247XG4gICAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID09PSBwcm9wZXJ0eSAmJiB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgICAgICBzb3J0SWNvbiA9ICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWRlc2NcIi8+IDpcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtYXNjXCIvPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEljb24gPSA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0XCIvPjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW5kZXIgZmlsdGVyIGljb25zXG4gICAgICBsZXQgZmlsdGVySWNvbjtcbiAgICAgIGlmIChwcm9wZXJ0eUZpbHRlcmFibGUpIHtcbiAgICAgICAgY29uc3QgZmlsdGVySXRlbXMgPSByb3dbM10ubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsnZmlsdGVyLXZhbHVlLScgKyBwcm9wZXJ0eSArICctJyArIHZhbHVlLmlkfT5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5maWx0ZXIuYmluZCh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUuaWQpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB2YWx1ZS5pZCA/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3QtY2lyY2xlLW9cIi8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIi8+fSB7dmFsdWUubGFiZWx9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbHRlckljb24gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biBidG4teHMgZHJvcGRvd24tdG9nZ2xlICdcbiAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAnYnRuLWRlZmF1bHQnIDogJ2J0bi1zdWNjZXNzJyl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXJcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZpbHRlci5iaW5kKHRoaXMsIHByb3BlcnR5LCB1bmRlZmluZWQpfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPiBObyBmaWx0ZXI8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyAndGgnICsgaW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9eydoYXMtZmlsdGVyLScgKyAocHJvcGVydHlGaWx0ZXJhYmxlID8gJ3RydWUnIDogJycpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICB7ZmlsdGVySWNvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1pY29uXCIgb25DbGljaz17dGhpcy5zb3J0LmJpbmQodGhpcywgcHJvcGVydHksIHNvcnRhYmxlKX0+XG4gICAgICAgICAgICB7aGVhZGluZ30ge3NvcnRJY29ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgdGFibGUgYW5kIHJldHVybiB0byBgcmVuZGVyYCBtZXRob2RcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kYXRhdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gdGhpcy5yZW5kZXJTZWFyY2hib3goKSA6ICcnfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkJyxcbiAgICAgICAgIHtzb3J0YWJsZTogdGhpcy5wcm9wcy5zb3J0YWJsZX0pfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgIHtoZWFkaW5nc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVudGl0aWVzLmxlbmd0aCA+IDAgPyBpdGVtcyA6XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb2xTcGFuPXtoZWFkaW5ncy5sZW5ndGggKyAxfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb25lTG9hZGluZyA/ICdUaGlzIGxpc3QgaXMgZW1wdHknIDogJyd9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPn1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdvdmVybGF5LWFsbCcsIHsnaGlkZSc6IHRoaXMuc3RhdGUuZG9uZUxvYWRpbmd9KX0+XG4gICAgICAgICAgPEZyaWVuZGx5TG9hZGVyIGtleT17J2xvYWRlci0nICsgdGhpcy5zdGF0ZS5mYWlsZWR9IGZhaWxlZD17dGhpcy5zdGF0ZS5mYWlsZWR9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RoaXMucmVuZGVyUGFnaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFByb3BlcnR5IHR5cGVzXG5EYXRhVGFibGUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YVNvdXJjZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHBlcnBhZ2U6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25RdWVyeUNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc29ydGFibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaGFibGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5EYXRhVGFibGUuRGF0YVNvdXJjZSA9IERhdGFTb3VyY2U7XG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGU7XG4iXX0=
