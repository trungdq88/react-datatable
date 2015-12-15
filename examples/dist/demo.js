require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _reactDatatable = require('react-datatable');

var _reactDatatable2 = _interopRequireDefault(_reactDatatable);

var _dataSourceCategoryDataSource = require('./data-source/CategoryDataSource');

var _dataSourceCategoryDataSource2 = _interopRequireDefault(_dataSourceCategoryDataSource);

var _dataSourceGitHubIssueDataSource = require('./data-source/GitHubIssueDataSource');

var _dataSourceGitHubIssueDataSource2 = _interopRequireDefault(_dataSourceGitHubIssueDataSource);

var _utilsFakeData = require('./utils/fake-data');

var _utilsFakeData2 = _interopRequireDefault(_utilsFakeData);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, args);
    this.categoryDataSource = new _dataSourceCategoryDataSource2['default']('category-list-select', _utilsFakeData2['default'].categories);
    this.reactIssueDataSource = new _dataSourceGitHubIssueDataSource2['default']('react-issues');
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'table' },
        _react2['default'].createElement(
          'h1',
          { className: 'text-center' },
          'Static data'
        ),
        _react2['default'].createElement(_reactDatatable2['default'], { id: 'category-table',
          dataSource: this.categoryDataSource,
          searchable: true,
          sortable: true }),
        _react2['default'].createElement('hr', null),
        _react2['default'].createElement(
          'h1',
          { className: 'text-center' },
          'Ajax data (React GitHub issues)'
        ),
        _react2['default'].createElement(_reactDatatable2['default'], { id: 'react-issue-table',
          dataSource: this.reactIssueDataSource,
          sortable: true })
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];
/*
TODO: add adapter to integrate with GitHub API
*/

},{"./data-source/CategoryDataSource":2,"./data-source/GitHubIssueDataSource":3,"./utils/fake-data":6,"react":undefined,"react-datatable":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactDatatable = require('react-datatable');

/**
 * Data source for entity with existing data
 */

var StaticDataSource = (function (_DataSource) {
  _inherits(StaticDataSource, _DataSource);

  function StaticDataSource(name, items) {
    _classCallCheck(this, StaticDataSource);

    _get(Object.getPrototypeOf(StaticDataSource.prototype), 'constructor', this).call(this, name);
    this.meta = {
      label: 'Category',
      apiEndPoint: 'category',
      exportEndPoint: '',
      apiProperty: 'categories',
      searchFields: ['name'],
      apiCountProperty: 'num_items',
      keyField: 'id',
      valueField: 'name',
      listFields: [['Name', 'name']]
    };

    this.items = items;
    this.entity = this.meta;
    this.extraColums = [];
  }

  _createClass(StaticDataSource, [{
    key: 'fetch',
    value: function fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
      var _this = this;

      var data = this.items;
      // 1. Filter
      if (filter && Object.keys(filter).length > 0) {
        var filterFunc = function filterFunc(item) {
          return item[_this] === filter[_this];
        };
        for (var property in filter) {
          if (property) {
            data = data.filter(filterFunc.bind(property));
          }
        }
      }
      // 2. Search
      if (search) {
        (function () {
          var searchFields = _this.entity.searchFields;
          data = data.filter(function (item) {
            for (var i = 0; i < searchFields.length; i++) {
              if (item[searchFields[i]].toLowerCase().indexOf(search.toLowerCase()) > -1) {
                return true;
              }
            }
            return false;
          });
        })();
      }
      // Save the total item for pagination
      var _total = data.length;

      // 3. Order
      if (sortProperty && sortOrderDesc !== null) {
        data = data.concat([]).sort(function (a, b) {
          return (2 * +sortOrderDesc - 1) * (a[sortProperty] > b[sortProperty] ? 1 : -1);
        });
      }

      // 4. Paging
      perpage = perpage || this.DEFAULT_PER_PAGE;
      var pageItems = data.slice(perpage * (page - 1), page * perpage);

      // Set data
      this.data = {
        page: page,
        total: _total,
        entities: pageItems,
        perpage: perpage,
        search: search,
        sortProperty: sortProperty,
        sortOrderDesc: sortOrderDesc
      };

      // Emit event
      this.trigger('change');
    }
  }]);

  return StaticDataSource;
})(_reactDatatable.DataSource);

exports['default'] = StaticDataSource;
module.exports = exports['default'];

},{"react-datatable":undefined}],3:[function(require,module,exports){
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

var _reactDatatable = require('react-datatable');

var _utilsApiJs = require('../utils/api.js');

var _utilsApiJs2 = _interopRequireDefault(_utilsApiJs);

/**
 * Data source from entity APIs
 */

var GitHubIssueDataSource = (function (_DataSource) {
  _inherits(GitHubIssueDataSource, _DataSource);

  function GitHubIssueDataSource(name) {
    _classCallCheck(this, GitHubIssueDataSource);

    _get(Object.getPrototypeOf(GitHubIssueDataSource.prototype), 'constructor', this).call(this, name);
    this.meta = {
      label: 'Github issue',
      apiEndPoint: 'https://api.github.com/repos/facebook/react/issues',
      keyField: 'id',
      apiProperty: undefined, // The object itself is an array
      searchFields: ['title'],
      apiCountProperty: undefined, // Sadly GitHub api does not provide this
      valueField: 'id',
      listFields: [['Title', {
        field: 'title',
        transform: function t(value) {
          return _react2['default'].createElement(
            'a',
            { target: '_blank', href: this.url },
            value
          );
        }
      }], ['Labels', {
        field: 'labels',
        transform: function t(value) {
          return value.map(function (label) {
            return _react2['default'].createElement(
              'span',
              { className: 'label-wrapper' },
              _react2['default'].createElement(
                'span',
                { className: 'label', style: { backgroundColor: label.color } },
                label.name
              ),
              ' '
            );
          });
        }
      }], ['Comments', 'comments'], ['Created at', {
        field: 'created_at',
        transform: function t(value) {
          return new Date(value).toLocaleString();
        }
      }]]
    };
    this.entity = this.meta;
    this.disableCache = false;
  }

  _createClass(GitHubIssueDataSource, [{
    key: 'fetch',
    value: function fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
      var _this = this;

      var apiEndPoint = this.entity.apiEndPoint;

      // Build query
      // 1. Pagination
      var query = '&page=' + page;
      if (perpage) query += '&per_page=' + perpage;
      // 2. Search
      // if (search) query += '&query=' + search; // Sad, GitHub API does not provide search
      // 3. Sort
      if (sortProperty && sortOrderDesc !== null) {
        query += '&sort=' + sortProperty + '&direction=' + (sortOrderDesc ? 'desc' : 'asc');
      }
      // 4. Filter // Sad, GitHub API does not provide filter
      //if (filter && Object.keys(filter).length > 0) {
      //  query += Object.keys(filter).map((property) => {
      //    return '&' + property + '=' + filter[property];
      //  });
      //}
      // 5. Extra params
      if (Object.keys(this.extraParams).length) {
        query += '&' + Object.keys(this.extraParams).map(function (key) {
          return key + '=' + _this.extraParams[key];
        }).join('&');
      }

      _utilsApiJs2['default'].get(apiEndPoint + '?' + query, {}, this.disableCache).done(function (response) {
        var listProperty = _this.entity.apiProperty;
        var countProperty = _this.entity.apiCountProperty || 'count';
        var entities = listProperty ? response[listProperty] : response;
        var count = countProperty ? response[countProperty] : undefined;
        // Set data
        _this.data = {
          page: page,
          total: count,
          entities: entities,
          perpage: perpage || (count === undefined ? entities.length : _this.DEFAULT_PER_PAGE),
          search: search,
          sortProperty: sortProperty,
          sortOrderDesc: sortOrderDesc
        };

        // Emit event
        _this.trigger('change');
      }).fail(function () {
        _this.trigger('failed');
      });
    }
  }]);

  return GitHubIssueDataSource;
})(_reactDatatable.DataSource);

exports['default'] = GitHubIssueDataSource;
module.exports = exports['default'];

},{"../utils/api.js":5,"react":undefined,"react-datatable":undefined}],4:[function(require,module,exports){
/**
 * Created by dinhquangtrung on 12/14/15.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

_reactDom2['default'].render(_react2['default'].createElement(_app2['default'], null), document.getElementById('app'));

},{"./app":1,"react":undefined,"react-dom":undefined}],5:[function(require,module,exports){
/**
 * Created by dinhquangtrung on 9/30/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _requestCache = require('./request-cache');

var _requestCache2 = _interopRequireDefault(_requestCache);

var $ = window.jQuery;

var api = {
  _log: false,
  extraOptions: {
    // headers: {
    //   'GORUTOKEN': sessionStore.token,
    // },
    type: 'json',
    crossDomain: true
  },
  log: function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._log && console.log.apply(console, ['[API]'].concat(args));
  },
  /**
   * This method return a $.Deferred will resolve when the request is complete (or cache)
   */
  _sendRequest: function _sendRequest(url, data, method, disableCache) {
    var _this = this;

    var cacheKey = url + '[' + (data ? JSON.stringify(data) : '') + ']';

    var ajax = function ajax() {
      var options = $.extend({}, {
        data: data
      }, _this.extraOptions, {
        url: url,
        method: method
      });
      _this.log('Request sent: ', cacheKey, options);
      if (_this._log) {
        requestLog.add(options);
      }
      return $.ajax(options).then(function (response) {
        _requestCache2['default'].set(cacheKey, response);
        _this.log('Request cached: ' + cacheKey);
        return response;
      });
    };

    if (disableCache) {
      this.log('Request sent without cache: ' + cacheKey);
      return ajax();
    }
    // Use cache
    // Try to get data from cache
    var response = _requestCache2['default'].get(cacheKey);
    if (response) {
      this.log('Returning cached request: ' + cacheKey);
      return $.Deferred().resolve(response);
    }

    this.log('Asked for cache but not found, sending request: ' + cacheKey);
    // No cache available
    return ajax();
  },
  get: function get(url, data, disableCache) {
    return this._sendRequest(url, data, 'GET', disableCache);
  },
  /**
   * Post requests never use cache
   */
  post: function post(url, data) {
    return this._sendRequest(url, data, 'POST', true);
  },
  put: function put(url, data) {
    return this._sendRequest(url, data, 'PUT', true);
  },
  'delete': function _delete(url, data) {
    return this._sendRequest(url, data, 'DELETE', true);
  },
  upload: function upload(url, formData) {
    return $.ajax({
      url: url,
      type: 'PUT',
      data: formData,
      processData: false,
      contentType: false
    });
  },
  clearCache: function clearCache(key) {
    _requestCache2['default'].clear(key);
  }
};

exports['default'] = api;
module.exports = exports['default'];

},{"./request-cache":7}],6:[function(require,module,exports){
/**
 * Created by dinhquangtrung on 12/14/15.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  categories: [{ "created_at": "2014-12-15T16:51:29.406823Z", "updated_at": "2014-12-15T16:51:29.406852Z", "name": "Restaurant", "id": 1 }, { "created_at": "2014-12-15T16:51:29.420645Z", "updated_at": "2014-12-15T16:51:29.420674Z", "name": "Western", "id": 2 }, { "created_at": "2014-12-15T16:51:29.577025Z", "updated_at": "2014-12-15T16:51:29.577053Z", "name": "Bar", "id": 3 }, { "created_at": "2014-12-15T16:51:29.587887Z", "updated_at": "2014-12-15T16:51:29.587916Z", "name": "Cocktails", "id": 4 }, { "created_at": "2014-12-15T16:51:29.743324Z", "updated_at": "2014-12-15T16:51:29.743354Z", "name": "Buffet", "id": 5 }, { "created_at": "2014-12-15T16:51:29.754294Z", "updated_at": "2014-12-15T16:51:29.754323Z", "name": "International", "id": 6 }, { "created_at": "2014-12-15T16:51:30.043330Z", "updated_at": "2014-12-15T16:51:30.043361Z", "name": "Mediterranean", "id": 7 }, { "created_at": "2014-12-15T16:51:30.054190Z", "updated_at": "2014-12-15T16:51:30.054219Z", "name": "Singaporean", "id": 8 }, { "created_at": "2014-12-15T16:51:30.193924Z", "updated_at": "2014-12-15T16:51:30.193968Z", "name": "Spirits/Whisky", "id": 9 }, { "created_at": "2014-12-15T16:51:30.325694Z", "updated_at": "2014-12-15T16:51:30.325723Z", "name": "Dessert", "id": 10 }, { "created_at": "2014-12-15T16:51:30.473614Z", "updated_at": "2014-12-15T16:51:30.473642Z", "name": "Korean", "id": 11 }, { "created_at": "2014-12-15T16:51:30.609118Z", "updated_at": "2014-12-15T16:51:30.609148Z", "name": "Food/drink stall", "id": 12 }, { "created_at": "2014-12-15T16:51:30.620121Z", "updated_at": "2014-12-15T16:51:30.620157Z", "name": "Hawker Centre", "id": 13 }, { "created_at": "2014-12-15T16:51:30.783072Z", "updated_at": "2014-12-15T16:51:30.783112Z", "name": "European", "id": 14 }, { "created_at": "2014-12-15T16:51:30.793983Z", "updated_at": "2014-12-15T16:51:30.794012Z", "name": "Fusion", "id": 15 }, { "created_at": "2014-12-15T16:51:31.844983Z", "updated_at": "2014-12-15T16:51:31.845013Z", "name": "Café", "id": 16 }, { "created_at": "2014-12-15T16:51:31.974996Z", "updated_at": "2014-12-15T16:51:31.975032Z", "name": "Chinese", "id": 17 }, { "created_at": "2014-12-15T16:51:31.986048Z", "updated_at": "2014-12-15T16:51:31.986080Z", "name": "Vegetarian-friendly", "id": 18 }, { "created_at": "2014-12-15T16:51:32.133974Z", "updated_at": "2014-12-15T16:51:32.134007Z", "name": "Japanese", "id": 19 }, { "created_at": "2014-12-15T16:51:32.505385Z", "updated_at": "2014-12-15T16:51:32.505426Z", "name": "Brunch", "id": 20 }, { "created_at": "2014-12-15T16:51:32.918844Z", "updated_at": "2014-12-15T16:51:32.918874Z", "name": "Asian", "id": 21 }, { "created_at": "2014-12-15T16:51:32.929432Z", "updated_at": "2014-12-15T16:51:32.929459Z", "name": "Experimental", "id": 22 }, { "created_at": "2014-12-15T16:51:33.809603Z", "updated_at": "2014-12-15T16:51:33.809632Z", "name": "Indian", "id": 23 }, { "created_at": "2014-12-15T16:51:34.073376Z", "updated_at": "2014-12-15T16:51:34.073405Z", "name": "French", "id": 24 }, { "created_at": "2014-12-15T16:51:35.838921Z", "updated_at": "2014-12-15T16:51:35.838949Z", "name": "Bakery", "id": 25 }, { "created_at": "2014-12-15T16:51:36.127883Z", "updated_at": "2014-12-15T16:51:36.127911Z", "name": "Italian", "id": 26 }, { "created_at": "2014-12-15T16:51:36.408359Z", "updated_at": "2014-12-15T16:51:36.408386Z", "name": "Middle Eastern", "id": 27 }, { "created_at": "2014-12-15T16:51:37.772838Z", "updated_at": "2014-12-15T16:51:37.772867Z", "name": "Club", "id": 28 }, { "created_at": "2014-12-15T16:51:44.203018Z", "updated_at": "2014-12-15T16:51:44.203049Z", "name": "Spanish", "id": 29 }, { "created_at": "2014-12-15T16:51:46.558232Z", "updated_at": "2014-12-15T16:51:46.558261Z", "name": "Thai", "id": 30 }, { "created_at": "2014-12-15T16:51:49.314581Z", "updated_at": "2014-12-15T16:51:49.314612Z", "name": "Wine", "id": 31 }, { "created_at": "2014-12-15T16:51:50.245464Z", "updated_at": "2014-12-15T16:51:50.245494Z", "name": "Steakhouse", "id": 32 }, { "created_at": "2014-12-15T16:51:53.554804Z", "updated_at": "2014-12-15T16:51:53.554832Z", "name": "Indonesian", "id": 33 }, { "created_at": "2014-12-15T16:51:54.890609Z", "updated_at": "2014-12-15T16:51:54.890653Z", "name": "Latin American", "id": 34 }, { "created_at": "2014-12-15T16:52:01.906993Z", "updated_at": "2014-12-15T16:52:01.907026Z", "name": "Mexican", "id": 35 }, { "created_at": "2014-12-15T16:52:06.098044Z", "updated_at": "2014-12-15T16:52:06.098071Z", "name": "Vietnamese", "id": 36 }, { "created_at": "2014-12-15T16:52:53.703737Z", "updated_at": "2014-12-15T16:52:53.703782Z", "name": "Malay", "id": 37 }, { "created_at": "2014-12-15T16:53:07.365845Z", "updated_at": "2014-12-15T16:53:07.365875Z", "name": "Caribbean", "id": 38 }, { "created_at": "2014-12-23T05:01:19.210619Z", "updated_at": "2014-12-23T05:01:19.210664Z", "name": "Restaurants", "id": 39 }, { "created_at": "2014-12-23T05:01:19.892914Z", "updated_at": "2014-12-23T05:01:19.892947Z", "name": "Cafes", "id": 40 }, { "created_at": "2014-12-23T05:01:19.903958Z", "updated_at": "2014-12-23T05:01:19.903988Z", "name": "Hawker Eats", "id": 41 }, { "created_at": "2014-12-23T05:01:20.610539Z", "updated_at": "2014-12-23T05:01:20.610569Z", "name": "Bars", "id": 42 }, { "created_at": "2014-12-23T05:01:20.622088Z", "updated_at": "2014-12-23T05:01:20.622126Z", "name": "Beer", "id": 43 }, { "created_at": "2014-12-23T05:01:21.054584Z", "updated_at": "2014-12-23T05:01:21.054637Z", "name": "Peranakan", "id": 44 }, { "created_at": "2014-12-23T05:01:21.071823Z", "updated_at": "2014-12-23T05:01:21.071859Z", "name": "Sweet Tooth", "id": 45 }, { "created_at": "2014-12-23T05:01:24.463607Z", "updated_at": "2014-12-23T05:01:24.463639Z", "name": "Coffee Addicts", "id": 46 }, { "created_at": "2014-12-23T05:01:26.584068Z", "updated_at": "2014-12-23T05:01:26.584101Z", "name": "Music", "id": 47 }, { "created_at": "2014-12-23T05:01:33.726159Z", "updated_at": "2014-12-23T05:01:33.726200Z", "name": "Vegetarian", "id": 48 }, { "created_at": "2014-12-23T05:01:35.501992Z", "updated_at": "2014-12-23T05:01:35.502027Z", "name": "Just Opened", "id": 49 }, { "created_at": "2014-12-23T05:01:35.513227Z", "updated_at": "2014-12-23T05:01:35.513259Z", "name": "Culture", "id": 50 }, { "created_at": "2014-12-23T05:01:35.524261Z", "updated_at": "2014-12-23T05:01:35.524292Z", "name": "Style", "id": 51 }, { "created_at": "2014-12-23T05:01:35.535319Z", "updated_at": "2014-12-23T05:01:35.535350Z", "name": "Active", "id": 52 }, { "created_at": "2014-12-23T05:01:37.525676Z", "updated_at": "2014-12-23T05:01:37.525709Z", "name": "Theatre", "id": 53 }, { "created_at": "2014-12-23T05:01:38.056504Z", "updated_at": "2014-12-23T05:01:38.056548Z", "name": "Women's Fashion", "id": 54 }, { "created_at": "2014-12-23T05:01:38.999098Z", "updated_at": "2014-12-23T05:01:38.999129Z", "name": "Spirits", "id": 55 }, { "created_at": "2014-12-23T05:01:43.173079Z", "updated_at": "2014-12-23T05:01:43.173118Z", "name": "New Restaurants and Bars", "id": 56 }, { "created_at": "2014-12-23T05:01:43.701433Z", "updated_at": "2014-12-23T05:01:43.701467Z", "name": "Meat-lovers", "id": 57 }, { "created_at": "2014-12-23T05:02:02.303188Z", "updated_at": "2014-12-23T05:02:02.303228Z", "name": "Art", "id": 58 }, { "created_at": "2014-12-23T05:02:02.319955Z", "updated_at": "2014-12-23T05:02:02.319988Z", "name": "Film", "id": 59 }, { "created_at": "2014-12-23T05:02:02.336769Z", "updated_at": "2014-12-23T05:02:02.336805Z", "name": "Men's Fashion", "id": 60 }, { "created_at": "2015-02-12T04:23:34.134403Z", "updated_at": "2015-02-12T04:23:34.134436Z", "name": "Dance", "id": 61 }, { "created_at": "2015-02-12T04:23:34.145836Z", "updated_at": "2015-02-12T04:23:34.145869Z", "name": "Nightlife", "id": 62 }, { "created_at": "2015-07-13T10:25:38.143883Z", "updated_at": "2015-07-13T10:25:38.143910Z", "name": "Food & Drink", "id": 63 }, { "created_at": "2015-07-13T10:25:50.927412Z", "updated_at": "2015-07-13T10:25:50.927446Z", "name": "Travel", "id": 64 }, { "created_at": "2015-10-30T05:28:48.871929Z", "updated_at": "2015-10-30T05:28:48.871952Z", "name": "Hotels", "id": 66 }]
};
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
/**
 * Created by dinhquangtrung on 9/30/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  data: {},
  get: function get(key) {
    var target = this.data[key];
    // If target not expired yet, or no expired date set
    if (target && (target.expiredDate > +new Date() || !target.expiredDate)) {
      return target.value;
    }
    return undefined;
  },
  /**
   * @key : key
   * @value : value
   * @expiredDate : milisecond
   */
  set: function set(key, value, expiredDate) {
    var target = {
      value: value
    };
    if (expiredDate) {
      target.expiredDate = expiredDate;
    }
    this.data[key] = target;
    return value;
  },
  /**
   * Clear cache for all matched keys (or exactly the key if `match` is a string)
   */
  clear: function clear(match) {
    if (typeof match === 'object') {
      var keys = Object.keys(this.data);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].match(match)) {
          delete this.data[keys[i]];
        }
      }
    } else {
      delete this.data[match];
    }
  }
};
module.exports = exports['default'];

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy9kYXRhLXNvdXJjZS9HaXRIdWJJc3N1ZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGVtby5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy91dGlscy9hcGkuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvdXRpbHMvZmFrZS1kYXRhLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL3V0aWxzL3JlcXVlc3QtY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7Ozs0Q0FDUixrQ0FBa0M7Ozs7K0NBQy9CLHFDQUFxQzs7Ozs2QkFDbEQsbUJBQW1COzs7O0lBRW5CLEdBQUc7WUFBSCxHQUFHOztBQUNYLFdBRFEsR0FBRyxHQUNEOzBCQURGLEdBQUc7O3NDQUNQLElBQUk7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NkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQywwQkFBMEIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Q0FDaHlPOzs7Ozs7Ozs7Ozs7cUJDSGM7QUFDYixNQUFJLEVBQUUsRUFBRTtBQUNSLEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRTtBQUNQLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlCLFFBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQSxBQUFDLEVBQUU7QUFDdkUsYUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3JCO0FBQ0QsV0FBTyxTQUFTLENBQUM7R0FDbEI7Ozs7OztBQU1ELEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0FBQzNCLFFBQU0sTUFBTSxHQUFHO0FBQ2IsV0FBSyxFQUFFLEtBQUs7S0FDYixDQUFDO0FBQ0YsUUFBSSxXQUFXLEVBQUU7QUFDZixZQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNsQztBQUNELFFBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7Ozs7QUFJRCxPQUFLLEVBQUEsZUFBQyxLQUFLLEVBQUU7QUFDWCxRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxZQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsaUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtPQUNGO0tBQ0YsTUFBTTtBQUNMLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtHQUNGO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcbmltcG9ydCBDYXRlZ29yeURhdGFTb3VyY2UgZnJvbSAnLi9kYXRhLXNvdXJjZS9DYXRlZ29yeURhdGFTb3VyY2UnO1xuaW1wb3J0IEdpdEh1Yklzc3VlRGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL0dpdEh1Yklzc3VlRGF0YVNvdXJjZSc7XG5pbXBvcnQgZmFrZURhdGEgZnJvbSAnLi91dGlscy9mYWtlLWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jYXRlZ29yeURhdGFTb3VyY2UgPSBuZXcgQ2F0ZWdvcnlEYXRhU291cmNlKCdjYXRlZ29yeS1saXN0LXNlbGVjdCcsIGZha2VEYXRhLmNhdGVnb3JpZXMpO1xuICAgIHRoaXMucmVhY3RJc3N1ZURhdGFTb3VyY2UgPSBuZXcgR2l0SHViSXNzdWVEYXRhU291cmNlKCdyZWFjdC1pc3N1ZXMnKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGF0aWMgZGF0YTwvaDE+XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJjYXRlZ29yeS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5jYXRlZ29yeURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlIC8+XG5cbiAgICAgICAgPGhyLz5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BamF4IGRhdGEgKFJlYWN0IEdpdEh1YiBpc3N1ZXMpPC9oMT5cbiAgICAgICAgey8qXG4gICAgICAgIFRPRE86IGFkZCBhZGFwdGVyIHRvIGludGVncmF0ZSB3aXRoIEdpdEh1YiBBUElcbiAgICAgICAgKi99XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJyZWFjdC1pc3N1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5yZWFjdElzc3VlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzb3J0YWJsZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdyZWFjdC1kYXRhdGFibGUnO1xuXG4vKipcbiAqIERhdGEgc291cmNlIGZvciBlbnRpdHkgd2l0aCBleGlzdGluZyBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0RhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBpdGVtcykge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGxhYmVsOiAnQ2F0ZWdvcnknLFxuICAgICAgYXBpRW5kUG9pbnQ6ICdjYXRlZ29yeScsXG4gICAgICBleHBvcnRFbmRQb2ludDogJycsXG4gICAgICBhcGlQcm9wZXJ0eTogJ2NhdGVnb3JpZXMnLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ25hbWUnXSxcbiAgICAgIGFwaUNvdW50UHJvcGVydHk6ICdudW1faXRlbXMnLFxuICAgICAga2V5RmllbGQ6ICdpZCcsXG4gICAgICB2YWx1ZUZpZWxkOiAnbmFtZScsXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnTmFtZScsICduYW1lJ10sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5leHRyYUNvbHVtcyA9IFtdO1xuICB9XG5cbiAgZmV0Y2gocGFnZSwgc2VhcmNoLCBzb3J0UHJvcGVydHksIHNvcnRPcmRlckRlc2MsIGZpbHRlciwgcGVycGFnZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5pdGVtcztcbiAgICAvLyAxLiBGaWx0ZXJcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyRnVuYyA9IGl0ZW0gPT4gaXRlbVt0aGlzXSA9PT0gZmlsdGVyW3RoaXNdO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZpbHRlckZ1bmMuYmluZChwcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIDIuIFNlYXJjaFxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMuZW50aXR5LnNlYXJjaEZpZWxkcztcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChpdGVtW3NlYXJjaEZpZWxkc1tpXV0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTYXZlIHRoZSB0b3RhbCBpdGVtIGZvciBwYWdpbmF0aW9uXG4gICAgdmFyIF90b3RhbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgLy8gMy4gT3JkZXJcbiAgICBpZiAoc29ydFByb3BlcnR5ICYmIHNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChbXSkuc29ydCgoYSwgYikgPT4gKDIgKiAoK3NvcnRPcmRlckRlc2MpIC0gMSkgKlxuICAgICAgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSA/IDEgOiAtMSkpO1xuICAgIH1cblxuICAgIC8vIDQuIFBhZ2luZ1xuICAgIHBlcnBhZ2UgPSBwZXJwYWdlIHx8IHRoaXMuREVGQVVMVF9QRVJfUEFHRTtcbiAgICBjb25zdCBwYWdlSXRlbXMgPSBkYXRhLnNsaWNlKHBlcnBhZ2UgKiAocGFnZSAtIDEpLCBwYWdlICogcGVycGFnZSk7XG5cbiAgICAvLyBTZXQgZGF0YVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICB0b3RhbDogX3RvdGFsLFxuICAgICAgZW50aXRpZXM6IHBhZ2VJdGVtcyxcbiAgICAgIHBlcnBhZ2U6IHBlcnBhZ2UsXG4gICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgIHNvcnRQcm9wZXJ0eTogc29ydFByb3BlcnR5LFxuICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICB9O1xuXG4gICAgLy8gRW1pdCBldmVudFxuICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcyc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZnJvbSBlbnRpdHkgQVBJc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWJJc3N1ZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGxhYmVsOiAnR2l0aHViIGlzc3VlJyxcbiAgICAgIGFwaUVuZFBvaW50OiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYWNlYm9vay9yZWFjdC9pc3N1ZXMnLFxuICAgICAga2V5RmllbGQ6ICdpZCcsXG4gICAgICBhcGlQcm9wZXJ0eTogdW5kZWZpbmVkLCAvLyBUaGUgb2JqZWN0IGl0c2VsZiBpcyBhbiBhcnJheVxuICAgICAgc2VhcmNoRmllbGRzOiBbJ3RpdGxlJ10sXG4gICAgICBhcGlDb3VudFByb3BlcnR5OiB1bmRlZmluZWQsIC8vIFNhZGx5IEdpdEh1YiBhcGkgZG9lcyBub3QgcHJvdmlkZSB0aGlzXG4gICAgICB2YWx1ZUZpZWxkOiAnaWQnLFxuICAgICAgbGlzdEZpZWxkczogW1xuICAgICAgICBbJ1RpdGxlJywge1xuICAgICAgICAgIGZpZWxkOiAndGl0bGUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3RoaXMudXJsfT57dmFsdWV9PC9hPjtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbJ0xhYmVscycsIHtcbiAgICAgICAgICBmaWVsZDogJ2xhYmVscycsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGxhYmVsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbGFiZWwuY29sb3J9fT57bGFiZWwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWydDb21tZW50cycsICdjb21tZW50cyddLFxuICAgICAgICBbJ0NyZWF0ZWQgYXQnLCB7XG4gICAgICAgICAgZmllbGQ6ICdjcmVhdGVkX2F0JyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgXVxuICAgIH07XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5kaXNhYmxlQ2FjaGUgPSBmYWxzZTtcbiAgfVxuXG4gIGZldGNoKHBhZ2UsIHNlYXJjaCwgc29ydFByb3BlcnR5LCBzb3J0T3JkZXJEZXNjLCBmaWx0ZXIsIHBlcnBhZ2UpIHtcbiAgICBjb25zdCB7YXBpRW5kUG9pbnR9ID0gdGhpcy5lbnRpdHk7XG5cbiAgICAvLyBCdWlsZCBxdWVyeVxuICAgIC8vIDEuIFBhZ2luYXRpb25cbiAgICBsZXQgcXVlcnkgPSAnJnBhZ2U9JyArIHBhZ2U7XG4gICAgaWYgKHBlcnBhZ2UpIHF1ZXJ5ICs9ICcmcGVyX3BhZ2U9JyArIHBlcnBhZ2U7XG4gICAgLy8gMi4gU2VhcmNoXG4gICAgLy8gaWYgKHNlYXJjaCkgcXVlcnkgKz0gJyZxdWVyeT0nICsgc2VhcmNoOyAvLyBTYWQsIEdpdEh1YiBBUEkgZG9lcyBub3QgcHJvdmlkZSBzZWFyY2hcbiAgICAvLyAzLiBTb3J0XG4gICAgaWYgKHNvcnRQcm9wZXJ0eSAmJiBzb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgICBxdWVyeSArPSAnJnNvcnQ9JyArIHNvcnRQcm9wZXJ0eSArXG4gICAgICAgICcmZGlyZWN0aW9uPScgKyAoc29ydE9yZGVyRGVzYyA/ICdkZXNjJyA6ICdhc2MnKTtcbiAgICB9XG4gICAgLy8gNC4gRmlsdGVyIC8vIFNhZCwgR2l0SHViIEFQSSBkb2VzIG5vdCBwcm92aWRlIGZpbHRlclxuICAgIC8vaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgcXVlcnkgKz0gT2JqZWN0LmtleXMoZmlsdGVyKS5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgLy8gICAgcmV0dXJuICcmJyArIHByb3BlcnR5ICsgJz0nICsgZmlsdGVyW3Byb3BlcnR5XTtcbiAgICAvLyAgfSk7XG4gICAgLy99XG4gICAgLy8gNS4gRXh0cmEgcGFyYW1zXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXh0cmFQYXJhbXMpLmxlbmd0aCkge1xuICAgICAgcXVlcnkgKz0gJyYnICsgT2JqZWN0LmtleXModGhpcy5leHRyYVBhcmFtcykubWFwKChrZXkpID0+XG4gICAgICAgIGtleSArICc9JyArIHRoaXMuZXh0cmFQYXJhbXNba2V5XSkuam9pbignJicpO1xuICAgIH1cblxuICAgIGFwaS5nZXQoYXBpRW5kUG9pbnQgKyAnPycgKyBxdWVyeSwge30sIHRoaXMuZGlzYWJsZUNhY2hlKVxuICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RQcm9wZXJ0eSA9IHRoaXMuZW50aXR5LmFwaVByb3BlcnR5O1xuICAgICAgICBjb25zdCBjb3VudFByb3BlcnR5ID0gdGhpcy5lbnRpdHkuYXBpQ291bnRQcm9wZXJ0eSB8fCAnY291bnQnO1xuICAgICAgICBjb25zdCBlbnRpdGllcyA9IGxpc3RQcm9wZXJ0eSA/IHJlc3BvbnNlW2xpc3RQcm9wZXJ0eV0gOiByZXNwb25zZTtcbiAgICAgICAgY29uc3QgY291bnQgPSBjb3VudFByb3BlcnR5ID8gcmVzcG9uc2VbY291bnRQcm9wZXJ0eV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIHRvdGFsOiBjb3VudCxcbiAgICAgICAgICBlbnRpdGllczogZW50aXRpZXMsXG4gICAgICAgICAgcGVycGFnZTogcGVycGFnZSB8fCAoY291bnQgPT09IHVuZGVmaW5lZCA/IGVudGl0aWVzLmxlbmd0aCA6IHRoaXMuREVGQVVMVF9QRVJfUEFHRSksXG4gICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcignZmFpbGVkJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMi8xNC8xNS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9yZXF1ZXN0LWNhY2hlJztcbmNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5jb25zdCBhcGkgPSB7XG4gIF9sb2c6IGZhbHNlLFxuICBleHRyYU9wdGlvbnM6IHtcbiAgICAvLyBoZWFkZXJzOiB7XG4gICAgLy8gICAnR09SVVRPS0VOJzogc2Vzc2lvblN0b3JlLnRva2VuLFxuICAgIC8vIH0sXG4gICAgdHlwZTogJ2pzb24nLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICB9LFxuICBsb2coLi4uYXJncykge1xuICAgIHRoaXMuX2xvZyAmJiBjb25zb2xlLmxvZygnW0FQSV0nLCAuLi5hcmdzKTtcbiAgfSxcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybiBhICQuRGVmZXJyZWQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIHJlcXVlc3QgaXMgY29tcGxldGUgKG9yIGNhY2hlKVxuICAgKi9cbiAgX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgbWV0aG9kLCBkaXNhYmxlQ2FjaGUpIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IHVybCArICdbJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAnJykgKyAnXSc7XG5cbiAgICBjb25zdCBhamF4ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9LCB0aGlzLmV4dHJhT3B0aW9ucywge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9nKCdSZXF1ZXN0IHNlbnQ6ICcsIGNhY2hlS2V5LCBvcHRpb25zKTtcbiAgICAgIGlmICh0aGlzLl9sb2cpIHtcbiAgICAgICAgcmVxdWVzdExvZy5hZGQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmxvZygnUmVxdWVzdCBjYWNoZWQ6ICcgKyBjYWNoZUtleSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoZGlzYWJsZUNhY2hlKSB7XG4gICAgICB0aGlzLmxvZygnUmVxdWVzdCBzZW50IHdpdGhvdXQgY2FjaGU6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gYWpheCgpO1xuICAgIH1cbiAgICAvLyBVc2UgY2FjaGVcbiAgICAvLyBUcnkgdG8gZ2V0IGRhdGEgZnJvbSBjYWNoZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMubG9nKCdSZXR1cm5pbmcgY2FjaGVkIHJlcXVlc3Q6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRoaXMubG9nKCdBc2tlZCBmb3IgY2FjaGUgYnV0IG5vdCBmb3VuZCwgc2VuZGluZyByZXF1ZXN0OiAnICsgY2FjaGVLZXkpO1xuICAgIC8vIE5vIGNhY2hlIGF2YWlsYWJsZVxuICAgIHJldHVybiBhamF4KCk7XG4gIH0sXG4gIGdldCh1cmwsIGRhdGEsIGRpc2FibGVDYWNoZSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdHRVQnLCBkaXNhYmxlQ2FjaGUpO1xuICB9LFxuICAvKipcbiAgICogUG9zdCByZXF1ZXN0cyBuZXZlciB1c2UgY2FjaGVcbiAgICovXG4gIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ1BPU1QnLCB0cnVlKTtcbiAgfSxcbiAgcHV0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdQVVQnLCB0cnVlKTtcbiAgfSxcbiAgZGVsZXRlKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdERUxFVEUnLCB0cnVlKTtcbiAgfSxcbiAgdXBsb2FkKHVybCwgZm9ybURhdGEpIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbiAgY2xlYXJDYWNoZShrZXkpIHtcbiAgICBjYWNoZS5jbGVhcihrZXkpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEyLzE0LzE1LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2F0ZWdvcmllczogW3tcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDA2ODIzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MDY4NTJaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50XCIsXCJpZFwiOjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDIwNjQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MjA2NzRaXCIsXCJuYW1lXCI6XCJXZXN0ZXJuXCIsXCJpZFwiOjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTc3MDI1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41NzcwNTNaXCIsXCJuYW1lXCI6XCJCYXJcIixcImlkXCI6M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41ODc4ODdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU4NzkxNlpcIixcIm5hbWVcIjpcIkNvY2t0YWlsc1wiLFwiaWRcIjo0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc0MzMyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzQzMzU0WlwiLFwibmFtZVwiOlwiQnVmZmV0XCIsXCJpZFwiOjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzU0Mjk0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NTQzMjNaXCIsXCJuYW1lXCI6XCJJbnRlcm5hdGlvbmFsXCIsXCJpZFwiOjZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDQzMzMwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNDMzNjFaXCIsXCJuYW1lXCI6XCJNZWRpdGVycmFuZWFuXCIsXCJpZFwiOjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDU0MTkwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNTQyMTlaXCIsXCJuYW1lXCI6XCJTaW5nYXBvcmVhblwiLFwiaWRcIjo4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjE5MzkyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMTkzOTY4WlwiLFwibmFtZVwiOlwiU3Bpcml0cy9XaGlza3lcIixcImlkXCI6OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4zMjU2OTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjMyNTcyM1pcIixcIm5hbWVcIjpcIkRlc3NlcnRcIixcImlkXCI6MTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNDczNjE0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC40NzM2NDJaXCIsXCJuYW1lXCI6XCJLb3JlYW5cIixcImlkXCI6MTF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjA5MTE4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MDkxNDhaXCIsXCJuYW1lXCI6XCJGb29kL2RyaW5rIHN0YWxsXCIsXCJpZFwiOjEyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYyMDEyMVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjIwMTU3WlwiLFwibmFtZVwiOlwiSGF3a2VyIENlbnRyZVwiLFwiaWRcIjoxM30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43ODMwNzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc4MzExMlpcIixcIm5hbWVcIjpcIkV1cm9wZWFuXCIsXCJpZFwiOjE0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc5Mzk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzk0MDEyWlwiLFwibmFtZVwiOlwiRnVzaW9uXCIsXCJpZFwiOjE1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjg0NDk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuODQ1MDEzWlwiLFwibmFtZVwiOlwiQ2Fmw6lcIixcImlkXCI6MTZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTc0OTk2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45NzUwMzJaXCIsXCJuYW1lXCI6XCJDaGluZXNlXCIsXCJpZFwiOjE3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk4NjA0OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTg2MDgwWlwiLFwibmFtZVwiOlwiVmVnZXRhcmlhbi1mcmllbmRseVwiLFwiaWRcIjoxOH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi4xMzM5NzRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjEzNDAwN1pcIixcIm5hbWVcIjpcIkphcGFuZXNlXCIsXCJpZFwiOjE5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjUwNTM4NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuNTA1NDI2WlwiLFwibmFtZVwiOlwiQnJ1bmNoXCIsXCJpZFwiOjIwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkxODg0NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTE4ODc0WlwiLFwibmFtZVwiOlwiQXNpYW5cIixcImlkXCI6MjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTI5NDMyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45Mjk0NTlaXCIsXCJuYW1lXCI6XCJFeHBlcmltZW50YWxcIixcImlkXCI6MjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzMuODA5NjAzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMy44MDk2MzJaXCIsXCJuYW1lXCI6XCJJbmRpYW5cIixcImlkXCI6MjN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzQuMDczMzc2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNC4wNzM0MDVaXCIsXCJuYW1lXCI6XCJGcmVuY2hcIixcImlkXCI6MjR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzUuODM4OTIxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNS44Mzg5NDlaXCIsXCJuYW1lXCI6XCJCYWtlcnlcIixcImlkXCI6MjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuMTI3ODgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi4xMjc5MTFaXCIsXCJuYW1lXCI6XCJJdGFsaWFuXCIsXCJpZFwiOjI2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjQwODM1OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuNDA4Mzg2WlwiLFwibmFtZVwiOlwiTWlkZGxlIEVhc3Rlcm5cIixcImlkXCI6Mjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzcuNzcyODM4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNy43NzI4NjdaXCIsXCJuYW1lXCI6XCJDbHViXCIsXCJpZFwiOjI4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ0LjIwMzAxOFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDQuMjAzMDQ5WlwiLFwibmFtZVwiOlwiU3BhbmlzaFwiLFwiaWRcIjoyOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0Ni41NTgyMzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ2LjU1ODI2MVpcIixcIm5hbWVcIjpcIlRoYWlcIixcImlkXCI6MzB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDkuMzE0NTgxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0OS4zMTQ2MTJaXCIsXCJuYW1lXCI6XCJXaW5lXCIsXCJpZFwiOjMxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUwLjI0NTQ2NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTAuMjQ1NDk0WlwiLFwibmFtZVwiOlwiU3RlYWtob3VzZVwiLFwiaWRcIjozMn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1My41NTQ4MDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUzLjU1NDgzMlpcIixcIm5hbWVcIjpcIkluZG9uZXNpYW5cIixcImlkXCI6MzN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTQuODkwNjA5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1NC44OTA2NTNaXCIsXCJuYW1lXCI6XCJMYXRpbiBBbWVyaWNhblwiLFwiaWRcIjozNH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowMS45MDY5OTNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjAxLjkwNzAyNlpcIixcIm5hbWVcIjpcIk1leGljYW5cIixcImlkXCI6MzV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDYuMDk4MDQ0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowNi4wOTgwNzFaXCIsXCJuYW1lXCI6XCJWaWV0bmFtZXNlXCIsXCJpZFwiOjM2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjUzLjcwMzczN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6NTMuNzAzNzgyWlwiLFwibmFtZVwiOlwiTWFsYXlcIixcImlkXCI6Mzd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTM6MDcuMzY1ODQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MzowNy4zNjU4NzVaXCIsXCJuYW1lXCI6XCJDYXJpYmJlYW5cIixcImlkXCI6Mzh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuMjEwNjE5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS4yMTA2NjRaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50c1wiLFwiaWRcIjozOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS44OTI5MTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5Ljg5Mjk0N1pcIixcIm5hbWVcIjpcIkNhZmVzXCIsXCJpZFwiOjQwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjkwMzk1OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuOTAzOTg4WlwiLFwibmFtZVwiOlwiSGF3a2VyIEVhdHNcIixcImlkXCI6NDF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjEwNTM5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MTA1NjlaXCIsXCJuYW1lXCI6XCJCYXJzXCIsXCJpZFwiOjQyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYyMjA4OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjIyMTI2WlwiLFwibmFtZVwiOlwiQmVlclwiLFwiaWRcIjo0M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNTQ1ODRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA1NDYzN1pcIixcIm5hbWVcIjpcIlBlcmFuYWthblwiLFwiaWRcIjo0NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNzE4MjNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA3MTg1OVpcIixcIm5hbWVcIjpcIlN3ZWV0IFRvb3RoXCIsXCJpZFwiOjQ1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI0LjQ2MzYwN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjQuNDYzNjM5WlwiLFwibmFtZVwiOlwiQ29mZmVlIEFkZGljdHNcIixcImlkXCI6NDZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjYuNTg0MDY4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNi41ODQxMDFaXCIsXCJuYW1lXCI6XCJNdXNpY1wiLFwiaWRcIjo0N30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozMy43MjYxNTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjMzLjcyNjIwMFpcIixcIm5hbWVcIjpcIlZlZ2V0YXJpYW5cIixcImlkXCI6NDh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTAxOTkyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MDIwMjdaXCIsXCJuYW1lXCI6XCJKdXN0IE9wZW5lZFwiLFwiaWRcIjo0OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MTMyMjdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUxMzI1OVpcIixcIm5hbWVcIjpcIkN1bHR1cmVcIixcImlkXCI6NTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTI0MjYxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MjQyOTJaXCIsXCJuYW1lXCI6XCJTdHlsZVwiLFwiaWRcIjo1MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MzUzMTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUzNTM1MFpcIixcIm5hbWVcIjpcIkFjdGl2ZVwiLFwiaWRcIjo1Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNy41MjU2NzZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM3LjUyNTcwOVpcIixcIm5hbWVcIjpcIlRoZWF0cmVcIixcImlkXCI6NTN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguMDU2NTA0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC4wNTY1NDhaXCIsXCJuYW1lXCI6XCJXb21lbidzIEZhc2hpb25cIixcImlkXCI6NTR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguOTk5MDk4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC45OTkxMjlaXCIsXCJuYW1lXCI6XCJTcGlyaXRzXCIsXCJpZFwiOjU1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjE3MzA3OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuMTczMTE4WlwiLFwibmFtZVwiOlwiTmV3IFJlc3RhdXJhbnRzIGFuZCBCYXJzXCIsXCJpZFwiOjU2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjcwMTQzM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuNzAxNDY3WlwiLFwibmFtZVwiOlwiTWVhdC1sb3ZlcnNcIixcImlkXCI6NTd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzAzMTg4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMDMyMjhaXCIsXCJuYW1lXCI6XCJBcnRcIixcImlkXCI6NTh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzE5OTU1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMTk5ODhaXCIsXCJuYW1lXCI6XCJGaWxtXCIsXCJpZFwiOjU5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMzNjc2OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzM2ODA1WlwiLFwibmFtZVwiOlwiTWVuJ3MgRmFzaGlvblwiLFwiaWRcIjo2MH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xMzQ0MDNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjEzNDQzNlpcIixcIm5hbWVcIjpcIkRhbmNlXCIsXCJpZFwiOjYxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjE0NTgzNlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTQ1ODY5WlwiLFwibmFtZVwiOlwiTmlnaHRsaWZlXCIsXCJpZFwiOjYyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjM4LjE0Mzg4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6MzguMTQzOTEwWlwiLFwibmFtZVwiOlwiRm9vZCAmIERyaW5rXCIsXCJpZFwiOjYzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjUwLjkyNzQxMlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6NTAuOTI3NDQ2WlwiLFwibmFtZVwiOlwiVHJhdmVsXCIsXCJpZFwiOjY0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTEwLTMwVDA1OjI4OjQ4Ljg3MTkyOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMTAtMzBUMDU6Mjg6NDguODcxOTUyWlwiLFwibmFtZVwiOlwiSG90ZWxzXCIsXCJpZFwiOjY2fV1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IHt9LFxuICBnZXQoa2V5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhW2tleV07XG4gICAgLy8gSWYgdGFyZ2V0IG5vdCBleHBpcmVkIHlldCwgb3Igbm8gZXhwaXJlZCBkYXRlIHNldFxuICAgIGlmICh0YXJnZXQgJiYgKHRhcmdldC5leHBpcmVkRGF0ZSA+ICtuZXcgRGF0ZSgpIHx8ICF0YXJnZXQuZXhwaXJlZERhdGUpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICAvKipcbiAgICogQGtleSA6IGtleVxuICAgKiBAdmFsdWUgOiB2YWx1ZVxuICAgKiBAZXhwaXJlZERhdGUgOiBtaWxpc2Vjb25kXG4gICAqL1xuICBzZXQoa2V5LCB2YWx1ZSwgZXhwaXJlZERhdGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgICBpZiAoZXhwaXJlZERhdGUpIHtcbiAgICAgIHRhcmdldC5leHBpcmVkRGF0ZSA9IGV4cGlyZWREYXRlO1xuICAgIH1cbiAgICB0aGlzLmRhdGFba2V5XSA9IHRhcmdldDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBDbGVhciBjYWNoZSBmb3IgYWxsIG1hdGNoZWQga2V5cyAob3IgZXhhY3RseSB0aGUga2V5IGlmIGBtYXRjaGAgaXMgYSBzdHJpbmcpXG4gICAqL1xuICBjbGVhcihtYXRjaCkge1xuICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5c1tpXS5tYXRjaChtYXRjaCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbWF0Y2hdO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
