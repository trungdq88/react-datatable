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