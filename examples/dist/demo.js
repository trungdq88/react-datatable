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

var _dataSourceYoutubeDataSource = require('./data-source/YoutubeDataSource');

var _dataSourceYoutubeDataSource2 = _interopRequireDefault(_dataSourceYoutubeDataSource);

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
    this.youtubeDataSource = new _dataSourceYoutubeDataSource2['default']('youtube-videos');
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
          sortable: true }),
        _react2['default'].createElement('hr', null),
        _react2['default'].createElement(
          'h1',
          { className: 'text-center' },
          'Youtube videos'
        ),
        _react2['default'].createElement(_reactDatatable2['default'], { id: 'react-youtube-videos',
          dataSource: this.youtubeDataSource,
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

},{"./data-source/CategoryDataSource":2,"./data-source/GitHubIssueDataSource":3,"./data-source/YoutubeDataSource":4,"./utils/fake-data":7,"react":undefined,"react-datatable":undefined}],2:[function(require,module,exports){
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

var YoutubeDataSource = (function (_DataSource) {
  _inherits(YoutubeDataSource, _DataSource);

  function YoutubeDataSource(name) {
    _classCallCheck(this, YoutubeDataSource);

    _get(Object.getPrototypeOf(YoutubeDataSource.prototype), 'constructor', this).call(this, name);
    this.KEY = 'AIzaSyDX0BykDy8PEIQGsFjdSVAF4gDQVNwrztI';
    this.meta = {
      keyField: 'pageid',
      searchFields: ['title'],
      listFields: [['Image', {
        field: 'snippet',
        transform: function transform(snippet) {
          return _react2['default'].createElement('img', { src: snippet.thumbnails['default'].url });
        }
      }], ['Title', {
        field: 'snippet',
        transform: function transform(snippet) {
          return snippet.title;
        }
      }]]
    };
    this.entity = this.meta;
    this.disableCache = false;
  }

  _createClass(YoutubeDataSource, [{
    key: 'fetch',
    value: function fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
      var _this = this;

      var apiEndPoint = 'https://www.googleapis.com/youtube/v3/search?' + 'type=video&part=snippet&key=' + this.KEY;
      var query = "";
      // Build query
      // 1. Pagination
      // let query = '&page=' + page;
      if (perpage) query += '&maxResults=' + perpage;
      // 2. Search
      if (search) query += '&q=' + search;
      // 3. Sort
      if (sortProperty && sortOrderDesc !== null) {
        query += '&order=' + sortProperty + '&direction=' + (sortOrderDesc ? 'desc' : 'asc');
      }
      // 4. Filter
      //if (filter && Object.keys(filter).length > 0) {
      //  query += Object.keys(filter).map((property) => {
      //    return '&' + property + '=' + filter[property];
      //  });
      //}

      _utilsApiJs2['default'].get(apiEndPoint + query, {}).done(function (response) {
        var results = response.items;
        // Set data
        _this.data = {
          page: page,
          total: response.pageInfo.totalResults,
          entities: results,
          perpage: response.pageInfo.resultsPerPage,
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

  return YoutubeDataSource;
})(_reactDatatable.DataSource);

exports['default'] = YoutubeDataSource;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy9kYXRhLXNvdXJjZS9HaXRIdWJJc3N1ZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGF0YS1zb3VyY2UvWW91dHViZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGVtby5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy91dGlscy9hcGkuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvdXRpbHMvZmFrZS1kYXRhLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL3V0aWxzL3JlcXVlc3QtY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7Ozs0Q0FDUixrQ0FB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LFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQywwQkFBMEIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Q0FDaHlPOzs7Ozs7Ozs7Ozs7cUJDSGM7QUFDYixNQUFJLEVBQUUsRUFBRTtBQUNSLEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRTtBQUNQLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlCLFFBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQSxBQUFDLEVBQUU7QUFDdkUsYUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3JCO0FBQ0QsV0FBTyxTQUFTLENBQUM7R0FDbEI7Ozs7OztBQU1ELEtBQUcsRUFBQSxhQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0FBQzNCLFFBQU0sTUFBTSxHQUFHO0FBQ2IsV0FBSyxFQUFFLEtBQUs7S0FDYixDQUFDO0FBQ0YsUUFBSSxXQUFXLEVBQUU7QUFDZixZQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNsQztBQUNELFFBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7Ozs7QUFJRCxPQUFLLEVBQUEsZUFBQyxLQUFLLEVBQUU7QUFDWCxRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxZQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsaUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtPQUNGO0tBQ0YsTUFBTTtBQUNMLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtHQUNGO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRhVGFibGUgZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcbmltcG9ydCBDYXRlZ29yeURhdGFTb3VyY2UgZnJvbSAnLi9kYXRhLXNvdXJjZS9DYXRlZ29yeURhdGFTb3VyY2UnO1xuaW1wb3J0IEdpdEh1Yklzc3VlRGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL0dpdEh1Yklzc3VlRGF0YVNvdXJjZSc7XG5pbXBvcnQgWW91dHViZURhdGFTb3VyY2UgZnJvbSAnLi9kYXRhLXNvdXJjZS9Zb3V0dWJlRGF0YVNvdXJjZSc7XG5pbXBvcnQgZmFrZURhdGEgZnJvbSAnLi91dGlscy9mYWtlLWRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jYXRlZ29yeURhdGFTb3VyY2UgPSBuZXcgQ2F0ZWdvcnlEYXRhU291cmNlKCdjYXRlZ29yeS1saXN0LXNlbGVjdCcsIGZha2VEYXRhLmNhdGVnb3JpZXMpO1xuICAgIHRoaXMucmVhY3RJc3N1ZURhdGFTb3VyY2UgPSBuZXcgR2l0SHViSXNzdWVEYXRhU291cmNlKCdyZWFjdC1pc3N1ZXMnKTtcbiAgICB0aGlzLnlvdXR1YmVEYXRhU291cmNlID0gbmV3IFlvdXR1YmVEYXRhU291cmNlKCd5b3V0dWJlLXZpZGVvcycpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGF0aWMgZGF0YTwvaDE+XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJjYXRlZ29yeS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5jYXRlZ29yeURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlIC8+XG5cbiAgICAgICAgPGhyLz5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BamF4IGRhdGEgKFJlYWN0IEdpdEh1YiBpc3N1ZXMpPC9oMT5cbiAgICAgICAgey8qXG4gICAgICAgIFRPRE86IGFkZCBhZGFwdGVyIHRvIGludGVncmF0ZSB3aXRoIEdpdEh1YiBBUElcbiAgICAgICAgKi99XG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJyZWFjdC1pc3N1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5yZWFjdElzc3VlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzb3J0YWJsZSAvPlxuXG4gICAgICAgIDxoci8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPllvdXR1YmUgdmlkZW9zPC9oMT5cblxuICAgICAgICA8RGF0YVRhYmxlIGlkPVwicmVhY3QteW91dHViZS12aWRlb3NcIlxuICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3RoaXMueW91dHViZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgc29ydGFibGUgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcblxuLyoqXG4gKiBEYXRhIHNvdXJjZSBmb3IgZW50aXR5IHdpdGggZXhpc3RpbmcgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBpdGVtcykge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGtleUZpZWxkOiAnaWQnLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ25hbWUnXSxcbiAgICAgIGxpc3RGaWVsZHM6IFtcbiAgICAgICAgWydOYW1lJywgJ25hbWUnXSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLmVudGl0eSA9IHRoaXMubWV0YTtcbiAgICB0aGlzLmV4dHJhQ29sdW1zID0gW107XG4gIH1cblxuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLml0ZW1zO1xuICAgIC8vIDEuIEZpbHRlclxuICAgIGlmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ZXJGdW5jID0gaXRlbSA9PiBpdGVtW3RoaXNdID09PSBmaWx0ZXJbdGhpc107XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGZpbHRlcikge1xuICAgICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoZmlsdGVyRnVuYy5iaW5kKHByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gMi4gU2VhcmNoXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgY29uc3Qgc2VhcmNoRmllbGRzID0gdGhpcy5lbnRpdHkuc2VhcmNoRmllbGRzO1xuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VhcmNoRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGl0ZW1bc2VhcmNoRmllbGRzW2ldXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNhdmUgdGhlIHRvdGFsIGl0ZW0gZm9yIHBhZ2luYXRpb25cbiAgICB2YXIgX3RvdGFsID0gZGF0YS5sZW5ndGg7XG5cbiAgICAvLyAzLiBPcmRlclxuICAgIGlmIChzb3J0UHJvcGVydHkgJiYgc29ydE9yZGVyRGVzYyAhPT0gbnVsbCkge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KFtdKS5zb3J0KChhLCBiKSA9PiAoMiAqICgrc29ydE9yZGVyRGVzYykgLSAxKSAqXG4gICAgICAoYVtzb3J0UHJvcGVydHldID4gYltzb3J0UHJvcGVydHldID8gMSA6IC0xKSk7XG4gICAgfVxuXG4gICAgLy8gNC4gUGFnaW5nXG4gICAgcGVycGFnZSA9IHBlcnBhZ2UgfHwgdGhpcy5ERUZBVUxUX1BFUl9QQUdFO1xuICAgIGNvbnN0IHBhZ2VJdGVtcyA9IGRhdGEuc2xpY2UocGVycGFnZSAqIChwYWdlIC0gMSksIHBhZ2UgKiBwZXJwYWdlKTtcblxuICAgIC8vIFNldCBkYXRhXG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgcGFnZTogcGFnZSxcbiAgICAgIHRvdGFsOiBfdG90YWwsXG4gICAgICBlbnRpdGllczogcGFnZUl0ZW1zLFxuICAgICAgcGVycGFnZTogcGVycGFnZSxcbiAgICAgIHNlYXJjaDogc2VhcmNoLFxuICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICBzb3J0T3JkZXJEZXNjOiBzb3J0T3JkZXJEZXNjLFxuICAgIH07XG5cbiAgICAvLyBFbWl0IGV2ZW50XG4gICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpLmpzJztcblxuLyoqXG4gKiBEYXRhIHNvdXJjZSBmcm9tIGVudGl0eSBBUElzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdEh1Yklzc3VlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5tZXRhID0ge1xuICAgICAga2V5RmllbGQ6ICdpZCcsXG4gICAgICBzZWFyY2hGaWVsZHM6IFsndGl0bGUnXSxcbiAgICAgIGxpc3RGaWVsZHM6IFtcbiAgICAgICAgWydUaXRsZScsIHtcbiAgICAgICAgICBmaWVsZDogJ3RpdGxlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt0aGlzLnVybH0+e3ZhbHVlfTwvYT47XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWydMYWJlbHMnLCB7XG4gICAgICAgICAgZmllbGQ6ICdsYWJlbHMnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChsYWJlbCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtsYWJlbC5uYW1lfSBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBsYWJlbC5jb2xvcn19PntsYWJlbC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWydDb21tZW50cycsICdjb21tZW50cyddLFxuICAgICAgICBbJ0NyZWF0ZWQgYXQnLCB7XG4gICAgICAgICAgZmllbGQ6ICdjcmVhdGVkX2F0JyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgXVxuICAgIH07XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5kaXNhYmxlQ2FjaGUgPSBmYWxzZTtcbiAgfVxuXG4gIGZldGNoKHBhZ2UsIHNlYXJjaCwgc29ydFByb3BlcnR5LCBzb3J0T3JkZXJEZXNjLCBmaWx0ZXIsIHBlcnBhZ2UpIHtcbiAgICBjb25zdCBhcGlFbmRQb2ludCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcyc7XG5cbiAgICAvLyBCdWlsZCBxdWVyeVxuICAgIC8vIDEuIFBhZ2luYXRpb25cbiAgICBsZXQgcXVlcnkgPSAnJnBhZ2U9JyArIHBhZ2U7XG4gICAgaWYgKHBlcnBhZ2UpIHF1ZXJ5ICs9ICcmcGVyX3BhZ2U9JyArIHBlcnBhZ2U7XG4gICAgLy8gMi4gU2VhcmNoXG4gICAgLy8gaWYgKHNlYXJjaCkgcXVlcnkgKz0gJyZxdWVyeT0nICsgc2VhcmNoOyAvLyBTYWQsIEdpdEh1YiBBUEkgZG9lcyBub3QgcHJvdmlkZSBzZWFyY2hcbiAgICAvLyAzLiBTb3J0XG4gICAgaWYgKHNvcnRQcm9wZXJ0eSAmJiBzb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgICBxdWVyeSArPSAnJnNvcnQ9JyArIHNvcnRQcm9wZXJ0eSArXG4gICAgICAgICcmZGlyZWN0aW9uPScgKyAoc29ydE9yZGVyRGVzYyA/ICdkZXNjJyA6ICdhc2MnKTtcbiAgICB9XG4gICAgLy8gNC4gRmlsdGVyIC8vIFNhZCwgR2l0SHViIEFQSSBkb2VzIG5vdCBwcm92aWRlIGZpbHRlclxuICAgIC8vaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgcXVlcnkgKz0gT2JqZWN0LmtleXMoZmlsdGVyKS5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgLy8gICAgcmV0dXJuICcmJyArIHByb3BlcnR5ICsgJz0nICsgZmlsdGVyW3Byb3BlcnR5XTtcbiAgICAvLyAgfSk7XG4gICAgLy99XG4gICAgLy8gNS4gRXh0cmEgcGFyYW1zXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXh0cmFQYXJhbXMpLmxlbmd0aCkge1xuICAgICAgcXVlcnkgKz0gJyYnICsgT2JqZWN0LmtleXModGhpcy5leHRyYVBhcmFtcykubWFwKChrZXkpID0+XG4gICAgICAgIGtleSArICc9JyArIHRoaXMuZXh0cmFQYXJhbXNba2V5XSkuam9pbignJicpO1xuICAgIH1cblxuICAgIGFwaS5nZXQoYXBpRW5kUG9pbnQgKyAnPycgKyBxdWVyeSwge30sIHRoaXMuZGlzYWJsZUNhY2hlKVxuICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIHRvdGFsOiB1bmRlZmluZWQsIC8vIFNhZCwgR2l0SHViIGRvZXMgbm90IHByb3ZpZGUgdGhpcyBpbmZvcm1hdGlvblxuICAgICAgICAgIGVudGl0aWVzOiByZXNwb25zZSxcbiAgICAgICAgICBwZXJwYWdlOiBwZXJwYWdlIHx8IHRoaXMuREVGQVVMVF9QRVJfUEFHRSxcbiAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgICAgICBzb3J0UHJvcGVydHk6IHNvcnRQcm9wZXJ0eSxcbiAgICAgICAgICBzb3J0T3JkZXJEZXNjOiBzb3J0T3JkZXJEZXNjLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEVtaXQgZXZlbnRcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH0pLmZhaWwoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKCdmYWlsZWQnKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAncmVhY3QtZGF0YXRhYmxlJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpLmpzJztcblxuLyoqXG4gKiBEYXRhIHNvdXJjZSBmcm9tIGVudGl0eSBBUElzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvdXR1YmVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLktFWSA9ICdBSXphU3lEWDBCeWtEeThQRUlRR3NGamRTVkFGNGdEUVZOd3J6dEknO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGtleUZpZWxkOiAncGFnZWlkJyxcbiAgICAgIHNlYXJjaEZpZWxkczogWyd0aXRsZSddLFxuICAgICAgbGlzdEZpZWxkczogW1xuICAgICAgICBbJ0ltYWdlJywge1xuICAgICAgICAgIGZpZWxkOiAnc25pcHBldCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoc25pcHBldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtzbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsnVGl0bGUnLCB7XG4gICAgICAgICAgZmllbGQ6ICdzbmlwcGV0JyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIChzbmlwcGV0KSB7XG4gICAgICAgICAgICByZXR1cm4gc25pcHBldC50aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICBdXG4gICAgfTtcbiAgICB0aGlzLmVudGl0eSA9IHRoaXMubWV0YTtcbiAgICB0aGlzLmRpc2FibGVDYWNoZSA9IGZhbHNlO1xuICB9XG5cbiAgZmV0Y2gocGFnZSwgc2VhcmNoLCBzb3J0UHJvcGVydHksIHNvcnRPcmRlckRlc2MsIGZpbHRlciwgcGVycGFnZSkge1xuICAgIGNvbnN0IGFwaUVuZFBvaW50ID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoPycgK1xuICAgICAgJ3R5cGU9dmlkZW8mcGFydD1zbmlwcGV0JmtleT0nICsgdGhpcy5LRVk7XG4gICAgbGV0IHF1ZXJ5ID0gXCJcIjtcbiAgICAvLyBCdWlsZCBxdWVyeVxuICAgIC8vIDEuIFBhZ2luYXRpb25cbiAgICAvLyBsZXQgcXVlcnkgPSAnJnBhZ2U9JyArIHBhZ2U7XG4gICAgaWYgKHBlcnBhZ2UpIHF1ZXJ5ICs9ICcmbWF4UmVzdWx0cz0nICsgcGVycGFnZTtcbiAgICAvLyAyLiBTZWFyY2hcbiAgICAgaWYgKHNlYXJjaCkgcXVlcnkgKz0gJyZxPScgKyBzZWFyY2g7XG4gICAgLy8gMy4gU29ydFxuICAgIGlmIChzb3J0UHJvcGVydHkgJiYgc29ydE9yZGVyRGVzYyAhPT0gbnVsbCkge1xuICAgICAgcXVlcnkgKz0gJyZvcmRlcj0nICsgc29ydFByb3BlcnR5ICtcbiAgICAgICAgJyZkaXJlY3Rpb249JyArIChzb3J0T3JkZXJEZXNjID8gJ2Rlc2MnIDogJ2FzYycpO1xuICAgIH1cbiAgICAvLyA0LiBGaWx0ZXJcbiAgICAvL2lmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gIHF1ZXJ5ICs9IE9iamVjdC5rZXlzKGZpbHRlcikubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIC8vICAgIHJldHVybiAnJicgKyBwcm9wZXJ0eSArICc9JyArIGZpbHRlcltwcm9wZXJ0eV07XG4gICAgLy8gIH0pO1xuICAgIC8vfVxuXG4gICAgYXBpLmdldChhcGlFbmRQb2ludCArIHF1ZXJ5LCB7fSlcbiAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gcmVzcG9uc2UuaXRlbXM7XG4gICAgICAgIC8vIFNldCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIHRvdGFsOiByZXNwb25zZS5wYWdlSW5mby50b3RhbFJlc3VsdHMsXG4gICAgICAgICAgZW50aXRpZXM6IHJlc3VsdHMsXG4gICAgICAgICAgcGVycGFnZTogcmVzcG9uc2UucGFnZUluZm8ucmVzdWx0c1BlclBhZ2UsXG4gICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcignZmFpbGVkJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMi8xNC8xNS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9yZXF1ZXN0LWNhY2hlJztcbmNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5jb25zdCBhcGkgPSB7XG4gIF9sb2c6IGZhbHNlLFxuICBleHRyYU9wdGlvbnM6IHtcbiAgICAvLyBoZWFkZXJzOiB7XG4gICAgLy8gICAnR09SVVRPS0VOJzogc2Vzc2lvblN0b3JlLnRva2VuLFxuICAgIC8vIH0sXG4gICAgdHlwZTogJ2pzb24nLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICB9LFxuICBsb2coLi4uYXJncykge1xuICAgIHRoaXMuX2xvZyAmJiBjb25zb2xlLmxvZygnW0FQSV0nLCAuLi5hcmdzKTtcbiAgfSxcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybiBhICQuRGVmZXJyZWQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIHJlcXVlc3QgaXMgY29tcGxldGUgKG9yIGNhY2hlKVxuICAgKi9cbiAgX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgbWV0aG9kLCBkaXNhYmxlQ2FjaGUpIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IHVybCArICdbJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAnJykgKyAnXSc7XG5cbiAgICBjb25zdCBhamF4ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9LCB0aGlzLmV4dHJhT3B0aW9ucywge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9nKCdSZXF1ZXN0IHNlbnQ6ICcsIGNhY2hlS2V5LCBvcHRpb25zKTtcbiAgICAgIGlmICh0aGlzLl9sb2cpIHtcbiAgICAgICAgcmVxdWVzdExvZy5hZGQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmxvZygnUmVxdWVzdCBjYWNoZWQ6ICcgKyBjYWNoZUtleSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoZGlzYWJsZUNhY2hlKSB7XG4gICAgICB0aGlzLmxvZygnUmVxdWVzdCBzZW50IHdpdGhvdXQgY2FjaGU6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gYWpheCgpO1xuICAgIH1cbiAgICAvLyBVc2UgY2FjaGVcbiAgICAvLyBUcnkgdG8gZ2V0IGRhdGEgZnJvbSBjYWNoZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMubG9nKCdSZXR1cm5pbmcgY2FjaGVkIHJlcXVlc3Q6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRoaXMubG9nKCdBc2tlZCBmb3IgY2FjaGUgYnV0IG5vdCBmb3VuZCwgc2VuZGluZyByZXF1ZXN0OiAnICsgY2FjaGVLZXkpO1xuICAgIC8vIE5vIGNhY2hlIGF2YWlsYWJsZVxuICAgIHJldHVybiBhamF4KCk7XG4gIH0sXG4gIGdldCh1cmwsIGRhdGEsIGRpc2FibGVDYWNoZSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdHRVQnLCBkaXNhYmxlQ2FjaGUpO1xuICB9LFxuICAvKipcbiAgICogUG9zdCByZXF1ZXN0cyBuZXZlciB1c2UgY2FjaGVcbiAgICovXG4gIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ1BPU1QnLCB0cnVlKTtcbiAgfSxcbiAgcHV0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdQVVQnLCB0cnVlKTtcbiAgfSxcbiAgZGVsZXRlKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdERUxFVEUnLCB0cnVlKTtcbiAgfSxcbiAgdXBsb2FkKHVybCwgZm9ybURhdGEpIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbiAgY2xlYXJDYWNoZShrZXkpIHtcbiAgICBjYWNoZS5jbGVhcihrZXkpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEyLzE0LzE1LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2F0ZWdvcmllczogW3tcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDA2ODIzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MDY4NTJaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50XCIsXCJpZFwiOjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDIwNjQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MjA2NzRaXCIsXCJuYW1lXCI6XCJXZXN0ZXJuXCIsXCJpZFwiOjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTc3MDI1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41NzcwNTNaXCIsXCJuYW1lXCI6XCJCYXJcIixcImlkXCI6M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41ODc4ODdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU4NzkxNlpcIixcIm5hbWVcIjpcIkNvY2t0YWlsc1wiLFwiaWRcIjo0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc0MzMyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzQzMzU0WlwiLFwibmFtZVwiOlwiQnVmZmV0XCIsXCJpZFwiOjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzU0Mjk0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NTQzMjNaXCIsXCJuYW1lXCI6XCJJbnRlcm5hdGlvbmFsXCIsXCJpZFwiOjZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDQzMzMwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNDMzNjFaXCIsXCJuYW1lXCI6XCJNZWRpdGVycmFuZWFuXCIsXCJpZFwiOjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDU0MTkwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNTQyMTlaXCIsXCJuYW1lXCI6XCJTaW5nYXBvcmVhblwiLFwiaWRcIjo4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjE5MzkyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMTkzOTY4WlwiLFwibmFtZVwiOlwiU3Bpcml0cy9XaGlza3lcIixcImlkXCI6OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4zMjU2OTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjMyNTcyM1pcIixcIm5hbWVcIjpcIkRlc3NlcnRcIixcImlkXCI6MTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNDczNjE0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC40NzM2NDJaXCIsXCJuYW1lXCI6XCJLb3JlYW5cIixcImlkXCI6MTF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjA5MTE4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MDkxNDhaXCIsXCJuYW1lXCI6XCJGb29kL2RyaW5rIHN0YWxsXCIsXCJpZFwiOjEyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYyMDEyMVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjIwMTU3WlwiLFwibmFtZVwiOlwiSGF3a2VyIENlbnRyZVwiLFwiaWRcIjoxM30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43ODMwNzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc4MzExMlpcIixcIm5hbWVcIjpcIkV1cm9wZWFuXCIsXCJpZFwiOjE0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc5Mzk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzk0MDEyWlwiLFwibmFtZVwiOlwiRnVzaW9uXCIsXCJpZFwiOjE1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjg0NDk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuODQ1MDEzWlwiLFwibmFtZVwiOlwiQ2Fmw6lcIixcImlkXCI6MTZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTc0OTk2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45NzUwMzJaXCIsXCJuYW1lXCI6XCJDaGluZXNlXCIsXCJpZFwiOjE3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk4NjA0OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTg2MDgwWlwiLFwibmFtZVwiOlwiVmVnZXRhcmlhbi1mcmllbmRseVwiLFwiaWRcIjoxOH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi4xMzM5NzRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjEzNDAwN1pcIixcIm5hbWVcIjpcIkphcGFuZXNlXCIsXCJpZFwiOjE5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjUwNTM4NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuNTA1NDI2WlwiLFwibmFtZVwiOlwiQnJ1bmNoXCIsXCJpZFwiOjIwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkxODg0NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTE4ODc0WlwiLFwibmFtZVwiOlwiQXNpYW5cIixcImlkXCI6MjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTI5NDMyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45Mjk0NTlaXCIsXCJuYW1lXCI6XCJFeHBlcmltZW50YWxcIixcImlkXCI6MjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzMuODA5NjAzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMy44MDk2MzJaXCIsXCJuYW1lXCI6XCJJbmRpYW5cIixcImlkXCI6MjN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzQuMDczMzc2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNC4wNzM0MDVaXCIsXCJuYW1lXCI6XCJGcmVuY2hcIixcImlkXCI6MjR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzUuODM4OTIxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNS44Mzg5NDlaXCIsXCJuYW1lXCI6XCJCYWtlcnlcIixcImlkXCI6MjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuMTI3ODgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi4xMjc5MTFaXCIsXCJuYW1lXCI6XCJJdGFsaWFuXCIsXCJpZFwiOjI2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjQwODM1OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuNDA4Mzg2WlwiLFwibmFtZVwiOlwiTWlkZGxlIEVhc3Rlcm5cIixcImlkXCI6Mjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzcuNzcyODM4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNy43NzI4NjdaXCIsXCJuYW1lXCI6XCJDbHViXCIsXCJpZFwiOjI4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ0LjIwMzAxOFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDQuMjAzMDQ5WlwiLFwibmFtZVwiOlwiU3BhbmlzaFwiLFwiaWRcIjoyOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0Ni41NTgyMzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ2LjU1ODI2MVpcIixcIm5hbWVcIjpcIlRoYWlcIixcImlkXCI6MzB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDkuMzE0NTgxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0OS4zMTQ2MTJaXCIsXCJuYW1lXCI6XCJXaW5lXCIsXCJpZFwiOjMxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUwLjI0NTQ2NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTAuMjQ1NDk0WlwiLFwibmFtZVwiOlwiU3RlYWtob3VzZVwiLFwiaWRcIjozMn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1My41NTQ4MDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUzLjU1NDgzMlpcIixcIm5hbWVcIjpcIkluZG9uZXNpYW5cIixcImlkXCI6MzN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTQuODkwNjA5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1NC44OTA2NTNaXCIsXCJuYW1lXCI6XCJMYXRpbiBBbWVyaWNhblwiLFwiaWRcIjozNH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowMS45MDY5OTNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjAxLjkwNzAyNlpcIixcIm5hbWVcIjpcIk1leGljYW5cIixcImlkXCI6MzV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDYuMDk4MDQ0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowNi4wOTgwNzFaXCIsXCJuYW1lXCI6XCJWaWV0bmFtZXNlXCIsXCJpZFwiOjM2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjUzLjcwMzczN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6NTMuNzAzNzgyWlwiLFwibmFtZVwiOlwiTWFsYXlcIixcImlkXCI6Mzd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTM6MDcuMzY1ODQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MzowNy4zNjU4NzVaXCIsXCJuYW1lXCI6XCJDYXJpYmJlYW5cIixcImlkXCI6Mzh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuMjEwNjE5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS4yMTA2NjRaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50c1wiLFwiaWRcIjozOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS44OTI5MTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5Ljg5Mjk0N1pcIixcIm5hbWVcIjpcIkNhZmVzXCIsXCJpZFwiOjQwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjkwMzk1OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuOTAzOTg4WlwiLFwibmFtZVwiOlwiSGF3a2VyIEVhdHNcIixcImlkXCI6NDF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjEwNTM5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MTA1NjlaXCIsXCJuYW1lXCI6XCJCYXJzXCIsXCJpZFwiOjQyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYyMjA4OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjIyMTI2WlwiLFwibmFtZVwiOlwiQmVlclwiLFwiaWRcIjo0M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNTQ1ODRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA1NDYzN1pcIixcIm5hbWVcIjpcIlBlcmFuYWthblwiLFwiaWRcIjo0NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNzE4MjNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA3MTg1OVpcIixcIm5hbWVcIjpcIlN3ZWV0IFRvb3RoXCIsXCJpZFwiOjQ1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI0LjQ2MzYwN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjQuNDYzNjM5WlwiLFwibmFtZVwiOlwiQ29mZmVlIEFkZGljdHNcIixcImlkXCI6NDZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjYuNTg0MDY4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNi41ODQxMDFaXCIsXCJuYW1lXCI6XCJNdXNpY1wiLFwiaWRcIjo0N30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozMy43MjYxNTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjMzLjcyNjIwMFpcIixcIm5hbWVcIjpcIlZlZ2V0YXJpYW5cIixcImlkXCI6NDh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTAxOTkyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MDIwMjdaXCIsXCJuYW1lXCI6XCJKdXN0IE9wZW5lZFwiLFwiaWRcIjo0OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MTMyMjdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUxMzI1OVpcIixcIm5hbWVcIjpcIkN1bHR1cmVcIixcImlkXCI6NTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTI0MjYxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MjQyOTJaXCIsXCJuYW1lXCI6XCJTdHlsZVwiLFwiaWRcIjo1MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MzUzMTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUzNTM1MFpcIixcIm5hbWVcIjpcIkFjdGl2ZVwiLFwiaWRcIjo1Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNy41MjU2NzZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM3LjUyNTcwOVpcIixcIm5hbWVcIjpcIlRoZWF0cmVcIixcImlkXCI6NTN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguMDU2NTA0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC4wNTY1NDhaXCIsXCJuYW1lXCI6XCJXb21lbidzIEZhc2hpb25cIixcImlkXCI6NTR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguOTk5MDk4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC45OTkxMjlaXCIsXCJuYW1lXCI6XCJTcGlyaXRzXCIsXCJpZFwiOjU1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjE3MzA3OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuMTczMTE4WlwiLFwibmFtZVwiOlwiTmV3IFJlc3RhdXJhbnRzIGFuZCBCYXJzXCIsXCJpZFwiOjU2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjcwMTQzM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuNzAxNDY3WlwiLFwibmFtZVwiOlwiTWVhdC1sb3ZlcnNcIixcImlkXCI6NTd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzAzMTg4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMDMyMjhaXCIsXCJuYW1lXCI6XCJBcnRcIixcImlkXCI6NTh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzE5OTU1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMTk5ODhaXCIsXCJuYW1lXCI6XCJGaWxtXCIsXCJpZFwiOjU5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMzNjc2OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzM2ODA1WlwiLFwibmFtZVwiOlwiTWVuJ3MgRmFzaGlvblwiLFwiaWRcIjo2MH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xMzQ0MDNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjEzNDQzNlpcIixcIm5hbWVcIjpcIkRhbmNlXCIsXCJpZFwiOjYxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjE0NTgzNlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTQ1ODY5WlwiLFwibmFtZVwiOlwiTmlnaHRsaWZlXCIsXCJpZFwiOjYyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjM4LjE0Mzg4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6MzguMTQzOTEwWlwiLFwibmFtZVwiOlwiRm9vZCAmIERyaW5rXCIsXCJpZFwiOjYzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjUwLjkyNzQxMlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6NTAuOTI3NDQ2WlwiLFwibmFtZVwiOlwiVHJhdmVsXCIsXCJpZFwiOjY0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTEwLTMwVDA1OjI4OjQ4Ljg3MTkyOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMTAtMzBUMDU6Mjg6NDguODcxOTUyWlwiLFwibmFtZVwiOlwiSG90ZWxzXCIsXCJpZFwiOjY2fV1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IHt9LFxuICBnZXQoa2V5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhW2tleV07XG4gICAgLy8gSWYgdGFyZ2V0IG5vdCBleHBpcmVkIHlldCwgb3Igbm8gZXhwaXJlZCBkYXRlIHNldFxuICAgIGlmICh0YXJnZXQgJiYgKHRhcmdldC5leHBpcmVkRGF0ZSA+ICtuZXcgRGF0ZSgpIHx8ICF0YXJnZXQuZXhwaXJlZERhdGUpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICAvKipcbiAgICogQGtleSA6IGtleVxuICAgKiBAdmFsdWUgOiB2YWx1ZVxuICAgKiBAZXhwaXJlZERhdGUgOiBtaWxpc2Vjb25kXG4gICAqL1xuICBzZXQoa2V5LCB2YWx1ZSwgZXhwaXJlZERhdGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgICBpZiAoZXhwaXJlZERhdGUpIHtcbiAgICAgIHRhcmdldC5leHBpcmVkRGF0ZSA9IGV4cGlyZWREYXRlO1xuICAgIH1cbiAgICB0aGlzLmRhdGFba2V5XSA9IHRhcmdldDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBDbGVhciBjYWNoZSBmb3IgYWxsIG1hdGNoZWQga2V5cyAob3IgZXhhY3RseSB0aGUga2V5IGlmIGBtYXRjaGAgaXMgYSBzdHJpbmcpXG4gICAqL1xuICBjbGVhcihtYXRjaCkge1xuICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5c1tpXS5tYXRjaChtYXRjaCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbWF0Y2hdO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
