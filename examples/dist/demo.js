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

var _dataSourceWikiDataSource = require('./data-source/WikiDataSource');

var _dataSourceWikiDataSource2 = _interopRequireDefault(_dataSourceWikiDataSource);

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
    this.wikiDataSource = new _dataSourceWikiDataSource2['default']('wiki-pages');
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
*/ /*
   <hr/>
   <h1 className="text-center">Wiki pages</h1>
   TODO: Wiki API require CORS
   <DataTable id="react-issue-table"
             dataSource={this.wikiDataSource}
             sortable />
   */

},{"./data-source/CategoryDataSource":2,"./data-source/GitHubIssueDataSource":3,"./data-source/WikiDataSource":4,"./utils/fake-data":7,"react":undefined,"react-datatable":undefined}],2:[function(require,module,exports){
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
              { key: label.name, className: 'label-wrapper' },
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
          perpage: perpage || _this.DEFAULT_PER_PAGE,
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

},{"../utils/api.js":6,"react":undefined,"react-datatable":undefined}],4:[function(require,module,exports){
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

var WikiDataSource = (function (_DataSource) {
  _inherits(WikiDataSource, _DataSource);

  function WikiDataSource(name) {
    _classCallCheck(this, WikiDataSource);

    _get(Object.getPrototypeOf(WikiDataSource.prototype), 'constructor', this).call(this, name);
    this.meta = {
      keyField: 'pageid',
      searchFields: ['title'],
      listFields: [['Title', 'title']]
    };
    this.entity = this.meta;
    this.disableCache = false;
  }

  _createClass(WikiDataSource, [{
    key: 'fetch',
    value: function fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
      var _this = this;

      var apiEndPoint = 'https://en.wikipedia.org/w/api.php?action=query&generator=allpages&prop=info';
      var query = "";
      // Build query
      // 1. Pagination
      // let query = '&page=' + page;
      if (perpage) query += '&gaplimit=' + perpage;
      // 2. Search
      // if (search) query += '&query=' + search;
      // 3. Sort
      if (sortProperty && sortOrderDesc !== null) {
        query += '&gapdir=' + (sortOrderDesc ? 'descending' : 'ascending');
      }
      // 4. Filter
      //if (filter && Object.keys(filter).length > 0) {
      //  query += Object.keys(filter).map((property) => {
      //    return '&' + property + '=' + filter[property];
      //  });
      //}

      _utilsApiJs2['default'].get(apiEndPoint + '?' + query, {}).done(function (response) {
        results = Object.keys(response.query.pages).map(function (key) {
          return response.query.pages[key];
        });
        // Set data
        _this.data = {
          page: page,
          total: undefined,
          entities: results,
          perpage: perpage || _this.DEFAULT_PER_PAGE,
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

  return WikiDataSource;
})(_reactDatatable.DataSource);

exports['default'] = WikiDataSource;
module.exports = exports['default'];

},{"../utils/api.js":6,"react":undefined,"react-datatable":undefined}],5:[function(require,module,exports){
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

},{"./app":1,"react":undefined,"react-dom":undefined}],6:[function(require,module,exports){
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

},{"./request-cache":8}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy9kYXRhLXNvdXJjZS9HaXRIdWJJc3N1ZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGF0YS1zb3VyY2UvV2lraURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGVtby5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy91dGlscy9hcGkuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvdXRpbHMvZmFrZS1kYXRhLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL3V0aWxzL3JlcXVlc3QtY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7Ozs0Q0FDUixrQ0FBa0M7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WUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLHFCQUFxQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLDBCQUEwQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztDQUNoeU87Ozs7Ozs7Ozs7OztxQkNIYztBQUNiLE1BQUksRUFBRSxFQUFFO0FBQ1IsS0FBRyxFQUFBLGFBQUMsR0FBRyxFQUFFO0FBQ1AsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFOUIsUUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBLEFBQUMsRUFBRTtBQUN2RSxhQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDckI7QUFDRCxXQUFPLFNBQVMsQ0FBQztHQUNsQjs7Ozs7O0FBTUQsS0FBRyxFQUFBLGFBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7QUFDM0IsUUFBTSxNQUFNLEdBQUc7QUFDYixXQUFLLEVBQUUsS0FBSztLQUNiLENBQUM7QUFDRixRQUFJLFdBQVcsRUFBRTtBQUNmLFlBQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDO0FBQ0QsUUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDeEIsV0FBTyxLQUFLLENBQUM7R0FDZDs7OztBQUlELE9BQUssRUFBQSxlQUFDLEtBQUssRUFBRTtBQUNYLFFBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQzdCLFVBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLFlBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN4QixpQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO09BQ0Y7S0FDRixNQUFNO0FBQ0wsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO0dBQ0Y7Q0FDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhdGFibGUnO1xuaW1wb3J0IENhdGVnb3J5RGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZSc7XG5pbXBvcnQgR2l0SHViSXNzdWVEYXRhU291cmNlIGZyb20gJy4vZGF0YS1zb3VyY2UvR2l0SHViSXNzdWVEYXRhU291cmNlJztcbmltcG9ydCBXaWtpRGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL1dpa2lEYXRhU291cmNlJztcbmltcG9ydCBmYWtlRGF0YSBmcm9tICcuL3V0aWxzL2Zha2UtZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNhdGVnb3J5RGF0YVNvdXJjZSA9IG5ldyBDYXRlZ29yeURhdGFTb3VyY2UoJ2NhdGVnb3J5LWxpc3Qtc2VsZWN0JywgZmFrZURhdGEuY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5yZWFjdElzc3VlRGF0YVNvdXJjZSA9IG5ldyBHaXRIdWJJc3N1ZURhdGFTb3VyY2UoJ3JlYWN0LWlzc3VlcycpO1xuICAgIHRoaXMud2lraURhdGFTb3VyY2UgPSBuZXcgV2lraURhdGFTb3VyY2UoJ3dpa2ktcGFnZXMnKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhdGljIGRhdGE8L2gxPlxuICAgICAgICA8RGF0YVRhYmxlIGlkPVwiY2F0ZWdvcnktdGFibGVcIlxuICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuY2F0ZWdvcnlEYXRhU291cmNlfVxuICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGVcbiAgICAgICAgICAgICAgICAgICBzb3J0YWJsZSAvPlxuXG4gICAgICAgIDxoci8+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWpheCBkYXRhIChSZWFjdCBHaXRIdWIgaXNzdWVzKTwvaDE+XG4gICAgICAgIHsvKlxuICAgICAgICBUT0RPOiBhZGQgYWRhcHRlciB0byBpbnRlZ3JhdGUgd2l0aCBHaXRIdWIgQVBJXG4gICAgICAgICovfVxuICAgICAgICA8RGF0YVRhYmxlIGlkPVwicmVhY3QtaXNzdWUtdGFibGVcIlxuICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMucmVhY3RJc3N1ZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgc29ydGFibGUgLz5cblxuICAgICAgICB7LypcbiAgICAgICAgPGhyLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+V2lraSBwYWdlczwvaDE+XG5cbiAgICAgICAgVE9ETzogV2lraSBBUEkgcmVxdWlyZSBDT1JTXG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJyZWFjdC1pc3N1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy53aWtpRGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzb3J0YWJsZSAvPlxuICAgICAgICAgKi99XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZm9yIGVudGl0eSB3aXRoIGV4aXN0aW5nIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgaXRlbXMpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLm1ldGEgPSB7XG4gICAgICBrZXlGaWVsZDogJ2lkJyxcbiAgICAgIHNlYXJjaEZpZWxkczogWyduYW1lJ10sXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnTmFtZScsICduYW1lJ10sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5leHRyYUNvbHVtcyA9IFtdO1xuICB9XG5cbiAgZmV0Y2gocGFnZSwgc2VhcmNoLCBzb3J0UHJvcGVydHksIHNvcnRPcmRlckRlc2MsIGZpbHRlciwgcGVycGFnZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5pdGVtcztcbiAgICAvLyAxLiBGaWx0ZXJcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyRnVuYyA9IGl0ZW0gPT4gaXRlbVt0aGlzXSA9PT0gZmlsdGVyW3RoaXNdO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZpbHRlckZ1bmMuYmluZChwcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIDIuIFNlYXJjaFxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMuZW50aXR5LnNlYXJjaEZpZWxkcztcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChpdGVtW3NlYXJjaEZpZWxkc1tpXV0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTYXZlIHRoZSB0b3RhbCBpdGVtIGZvciBwYWdpbmF0aW9uXG4gICAgdmFyIF90b3RhbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgLy8gMy4gT3JkZXJcbiAgICBpZiAoc29ydFByb3BlcnR5ICYmIHNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChbXSkuc29ydCgoYSwgYikgPT4gKDIgKiAoK3NvcnRPcmRlckRlc2MpIC0gMSkgKlxuICAgICAgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSA/IDEgOiAtMSkpO1xuICAgIH1cblxuICAgIC8vIDQuIFBhZ2luZ1xuICAgIHBlcnBhZ2UgPSBwZXJwYWdlIHx8IHRoaXMuREVGQVVMVF9QRVJfUEFHRTtcbiAgICBjb25zdCBwYWdlSXRlbXMgPSBkYXRhLnNsaWNlKHBlcnBhZ2UgKiAocGFnZSAtIDEpLCBwYWdlICogcGVycGFnZSk7XG5cbiAgICAvLyBTZXQgZGF0YVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICB0b3RhbDogX3RvdGFsLFxuICAgICAgZW50aXRpZXM6IHBhZ2VJdGVtcyxcbiAgICAgIHBlcnBhZ2U6IHBlcnBhZ2UsXG4gICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgIHNvcnRQcm9wZXJ0eTogc29ydFByb3BlcnR5LFxuICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICB9O1xuXG4gICAgLy8gRW1pdCBldmVudFxuICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcyc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZnJvbSBlbnRpdHkgQVBJc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWJJc3N1ZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGtleUZpZWxkOiAnaWQnLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ3RpdGxlJ10sXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnVGl0bGUnLCB7XG4gICAgICAgICAgZmllbGQ6ICd0aXRsZScsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dGhpcy51cmx9Pnt2YWx1ZX08L2E+O1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsnTGFiZWxzJywge1xuICAgICAgICAgIGZpZWxkOiAnbGFiZWxzJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17bGFiZWwubmFtZX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbGFiZWwuY29sb3J9fT57bGFiZWwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsnQ29tbWVudHMnLCAnY29tbWVudHMnXSxcbiAgICAgICAgWydDcmVhdGVkIGF0Jywge1xuICAgICAgICAgIGZpZWxkOiAnY3JlYXRlZF9hdCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgIF1cbiAgICB9O1xuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5tZXRhO1xuICAgIHRoaXMuZGlzYWJsZUNhY2hlID0gZmFsc2U7XG4gIH1cblxuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgY29uc3QgYXBpRW5kUG9pbnQgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYWNlYm9vay9yZWFjdC9pc3N1ZXMnO1xuXG4gICAgLy8gQnVpbGQgcXVlcnlcbiAgICAvLyAxLiBQYWdpbmF0aW9uXG4gICAgbGV0IHF1ZXJ5ID0gJyZwYWdlPScgKyBwYWdlO1xuICAgIGlmIChwZXJwYWdlKSBxdWVyeSArPSAnJnBlcl9wYWdlPScgKyBwZXJwYWdlO1xuICAgIC8vIDIuIFNlYXJjaFxuICAgIC8vIGlmIChzZWFyY2gpIHF1ZXJ5ICs9ICcmcXVlcnk9JyArIHNlYXJjaDsgLy8gU2FkLCBHaXRIdWIgQVBJIGRvZXMgbm90IHByb3ZpZGUgc2VhcmNoXG4gICAgLy8gMy4gU29ydFxuICAgIGlmIChzb3J0UHJvcGVydHkgJiYgc29ydE9yZGVyRGVzYyAhPT0gbnVsbCkge1xuICAgICAgcXVlcnkgKz0gJyZzb3J0PScgKyBzb3J0UHJvcGVydHkgK1xuICAgICAgICAnJmRpcmVjdGlvbj0nICsgKHNvcnRPcmRlckRlc2MgPyAnZGVzYycgOiAnYXNjJyk7XG4gICAgfVxuICAgIC8vIDQuIEZpbHRlciAvLyBTYWQsIEdpdEh1YiBBUEkgZG9lcyBub3QgcHJvdmlkZSBmaWx0ZXJcbiAgICAvL2lmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gIHF1ZXJ5ICs9IE9iamVjdC5rZXlzKGZpbHRlcikubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIC8vICAgIHJldHVybiAnJicgKyBwcm9wZXJ0eSArICc9JyArIGZpbHRlcltwcm9wZXJ0eV07XG4gICAgLy8gIH0pO1xuICAgIC8vfVxuICAgIC8vIDUuIEV4dHJhIHBhcmFtc1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmV4dHJhUGFyYW1zKS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ICs9ICcmJyArIE9iamVjdC5rZXlzKHRoaXMuZXh0cmFQYXJhbXMpLm1hcCgoa2V5KSA9PlxuICAgICAgICBrZXkgKyAnPScgKyB0aGlzLmV4dHJhUGFyYW1zW2tleV0pLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICBhcGkuZ2V0KGFwaUVuZFBvaW50ICsgJz8nICsgcXVlcnksIHt9LCB0aGlzLmRpc2FibGVDYWNoZSlcbiAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBTZXQgZGF0YVxuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICB0b3RhbDogdW5kZWZpbmVkLCAvLyBTYWQsIEdpdEh1YiBkb2VzIG5vdCBwcm92aWRlIHRoaXMgaW5mb3JtYXRpb25cbiAgICAgICAgICBlbnRpdGllczogcmVzcG9uc2UsXG4gICAgICAgICAgcGVycGFnZTogcGVycGFnZSB8fCB0aGlzLkRFRkFVTFRfUEVSX1BBR0UsXG4gICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcignZmFpbGVkJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcyc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZnJvbSBlbnRpdHkgQVBJc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWtpRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5tZXRhID0ge1xuICAgICAga2V5RmllbGQ6ICdwYWdlaWQnLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ3RpdGxlJ10sXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnVGl0bGUnLCAndGl0bGUnXSxcbiAgICAgIF1cbiAgICB9O1xuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5tZXRhO1xuICAgIHRoaXMuZGlzYWJsZUNhY2hlID0gZmFsc2U7XG4gIH1cblxuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgY29uc3QgYXBpRW5kUG9pbnQgPSAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249cXVlcnkmZ2VuZXJhdG9yPWFsbHBhZ2VzJnByb3A9aW5mbyc7XG4gICAgbGV0IHF1ZXJ5ID0gXCJcIjtcbiAgICAvLyBCdWlsZCBxdWVyeVxuICAgIC8vIDEuIFBhZ2luYXRpb25cbiAgICAvLyBsZXQgcXVlcnkgPSAnJnBhZ2U9JyArIHBhZ2U7XG4gICAgaWYgKHBlcnBhZ2UpIHF1ZXJ5ICs9ICcmZ2FwbGltaXQ9JyArIHBlcnBhZ2U7XG4gICAgLy8gMi4gU2VhcmNoXG4gICAgLy8gaWYgKHNlYXJjaCkgcXVlcnkgKz0gJyZxdWVyeT0nICsgc2VhcmNoO1xuICAgIC8vIDMuIFNvcnRcbiAgICBpZiAoc29ydFByb3BlcnR5ICYmIHNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgIHF1ZXJ5ICs9ICcmZ2FwZGlyPScgKyAoc29ydE9yZGVyRGVzYyA/ICdkZXNjZW5kaW5nJyA6ICdhc2NlbmRpbmcnKTtcbiAgICB9XG4gICAgLy8gNC4gRmlsdGVyXG4gICAgLy9pZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgIC8vICBxdWVyeSArPSBPYmplY3Qua2V5cyhmaWx0ZXIpLm1hcCgocHJvcGVydHkpID0+IHtcbiAgICAvLyAgICByZXR1cm4gJyYnICsgcHJvcGVydHkgKyAnPScgKyBmaWx0ZXJbcHJvcGVydHldO1xuICAgIC8vICB9KTtcbiAgICAvL31cblxuICAgIGFwaS5nZXQoYXBpRW5kUG9pbnQgKyAnPycgKyBxdWVyeSwge30pXG4gICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzdWx0cyA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKS5tYXAoa2V5ID0+IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW2tleV0pO1xuICAgICAgICAvLyBTZXQgZGF0YVxuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICB0b3RhbDogdW5kZWZpbmVkLFxuICAgICAgICAgIGVudGl0aWVzOiByZXN1bHRzLFxuICAgICAgICAgIHBlcnBhZ2U6IHBlcnBhZ2UgfHwgdGhpcy5ERUZBVUxUX1BFUl9QQUdFLFxuICAgICAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgICAgIHNvcnRQcm9wZXJ0eTogc29ydFByb3BlcnR5LFxuICAgICAgICAgIHNvcnRPcmRlckRlc2M6IHNvcnRPcmRlckRlc2MsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRW1pdCBldmVudFxuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfSkuZmFpbCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2ZhaWxlZCcpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gMTIvMTQvMTUuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gOS8zMC8xNS5cbiAqL1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vcmVxdWVzdC1jYWNoZSc7XG5jb25zdCAkID0gd2luZG93LmpRdWVyeTtcblxuY29uc3QgYXBpID0ge1xuICBfbG9nOiBmYWxzZSxcbiAgZXh0cmFPcHRpb25zOiB7XG4gICAgLy8gaGVhZGVyczoge1xuICAgIC8vICAgJ0dPUlVUT0tFTic6IHNlc3Npb25TdG9yZS50b2tlbixcbiAgICAvLyB9LFxuICAgIHR5cGU6ICdqc29uJyxcbiAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgfSxcbiAgbG9nKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9sb2cgJiYgY29uc29sZS5sb2coJ1tBUEldJywgLi4uYXJncyk7XG4gIH0sXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gYSAkLkRlZmVycmVkIHdpbGwgcmVzb2x2ZSB3aGVuIHRoZSByZXF1ZXN0IGlzIGNvbXBsZXRlIChvciBjYWNoZSlcbiAgICovXG4gIF9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsIG1ldGhvZCwgZGlzYWJsZUNhY2hlKSB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSB1cmwgKyAnWycgKyAoZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogJycpICsgJ10nO1xuXG4gICAgY29uc3QgYWpheCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgfSwgdGhpcy5leHRyYU9wdGlvbnMsIHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvZygnUmVxdWVzdCBzZW50OiAnLCBjYWNoZUtleSwgb3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy5fbG9nKSB7XG4gICAgICAgIHJlcXVlc3RMb2cuYWRkKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICQuYWpheChvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5sb2coJ1JlcXVlc3QgY2FjaGVkOiAnICsgY2FjaGVLZXkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGRpc2FibGVDYWNoZSkge1xuICAgICAgdGhpcy5sb2coJ1JlcXVlc3Qgc2VudCB3aXRob3V0IGNhY2hlOiAnICsgY2FjaGVLZXkpO1xuICAgICAgcmV0dXJuIGFqYXgoKTtcbiAgICB9XG4gICAgLy8gVXNlIGNhY2hlXG4gICAgLy8gVHJ5IHRvIGdldCBkYXRhIGZyb20gY2FjaGVcbiAgICBjb25zdCByZXNwb25zZSA9IGNhY2hlLmdldChjYWNoZUtleSk7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLmxvZygnUmV0dXJuaW5nIGNhY2hlZCByZXF1ZXN0OiAnICsgY2FjaGVLZXkpO1xuICAgICAgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZygnQXNrZWQgZm9yIGNhY2hlIGJ1dCBub3QgZm91bmQsIHNlbmRpbmcgcmVxdWVzdDogJyArIGNhY2hlS2V5KTtcbiAgICAvLyBObyBjYWNoZSBhdmFpbGFibGVcbiAgICByZXR1cm4gYWpheCgpO1xuICB9LFxuICBnZXQodXJsLCBkYXRhLCBkaXNhYmxlQ2FjaGUpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QodXJsLCBkYXRhLCAnR0VUJywgZGlzYWJsZUNhY2hlKTtcbiAgfSxcbiAgLyoqXG4gICAqIFBvc3QgcmVxdWVzdHMgbmV2ZXIgdXNlIGNhY2hlXG4gICAqL1xuICBwb3N0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdQT1NUJywgdHJ1ZSk7XG4gIH0sXG4gIHB1dCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QodXJsLCBkYXRhLCAnUFVUJywgdHJ1ZSk7XG4gIH0sXG4gIGRlbGV0ZSh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VuZFJlcXVlc3QodXJsLCBkYXRhLCAnREVMRVRFJywgdHJ1ZSk7XG4gIH0sXG4gIHVwbG9hZCh1cmwsIGZvcm1EYXRhKSB7XG4gICAgcmV0dXJuICQuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG4gIGNsZWFyQ2FjaGUoa2V5KSB7XG4gICAgY2FjaGUuY2xlYXIoa2V5KTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMi8xNC8xNS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNhdGVnb3JpZXM6IFt7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjQwNjgyM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDA2ODUyWlwiLFwibmFtZVwiOlwiUmVzdGF1cmFudFwiLFwiaWRcIjoxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjQyMDY0NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDIwNjc0WlwiLFwibmFtZVwiOlwiV2VzdGVyblwiLFwiaWRcIjoyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU3NzAyNVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTc3MDUzWlwiLFwibmFtZVwiOlwiQmFyXCIsXCJpZFwiOjN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTg3ODg3WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41ODc5MTZaXCIsXCJuYW1lXCI6XCJDb2NrdGFpbHNcIixcImlkXCI6NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NDMzMjRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc0MzM1NFpcIixcIm5hbWVcIjpcIkJ1ZmZldFwiLFwiaWRcIjo1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc1NDI5NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzU0MzIzWlwiLFwibmFtZVwiOlwiSW50ZXJuYXRpb25hbFwiLFwiaWRcIjo2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjA0MzMzMFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDQzMzYxWlwiLFwibmFtZVwiOlwiTWVkaXRlcnJhbmVhblwiLFwiaWRcIjo3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjA1NDE5MFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDU0MjE5WlwiLFwibmFtZVwiOlwiU2luZ2Fwb3JlYW5cIixcImlkXCI6OH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4xOTM5MjRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjE5Mzk2OFpcIixcIm5hbWVcIjpcIlNwaXJpdHMvV2hpc2t5XCIsXCJpZFwiOjl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMzI1Njk0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4zMjU3MjNaXCIsXCJuYW1lXCI6XCJEZXNzZXJ0XCIsXCJpZFwiOjEwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjQ3MzYxNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNDczNjQyWlwiLFwibmFtZVwiOlwiS29yZWFuXCIsXCJpZFwiOjExfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYwOTExOFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjA5MTQ4WlwiLFwibmFtZVwiOlwiRm9vZC9kcmluayBzdGFsbFwiLFwiaWRcIjoxMn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MjAxMjFaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYyMDE1N1pcIixcIm5hbWVcIjpcIkhhd2tlciBDZW50cmVcIixcImlkXCI6MTN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzgzMDcyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43ODMxMTJaXCIsXCJuYW1lXCI6XCJFdXJvcGVhblwiLFwiaWRcIjoxNH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43OTM5ODNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc5NDAxMlpcIixcIm5hbWVcIjpcIkZ1c2lvblwiLFwiaWRcIjoxNX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS44NDQ5ODNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjg0NTAxM1pcIixcIm5hbWVcIjpcIkNhZsOpXCIsXCJpZFwiOjE2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk3NDk5NlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTc1MDMyWlwiLFwibmFtZVwiOlwiQ2hpbmVzZVwiLFwiaWRcIjoxN30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45ODYwNDhaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk4NjA4MFpcIixcIm5hbWVcIjpcIlZlZ2V0YXJpYW4tZnJpZW5kbHlcIixcImlkXCI6MTh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuMTMzOTc0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi4xMzQwMDdaXCIsXCJuYW1lXCI6XCJKYXBhbmVzZVwiLFwiaWRcIjoxOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi41MDUzODVaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjUwNTQyNlpcIixcIm5hbWVcIjpcIkJydW5jaFwiLFwiaWRcIjoyMH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45MTg4NDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkxODg3NFpcIixcIm5hbWVcIjpcIkFzaWFuXCIsXCJpZFwiOjIxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkyOTQzMlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTI5NDU5WlwiLFwibmFtZVwiOlwiRXhwZXJpbWVudGFsXCIsXCJpZFwiOjIyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMzLjgwOTYwM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzMuODA5NjMyWlwiLFwibmFtZVwiOlwiSW5kaWFuXCIsXCJpZFwiOjIzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM0LjA3MzM3NlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzQuMDczNDA1WlwiLFwibmFtZVwiOlwiRnJlbmNoXCIsXCJpZFwiOjI0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM1LjgzODkyMVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzUuODM4OTQ5WlwiLFwibmFtZVwiOlwiQmFrZXJ5XCIsXCJpZFwiOjI1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjEyNzg4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuMTI3OTExWlwiLFwibmFtZVwiOlwiSXRhbGlhblwiLFwiaWRcIjoyNn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi40MDgzNTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjQwODM4NlpcIixcIm5hbWVcIjpcIk1pZGRsZSBFYXN0ZXJuXCIsXCJpZFwiOjI3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM3Ljc3MjgzOFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzcuNzcyODY3WlwiLFwibmFtZVwiOlwiQ2x1YlwiLFwiaWRcIjoyOH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0NC4yMDMwMThaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ0LjIwMzA0OVpcIixcIm5hbWVcIjpcIlNwYW5pc2hcIixcImlkXCI6Mjl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDYuNTU4MjMyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0Ni41NTgyNjFaXCIsXCJuYW1lXCI6XCJUaGFpXCIsXCJpZFwiOjMwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ5LjMxNDU4MVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDkuMzE0NjEyWlwiLFwibmFtZVwiOlwiV2luZVwiLFwiaWRcIjozMX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1MC4yNDU0NjRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUwLjI0NTQ5NFpcIixcIm5hbWVcIjpcIlN0ZWFraG91c2VcIixcImlkXCI6MzJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTMuNTU0ODA0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1My41NTQ4MzJaXCIsXCJuYW1lXCI6XCJJbmRvbmVzaWFuXCIsXCJpZFwiOjMzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjU0Ljg5MDYwOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTQuODkwNjUzWlwiLFwibmFtZVwiOlwiTGF0aW4gQW1lcmljYW5cIixcImlkXCI6MzR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDEuOTA2OTkzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowMS45MDcwMjZaXCIsXCJuYW1lXCI6XCJNZXhpY2FuXCIsXCJpZFwiOjM1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjA2LjA5ODA0NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDYuMDk4MDcxWlwiLFwibmFtZVwiOlwiVmlldG5hbWVzZVwiLFwiaWRcIjozNn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1Mjo1My43MDM3MzdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjUzLjcwMzc4MlpcIixcIm5hbWVcIjpcIk1hbGF5XCIsXCJpZFwiOjM3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUzOjA3LjM2NTg0NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTM6MDcuMzY1ODc1WlwiLFwibmFtZVwiOlwiQ2FyaWJiZWFuXCIsXCJpZFwiOjM4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjIxMDYxOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuMjEwNjY0WlwiLFwibmFtZVwiOlwiUmVzdGF1cmFudHNcIixcImlkXCI6Mzl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuODkyOTE0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS44OTI5NDdaXCIsXCJuYW1lXCI6XCJDYWZlc1wiLFwiaWRcIjo0MH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS45MDM5NThaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjkwMzk4OFpcIixcIm5hbWVcIjpcIkhhd2tlciBFYXRzXCIsXCJpZFwiOjQxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYxMDUzOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjEwNTY5WlwiLFwibmFtZVwiOlwiQmFyc1wiLFwiaWRcIjo0Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MjIwODhaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYyMjEyNlpcIixcIm5hbWVcIjpcIkJlZXJcIixcImlkXCI6NDN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjEuMDU0NTg0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNTQ2MzdaXCIsXCJuYW1lXCI6XCJQZXJhbmFrYW5cIixcImlkXCI6NDR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjEuMDcxODIzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNzE4NTlaXCIsXCJuYW1lXCI6XCJTd2VldCBUb290aFwiLFwiaWRcIjo0NX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNC40NjM2MDdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI0LjQ2MzYzOVpcIixcIm5hbWVcIjpcIkNvZmZlZSBBZGRpY3RzXCIsXCJpZFwiOjQ2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI2LjU4NDA2OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjYuNTg0MTAxWlwiLFwibmFtZVwiOlwiTXVzaWNcIixcImlkXCI6NDd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzMuNzI2MTU5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozMy43MjYyMDBaXCIsXCJuYW1lXCI6XCJWZWdldGFyaWFuXCIsXCJpZFwiOjQ4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUwMTk5MlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTAyMDI3WlwiLFwibmFtZVwiOlwiSnVzdCBPcGVuZWRcIixcImlkXCI6NDl9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTEzMjI3WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MTMyNTlaXCIsXCJuYW1lXCI6XCJDdWx0dXJlXCIsXCJpZFwiOjUwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUyNDI2MVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTI0MjkyWlwiLFwibmFtZVwiOlwiU3R5bGVcIixcImlkXCI6NTF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTM1MzE5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MzUzNTBaXCIsXCJuYW1lXCI6XCJBY3RpdmVcIixcImlkXCI6NTJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzcuNTI1Njc2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNy41MjU3MDlaXCIsXCJuYW1lXCI6XCJUaGVhdHJlXCIsXCJpZFwiOjUzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM4LjA1NjUwNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguMDU2NTQ4WlwiLFwibmFtZVwiOlwiV29tZW4ncyBGYXNoaW9uXCIsXCJpZFwiOjU0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM4Ljk5OTA5OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguOTk5MTI5WlwiLFwibmFtZVwiOlwiU3Bpcml0c1wiLFwiaWRcIjo1NX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTo0My4xNzMwNzlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjE3MzExOFpcIixcIm5hbWVcIjpcIk5ldyBSZXN0YXVyYW50cyBhbmQgQmFyc1wiLFwiaWRcIjo1Nn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTo0My43MDE0MzNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjcwMTQ2N1pcIixcIm5hbWVcIjpcIk1lYXQtbG92ZXJzXCIsXCJpZFwiOjU3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMwMzE4OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzAzMjI4WlwiLFwibmFtZVwiOlwiQXJ0XCIsXCJpZFwiOjU4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMxOTk1NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzE5OTg4WlwiLFwibmFtZVwiOlwiRmlsbVwiLFwiaWRcIjo1OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMzY3NjlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMzNjgwNVpcIixcIm5hbWVcIjpcIk1lbidzIEZhc2hpb25cIixcImlkXCI6NjB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTM0NDAzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xMzQ0MzZaXCIsXCJuYW1lXCI6XCJEYW5jZVwiLFwiaWRcIjo2MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xNDU4MzZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjE0NTg2OVpcIixcIm5hbWVcIjpcIk5pZ2h0bGlmZVwiLFwiaWRcIjo2Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wNy0xM1QxMDoyNTozOC4xNDM4ODNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjM4LjE0MzkxMFpcIixcIm5hbWVcIjpcIkZvb2QgJiBEcmlua1wiLFwiaWRcIjo2M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wNy0xM1QxMDoyNTo1MC45Mjc0MTJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjUwLjkyNzQ0NlpcIixcIm5hbWVcIjpcIlRyYXZlbFwiLFwiaWRcIjo2NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0xMC0zMFQwNToyODo0OC44NzE5MjlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTEwLTMwVDA1OjI4OjQ4Ljg3MTk1MlpcIixcIm5hbWVcIjpcIkhvdGVsc1wiLFwiaWRcIjo2Nn1dXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGluaHF1YW5ndHJ1bmcgb24gOS8zMC8xNS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiB7fSxcbiAgZ2V0KGtleSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YVtrZXldO1xuICAgIC8vIElmIHRhcmdldCBub3QgZXhwaXJlZCB5ZXQsIG9yIG5vIGV4cGlyZWQgZGF0ZSBzZXRcbiAgICBpZiAodGFyZ2V0ICYmICh0YXJnZXQuZXhwaXJlZERhdGUgPiArbmV3IERhdGUoKSB8fCAhdGFyZ2V0LmV4cGlyZWREYXRlKSkge1xuICAgICAgcmV0dXJuIHRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbiAgLyoqXG4gICAqIEBrZXkgOiBrZXlcbiAgICogQHZhbHVlIDogdmFsdWVcbiAgICogQGV4cGlyZWREYXRlIDogbWlsaXNlY29uZFxuICAgKi9cbiAgc2V0KGtleSwgdmFsdWUsIGV4cGlyZWREYXRlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgIH07XG4gICAgaWYgKGV4cGlyZWREYXRlKSB7XG4gICAgICB0YXJnZXQuZXhwaXJlZERhdGUgPSBleHBpcmVkRGF0ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRhW2tleV0gPSB0YXJnZXQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICAvKipcbiAgICogQ2xlYXIgY2FjaGUgZm9yIGFsbCBtYXRjaGVkIGtleXMgKG9yIGV4YWN0bHkgdGhlIGtleSBpZiBgbWF0Y2hgIGlzIGEgc3RyaW5nKVxuICAgKi9cbiAgY2xlYXIobWF0Y2gpIHtcbiAgICBpZiAodHlwZW9mIG1hdGNoID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleXNbaV0ubWF0Y2gobWF0Y2gpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5kYXRhW21hdGNoXTtcbiAgICB9XG4gIH0sXG59O1xuIl19
