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

var CategoryDataSource = (function (_DataSource) {
  _inherits(CategoryDataSource, _DataSource);

  function CategoryDataSource(name, items) {
    _classCallCheck(this, CategoryDataSource);

    _get(Object.getPrototypeOf(CategoryDataSource.prototype), 'constructor', this).call(this, name);
    this.meta = {
      keyField: 'id',
      searchFields: ['name'],
      listFields: [['Name', 'name']]
    };

    this.items = items;
    this.entity = this.meta;
    this.extraColums = [];
  }

  _createClass(CategoryDataSource, [{
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

  return CategoryDataSource;
})(_reactDatatable.DataSource);

exports['default'] = CategoryDataSource;
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
      keyField: 'id',
      searchFields: ['title'],
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

      var apiEndPoint = 'https://api.github.com/repos/facebook/react/issues';

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
        // Set data
        _this.data = {
          page: page,
          total: undefined, // Sad, GitHub does not provide this information
          entities: response,
          perpage: perpage || (count === undefined ? response.length : _this.DEFAULT_PER_PAGE),
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy9kYXRhLXNvdXJjZS9HaXRIdWJJc3N1ZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGVtby5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy91dGlscy9hcGkuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvdXRpbHMvZmFrZS1kYXRhLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL3V0aWxzL3JlcXVlc3QtY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7Ozs0Q0FDUixrQ0FBa0M7Ozs7K0NBQy9CLHFDQUFxQzs7Ozs2QkFDbEQsbUJBQW1COzs7O0lBRW5CLEdBQUc7WUFBSCxHQUFHOztBQUNYLFdBRFEsR0FBRyxHQUNEOzBCQURGLEdBQUc7O3NDQUNQLElBQUk7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LENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQywwQkFBMEIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Q0FDaHlPOzs7Ozs7Ozs7Ozs7cUJDSGM7QUFDYixNQUFJLEVBQUUsRUFBRTtBQUNSLEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRTtBQUNQLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlCLFFBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQSxBQUFDLEVBQUU7QUFDdkUsYUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3JCO0FBQ0QsV0FBTyxTQUFTLENBQUM7R0FDbEI7Ozs7OztBQU1ELEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0FBQzNCLFFBQU0sTUFBTSxHQUFHO0FBQ2IsV0FBSyxFQUFFLEtBQUs7S0FDYixDQUFDO0FBQ0YsUUFBSSxXQUFXLEVBQUU7QUFDZixZQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNsQztBQUNELFFBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7Ozs7QUFJRCxPQUFLLEVBQUEsZUFBQyxLQUFLLEVBQUU7QUFDWCxRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxZQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsaUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtPQUNGO0tBQ0YsTUFBTTtBQUNMLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtHQUNGO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcbmltcG9ydCBDYXRlZ29yeURhdGFTb3VyY2UgZnJvbSAnLi9kYXRhLXNvdXJjZS9DYXRlZ29yeURhdGFTb3VyY2UnO1xuaW1wb3J0IEdpdEh1Yklzc3VlRGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL0dpdEh1Yklzc3VlRGF0YVNvdXJjZSc7XG5pbXBvcnQgZmFrZURhdGEgZnJvbSAnLi91dGlscy9mYWtlLWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jYXRlZ29yeURhdGFTb3VyY2UgPSBuZXcgQ2F0ZWdvcnlEYXRhU291cmNlKCdjYXRlZ29yeS1saXN0LXNlbGVjdCcsIGZha2VEYXRhLmNhdGVnb3JpZXMpO1xuICAgIHRoaXMucmVhY3RJc3N1ZURhdGFTb3VyY2UgPSBuZXcgR2l0SHViSXNzdWVEYXRhU291cmNlKCdyZWFjdC1pc3N1ZXMnKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGF0aWMgZGF0YTwvaDE+XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJjYXRlZ29yeS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5jYXRlZ29yeURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlIC8+XG5cbiAgICAgICAgPGhyLz5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BamF4IGRhdGEgKFJlYWN0IEdpdEh1YiBpc3N1ZXMpPC9oMT5cbiAgICAgICAgey8qXG4gICAgICAgIFRPRE86IGFkZCBhZGFwdGVyIHRvIGludGVncmF0ZSB3aXRoIEdpdEh1YiBBUElcbiAgICAgICAgKi99XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJyZWFjdC1pc3N1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5yZWFjdElzc3VlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzb3J0YWJsZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdyZWFjdC1kYXRhdGFibGUnO1xuXG4vKipcbiAqIERhdGEgc291cmNlIGZvciBlbnRpdHkgd2l0aCBleGlzdGluZyBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5RGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGl0ZW1zKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5tZXRhID0ge1xuICAgICAga2V5RmllbGQ6ICdpZCcsXG4gICAgICBzZWFyY2hGaWVsZHM6IFsnbmFtZSddLFxuICAgICAgbGlzdEZpZWxkczogW1xuICAgICAgICBbJ05hbWUnLCAnbmFtZSddLFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5tZXRhO1xuICAgIHRoaXMuZXh0cmFDb2x1bXMgPSBbXTtcbiAgfVxuXG4gIGZldGNoKHBhZ2UsIHNlYXJjaCwgc29ydFByb3BlcnR5LCBzb3J0T3JkZXJEZXNjLCBmaWx0ZXIsIHBlcnBhZ2UpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuaXRlbXM7XG4gICAgLy8gMS4gRmlsdGVyXG4gICAgaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlckZ1bmMgPSBpdGVtID0+IGl0ZW1bdGhpc10gPT09IGZpbHRlclt0aGlzXTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZmlsdGVyKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihmaWx0ZXJGdW5jLmJpbmQocHJvcGVydHkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyAyLiBTZWFyY2hcbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICBjb25zdCBzZWFyY2hGaWVsZHMgPSB0aGlzLmVudGl0eS5zZWFyY2hGaWVsZHM7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWFyY2hGaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXRlbVtzZWFyY2hGaWVsZHNbaV1dLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2F2ZSB0aGUgdG90YWwgaXRlbSBmb3IgcGFnaW5hdGlvblxuICAgIHZhciBfdG90YWwgPSBkYXRhLmxlbmd0aDtcblxuICAgIC8vIDMuIE9yZGVyXG4gICAgaWYgKHNvcnRQcm9wZXJ0eSAmJiBzb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgICBkYXRhID0gZGF0YS5jb25jYXQoW10pLnNvcnQoKGEsIGIpID0+ICgyICogKCtzb3J0T3JkZXJEZXNjKSAtIDEpICpcbiAgICAgIChhW3NvcnRQcm9wZXJ0eV0gPiBiW3NvcnRQcm9wZXJ0eV0gPyAxIDogLTEpKTtcbiAgICB9XG5cbiAgICAvLyA0LiBQYWdpbmdcbiAgICBwZXJwYWdlID0gcGVycGFnZSB8fCB0aGlzLkRFRkFVTFRfUEVSX1BBR0U7XG4gICAgY29uc3QgcGFnZUl0ZW1zID0gZGF0YS5zbGljZShwZXJwYWdlICogKHBhZ2UgLSAxKSwgcGFnZSAqIHBlcnBhZ2UpO1xuXG4gICAgLy8gU2V0IGRhdGFcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBwYWdlOiBwYWdlLFxuICAgICAgdG90YWw6IF90b3RhbCxcbiAgICAgIGVudGl0aWVzOiBwYWdlSXRlbXMsXG4gICAgICBwZXJwYWdlOiBwZXJwYWdlLFxuICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICBzb3J0UHJvcGVydHk6IHNvcnRQcm9wZXJ0eSxcbiAgICAgIHNvcnRPcmRlckRlc2M6IHNvcnRPcmRlckRlc2MsXG4gICAgfTtcblxuICAgIC8vIEVtaXQgZXZlbnRcbiAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdyZWFjdC1kYXRhdGFibGUnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi91dGlscy9hcGkuanMnO1xuXG4vKipcbiAqIERhdGEgc291cmNlIGZyb20gZW50aXR5IEFQSXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0SHViSXNzdWVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLm1ldGEgPSB7XG4gICAgICBrZXlGaWVsZDogJ2lkJyxcbiAgICAgIHNlYXJjaEZpZWxkczogWyd0aXRsZSddLFxuICAgICAgbGlzdEZpZWxkczogW1xuICAgICAgICBbJ1RpdGxlJywge1xuICAgICAgICAgIGZpZWxkOiAndGl0bGUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3RoaXMudXJsfT57dmFsdWV9PC9hPjtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbJ0xhYmVscycsIHtcbiAgICAgICAgICBmaWVsZDogJ2xhYmVscycsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGxhYmVsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbGFiZWwuY29sb3J9fT57bGFiZWwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWydDb21tZW50cycsICdjb21tZW50cyddLFxuICAgICAgICBbJ0NyZWF0ZWQgYXQnLCB7XG4gICAgICAgICAgZmllbGQ6ICdjcmVhdGVkX2F0JyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgXVxuICAgIH07XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5kaXNhYmxlQ2FjaGUgPSBmYWxzZTtcbiAgfVxuXG4gIGZldGNoKHBhZ2UsIHNlYXJjaCwgc29ydFByb3BlcnR5LCBzb3J0T3JkZXJEZXNjLCBmaWx0ZXIsIHBlcnBhZ2UpIHtcbiAgICBjb25zdCBhcGlFbmRQb2ludCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcyc7XG5cbiAgICAvLyBCdWlsZCBxdWVyeVxuICAgIC8vIDEuIFBhZ2luYXRpb25cbiAgICBsZXQgcXVlcnkgPSAnJnBhZ2U9JyArIHBhZ2U7XG4gICAgaWYgKHBlcnBhZ2UpIHF1ZXJ5ICs9ICcmcGVyX3BhZ2U9JyArIHBlcnBhZ2U7XG4gICAgLy8gMi4gU2VhcmNoXG4gICAgLy8gaWYgKHNlYXJjaCkgcXVlcnkgKz0gJyZxdWVyeT0nICsgc2VhcmNoOyAvLyBTYWQsIEdpdEh1YiBBUEkgZG9lcyBub3QgcHJvdmlkZSBzZWFyY2hcbiAgICAvLyAzLiBTb3J0XG4gICAgaWYgKHNvcnRQcm9wZXJ0eSAmJiBzb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgICBxdWVyeSArPSAnJnNvcnQ9JyArIHNvcnRQcm9wZXJ0eSArXG4gICAgICAgICcmZGlyZWN0aW9uPScgKyAoc29ydE9yZGVyRGVzYyA/ICdkZXNjJyA6ICdhc2MnKTtcbiAgICB9XG4gICAgLy8gNC4gRmlsdGVyIC8vIFNhZCwgR2l0SHViIEFQSSBkb2VzIG5vdCBwcm92aWRlIGZpbHRlclxuICAgIC8vaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgcXVlcnkgKz0gT2JqZWN0LmtleXMoZmlsdGVyKS5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgLy8gICAgcmV0dXJuICcmJyArIHByb3BlcnR5ICsgJz0nICsgZmlsdGVyW3Byb3BlcnR5XTtcbiAgICAvLyAgfSk7XG4gICAgLy99XG4gICAgLy8gNS4gRXh0cmEgcGFyYW1zXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXh0cmFQYXJhbXMpLmxlbmd0aCkge1xuICAgICAgcXVlcnkgKz0gJyYnICsgT2JqZWN0LmtleXModGhpcy5leHRyYVBhcmFtcykubWFwKChrZXkpID0+XG4gICAgICAgIGtleSArICc9JyArIHRoaXMuZXh0cmFQYXJhbXNba2V5XSkuam9pbignJicpO1xuICAgIH1cblxuICAgIGFwaS5nZXQoYXBpRW5kUG9pbnQgKyAnPycgKyBxdWVyeSwge30sIHRoaXMuZGlzYWJsZUNhY2hlKVxuICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIHRvdGFsOiB1bmRlZmluZWQsIC8vIFNhZCwgR2l0SHViIGRvZXMgbm90IHByb3ZpZGUgdGhpcyBpbmZvcm1hdGlvblxuICAgICAgICAgIGVudGl0aWVzOiByZXNwb25zZSxcbiAgICAgICAgICBwZXJwYWdlOiBwZXJwYWdlIHx8IChjb3VudCA9PT0gdW5kZWZpbmVkID8gcmVzcG9uc2UubGVuZ3RoIDogdGhpcy5ERUZBVUxUX1BFUl9QQUdFKSxcbiAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgICAgICBzb3J0UHJvcGVydHk6IHNvcnRQcm9wZXJ0eSxcbiAgICAgICAgICBzb3J0T3JkZXJEZXNjOiBzb3J0T3JkZXJEZXNjLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEVtaXQgZXZlbnRcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pLmZhaWwoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKCdmYWlsZWQnKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEyLzE0LzE1LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDkvMzAvMTUuXG4gKi9cbmltcG9ydCBjYWNoZSBmcm9tICcuL3JlcXVlc3QtY2FjaGUnO1xuY29uc3QgJCA9IHdpbmRvdy5qUXVlcnk7XG5cbmNvbnN0IGFwaSA9IHtcbiAgX2xvZzogZmFsc2UsXG4gIGV4dHJhT3B0aW9uczoge1xuICAgIC8vIGhlYWRlcnM6IHtcbiAgICAvLyAgICdHT1JVVE9LRU4nOiBzZXNzaW9uU3RvcmUudG9rZW4sXG4gICAgLy8gfSxcbiAgICB0eXBlOiAnanNvbicsXG4gICAgY3Jvc3NEb21haW46IHRydWUsXG4gIH0sXG4gIGxvZyguLi5hcmdzKSB7XG4gICAgdGhpcy5fbG9nICYmIGNvbnNvbGUubG9nKCdbQVBJXScsIC4uLmFyZ3MpO1xuICB9LFxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcmV0dXJuIGEgJC5EZWZlcnJlZCB3aWxsIHJlc29sdmUgd2hlbiB0aGUgcmVxdWVzdCBpcyBjb21wbGV0ZSAob3IgY2FjaGUpXG4gICAqL1xuICBfc2VuZFJlcXVlc3QodXJsLCBkYXRhLCBtZXRob2QsIGRpc2FibGVDYWNoZSkge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0gdXJsICsgJ1snICsgKGRhdGEgPyBKU09OLnN0cmluZ2lmeShkYXRhKSA6ICcnKSArICddJztcblxuICAgIGNvbnN0IGFqYXggPSAoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgIH0sIHRoaXMuZXh0cmFPcHRpb25zLCB7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2coJ1JlcXVlc3Qgc2VudDogJywgY2FjaGVLZXksIG9wdGlvbnMpO1xuICAgICAgaWYgKHRoaXMuX2xvZykge1xuICAgICAgICByZXF1ZXN0TG9nLmFkZChvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkLmFqYXgob3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY2FjaGUuc2V0KGNhY2hlS2V5LCByZXNwb25zZSk7XG4gICAgICAgIHRoaXMubG9nKCdSZXF1ZXN0IGNhY2hlZDogJyArIGNhY2hlS2V5KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChkaXNhYmxlQ2FjaGUpIHtcbiAgICAgIHRoaXMubG9nKCdSZXF1ZXN0IHNlbnQgd2l0aG91dCBjYWNoZTogJyArIGNhY2hlS2V5KTtcbiAgICAgIHJldHVybiBhamF4KCk7XG4gICAgfVxuICAgIC8vIFVzZSBjYWNoZVxuICAgIC8vIFRyeSB0byBnZXQgZGF0YSBmcm9tIGNhY2hlXG4gICAgY29uc3QgcmVzcG9uc2UgPSBjYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5sb2coJ1JldHVybmluZyBjYWNoZWQgcmVxdWVzdDogJyArIGNhY2hlS2V5KTtcbiAgICAgIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2coJ0Fza2VkIGZvciBjYWNoZSBidXQgbm90IGZvdW5kLCBzZW5kaW5nIHJlcXVlc3Q6ICcgKyBjYWNoZUtleSk7XG4gICAgLy8gTm8gY2FjaGUgYXZhaWxhYmxlXG4gICAgcmV0dXJuIGFqYXgoKTtcbiAgfSxcbiAgZ2V0KHVybCwgZGF0YSwgZGlzYWJsZUNhY2hlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ0dFVCcsIGRpc2FibGVDYWNoZSk7XG4gIH0sXG4gIC8qKlxuICAgKiBQb3N0IHJlcXVlc3RzIG5ldmVyIHVzZSBjYWNoZVxuICAgKi9cbiAgcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QodXJsLCBkYXRhLCAnUE9TVCcsIHRydWUpO1xuICB9LFxuICBwdXQodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ1BVVCcsIHRydWUpO1xuICB9LFxuICBkZWxldGUodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ0RFTEVURScsIHRydWUpO1xuICB9LFxuICB1cGxvYWQodXJsLCBmb3JtRGF0YSkge1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuICBjbGVhckNhY2hlKGtleSkge1xuICAgIGNhY2hlLmNsZWFyKGtleSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTIvMTQvMTUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjYXRlZ29yaWVzOiBbe1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MDY4MjNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjQwNjg1MlpcIixcIm5hbWVcIjpcIlJlc3RhdXJhbnRcIixcImlkXCI6MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MjA2NDVaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjQyMDY3NFpcIixcIm5hbWVcIjpcIldlc3Rlcm5cIixcImlkXCI6Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41NzcwMjVaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU3NzA1M1pcIixcIm5hbWVcIjpcIkJhclwiLFwiaWRcIjozfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU4Nzg4N1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTg3OTE2WlwiLFwibmFtZVwiOlwiQ29ja3RhaWxzXCIsXCJpZFwiOjR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzQzMzI0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NDMzNTRaXCIsXCJuYW1lXCI6XCJCdWZmZXRcIixcImlkXCI6NX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NTQyOTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc1NDMyM1pcIixcIm5hbWVcIjpcIkludGVybmF0aW9uYWxcIixcImlkXCI6Nn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNDMzMzBaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjA0MzM2MVpcIixcIm5hbWVcIjpcIk1lZGl0ZXJyYW5lYW5cIixcImlkXCI6N30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNTQxOTBaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjA1NDIxOVpcIixcIm5hbWVcIjpcIlNpbmdhcG9yZWFuXCIsXCJpZFwiOjh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMTkzOTI0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4xOTM5NjhaXCIsXCJuYW1lXCI6XCJTcGlyaXRzL1doaXNreVwiLFwiaWRcIjo5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjMyNTY5NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMzI1NzIzWlwiLFwibmFtZVwiOlwiRGVzc2VydFwiLFwiaWRcIjoxMH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC40NzM2MTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjQ3MzY0MlpcIixcIm5hbWVcIjpcIktvcmVhblwiLFwiaWRcIjoxMX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MDkxMThaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYwOTE0OFpcIixcIm5hbWVcIjpcIkZvb2QvZHJpbmsgc3RhbGxcIixcImlkXCI6MTJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjIwMTIxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MjAxNTdaXCIsXCJuYW1lXCI6XCJIYXdrZXIgQ2VudHJlXCIsXCJpZFwiOjEzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc4MzA3MlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzgzMTEyWlwiLFwibmFtZVwiOlwiRXVyb3BlYW5cIixcImlkXCI6MTR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzkzOTgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43OTQwMTJaXCIsXCJuYW1lXCI6XCJGdXNpb25cIixcImlkXCI6MTV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuODQ0OTgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS44NDUwMTNaXCIsXCJuYW1lXCI6XCJDYWbDqVwiLFwiaWRcIjoxNn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45NzQ5OTZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk3NTAzMlpcIixcIm5hbWVcIjpcIkNoaW5lc2VcIixcImlkXCI6MTd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTg2MDQ4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45ODYwODBaXCIsXCJuYW1lXCI6XCJWZWdldGFyaWFuLWZyaWVuZGx5XCIsXCJpZFwiOjE4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjEzMzk3NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuMTM0MDA3WlwiLFwibmFtZVwiOlwiSmFwYW5lc2VcIixcImlkXCI6MTl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuNTA1Mzg1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi41MDU0MjZaXCIsXCJuYW1lXCI6XCJCcnVuY2hcIixcImlkXCI6MjB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTE4ODQ0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45MTg4NzRaXCIsXCJuYW1lXCI6XCJBc2lhblwiLFwiaWRcIjoyMX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45Mjk0MzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkyOTQ1OVpcIixcIm5hbWVcIjpcIkV4cGVyaW1lbnRhbFwiLFwiaWRcIjoyMn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMy44MDk2MDNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMzLjgwOTYzMlpcIixcIm5hbWVcIjpcIkluZGlhblwiLFwiaWRcIjoyM30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNC4wNzMzNzZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM0LjA3MzQwNVpcIixcIm5hbWVcIjpcIkZyZW5jaFwiLFwiaWRcIjoyNH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNS44Mzg5MjFaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM1LjgzODk0OVpcIixcIm5hbWVcIjpcIkJha2VyeVwiLFwiaWRcIjoyNX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi4xMjc4ODNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjEyNzkxMVpcIixcIm5hbWVcIjpcIkl0YWxpYW5cIixcImlkXCI6MjZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuNDA4MzU5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi40MDgzODZaXCIsXCJuYW1lXCI6XCJNaWRkbGUgRWFzdGVyblwiLFwiaWRcIjoyN30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNy43NzI4MzhaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM3Ljc3Mjg2N1pcIixcIm5hbWVcIjpcIkNsdWJcIixcImlkXCI6Mjh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDQuMjAzMDE4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0NC4yMDMwNDlaXCIsXCJuYW1lXCI6XCJTcGFuaXNoXCIsXCJpZFwiOjI5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ2LjU1ODIzMlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDYuNTU4MjYxWlwiLFwibmFtZVwiOlwiVGhhaVwiLFwiaWRcIjozMH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0OS4zMTQ1ODFaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ5LjMxNDYxMlpcIixcIm5hbWVcIjpcIldpbmVcIixcImlkXCI6MzF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTAuMjQ1NDY0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1MC4yNDU0OTRaXCIsXCJuYW1lXCI6XCJTdGVha2hvdXNlXCIsXCJpZFwiOjMyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUzLjU1NDgwNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTMuNTU0ODMyWlwiLFwibmFtZVwiOlwiSW5kb25lc2lhblwiLFwiaWRcIjozM30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1NC44OTA2MDlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjU0Ljg5MDY1M1pcIixcIm5hbWVcIjpcIkxhdGluIEFtZXJpY2FuXCIsXCJpZFwiOjM0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjAxLjkwNjk5M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDEuOTA3MDI2WlwiLFwibmFtZVwiOlwiTWV4aWNhblwiLFwiaWRcIjozNX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowNi4wOTgwNDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjA2LjA5ODA3MVpcIixcIm5hbWVcIjpcIlZpZXRuYW1lc2VcIixcImlkXCI6MzZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6NTMuNzAzNzM3WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1Mjo1My43MDM3ODJaXCIsXCJuYW1lXCI6XCJNYWxheVwiLFwiaWRcIjozN30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MzowNy4zNjU4NDVaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUzOjA3LjM2NTg3NVpcIixcIm5hbWVcIjpcIkNhcmliYmVhblwiLFwiaWRcIjozOH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS4yMTA2MTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjIxMDY2NFpcIixcIm5hbWVcIjpcIlJlc3RhdXJhbnRzXCIsXCJpZFwiOjM5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5Ljg5MjkxNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuODkyOTQ3WlwiLFwibmFtZVwiOlwiQ2FmZXNcIixcImlkXCI6NDB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuOTAzOTU4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS45MDM5ODhaXCIsXCJuYW1lXCI6XCJIYXdrZXIgRWF0c1wiLFwiaWRcIjo0MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MTA1MzlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYxMDU2OVpcIixcIm5hbWVcIjpcIkJhcnNcIixcImlkXCI6NDJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjIyMDg4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MjIxMjZaXCIsXCJuYW1lXCI6XCJCZWVyXCIsXCJpZFwiOjQzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA1NDU4NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjEuMDU0NjM3WlwiLFwibmFtZVwiOlwiUGVyYW5ha2FuXCIsXCJpZFwiOjQ0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA3MTgyM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjEuMDcxODU5WlwiLFwibmFtZVwiOlwiU3dlZXQgVG9vdGhcIixcImlkXCI6NDV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjQuNDYzNjA3WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNC40NjM2MzlaXCIsXCJuYW1lXCI6XCJDb2ZmZWUgQWRkaWN0c1wiLFwiaWRcIjo0Nn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNi41ODQwNjhaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI2LjU4NDEwMVpcIixcIm5hbWVcIjpcIk11c2ljXCIsXCJpZFwiOjQ3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjMzLjcyNjE1OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzMuNzI2MjAwWlwiLFwibmFtZVwiOlwiVmVnZXRhcmlhblwiLFwiaWRcIjo0OH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MDE5OTJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUwMjAyN1pcIixcIm5hbWVcIjpcIkp1c3QgT3BlbmVkXCIsXCJpZFwiOjQ5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUxMzIyN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTEzMjU5WlwiLFwibmFtZVwiOlwiQ3VsdHVyZVwiLFwiaWRcIjo1MH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MjQyNjFaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUyNDI5MlpcIixcIm5hbWVcIjpcIlN0eWxlXCIsXCJpZFwiOjUxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUzNTMxOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTM1MzUwWlwiLFwibmFtZVwiOlwiQWN0aXZlXCIsXCJpZFwiOjUyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM3LjUyNTY3NlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzcuNTI1NzA5WlwiLFwibmFtZVwiOlwiVGhlYXRyZVwiLFwiaWRcIjo1M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC4wNTY1MDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM4LjA1NjU0OFpcIixcIm5hbWVcIjpcIldvbWVuJ3MgRmFzaGlvblwiLFwiaWRcIjo1NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC45OTkwOThaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM4Ljk5OTEyOVpcIixcIm5hbWVcIjpcIlNwaXJpdHNcIixcImlkXCI6NTV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuMTczMDc5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTo0My4xNzMxMThaXCIsXCJuYW1lXCI6XCJOZXcgUmVzdGF1cmFudHMgYW5kIEJhcnNcIixcImlkXCI6NTZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuNzAxNDMzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTo0My43MDE0NjdaXCIsXCJuYW1lXCI6XCJNZWF0LWxvdmVyc1wiLFwiaWRcIjo1N30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMDMxODhaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMwMzIyOFpcIixcIm5hbWVcIjpcIkFydFwiLFwiaWRcIjo1OH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMTk5NTVaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMxOTk4OFpcIixcIm5hbWVcIjpcIkZpbG1cIixcImlkXCI6NTl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzM2NzY5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMzY4MDVaXCIsXCJuYW1lXCI6XCJNZW4ncyBGYXNoaW9uXCIsXCJpZFwiOjYwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjEzNDQwM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTM0NDM2WlwiLFwibmFtZVwiOlwiRGFuY2VcIixcImlkXCI6NjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTQ1ODM2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xNDU4NjlaXCIsXCJuYW1lXCI6XCJOaWdodGxpZmVcIixcImlkXCI6NjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6MzguMTQzODgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNS0wNy0xM1QxMDoyNTozOC4xNDM5MTBaXCIsXCJuYW1lXCI6XCJGb29kICYgRHJpbmtcIixcImlkXCI6NjN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6NTAuOTI3NDEyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNS0wNy0xM1QxMDoyNTo1MC45Mjc0NDZaXCIsXCJuYW1lXCI6XCJUcmF2ZWxcIixcImlkXCI6NjR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTUtMTAtMzBUMDU6Mjg6NDguODcxOTI5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNS0xMC0zMFQwNToyODo0OC44NzE5NTJaXCIsXCJuYW1lXCI6XCJIb3RlbHNcIixcImlkXCI6NjZ9XVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDkvMzAvMTUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YToge30sXG4gIGdldChrZXkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAvLyBJZiB0YXJnZXQgbm90IGV4cGlyZWQgeWV0LCBvciBubyBleHBpcmVkIGRhdGUgc2V0XG4gICAgaWYgKHRhcmdldCAmJiAodGFyZ2V0LmV4cGlyZWREYXRlID4gK25ldyBEYXRlKCkgfHwgIXRhcmdldC5leHBpcmVkRGF0ZSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sXG4gIC8qKlxuICAgKiBAa2V5IDoga2V5XG4gICAqIEB2YWx1ZSA6IHZhbHVlXG4gICAqIEBleHBpcmVkRGF0ZSA6IG1pbGlzZWNvbmRcbiAgICovXG4gIHNldChrZXksIHZhbHVlLCBleHBpcmVkRGF0ZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICB9O1xuICAgIGlmIChleHBpcmVkRGF0ZSkge1xuICAgICAgdGFyZ2V0LmV4cGlyZWREYXRlID0gZXhwaXJlZERhdGU7XG4gICAgfVxuICAgIHRoaXMuZGF0YVtrZXldID0gdGFyZ2V0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgLyoqXG4gICAqIENsZWFyIGNhY2hlIGZvciBhbGwgbWF0Y2hlZCBrZXlzIChvciBleGFjdGx5IHRoZSBrZXkgaWYgYG1hdGNoYCBpcyBhIHN0cmluZylcbiAgICovXG4gIGNsZWFyKG1hdGNoKSB7XG4gICAgaWYgKHR5cGVvZiBtYXRjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXlzW2ldLm1hdGNoKG1hdGNoKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuZGF0YVttYXRjaF07XG4gICAgfVxuICB9LFxufTtcbiJdfQ==
