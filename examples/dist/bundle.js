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

DataTable.DataSource = _DataSource2['default'];
exports['default'] = DataTable;
module.exports = exports['default'];

},{"./DataSource":1,"./FriendlyLoader.js":2,"classnames":undefined,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9zcmMvRGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9GcmllbmRseUxvYWRlci5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL3NyYy9EYXRhVGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7NEJDQXlCLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUFTbkIsVUFBVTtBQUNsQixXQURRLFVBQVUsQ0FDakIsSUFBSSxFQUFFOzBCQURDLFVBQVU7O0FBRTNCLFFBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDM0IsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsUUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLENBQUMsTUFBTSxHQUFHLCtCQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0dBQ3ZCOzs7Ozs7ZUFSa0IsVUFBVTs7V0FheEIsaUJBQUc7QUFDTixhQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7V0FLUSxxQkFBRztBQUNWLGFBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNuQzs7Ozs7Ozs7Ozs7Ozs7O1dBWUUsZUFBRztBQUNKLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7OztXQUtHLGdCQUFHO0FBQ0wsVUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFF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LEVBQ2hFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsQUFBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQUFBQztVQUNuRDs7O1lBQ0E7OztjQUNFOzs7O2VBQVU7Y0FDVCxRQUFRO2FBQ047V0FDRztVQUNSOzs7WUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FDckM7OztjQUNFOztrQkFBSSxTQUFTLEVBQUMsYUFBYTtBQUN2Qix5QkFBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsR0FBRyxFQUFFO2VBQ2hEO2FBQ0Y7V0FDQztTQUNGO1FBRVI7O1lBQUssU0FBUyxFQUFFLDZCQUFXLGFBQWEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxDQUFDLEFBQUM7VUFDMUUsa0VBQWdCLEdBQUcsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUMsR0FBRTtTQUM1RTtRQUVMLElBQUksQ0FBQyxZQUFZLEVBQUU7T0FDaEIsQ0FDTjtLQUNIOzs7U0F6WEcsU0FBUztHQUFTLG1CQUFNLFNBQVM7O0FBNFh2QyxTQUFTLENBQUMsVUFBVSwwQkFBYSxDQUFDO3FCQUNuQixTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnQtZW1pdHRlcic7XG4vKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTAvMi8xNS5cbiAqXG4gKiBBYnN0cmFjdCBjbGFzc1xuICogQ29udGFpbnM6XG4gKiAtIERhdGEgc291cmNlIGZvciBEYXRhVGFibGUgKEFQSSBvciBleGlzdGluZyBhcnJheSBvZiBlbGVtZW50cylcbiAqIC0gTGlzdCBvZiBmaWVsZHMgdG8gZGlzcGxheSBvbiBEYXRhVGFibGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLkRFRkFVTFRfUEVSX1BBR0UgPSAxMDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2V2ZW50ID0gRXZlbnRFbWl0dGVyKHt9KTtcbiAgICB0aGlzLmV4dHJhUGFyYW1zID0ge307XG4gICAgdGhpcy5leHRyYUNvbHVtcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRvIGZldGNoIGRhdGEgKHZpYSBBUEkgb3Igd2hhdGV2ZXIpXG4gICAqL1xuICBmZXRjaCgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdOb3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZpZWxkcyBzY2hlbWEgdG8gZGlzcGxheSBvbiBEYXRhVGFibGVcbiAgICovXG4gIGdldEZpZWxkcygpIHtcbiAgICBjb25zb2xlLmVycm9yKCdOb3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IGdldCBjdXJyZW50IGZldGNoZWQgZGF0YVxuICAgKiBTaG91bGQgcmV0dXJuOlxuICAgKiAtIHRvdGFsOiB0b3RhbCBlbnRpdHkgbnVtYmVyXG4gICAqIC0gcGFnZTogY3VycmVudCBwYWdlXG4gICAqIC0gZW50aXRpZXM6IGVudGl0aWVzIGZvciBjdXJyZW50IHBhZ2VcbiAgICogLSBwZXJwYWdlOiBudW1iZXIgb2YgcmVzdWx0cyBwZXIgcGFnZVxuICAgKiAtIHNlYXJjaDogc2VhcmNoIGtleXdvcmRcbiAgICogLSBzb3J0UHJvcGVydHk6IHNvcnQgcHJvcGVydHksIHVuZGVmaW5lZCBpZiBubyBzb3J0XG4gICAqIC0gc29ydE9yZGVyRGVzYzogdHJ1ZSBvZiBzb3J0IGluIGRlc2NlbmRpbmcgb3JkZXIsIGZhbHNlIGlmIGFzY2VuZGluZ1xuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBldmVudCBmb3IgZGF0YSBzb3VyY2VcbiAgICovXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5fZXZlbnQub24uYXBwbHkodGhpcy5fZXZlbnQsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGV2ZW50XG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5fZXZlbnQub2ZmLmFwcGx5KHRoaXMuX2V2ZW50LCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgZXZlbnRzXG4gICAqL1xuICB0cmlnZ2VyKCkge1xuICAgIHRoaXMuX2V2ZW50LmVtaXQuYXBwbHkodGhpcy5fZXZlbnQsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBnZXRGaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5Lmxpc3RGaWVsZHMuY29uY2F0KHRoaXMuZXh0cmFDb2x1bXMpO1xuICB9XG5cbiAgc2V0RXh0cmFDb2x1bW5zKGV4dHJhQ29sdW1ucykge1xuICAgIHRoaXMuZXh0cmFDb2x1bXMgPSBleHRyYUNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogUmVjZWl2ZWQgZXh0cmEgcGFyYW0gb2JqZWN0cyB7a2V5OiBTdHJpbmcsIHZhbHVlOiBTdHJpbmd9XG4gICAqIFRoZXNlIHBhcmFtcyB3aWxsIGJlIGFwcGVuZCB0byBBUEkgY2FsbC5cbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgc2V0RXh0cmFQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5leHRyYVBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEwLzQvMTUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kbHlMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZhaWxlZDogdGhpcy5wcm9wcy5mYWlsZWQgfHwgZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmxhc3RTYXkgPSAnJztcbiAgICB0aGlzLnNheXMgPSBbXG4gICAgICAnQmUgcGF0aWVudCwgeW91ciBkYXRhIGlzIGNvbWluZy4uLicsXG4gICAgICAnR2V0dGluZyBkYXRhLCBqdXN0IGZvciB5b3UuIEhhbmcgdGlnaHQuLi4nLFxuICAgICAgJ1BsZWFzZSB3YWl0Li4uJyxcbiAgICAgICdMb2FkaW5nIHlvdXIgZGF0YS4uLicsXG4gICAgXTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmFpbGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZhaWxlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mcm93bi1vXCI+PC9pPlxuICAgICAgICAgIDxoNT5Pb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIGNvbnRhY3QgYWRtaW4uPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgc2F5ID0gdGhpcy5zYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2F5cy5sZW5ndGgpXTtcbiAgICB3aGlsZSAoc2F5ID09PSB0aGlzLmxhc3RTYXkpIHtcbiAgICAgIHNheSA9IHRoaXMuc2F5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNheXMubGVuZ3RoKV07XG4gICAgfVxuICAgIHRoaXMubGFzdFNheSA9IHNheTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCI+PC9pPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZGVsYXktc2hvd2luZ1wiPnt0aGlzLnByb3BzLm1lc3NhZ2UgfHwgc2F5fTwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gOS8yOC8xNS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRnJpZW5kbHlMb2FkZXIgZnJvbSAnLi9GcmllbmRseUxvYWRlci5qcyc7XG5pbXBvcnQgRGF0YVNvdXJjZSBmcm9tICcuL0RhdGFTb3VyY2UnO1xuXG4vKipcbiAqIFVzYWdlXG4gKiBjb25zdCBkYXRhU291cmNlID0gbmV3IEVudGl0eURhdGFTb3VyY2UoJ2NvdXBvbi1zdG9yZXMtYWRkJywgJ3N0b3JlJyk7XG4gKiA8RGF0YVRhYmxlIGlkPXsnbGlzdC1mYWNpbGl0aWVzLWRhdGEtdGFibGUnfSBkYXRhU291cmNlPXtkYXRhU291cmNlfSBwZXJwYWdlPVwiMTVcIiAvPlxuICovXG5jbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5ERUZBVUxUX1BFUl9QQUdFID0gMTA7XG4gICAgdGhpcy5QQUdFU19CRUZPUkUgPSAzO1xuICAgIHRoaXMuUEFHRVNfQUZURVIgPSA0O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBwZXJwYWdlOiB0aGlzLnByb3BzLnBlcnBhZ2UgfHwgdGhpcy5ERUZBVUxUX1BFUl9QQUdFLFxuICAgICAgc2VhcmNoOiB1bmRlZmluZWQsXG4gICAgICBzb3J0UHJvcGVydHk6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnRPcmRlckRlc2M6IHRydWUsXG4gICAgICBmaWx0ZXI6IHt9LFxuICAgICAgZmFpbGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xuICAgIGlmICh0aGlzLnByb3BzLnF1ZXJ5KSB7XG4gICAgICB0aGlzLnNldEZpbHRlcih0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLm9uRGF0YUNoYW5nZSA9IHRoaXMuX29uRGF0YUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EYXRhRmFpbGVkID0gdGhpcy5fb25EYXRhRmFpbGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuYmluZCgnY2hhbmdlJywgdGhpcy5vbkRhdGFDaGFuZ2UpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5iaW5kKCdmYWlsZWQnLCB0aGlzLm9uRGF0YUZhaWxlZCk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnVuYmluZCgnY2hhbmdlJywgdGhpcy5vbkRhdGFDaGFuZ2UpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS51bmJpbmQoJ2ZhaWxlZCcsIHRoaXMub25EYXRhRmFpbGVkKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUubmF0aXZlRXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKHF1ZXJ5KSB7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gcXVlcnkucGFnZTtcbiAgICB0aGlzLnN0YXRlLnNlYXJjaCA9IHF1ZXJ5LnNlYXJjaDtcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPSBxdWVyeS5wZXJwYWdlO1xuICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5ID0gcXVlcnkuc29ydFByb3BlcnR5O1xuICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IHF1ZXJ5LnNvcnRPcmRlckRlc2M7XG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBxdWVyeS5maWx0ZXI7XG4gIH1cblxuICBnZXRGaWx0ZXJRdWVyeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLnNlYXJjaCxcbiAgICAgIHBlcnBhZ2U6IHRoaXMuc3RhdGUucGVycGFnZSxcbiAgICAgIHNvcnRQcm9wZXJ0eTogdGhpcy5zdGF0ZS5zb3J0UHJvcGVydHksXG4gICAgICBzb3J0T3JkZXJEZXNjOiB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MsXG4gICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgIH07XG4gIH1cblxuICBpc0ZpbHRlclF1ZXJ5Q2hhbmdlZCgpIHtcbiAgICByZXR1cm4gISh0aGlzLnN0YXRlLnBhZ2UgPT09IDEgJiZcbiAgICB0aGlzLnN0YXRlLnNlYXJjaCA9PT0gdW5kZWZpbmVkICYmXG4gICAgdGhpcy5zdGF0ZS5wZXJwYWdlID09PSB0aGlzLkRFRkFVTFRfUEVSX1BBR0UgJiZcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID09PSB0cnVlICYmXG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5maWx0ZXIpLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBmZXRjaCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmV0Y2goXG4gICAgICB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaCxcbiAgICAgIHRoaXMuc3RhdGUuc29ydFByb3BlcnR5LFxuICAgICAgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjLFxuICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICB0aGlzLnN0YXRlLnBlcnBhZ2VcbiAgICApO1xuICB9XG5cbiAgX29uRGF0YUNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmdldCgpO1xuICAgIHRoaXMuc3RhdGUudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgIHRoaXMuc3RhdGUuZW50aXRpZXMgPSBkYXRhLmVudGl0aWVzO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IGRhdGEucGFnZTtcbiAgICB0aGlzLnN0YXRlLnBlcnBhZ2UgPSBkYXRhLnBlcnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5zZWFyY2ggPSBkYXRhLnNlYXJjaDtcbiAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IGRhdGEuc29ydFByb3BlcnR5O1xuICAgIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IGRhdGEuc29ydE9yZGVyRGVzYztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmlzRmlsdGVyUXVlcnlDaGFuZ2VkKCkpIHtcbiAgICAgIHRoaXMucHJvcHMub25RdWVyeUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uUXVlcnlDaGFuZ2UodGhpcy5nZXRGaWx0ZXJRdWVyeSgpKTtcbiAgICB9XG4gIH1cblxuICBfb25EYXRhRmFpbGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmFpbGVkOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIC8vIFNldCB0byBwYWdlIDEgd2hlbiB0cmlnZ2VyIHNlYXJjaC5cbiAgICB0aGlzLnN0YXRlLmRvbmVMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gMTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgc29ydChzb3J0UHJvcGVydHksIHNvcnRhYmxlKSB7XG4gICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0UHJvcGVydHkgPT09IHNvcnRQcm9wZXJ0eSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID09PSBmYWxzZSkgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID09PSB0cnVlKSB0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPSBudWxsO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNvcnRPcmRlckRlc2MgPT09IG51bGwpIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0T3JkZXJEZXNjID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLnNvcnRQcm9wZXJ0eSA9IHNvcnRQcm9wZXJ0eTtcbiAgICAgIHRoaXMuc3RhdGUuZG9uZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gIH1cblxuICBnb1RvUGFnZShwYWdlTnVtKSB7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gcGFnZU51bTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvbmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IHBhZ2VOdW0sXG4gICAgfSk7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG5cbiAgY2hhbmdlU2VhcmNoS2V5d29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuZmlsdGVyW3Byb3BlcnR5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5kb25lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZS5wYWdlID0gMTtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTZWFyY2hib3goKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5lbnRpdHkuc2VhcmNoRmllbGRzKSB7XG4gICAgICBwbGFjZWhvbGRlciA9ICdTZWFyY2ggJyArIHRoaXMuZGF0YVNvdXJjZS5lbnRpdHlcbiAgICAgICAgICAuc2VhcmNoRmllbGRzLmpvaW4oJywgJykucmVwbGFjZSgvXy9nLCAnICcpICsgJy4uLic7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHNlYXJjaC1ib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVNlYXJjaEtleXdvcmQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5zZWFyY2guYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIi8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJQYWdpbmcoKSB7XG4gICAgY29uc3QgcGFnZUVsZW1lbnRzID0gW107XG5cbiAgICAvLyBJZiB0aGUgZGF0YSBzb3VyY2UgaGFzIG5vIGluZm9ybWF0aW9uIGFib3V0IHRvdGFsIHBhZ2UsIHdlIGFsd2F5cyBkaXNwbGF5XG4gICAgLy8gb25lIG1vcmUgZXh0cmEgcGFnZVxuICAgIGNvbnN0IHRvdGFsUGFnZSA9IHRoaXMuc3RhdGUudG90YWwgIT09IHVuZGVmaW5lZCA/XG4gICAgICBNYXRoLmNlaWwodGhpcy5zdGF0ZS50b3RhbCAvIHRoaXMuc3RhdGUucGVycGFnZSkgOiB0aGlzLnN0YXRlLnBhZ2UgKyAxO1xuXG4gICAgLy8gT25seSBzaG93IHBhZ2VzIHdoZW4gdG90YWwgcGFnZSBpcyA+IDFcbiAgICBpZiAodG90YWxQYWdlIDw9IDEpIHJldHVybiAnJztcblxuICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPiB0aGlzLlBBR0VTX0JFRk9SRSArIDEpIHtcbiAgICAgIHBhZ2VFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsncGFnZUxpbmswJ30+XG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5nb1RvUGFnZS5iaW5kKHRoaXMsIDEpfT5cbiAgICAgICAgICAgIEZpcnN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gTG9vcCB0aHJvdWdoIDMgcGFnZXMgYmVmb3JlIGN1cnJlbnQgcGFnZSB0byAzIHBhZ2VzIGFmdGVyIGN1cnJlbnQgcGFnZVxuICAgIGZvciAobGV0IGkgPSB0aGlzLnN0YXRlLnBhZ2UgLSB0aGlzLlBBR0VTX0JFRk9SRTtcbiAgICAgICAgIGkgPCB0aGlzLnN0YXRlLnBhZ2UgKyB0aGlzLlBBR0VTX0FGVEVSOyBpKyspIHtcbiAgICAgIC8vIERvbnQgc2hvdyBpbnZhbGlkIGNhc2UgKGV4OiBpID0gLTEsIG9yIGkgPiB0b3RhbFBhZ2UgY2F1c2VkIGJ5IHRoZSBsb29wIHJhbmdlKVxuICAgICAgaWYgKGkgPj0gMSAmJiBpIDw9IHRvdGFsUGFnZSkge1xuICAgICAgICBpZiAoaSA9PT0gdGhpcy5zdGF0ZS5wYWdlKSB7XG4gICAgICAgICAgcGFnZUVsZW1lbnRzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXsncGFnZUxpbmsnICsgaX0gY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGE+e2l9PC9hPjwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlRWxlbWVudHMucHVzaChcbiAgICAgICAgICAgIDxsaSBrZXk9eydwYWdlTGluaycgKyBpfT48YSBvbkNsaWNrPXt0aGlzLmdvVG9QYWdlLmJpbmQodGhpcywgaSl9PntpfTwvYT48L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYWdlIDwgdG90YWxQYWdlIC0gdGhpcy5QQUdFU19BRlRFUiArIDEpIHtcbiAgICAgIHBhZ2VFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGkga2V5PXsncGFnZUxpbmsnICsgdG90YWxQYWdlfT5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmdvVG9QYWdlLmJpbmQodGhpcywgdG90YWxQYWdlKX0+XG4gICAgICAgICAgICBMYXN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgIHtwYWdlRWxlbWVudHN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gcmVuZGVyIG1ldGhvZC5cbiAgICogQHJldHVybnMge1hNTH1cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICAvLyBHZXQgYWxsIGZpZWxkcyB0byBiZSBkaXNwbGF5ZWQgZnJvbSBkYXRhIHNvdXJjZVxuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRGaWVsZHMoKTtcblxuICAgIC8vIEdlbmVyYXRlIGFsbCBpdGVtcyBhcyByb3dzXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLmVudGl0aWVzLm1hcCgoZW50aXR5LCByb3dJbmRleCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gZmllbGRzLm1hcCgocm93LCBjZWxsSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlPYmplY3QgPSByb3dbMV07IC8vIGVpdGhlciBhIHN0cmluZyBvciB0cmFuc2Zvcm0gb2JqZWN0XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eU9iamVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSA9IGVudGl0eVtwcm9wZXJ0eU9iamVjdF07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5T2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlPYmplY3QudHJhbnNmb3JtXG4gICAgICAgICAgICAuYmluZChlbnRpdHkpKGVudGl0eVtwcm9wZXJ0eU9iamVjdC5maWVsZF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRkIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyAnXycgKyByb3dJbmRleCArICdfJyArIGNlbGxJbmRleH0+XG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dHIga2V5PXt0aGlzLmRhdGFTb3VyY2UubmFtZSArIHJvd0luZGV4fT5cbiAgICAgICAgICA8dGQ+eyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUucGVycGFnZSArIHJvd0luZGV4ICsgMX08L3RkPlxuICAgICAgICAgIHt2YWx1ZXN9XG4gICAgICAgIDwvdHI+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gR2VuZXJhdGUgaGVhZGVyLCBpbmNsdWRpbmcgc29ydCwgZmlsdGVyIGJ1dHRvbiBpZiBuZWVkZWRcbiAgICBjb25zdCBoZWFkaW5ncyA9IGZpZWxkcy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSByb3dbMF07XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHR5cGVvZiByb3dbMV0gPT09ICdzdHJpbmcnID8gcm93WzFdIDogcm93WzFdLmZpZWxkO1xuICAgICAgY29uc3QgcHJvcGVydHlTb3J0YWJsZSA9IHJvd1syXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgcHJvcGVydHlGaWx0ZXJhYmxlID0gcm93WzNdICE9PSB1bmRlZmluZWQ7XG4gICAgICAvLyBTaG93IHNvcnQgaWNvbiBpZiB0aGUgbGlzdCBpcyBkZWZpbmVkIGFzIHNvcnRhYmxlIGFuZCBjdXJyZW50IGZpZWxkIGlzIHNvcnRhYmxlXG4gICAgICBjb25zdCBzb3J0YWJsZSA9IHRoaXMucHJvcHMuc29ydGFibGUgJiYgcHJvcGVydHlTb3J0YWJsZTtcbiAgICAgIGxldCBzb3J0SWNvbjtcbiAgICAgIGlmIChzb3J0YWJsZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0UHJvcGVydHkgPT09IHByb3BlcnR5ICYmIHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyAhPT0gbnVsbCkge1xuICAgICAgICAgIHNvcnRJY29uID0gKHRoaXMuc3RhdGUuc29ydE9yZGVyRGVzYyA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnQtZGVzY1wiLz4gOlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc29ydC1hc2NcIi8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0SWNvbiA9IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNvcnRcIi8+O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXJJY29uO1xuXG4gICAgICBpZiAocHJvcGVydHlGaWx0ZXJhYmxlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckl0ZW1zID0gcm93WzNdLmdldERhdGFBc0FycmF5KCkubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXsnZmlsdGVyLXZhbHVlLScgKyBwcm9wZXJ0eSArICctJyArIHZhbHVlLmlkfT5cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5maWx0ZXIuYmluZCh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUuaWQpfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB2YWx1ZS5pZCA/XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3QtY2lyY2xlLW9cIi8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIi8+fSB7dmFsdWUubGFiZWx9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbHRlckljb24gPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2J0biBidG4teHMgZHJvcGRvd24tdG9nZ2xlICdcbiAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5zdGF0ZS5maWx0ZXJbcHJvcGVydHldID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAnYnRuLWRlZmF1bHQnIDogJ2J0bi1zdWNjZXNzJyl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXJcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZpbHRlci5iaW5kKHRoaXMsIHByb3BlcnR5LCB1bmRlZmluZWQpfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIvPiBObyBmaWx0ZXI8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAge2ZpbHRlckl0ZW1zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHRoIGtleT17dGhpcy5kYXRhU291cmNlLm5hbWUgKyAndGgnICsgaW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9eydoYXMtZmlsdGVyLScgKyAocHJvcGVydHlGaWx0ZXJhYmxlID8gJ3RydWUnIDogJycpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICB7ZmlsdGVySWNvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1pY29uXCIgb25DbGljaz17dGhpcy5zb3J0LmJpbmQodGhpcywgcHJvcGVydHksIHNvcnRhYmxlKX0+XG4gICAgICAgICAgICB7aGVhZGluZ30ge3NvcnRJY29ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90aD5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCB0aGUgdGFibGUgYW5kIHJldHVybiB0byBgcmVuZGVyYCBtZXRob2RcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1kYXRhdGFibGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gdGhpcy5yZW5kZXJTZWFyY2hib3goKSA6ICcnfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zdHJpcGVkJyxcbiAgICAgICAgIHtzb3J0YWJsZTogdGhpcy5wcm9wcy5zb3J0YWJsZX0pfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgIHtoZWFkaW5nc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmVudGl0aWVzLmxlbmd0aCA+IDAgPyBpdGVtcyA6XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb2xTcGFuPXtoZWFkaW5ncy5sZW5ndGggKyAxfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb25lTG9hZGluZyA/ICdUaGlzIGxpc3QgaXMgZW1wdHknIDogJyd9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPn1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdvdmVybGF5LWFsbCcsIHsnaGlkZSc6IHRoaXMuc3RhdGUuZG9uZUxvYWRpbmd9KX0+XG4gICAgICAgICAgPEZyaWVuZGx5TG9hZGVyIGtleT17J2xvYWRlci0nICsgdGhpcy5zdGF0ZS5mYWlsZWR9IGZhaWxlZD17dGhpcy5zdGF0ZS5mYWlsZWR9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RoaXMucmVuZGVyUGFnaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRhdGFUYWJsZS5EYXRhU291cmNlID0gRGF0YVNvdXJjZTtcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTtcbiJdfQ==
