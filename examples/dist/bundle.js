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

},{"react":undefined}],"react-datatable":[function(require,module,exports){
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
 * Usage
 * const dataSource = new EntityDataSource('coupon-stores-add', 'store');
 * <DataTable id={'list-facilities-data-table'} dataSource={dataSource} perpage="15" />
 */

var DataTable = (function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable() {
    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(DataTable.prototype), 'constructor', this).apply(this, args);
    this.DEFAULT_PER_PAGE = 10;
    this.PAGES_BEFORE = 3;
    this.PAGES_AFTER = 4;
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

    this.dataSource = this.props.dataSource;
    if (this.props.query) {
      this.setFilter(this.props.query);
    }

    this.onDataChange = this._onDataChange.bind(this);
    this.onDataFailed = this._onDataFailed.bind(this);
  }

  _createClass(DataTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dataSource.bind('change', this.onDataChange);
      this.dataSource.bind('failed', this.onDataFailed);
      this.fetch();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dataSource.unbind('change', this.onDataChange);
      this.dataSource.unbind('failed', this.onDataFailed);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.nativeEvent.keyCode === 13) {
        this.search();
      }
    }
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
  }, {
    key: 'isFilterQueryChanged',
    value: function isFilterQueryChanged() {
      return !(this.state.page === 1 && this.state.search === undefined && this.state.perpage === this.DEFAULT_PER_PAGE && this.state.sortProperty === undefined && this.state.sortOrderDesc === true && Object.keys(this.state.filter).length === 0);
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      this.dataSource.fetch(this.state.page, this.state.search, this.state.sortProperty, this.state.sortOrderDesc, this.state.filter, this.state.perpage);
    }
  }, {
    key: '_onDataChange',
    value: function _onDataChange() {
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
      if (this.isFilterQueryChanged()) {
        this.props.onQueryChange && this.props.onQueryChange(this.getFilterQuery());
      }
    }
  }, {
    key: '_onDataFailed',
    value: function _onDataFailed() {
      this.setState({
        failed: true
      });
    }
  }, {
    key: 'search',
    value: function search() {
      // Set to page 1 when trigger search.
      this.state.doneLoading = false;
      this.state.page = 1;
      this.forceUpdate();
      this.fetch();
    }
  }, {
    key: 'sort',
    value: function sort(sortProperty, sortable) {
      if (sortable) {
        if (this.state.sortProperty === sortProperty) {
          if (this.state.sortOrderDesc === false) this.state.sortOrderDesc = true;else if (this.state.sortOrderDesc === true) this.state.sortOrderDesc = null;else if (this.state.sortOrderDesc === null) this.state.sortOrderDesc = false;
        } else {
          this.state.sortOrderDesc = false;
        }
        this.state.sortProperty = sortProperty;
        this.state.doneLoading = false;
        this.forceUpdate();
        this.fetch();
      }
    }
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
  }, {
    key: 'changeSearchKeyword',
    value: function changeSearchKeyword(e) {
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: 'filter',
    value: function filter(property, value) {
      if (property) {
        if (value === undefined) {
          delete this.state.filter[property];
        } else {
          this.state.filter[property] = value;
        }
        this.state.doneLoading = false;
        this.state.page = 1;
        this.forceUpdate();
        this.fetch();
      }
    }
  }, {
    key: 'renderSearchbox',
    value: function renderSearchbox() {
      var placeholder = 'Search...';
      if (this.dataSource.entity.searchFields) {
        placeholder = 'Search ' + this.dataSource.entity.searchFields.join(', ').replace(/_/g, ' ') + '...';
      }
      return _react2['default'].createElement(
        'div',
        { className: 'input-group search-box' },
        _react2['default'].createElement('input', { type: 'search',
          className: 'form-control',
          placeholder: placeholder,
          value: this.state.search,
          onChange: this.changeSearchKeyword.bind(this),
          onKeyPress: this.onKeyDown.bind(this) }),
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

      // Generate header, including sort, filter button if needed
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

        var filterIcon = undefined;

        if (propertyFilterable) {
          var filterItems = row[3].getDataAsArray().map(function (value) {
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
        null,
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

DataTable.DataSource = _DataSource2['default'];
exports['default'] = DataTable;
module.exports = exports['default'];

},{"./DataSource":1,"./FriendlyLoader.js":2,"classnames":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9zcmMvRGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9GcmllbmRseUxvYWRlci5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9EYXRhVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7NEJDQXlCLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUFTbkIsVUFBVTtBQUNsQixXQURRLFVBQVUsQ0FDakIsSUFBSSxFQUFFOzBCQURDLFVBQVU7O0FBRTNCLFFBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDM0IsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLENBQUMsTUFBTSxHQUFHLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0dBQ3ZCOzs7Ozs7ZUFSa0IsVUFBVTs7V0FheEIsaUJBQUc7QUFDTixhQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7V0FLUSxxQkFBRztBQUNWLGFBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7Ozs7Ozs7O1dBWUUsZUFBRztBQUNKLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7OztXQUtHLGdCQUFHO0FBQ0wsVUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFF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SUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQyxBQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxBQUFDO1VBQ25EOzs7WUFDQTs7O2NBQ0U7Ozs7ZUFBVTtjQUNULFFBQVE7YUFDTjtXQUNHO1VBQ1I7OztZQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUNyQzs7O2NBQ0U7O2tCQUFJLFNBQVMsRUFBQyxhQUFhO0FBQ3ZCLHlCQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLG9CQUFvQixHQUFHLEVBQUU7ZUFDaEQ7YUFDRjtXQUNDO1NBQ0Y7UUFFUjs7WUFBSyxTQUFTLEVBQUUsNkJBQVcsYUFBYSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLENBQUMsQUFBQztVQUMxRSxrRUFBZ0IsR0FBRyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQyxHQUFFO1NBQzVFO1FBRUwsSUFBSSxDQUFDLFlBQVksRUFBRTtPQUNoQixDQUNOO0tBQ0g7OztTQXpYRyxTQUFTO0dBQVMsbUJBQU0sU0FBUzs7QUE0WHZDLFNBQVMsQ0FBQyxVQUFVLDBCQUFhLENBQUM7cUJBQ25CLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudC1lbWl0dGVyJztcbi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMC8yLzE1LlxuICpcbiAqIEFic3RyYWN0IGNsYXNzXG4gKiBDb250YWluczpcbiAqIC0gRGF0YSBzb3VyY2UgZm9yIERhdGFUYWJsZSAoQVBJIG9yIGV4aXN0aW5nIGFycmF5IG9mIGVsZW1lbnRzKVxuICogLSBMaXN0IG9mIGZpZWxkcyB0byBkaXNwbGF5IG9uIERhdGFUYWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuREVGQVVMVF9QRVJfUEFHRSA9IDEwO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fZXZlbnQgPSBFdmVudEVtaXR0ZXIoe30pO1xuICAgIHRoaXMuZXh0cmFQYXJhbXMgPSB7fTtcbiAgICB0aGlzLmV4dHJhQ29sdW1zID0gW107XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gZmV0Y2ggZGF0YSAodmlhIEFQSSBvciB3aGF0ZXZlcilcbiAgICovXG4gIGZldGNoKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBpbXBsZW1lbnRlZCEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZmllbGRzIHNjaGVtYSB0byBkaXNwbGF5IG9uIERhdGFUYWJsZVxuICAgKi9cbiAgZ2V0RmllbGRzKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vdCBpbXBsZW1lbnRlZCEnKTtcbiAgfVxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgZ2V0IGN1cnJlbnQgZmV0Y2hlZCBkYXRhXG4gICAqIFNob3VsZCByZXR1cm46XG4gICAqIC0gdG90YWw6IHRvdGFsIGVudGl0eSBudW1iZXJcbiAgICogLSBwYWdlOiBjdXJyZW50IHBhZ2VcbiAgICogLSBlbnRpdGllczogZW50aXRpZXMgZm9yIGN1cnJlbnQgcGFnZVxuICAgKiAtIHBlcnBhZ2U6IG51bWJlciBvZiByZXN1bHRzIHBlciBwYWdlXG4gICAqIC0gc2VhcmNoOiBzZWFyY2gga2V5d29yZFxuICAgKiAtIHNvcnRQcm9wZXJ0eTogc29ydCBwcm9wZXJ0eSwgdW5kZWZpbmVkIGlmIG5vIHNvcnRcbiAgICogLSBzb3J0T3JkZXJEZXNjOiB0cnVlIG9mIHNvcnQgaW4gZGVzY2VuZGluZyBvcmRlciwgZmFsc2UgaWYgYXNjZW5kaW5nXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IGZvciBkYXRhIHNvdXJjZVxuICAgKi9cbiAgYmluZCgpIHtcbiAgICB0aGlzLl9ldmVudC5vbi5hcHBseSh0aGlzLl9ldmVudCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZXZlbnRcbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLl9ldmVudC5vZmYuYXBwbHkodGhpcy5fZXZlbnQsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBldmVudHNcbiAgICovXG4gIHRyaWdnZXIoKSB7XG4gICAgdGhpcy5fZXZlbnQuZW1pdC5hcHBseSh0aGlzLl9ldmVudCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGdldEZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHkubGlzdEZpZWxkcy5jb25jYXQodGhpcy5leHRyYUNvbHVtcyk7XG4gIH1cblxuICBzZXRFeHRyYUNvbHVtbnMoZXh0cmFDb2x1bW5zKSB7XG4gICAgdGhpcy5leHRyYUNvbHVtcyA9IGV4dHJhQ29sdW1ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNlaXZlZCBleHRyYSBwYXJhbSBvYmplY3RzIHtrZXk6IFN0cmluZywgdmFsdWU6IFN0cmluZ31cbiAgICogVGhlc2UgcGFyYW1zIHdpbGwgYmUgYXBwZW5kIHRvIEFQSSBjYWxsLlxuICAgKiBAcGFyYW0gcGFyYW1zXG4gICAqL1xuICBzZXRFeHRyYVBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLmV4dHJhUGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTAvNC8xNS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRseUxvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFpbGVkOiB0aGlzLnByb3BzLmZhaWxlZCB8fCBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMubGFzdFNheSA9ICcnO1xuICAgIHRoaXMuc2F5cyA9IFtcbiAgICAgICdCZSBwYXRpZW50LCB5b3VyIGRhdGEgaXMgY29taW5nLi4uJyxcbiAgICAgICdHZXR0aW5nIGRhdGEsIGp1c3QgZm9yIHlvdS4gSGFuZyB0aWdodC4uLicsXG4gICAgICAnUGxlYXNlIHdhaXQuLi4nLFxuICAgICAgJ0xvYWRpbmcgeW91ciBkYXRhLi4uJyxcbiAgICBdO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmYWlsZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmFpbGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZyb3duLW9cIj48L2k+XG4gICAgICAgICAgPGg1Pk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgY29udGFjdCBhZG1pbi48L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBzYXkgPSB0aGlzLnNheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zYXlzLmxlbmd0aCldO1xuICAgIHdoaWxlIChzYXkgPT09IHRoaXMubGFzdFNheSkge1xuICAgICAgc2F5ID0gdGhpcy5zYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2F5cy5sZW5ndGgpXTtcbiAgICB9XG4gICAgdGhpcy5sYXN0U2F5ID0gc2F5O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIj48L2k+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJkZWxheS1zaG93aW5nXCI+e3RoaXMucHJvcHMubWVzc2FnZSB8fCBzYXl9PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzI4LzE1LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGcmllbmRseUxvYWRlciBmcm9tICcuL0ZyaWVuZGx5TG9hZGVyLmpzJztcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vRGF0YVNvdXJjZSc7XG5cbi8qKlxuICogVXNhZ2VcbiAqIGNvbnN0IGRhdGFTb3VyY2UgPSBuZXcgRW50aXR5RGF0YVNvdXJjZSgnY291cG9uLXN0b3Jlcy1hZGQnLCAnc3RvcmUnKTtcbiAqIDxEYXRhVGFibGUgaWQ9eydsaXN0LWZhY2lsaXRpZXMtZGF0YS10YWJsZSd9IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IHBlcnBhZ2U9XCIxNVwiIC8+XG4gKi9cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLkRFRkFVTFRfUEVSX1BBR0UgPSAxMDtcbiAgICB0aGlzLlBBR0VTX0JFRk9SRSA9IDM7XG4gICAgdGhpcy5QQUdFU19BRlRFUiA9IDQ7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgZW50aXRpZXM6IFtdLFxuICAgICAgZG9uZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogMSxcbiAgICAgIHBlcnBhZ2U6IHRoaXMucHJvcHMucGVycGFnZSB8fCB0aGlzLkRFRkFVTFRfUEVSX1BBR0UsXG4gICAgICBzZWFyY2g6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnRQcm9wZXJ0eTogdW5kZWZpbmVkLFxuICAgICAgc29ydE9yZGVyRGVzYzogdHJ1ZSxcbiAgICAgIGZpbHRlcjoge30sXG4gICAgICBmYWlsZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLnByb3BzLmRhdGFTb3VyY2U7XG4gICAgaWYgKHRoaXMucHJvcHMucXVlcnkpIHtcbiAgICAgIHRoaXMuc2V0RmlsdGVyKHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cblxuICAgIHRoaXMub25EYXRhQ2hhbmdlID0gdGhpcy5fb25EYXRhQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGFGYWlsZWQgPSB0aGlzLl9vbkRhdGFGYWlsZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5iaW5kKCdjaGFuZ2UnLCB0aGlzLm9uRGF0YUNoYW5nZSk7XG4gICAgdGhpcy5kYXRhU291cmNlLmJpbmQoJ2ZhaWxlZCcsIHRoaXMub25EYXRhRmFpbGVkKTtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UudW5iaW5kKCdjaGFuZ2UnLCB0aGlzLm9uRGF0YUNoYW5nZSk7XG4gICAgdGhpcy5kYXRhU291cmNlLnVuYmluZCgnZmFpbGVkJywgdGhpcy5vbkRhdGFGYWlsZWQpO1xuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5uYXRpdmVFdmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXIocXVlcnkpIHtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSBxdWVyeS5wYWdlO1xuICAgIHRoaXMuc3RhdGUuc2VhcmNoID0gcXVlcnkuc2VhcmNoO1xuICAgIHRoaXMuc3RhdGUucGVycGFnZSA9IHF1ZXJ5LnBlcnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zb3J0UHJvcGVydHkgPSBxdWVyeS5zb3J0UHJvcGVydHk7XG4gICAgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gcXVlcnkuc29ydE9yZGVyRGVzYztcbiAgICB0aGlzLnN0YXRlLmZpbHRlciA9IHF1ZXJ5LmZpbHRlcjtcbiAgfVxuXG4gIGdldEZpbHRlclF1ZXJ5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuc2VhcmNoLFxuICAgICAgcGVycGFnZTogdGhpcy5zdGF0ZS5wZXJwYWdlLFxuICAgICAgc29ydFByb3BlcnR5OiB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSxcbiAgICAgIHNvcnRPcmRlckRlc2M6IHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyxcbiAgICAgIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgfTtcbiAgfVxuXG4gIGlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkge1xuICAgIHJldHVybiAhKHRoaXMuc3RhdGUucGFnZSA9PT0gMSAmJlxuICAgIHRoaXMuc3RhdGUuc2VhcmNoID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPT09IHRoaXMuREVGQVVMVF9QRVJfUEFHRSAmJlxuICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID09PSB1bmRlZmluZWQgJiZcbiAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUgJiZcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZpbHRlcikubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGZldGNoKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mZXRjaChcbiAgICAgIHRoaXMuc3RhdGUucGFnZSxcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoLFxuICAgICAgdGhpcy5zdGF0ZS5zb3J0UHJvcGVydHksXG4gICAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MsXG4gICAgICB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgIHRoaXMuc3RhdGUucGVycGFnZVxuICAgICk7XG4gIH1cblxuICBfb25EYXRhQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0KCk7XG4gICAgdGhpcy5zdGF0ZS50b3RhbCA9IGRhdGEudG90YWw7XG4gICAgdGhpcy5zdGF0ZS5lbnRpdGllcyA9IGRhdGEuZW50aXRpZXM7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gZGF0YS5wYWdlO1xuICAgIHRoaXMuc3RhdGUucGVycGFnZSA9IGRhdGEucGVycGFnZTtcbiAgICB0aGlzLnN0YXRlLnNlYXJjaCA9IGRhdGEuc2VhcmNoO1xuICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID0gZGF0YS5zb3J0UHJvcGVydHk7XG4gICAgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gZGF0YS5zb3J0T3JkZXJEZXNjO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9uZUxvYWRpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJRdWVyeUNoYW5nZWQoKSkge1xuICAgICAgdGhpcy5wcm9wcy5vblF1ZXJ5Q2hhbmdlICYmIHRoaXMucHJvcHMub25RdWVyeUNoYW5nZSh0aGlzLmdldEZpbHRlclF1ZXJ5KCkpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkRhdGFGYWlsZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmYWlsZWQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgLy8gU2V0IHRvIHBhZ2UgMSB3aGVuIHRyaWdnZXIgc2VhcmNoLlxuICAgIHRoaXMuc3RhdGUuZG9uZUxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSAxO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBzb3J0KHNvcnRQcm9wZXJ0eSwgc29ydGFibGUpIHtcbiAgICBpZiAoc29ydGFibGUpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9PT0gc29ydFByb3BlcnR5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IGZhbHNlKSB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IHRydWUpIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IG51bGw7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9PT0gbnVsbCkgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnR5O1xuICAgICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGdvVG9QYWdlKHBhZ2VOdW0pIHtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSBwYWdlTnVtO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9uZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogcGFnZU51bSxcbiAgICB9KTtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBjaGFuZ2VTZWFyY2hLZXl3b3JkKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIocHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLmRvbmVMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlLnBhZ2UgPSAxO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNlYXJjaGJveCgpIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmVudGl0eS5zZWFyY2hGaWVsZHMpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gJ1NlYXJjaCAnICsgdGhpcy5kYXRhU291cmNlLmVudGl0eVxuICAgICAgICAgIC5zZWFyY2hGaWVsZHMuam9pbignLCAnKS5yZXBsYWNlKC9fL2csICcgJykgKyAnLi4uJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgc2VhcmNoLWJveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlU2VhcmNoS2V5d29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX0vPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBhZ2luZygpIHtcbiAgICBjb25zdCBwYWdlRWxlbWVudHMgPSBbXTtcblxuICAgIC8vIElmIHRoZSBkYXRhIHNvdXJjZSBoYXMgbm8gaW5mb3JtYXRpb24gYWJvdXQgdG90YWwgcGFnZSwgd2UgYWx3YXlzIGRpc3BsYXlcbiAgICAvLyBvbmUgbW9yZSBleHRyYSBwYWdlXG4gICAgY29uc3QgdG90YWxQYWdlID0gdGhpcy5zdGF0ZS50b3RhbCAhPT0gdW5kZWZpbmVkID9cbiAgICAgIE1hdGguY2VpbCh0aGlzLnN0YXRlLnRvdGFsIC8gdGhpcy5zdGF0ZS5wZXJwYWdlKSA6IHRoaXMuc3RhdGUucGFnZSArIDE7XG5cbiAgICAvLyBPbmx5IHNob3cgcGFnZXMgd2hlbiB0b3RhbCBwYWdlIGlzID4gMVxuICAgIGlmICh0b3RhbFBhZ2UgPD0gMSkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA+IHRoaXMuUEFHRVNfQkVGT1JFICsgMSkge1xuICAgICAgcGFnZUVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eydwYWdlTGluazAnfT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmdvVG9QYWdlLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICAgRmlyc3RcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICAvLyBMb29wIHRocm91Z2ggMyBwYWdlcyBiZWZvcmUgY3VycmVudCBwYWdlIHRvIDMgcGFnZXMgYWZ0ZXIgY3VycmVudCBwYWdlXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3RhdGUucGFnZSAtIHRoaXMuUEFHRVNfQkVGT1JFO1xuICAgICAgICAgaSA8IHRoaXMuc3RhdGUucGFnZSArIHRoaXMuUEFHRVNfQUZURVI7IGkrKykge1xuICAgICAgLy8gRG9udCBzaG93IGludmFsaWQgY2FzZSAoZXg6IGkgPSAtMSwgb3IgaSA+IHRvdGFsUGFnZSBjYXVzZWQgYnkgdGhlIGxvb3AgcmFuZ2UpXG4gICAgICBpZiAoaSA+PSAxICYmIGkgPD0gdG90YWxQYWdlKSB7XG4gICAgICAgIGlmIChpID09PSB0aGlzLnN0YXRlLnBhZ2UpIHtcbiAgICAgICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgICAgIDxsaSBrZXk9eydwYWdlTGluaycgKyBpfSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YT57aX08L2E+PC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2VFbGVtZW50cy5wdXNoKFxuICAgICAgICAgICAgPGxpIGtleT17J3BhZ2VMaW5rJyArIGl9PjxhIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhZ2UuYmluZCh0aGlzLCBpKX0+e2l9PC9hPjwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPCB0b3RhbFBhZ2UgLSB0aGlzLlBBR0VTX0FGVEVSICsgMSkge1xuICAgICAgcGFnZUVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaSBrZXk9eydwYWdlTGluaycgKyB0b3RhbFBhZ2V9PlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZ29Ub1BhZ2UuYmluZCh0aGlzLCB0b3RhbFBhZ2UpfT5cbiAgICAgICAgICAgIExhc3RcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAge3BhZ2VFbGVtZW50c31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTWFpbiByZW5kZXIgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7WE1MfVxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIC8vIEdldCBhbGwgZmllbGRzIHRvIGJlIGRpc3BsYXllZCBmcm9tIGRhdGEgc291cmNlXG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5kYXRhU291cmNlLmdldEZpZWxkcygpO1xuXG4gICAgLy8gR2VuZXJhdGUgYWxsIGl0ZW1zIGFzIHJvd3NcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuZW50aXRpZXMubWFwKChlbnRpdHksIHJvd0luZGV4KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBmaWVsZHMubWFwKChyb3csIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU9iamVjdCA9IHJvd1sxXTsgLy8gZWl0aGVyIGEgc3RyaW5nIG9yIHRyYW5zZm9ybSBvYmplY3RcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5T2JqZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhbHVlID0gZW50aXR5W3Byb3BlcnR5T2JqZWN0XTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHlPYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eU9iamVjdC50cmFuc2Zvcm1cbiAgICAgICAgICAgIC5iaW5kKGVudGl0eSkoZW50aXR5W3Byb3BlcnR5T2JqZWN0LmZpZWxkXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dGQga2V5PXt0aGlzLmRhdGFTb3VyY2UubmFtZSArICdfJyArIHJvd0luZGV4ICsgJ18nICsgY2VsbEluZGV4fT5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx0ciBrZXk9e3RoaXMuZGF0YVNvdXJjZS5uYW1lICsgcm93SW5kZXh9PlxuICAgICAgICAgIDx0ZD57KHRoaXMuc3RhdGUucGFnZSAtIDEpICogdGhpcy5zdGF0ZS5wZXJwYWdlICsgcm93SW5kZXggKyAxfTwvdGQ+XG4gICAgICAgICAge3ZhbHVlc31cbiAgICAgICAgPC90cj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBoZWFkZXIsIGluY2x1ZGluZyBzb3J0LCBmaWx0ZXIgYnV0dG9uIGlmIG5lZWRlZFxuICAgIGNvbnN0IGhlYWRpbmdzID0gZmllbGRzLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaGVhZGluZyA9IHJvd1swXTtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdHlwZW9mIHJvd1sxXSA9PT0gJ3N0cmluZycgPyByb3dbMV0gOiByb3dbMV0uZmllbGQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eVNvcnRhYmxlID0gcm93WzJdID09PSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBwcm9wZXJ0eUZpbHRlcmFibGUgPSByb3dbM10gIT09IHVuZGVmaW5lZDtcbiAgICAgIC8vIFNob3cgc29ydCBpY29uIGlmIHRoZSBsaXN0IGlzIGRlZmluZWQgYXMgc29ydGFibGUgYW5kIGN1cnJlbnQgZmllbGQgaXMgc29ydGFibGVcbiAgICAgIGNvbnN0IHNvcnRhYmxlID0gdGhpcy5wcm9wcy5zb3J0YWJsZSAmJiBwcm9wZXJ0eVNvcnRhYmxlO1xuICAgICAgbGV0IHNvcnRJY29uO1xuICAgICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9PT0gcHJvcGVydHkgJiYgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgICAgICAgc29ydEljb24gPSAodGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29ydC1kZXNjXCI+PC9pPiA6XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zb3J0LWFzY1wiPjwvaT4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRJY29uID0gPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29ydFwiPjwvaT47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlckljb247XG5cbiAgICAgIGlmIChwcm9wZXJ0eUZpbHRlcmFibGUpIHtcbiAgICAgICAgY29uc3QgZmlsdGVySXRlbXMgPSByb3dbM10uZ2V0RGF0YUFzQXJyYXkoKS5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9eydmaWx0ZXItdmFsdWUtJyArIHByb3BlcnR5ICsgJy0nICsgdmFsdWUuaWR9PlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZpbHRlci5iaW5kKHRoaXMsIHByb3BlcnR5LCB2YWx1ZS5pZCl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZpbHRlcltwcm9wZXJ0eV0gPT09IHZhbHVlLmlkID9cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRvdC1jaXJjbGUtb1wiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaXJjbGUtb1wiPjwvaT59IHt2YWx1ZS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlsdGVySWNvbiA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYnRuIGJ0bi14cyBkcm9wZG93bi10b2dnbGUgJ1xuICAgICAgICAgICAgICAgICAgICArICh0aGlzLnN0YXRlLmZpbHRlcltwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgICAgICdidG4tZGVmYXVsdCcgOiAnYnRuLXN1Y2Nlc3MnKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbHRlclwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZmlsdGVyLmJpbmQodGhpcywgcHJvcGVydHksIHVuZGVmaW5lZCl9PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIj48L2k+IE5vIGZpbHRlcjwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyAndGgnICsgaW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9eydoYXMtZmlsdGVyLScgKyAocHJvcGVydHlGaWx0ZXJhYmxlID8gJ3RydWUnIDogJycpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICB7ZmlsdGVySWNvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1pY29uXCIgb25DbGljaz17dGhpcy5zb3J0LmJpbmQodGhpcywgcHJvcGVydHksIHNvcnRhYmxlKX0+XG4gICAgICAgICAgICB7aGVhZGluZ30ge3NvcnRJY29ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgdGFibGUgYW5kIHJldHVybiB0byBgcmVuZGVyYCBtZXRob2RcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gdGhpcy5yZW5kZXJTZWFyY2hib3goKSA6ICcnfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkJyxcbiAgICAgICAgIHtzb3J0YWJsZTogdGhpcy5wcm9wcy5zb3J0YWJsZX0pfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgIHtoZWFkaW5nc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVudGl0aWVzLmxlbmd0aCA+IDAgPyBpdGVtcyA6XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb2xTcGFuPXtoZWFkaW5ncy5sZW5ndGggKyAxfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb25lTG9hZGluZyA/ICdUaGlzIGxpc3QgaXMgZW1wdHknIDogJyd9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPn1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdvdmVybGF5LWFsbCcsIHsnaGlkZSc6IHRoaXMuc3RhdGUuZG9uZUxvYWRpbmd9KX0+XG4gICAgICAgICAgPEZyaWVuZGx5TG9hZGVyIGtleT17J2xvYWRlci0nICsgdGhpcy5zdGF0ZS5mYWlsZWR9IGZhaWxlZD17dGhpcy5zdGF0ZS5mYWlsZWR9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RoaXMucmVuZGVyUGFnaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRhdGFUYWJsZS5EYXRhU291cmNlID0gRGF0YVNvdXJjZTtcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTtcbiJdfQ==
