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
          searchable: true })
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
          return _react2['default'].createElement(
            'a',
            { target: '_blank', href: 'https://www.youtube.com/watch?v=' + this.id.videoId },
            snippet.title
          );
        }
      }], ['Description', {
        field: 'snippet',
        transform: function transform(snippet) {
          return snippet.description;
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
      // 3. Sort # Youtube API does not support multi direction sorting
      //if (sortProperty && sortOrderDesc !== null) {
      //  query += '&order=' + sortProperty +
      //    '&direction=' + (sortOrderDesc ? 'desc' : 'asc');
      //}
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
          total: 1, // TODO: react-datatable does not work well with cursor based pagination. Need improve this.
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZS5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy9kYXRhLXNvdXJjZS9HaXRIdWJJc3N1ZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGF0YS1zb3VyY2UvWW91dHViZURhdGFTb3VyY2UuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvZGVtby5qcyIsIi9Vc2Vycy9kaW5ocXVhbmd0cnVuZy9Eb2N1bWVudHMvUHJvamVjdHMvcmVhY3QtZGF0YXRhYmxlL2V4YW1wbGVzL3NyYy91dGlscy9hcGkuanMiLCIvVXNlcnMvZGluaHF1YW5ndHJ1bmcvRG9jdW1lbnRzL1Byb2plY3RzL3JlYWN0LWRhdGF0YWJsZS9leGFtcGxlcy9zcmMvdXRpbHMvZmFrZS1kYXRhLmpzIiwiL1VzZXJzL2RpbmhxdWFuZ3RydW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1kYXRhdGFibGUvZXhhbXBsZXMvc3JjL3V0aWxzL3JlcXVlc3QtY2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7OzhCQUNILGlCQUFpQjs7Ozs0Q0FDUixrQ0FB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QUFFO0FBQ2QsOEJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2xCO0NBQ0YsQ0FBQzs7cUJBRWEsR0FBRzs7Ozs7Ozs7Ozs7OztxQkNuRkg7QUFDYixZQUFVLEVBQUUsQ0FBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLHFCQUFxQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLDBCQUEwQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLDZCQUE2QixFQUFDLFlBQVksRUFBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztDQUNoeU87Ozs7Ozs7Ozs7OztxQkNIYztBQUNiLE1BQUksRUFBRSxFQUFFO0FBQ1IsS0FBRyxFQUFBLGFBQUMsR0FBRyxFQUFFO0FBQ1AsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFOUIsUUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBLEFBQUMsRUFBRTtBQUN2RSxhQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDckI7QUFDRCxXQUFPLFNBQVMsQ0FBQztHQUNsQjs7Ozs7O0FBTUQsS0FBRyxFQUFBLGFBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7QUFDM0IsUUFBTSxNQUFNLEdBQUc7QUFDYixXQUFLLEVBQUUsS0FBSztLQUNiLENBQUM7QUFDRixRQUFJLFdBQVcsRUFBRTtBQUNmLFlBQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDO0FBQ0QsUUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDeEIsV0FBTyxLQUFLLENBQUM7R0FDZDs7OztBQUlELE9BQUssRUFBQSxlQUFDLEtBQUssRUFBRTtBQUNYLFFBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQzdCLFVBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BDLFlBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN4QixpQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO09BQ0Y7S0FDRixNQUFNO0FBQ0wsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO0dBQ0Y7Q0FDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdyZWFjdC1kYXRhdGFibGUnO1xuaW1wb3J0IENhdGVnb3J5RGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL0NhdGVnb3J5RGF0YVNvdXJjZSc7XG5pbXBvcnQgR2l0SHViSXNzdWVEYXRhU291cmNlIGZyb20gJy4vZGF0YS1zb3VyY2UvR2l0SHViSXNzdWVEYXRhU291cmNlJztcbmltcG9ydCBZb3V0dWJlRGF0YVNvdXJjZSBmcm9tICcuL2RhdGEtc291cmNlL1lvdXR1YmVEYXRhU291cmNlJztcbmltcG9ydCBmYWtlRGF0YSBmcm9tICcuL3V0aWxzL2Zha2UtZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNhdGVnb3J5RGF0YVNvdXJjZSA9IG5ldyBDYXRlZ29yeURhdGFTb3VyY2UoJ2NhdGVnb3J5LWxpc3Qtc2VsZWN0JywgZmFrZURhdGEuY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5yZWFjdElzc3VlRGF0YVNvdXJjZSA9IG5ldyBHaXRIdWJJc3N1ZURhdGFTb3VyY2UoJ3JlYWN0LWlzc3VlcycpO1xuICAgIHRoaXMueW91dHViZURhdGFTb3VyY2UgPSBuZXcgWW91dHViZURhdGFTb3VyY2UoJ3lvdXR1YmUtdmlkZW9zJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlN0YXRpYyBkYXRhPC9oMT5cbiAgICAgICAgPERhdGFUYWJsZSBpZD1cImNhdGVnb3J5LXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLmNhdGVnb3J5RGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICAgICAgICAgc29ydGFibGUgLz5cblxuICAgICAgICA8aHIvPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFqYXggZGF0YSAoUmVhY3QgR2l0SHViIGlzc3Vlcyk8L2gxPlxuICAgICAgICB7LypcbiAgICAgICAgVE9ETzogYWRkIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHdpdGggR2l0SHViIEFQSVxuICAgICAgICAqL31cbiAgICAgICAgPERhdGFUYWJsZSBpZD1cInJlYWN0LWlzc3VlLXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnJlYWN0SXNzdWVEYXRhU291cmNlfVxuICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlIC8+XG5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+WW91dHViZSB2aWRlb3M8L2gxPlxuXG4gICAgICAgIDxEYXRhVGFibGUgaWQ9XCJyZWFjdC15b3V0dWJlLXZpZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy55b3V0dWJlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZm9yIGVudGl0eSB3aXRoIGV4aXN0aW5nIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgaXRlbXMpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLm1ldGEgPSB7XG4gICAgICBrZXlGaWVsZDogJ2lkJyxcbiAgICAgIHNlYXJjaEZpZWxkczogWyduYW1lJ10sXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnTmFtZScsICduYW1lJ10sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5lbnRpdHkgPSB0aGlzLm1ldGE7XG4gICAgdGhpcy5leHRyYUNvbHVtcyA9IFtdO1xuICB9XG5cbiAgZmV0Y2gocGFnZSwgc2VhcmNoLCBzb3J0UHJvcGVydHksIHNvcnRPcmRlckRlc2MsIGZpbHRlciwgcGVycGFnZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5pdGVtcztcbiAgICAvLyAxLiBGaWx0ZXJcbiAgICBpZiAoZmlsdGVyICYmIE9iamVjdC5rZXlzKGZpbHRlcikubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdGVyRnVuYyA9IGl0ZW0gPT4gaXRlbVt0aGlzXSA9PT0gZmlsdGVyW3RoaXNdO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBmaWx0ZXIpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZpbHRlckZ1bmMuYmluZChwcm9wZXJ0eSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIDIuIFNlYXJjaFxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMuZW50aXR5LnNlYXJjaEZpZWxkcztcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlYXJjaEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChpdGVtW3NlYXJjaEZpZWxkc1tpXV0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTYXZlIHRoZSB0b3RhbCBpdGVtIGZvciBwYWdpbmF0aW9uXG4gICAgdmFyIF90b3RhbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgLy8gMy4gT3JkZXJcbiAgICBpZiAoc29ydFByb3BlcnR5ICYmIHNvcnRPcmRlckRlc2MgIT09IG51bGwpIHtcbiAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdChbXSkuc29ydCgoYSwgYikgPT4gKDIgKiAoK3NvcnRPcmRlckRlc2MpIC0gMSkgKlxuICAgICAgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSA/IDEgOiAtMSkpO1xuICAgIH1cblxuICAgIC8vIDQuIFBhZ2luZ1xuICAgIHBlcnBhZ2UgPSBwZXJwYWdlIHx8IHRoaXMuREVGQVVMVF9QRVJfUEFHRTtcbiAgICBjb25zdCBwYWdlSXRlbXMgPSBkYXRhLnNsaWNlKHBlcnBhZ2UgKiAocGFnZSAtIDEpLCBwYWdlICogcGVycGFnZSk7XG5cbiAgICAvLyBTZXQgZGF0YVxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICB0b3RhbDogX3RvdGFsLFxuICAgICAgZW50aXRpZXM6IHBhZ2VJdGVtcyxcbiAgICAgIHBlcnBhZ2U6IHBlcnBhZ2UsXG4gICAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICAgIHNvcnRQcm9wZXJ0eTogc29ydFByb3BlcnR5LFxuICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICB9O1xuXG4gICAgLy8gRW1pdCBldmVudFxuICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcyc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZnJvbSBlbnRpdHkgQVBJc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWJJc3N1ZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKG5hbWUpO1xuICAgIHRoaXMubWV0YSA9IHtcbiAgICAgIGtleUZpZWxkOiAnaWQnLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ3RpdGxlJ10sXG4gICAgICBsaXN0RmllbGRzOiBbXG4gICAgICAgIFsnVGl0bGUnLCB7XG4gICAgICAgICAgZmllbGQ6ICd0aXRsZScsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dGhpcy51cmx9Pnt2YWx1ZX08L2E+O1xuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsnTGFiZWxzJywge1xuICAgICAgICAgIGZpZWxkOiAnbGFiZWxzJyxcbiAgICAgICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17bGFiZWwubmFtZX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogbGFiZWwuY29sb3J9fT57bGFiZWwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIFsnQ29tbWVudHMnLCAnY29tbWVudHMnXSxcbiAgICAgICAgWydDcmVhdGVkIGF0Jywge1xuICAgICAgICAgIGZpZWxkOiAnY3JlYXRlZF9hdCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgIF1cbiAgICB9O1xuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5tZXRhO1xuICAgIHRoaXMuZGlzYWJsZUNhY2hlID0gZmFsc2U7XG4gIH1cblxuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgY29uc3QgYXBpRW5kUG9pbnQgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYWNlYm9vay9yZWFjdC9pc3N1ZXMnO1xuXG4gICAgLy8gQnVpbGQgcXVlcnlcbiAgICAvLyAxLiBQYWdpbmF0aW9uXG4gICAgbGV0IHF1ZXJ5ID0gJyZwYWdlPScgKyBwYWdlO1xuICAgIGlmIChwZXJwYWdlKSBxdWVyeSArPSAnJnBlcl9wYWdlPScgKyBwZXJwYWdlO1xuICAgIC8vIDIuIFNlYXJjaFxuICAgIC8vIGlmIChzZWFyY2gpIHF1ZXJ5ICs9ICcmcXVlcnk9JyArIHNlYXJjaDsgLy8gU2FkLCBHaXRIdWIgQVBJIGRvZXMgbm90IHByb3ZpZGUgc2VhcmNoXG4gICAgLy8gMy4gU29ydFxuICAgIGlmIChzb3J0UHJvcGVydHkgJiYgc29ydE9yZGVyRGVzYyAhPT0gbnVsbCkge1xuICAgICAgcXVlcnkgKz0gJyZzb3J0PScgKyBzb3J0UHJvcGVydHkgK1xuICAgICAgICAnJmRpcmVjdGlvbj0nICsgKHNvcnRPcmRlckRlc2MgPyAnZGVzYycgOiAnYXNjJyk7XG4gICAgfVxuICAgIC8vIDQuIEZpbHRlciAvLyBTYWQsIEdpdEh1YiBBUEkgZG9lcyBub3QgcHJvdmlkZSBmaWx0ZXJcbiAgICAvL2lmIChmaWx0ZXIgJiYgT2JqZWN0LmtleXMoZmlsdGVyKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gIHF1ZXJ5ICs9IE9iamVjdC5rZXlzKGZpbHRlcikubWFwKChwcm9wZXJ0eSkgPT4ge1xuICAgIC8vICAgIHJldHVybiAnJicgKyBwcm9wZXJ0eSArICc9JyArIGZpbHRlcltwcm9wZXJ0eV07XG4gICAgLy8gIH0pO1xuICAgIC8vfVxuICAgIC8vIDUuIEV4dHJhIHBhcmFtc1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmV4dHJhUGFyYW1zKS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ICs9ICcmJyArIE9iamVjdC5rZXlzKHRoaXMuZXh0cmFQYXJhbXMpLm1hcCgoa2V5KSA9PlxuICAgICAgICBrZXkgKyAnPScgKyB0aGlzLmV4dHJhUGFyYW1zW2tleV0pLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICBhcGkuZ2V0KGFwaUVuZFBvaW50ICsgJz8nICsgcXVlcnksIHt9LCB0aGlzLmRpc2FibGVDYWNoZSlcbiAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBTZXQgZGF0YVxuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICB0b3RhbDogdW5kZWZpbmVkLCAvLyBTYWQsIEdpdEh1YiBkb2VzIG5vdCBwcm92aWRlIHRoaXMgaW5mb3JtYXRpb25cbiAgICAgICAgICBlbnRpdGllczogcmVzcG9uc2UsXG4gICAgICAgICAgcGVycGFnZTogcGVycGFnZSB8fCB0aGlzLkRFRkFVTFRfUEVSX1BBR0UsXG4gICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcignZmFpbGVkJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ3JlYWN0LWRhdGF0YWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaS5qcyc7XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZnJvbSBlbnRpdHkgQVBJc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZb3V0dWJlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gICAgdGhpcy5LRVkgPSAnQUl6YVN5RFgwQnlrRHk4UEVJUUdzRmpkU1ZBRjRnRFFWTndyenRJJztcbiAgICB0aGlzLm1ldGEgPSB7XG4gICAgICBrZXlGaWVsZDogJ3BhZ2VpZCcsXG4gICAgICBzZWFyY2hGaWVsZHM6IFsndGl0bGUnXSxcbiAgICAgIGxpc3RGaWVsZHM6IFtcbiAgICAgICAgWydJbWFnZScsIHtcbiAgICAgICAgICBmaWVsZDogJ3NuaXBwZXQnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKHNuaXBwZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17c25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbJ1RpdGxlJywge1xuICAgICAgICAgIGZpZWxkOiAnc25pcHBldCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoc25pcHBldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9eydodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PScgKyB0aGlzLmlkLnZpZGVvSWR9PntzbmlwcGV0LnRpdGxlfTwvYT5cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICBbJ0Rlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGZpZWxkOiAnc25pcHBldCcsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoc25pcHBldCkge1xuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXQuZGVzY3JpcHRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgIF1cbiAgICB9O1xuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5tZXRhO1xuICAgIHRoaXMuZGlzYWJsZUNhY2hlID0gZmFsc2U7XG4gIH1cblxuICBmZXRjaChwYWdlLCBzZWFyY2gsIHNvcnRQcm9wZXJ0eSwgc29ydE9yZGVyRGVzYywgZmlsdGVyLCBwZXJwYWdlKSB7XG4gICAgY29uc3QgYXBpRW5kUG9pbnQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/JyArXG4gICAgICAndHlwZT12aWRlbyZwYXJ0PXNuaXBwZXQma2V5PScgKyB0aGlzLktFWTtcbiAgICBsZXQgcXVlcnkgPSBcIlwiO1xuICAgIC8vIEJ1aWxkIHF1ZXJ5XG4gICAgLy8gMS4gUGFnaW5hdGlvblxuICAgIC8vIGxldCBxdWVyeSA9ICcmcGFnZT0nICsgcGFnZTtcbiAgICBpZiAocGVycGFnZSkgcXVlcnkgKz0gJyZtYXhSZXN1bHRzPScgKyBwZXJwYWdlO1xuICAgIC8vIDIuIFNlYXJjaFxuICAgICBpZiAoc2VhcmNoKSBxdWVyeSArPSAnJnE9JyArIHNlYXJjaDtcbiAgICAvLyAzLiBTb3J0ICMgWW91dHViZSBBUEkgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aSBkaXJlY3Rpb24gc29ydGluZ1xuICAgIC8vaWYgKHNvcnRQcm9wZXJ0eSAmJiBzb3J0T3JkZXJEZXNjICE9PSBudWxsKSB7XG4gICAgLy8gIHF1ZXJ5ICs9ICcmb3JkZXI9JyArIHNvcnRQcm9wZXJ0eSArXG4gICAgLy8gICAgJyZkaXJlY3Rpb249JyArIChzb3J0T3JkZXJEZXNjID8gJ2Rlc2MnIDogJ2FzYycpO1xuICAgIC8vfVxuICAgIC8vIDQuIEZpbHRlclxuICAgIC8vaWYgKGZpbHRlciAmJiBPYmplY3Qua2V5cyhmaWx0ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgcXVlcnkgKz0gT2JqZWN0LmtleXMoZmlsdGVyKS5tYXAoKHByb3BlcnR5KSA9PiB7XG4gICAgLy8gICAgcmV0dXJuICcmJyArIHByb3BlcnR5ICsgJz0nICsgZmlsdGVyW3Byb3BlcnR5XTtcbiAgICAvLyAgfSk7XG4gICAgLy99XG5cbiAgICBhcGkuZ2V0KGFwaUVuZFBvaW50ICsgcXVlcnksIHt9KVxuICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXNwb25zZS5pdGVtcztcbiAgICAgICAgLy8gU2V0IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgdG90YWw6IDEsIC8vIFRPRE86IHJlYWN0LWRhdGF0YWJsZSBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBjdXJzb3IgYmFzZWQgcGFnaW5hdGlvbi4gTmVlZCBpbXByb3ZlIHRoaXMuXG4gICAgICAgICAgZW50aXRpZXM6IHJlc3VsdHMsXG4gICAgICAgICAgcGVycGFnZTogcmVzcG9uc2UucGFnZUluZm8ucmVzdWx0c1BlclBhZ2UsXG4gICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgICAgICAgc29ydFByb3BlcnR5OiBzb3J0UHJvcGVydHksXG4gICAgICAgICAgc29ydE9yZGVyRGVzYzogc29ydE9yZGVyRGVzYyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlcignZmFpbGVkJyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiAxMi8xNC8xNS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9yZXF1ZXN0LWNhY2hlJztcbmNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG5jb25zdCBhcGkgPSB7XG4gIF9sb2c6IGZhbHNlLFxuICBleHRyYU9wdGlvbnM6IHtcbiAgICAvLyBoZWFkZXJzOiB7XG4gICAgLy8gICAnR09SVVRPS0VOJzogc2Vzc2lvblN0b3JlLnRva2VuLFxuICAgIC8vIH0sXG4gICAgdHlwZTogJ2pzb24nLFxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICB9LFxuICBsb2coLi4uYXJncykge1xuICAgIHRoaXMuX2xvZyAmJiBjb25zb2xlLmxvZygnW0FQSV0nLCAuLi5hcmdzKTtcbiAgfSxcbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybiBhICQuRGVmZXJyZWQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIHJlcXVlc3QgaXMgY29tcGxldGUgKG9yIGNhY2hlKVxuICAgKi9cbiAgX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgbWV0aG9kLCBkaXNhYmxlQ2FjaGUpIHtcbiAgICBjb25zdCBjYWNoZUtleSA9IHVybCArICdbJyArIChkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAnJykgKyAnXSc7XG5cbiAgICBjb25zdCBhamF4ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9LCB0aGlzLmV4dHJhT3B0aW9ucywge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9nKCdSZXF1ZXN0IHNlbnQ6ICcsIGNhY2hlS2V5LCBvcHRpb25zKTtcbiAgICAgIGlmICh0aGlzLl9sb2cpIHtcbiAgICAgICAgcmVxdWVzdExvZy5hZGQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgcmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmxvZygnUmVxdWVzdCBjYWNoZWQ6ICcgKyBjYWNoZUtleSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoZGlzYWJsZUNhY2hlKSB7XG4gICAgICB0aGlzLmxvZygnUmVxdWVzdCBzZW50IHdpdGhvdXQgY2FjaGU6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gYWpheCgpO1xuICAgIH1cbiAgICAvLyBVc2UgY2FjaGVcbiAgICAvLyBUcnkgdG8gZ2V0IGRhdGEgZnJvbSBjYWNoZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMubG9nKCdSZXR1cm5pbmcgY2FjaGVkIHJlcXVlc3Q6ICcgKyBjYWNoZUtleSk7XG4gICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRoaXMubG9nKCdBc2tlZCBmb3IgY2FjaGUgYnV0IG5vdCBmb3VuZCwgc2VuZGluZyByZXF1ZXN0OiAnICsgY2FjaGVLZXkpO1xuICAgIC8vIE5vIGNhY2hlIGF2YWlsYWJsZVxuICAgIHJldHVybiBhamF4KCk7XG4gIH0sXG4gIGdldCh1cmwsIGRhdGEsIGRpc2FibGVDYWNoZSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdHRVQnLCBkaXNhYmxlQ2FjaGUpO1xuICB9LFxuICAvKipcbiAgICogUG9zdCByZXF1ZXN0cyBuZXZlciB1c2UgY2FjaGVcbiAgICovXG4gIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbmRSZXF1ZXN0KHVybCwgZGF0YSwgJ1BPU1QnLCB0cnVlKTtcbiAgfSxcbiAgcHV0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdQVVQnLCB0cnVlKTtcbiAgfSxcbiAgZGVsZXRlKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLl9zZW5kUmVxdWVzdCh1cmwsIGRhdGEsICdERUxFVEUnLCB0cnVlKTtcbiAgfSxcbiAgdXBsb2FkKHVybCwgZm9ybURhdGEpIHtcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcbiAgY2xlYXJDYWNoZShrZXkpIHtcbiAgICBjYWNoZS5jbGVhcihrZXkpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRpbmhxdWFuZ3RydW5nIG9uIDEyLzE0LzE1LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2F0ZWdvcmllczogW3tcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDA2ODIzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MDY4NTJaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50XCIsXCJpZFwiOjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNDIwNjQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS40MjA2NzRaXCIsXCJuYW1lXCI6XCJXZXN0ZXJuXCIsXCJpZFwiOjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNTc3MDI1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41NzcwNTNaXCIsXCJuYW1lXCI6XCJCYXJcIixcImlkXCI6M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS41ODc4ODdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5LjU4NzkxNlpcIixcIm5hbWVcIjpcIkNvY2t0YWlsc1wiLFwiaWRcIjo0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjI5Ljc0MzMyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzQzMzU0WlwiLFwibmFtZVwiOlwiQnVmZmV0XCIsXCJpZFwiOjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MjkuNzU0Mjk0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MToyOS43NTQzMjNaXCIsXCJuYW1lXCI6XCJJbnRlcm5hdGlvbmFsXCIsXCJpZFwiOjZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDQzMzMwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNDMzNjFaXCIsXCJuYW1lXCI6XCJNZWRpdGVycmFuZWFuXCIsXCJpZFwiOjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMDU0MTkwWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4wNTQyMTlaXCIsXCJuYW1lXCI6XCJTaW5nYXBvcmVhblwiLFwiaWRcIjo4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjE5MzkyNFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuMTkzOTY4WlwiLFwibmFtZVwiOlwiU3Bpcml0cy9XaGlza3lcIixcImlkXCI6OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC4zMjU2OTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjMyNTcyM1pcIixcIm5hbWVcIjpcIkRlc3NlcnRcIixcImlkXCI6MTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNDczNjE0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC40NzM2NDJaXCIsXCJuYW1lXCI6XCJLb3JlYW5cIixcImlkXCI6MTF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjA5MTE4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC42MDkxNDhaXCIsXCJuYW1lXCI6XCJGb29kL2RyaW5rIHN0YWxsXCIsXCJpZFwiOjEyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjYyMDEyMVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNjIwMTU3WlwiLFwibmFtZVwiOlwiSGF3a2VyIENlbnRyZVwiLFwiaWRcIjoxM30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMC43ODMwNzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc4MzExMlpcIixcIm5hbWVcIjpcIkV1cm9wZWFuXCIsXCJpZFwiOjE0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMwLjc5Mzk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzAuNzk0MDEyWlwiLFwibmFtZVwiOlwiRnVzaW9uXCIsXCJpZFwiOjE1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjg0NDk4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuODQ1MDEzWlwiLFwibmFtZVwiOlwiQ2Fmw6lcIixcImlkXCI6MTZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTc0OTk2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMS45NzUwMzJaXCIsXCJuYW1lXCI6XCJDaGluZXNlXCIsXCJpZFwiOjE3fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMxLjk4NjA0OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzEuOTg2MDgwWlwiLFwibmFtZVwiOlwiVmVnZXRhcmlhbi1mcmllbmRseVwiLFwiaWRcIjoxOH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi4xMzM5NzRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjEzNDAwN1pcIixcIm5hbWVcIjpcIkphcGFuZXNlXCIsXCJpZFwiOjE5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjUwNTM4NVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuNTA1NDI2WlwiLFwibmFtZVwiOlwiQnJ1bmNoXCIsXCJpZFwiOjIwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjMyLjkxODg0NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTE4ODc0WlwiLFwibmFtZVwiOlwiQXNpYW5cIixcImlkXCI6MjF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzIuOTI5NDMyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMi45Mjk0NTlaXCIsXCJuYW1lXCI6XCJFeHBlcmltZW50YWxcIixcImlkXCI6MjJ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzMuODA5NjAzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozMy44MDk2MzJaXCIsXCJuYW1lXCI6XCJJbmRpYW5cIixcImlkXCI6MjN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzQuMDczMzc2WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNC4wNzM0MDVaXCIsXCJuYW1lXCI6XCJGcmVuY2hcIixcImlkXCI6MjR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzUuODM4OTIxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNS44Mzg5NDlaXCIsXCJuYW1lXCI6XCJCYWtlcnlcIixcImlkXCI6MjV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuMTI3ODgzWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNi4xMjc5MTFaXCIsXCJuYW1lXCI6XCJJdGFsaWFuXCIsXCJpZFwiOjI2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjM2LjQwODM1OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzYuNDA4Mzg2WlwiLFwibmFtZVwiOlwiTWlkZGxlIEVhc3Rlcm5cIixcImlkXCI6Mjd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6MzcuNzcyODM4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTozNy43NzI4NjdaXCIsXCJuYW1lXCI6XCJDbHViXCIsXCJpZFwiOjI4fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ0LjIwMzAxOFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDQuMjAzMDQ5WlwiLFwibmFtZVwiOlwiU3BhbmlzaFwiLFwiaWRcIjoyOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0Ni41NTgyMzJaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjQ2LjU1ODI2MVpcIixcIm5hbWVcIjpcIlRoYWlcIixcImlkXCI6MzB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NDkuMzE0NTgxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo0OS4zMTQ2MTJaXCIsXCJuYW1lXCI6XCJXaW5lXCIsXCJpZFwiOjMxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUwLjI0NTQ2NFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTAuMjQ1NDk0WlwiLFwibmFtZVwiOlwiU3RlYWtob3VzZVwiLFwiaWRcIjozMn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1My41NTQ4MDRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUxOjUzLjU1NDgzMlpcIixcIm5hbWVcIjpcIkluZG9uZXNpYW5cIixcImlkXCI6MzN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTE6NTQuODkwNjA5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MTo1NC44OTA2NTNaXCIsXCJuYW1lXCI6XCJMYXRpbiBBbWVyaWNhblwiLFwiaWRcIjozNH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowMS45MDY5OTNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjAxLjkwNzAyNlpcIixcIm5hbWVcIjpcIk1leGljYW5cIixcImlkXCI6MzV9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6MDYuMDk4MDQ0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MjowNi4wOTgwNzFaXCIsXCJuYW1lXCI6XCJWaWV0bmFtZXNlXCIsXCJpZFwiOjM2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTE1VDE2OjUyOjUzLjcwMzczN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTI6NTMuNzAzNzgyWlwiLFwibmFtZVwiOlwiTWFsYXlcIixcImlkXCI6Mzd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMTVUMTY6NTM6MDcuMzY1ODQ1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0xNVQxNjo1MzowNy4zNjU4NzVaXCIsXCJuYW1lXCI6XCJDYXJpYmJlYW5cIixcImlkXCI6Mzh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuMjEwNjE5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS4yMTA2NjRaXCIsXCJuYW1lXCI6XCJSZXN0YXVyYW50c1wiLFwiaWRcIjozOX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToxOS44OTI5MTRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5Ljg5Mjk0N1pcIixcIm5hbWVcIjpcIkNhZmVzXCIsXCJpZFwiOjQwfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjE5LjkwMzk1OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MTkuOTAzOTg4WlwiLFwibmFtZVwiOlwiSGF3a2VyIEVhdHNcIixcImlkXCI6NDF9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjEwNTM5WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMC42MTA1NjlaXCIsXCJuYW1lXCI6XCJCYXJzXCIsXCJpZFwiOjQyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIwLjYyMjA4OFpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjAuNjIyMTI2WlwiLFwibmFtZVwiOlwiQmVlclwiLFwiaWRcIjo0M30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNTQ1ODRaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA1NDYzN1pcIixcIm5hbWVcIjpcIlBlcmFuYWthblwiLFwiaWRcIjo0NH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyMS4wNzE4MjNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjIxLjA3MTg1OVpcIixcIm5hbWVcIjpcIlN3ZWV0IFRvb3RoXCIsXCJpZFwiOjQ1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjI0LjQ2MzYwN1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjQuNDYzNjM5WlwiLFwibmFtZVwiOlwiQ29mZmVlIEFkZGljdHNcIixcImlkXCI6NDZ9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MjYuNTg0MDY4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMToyNi41ODQxMDFaXCIsXCJuYW1lXCI6XCJNdXNpY1wiLFwiaWRcIjo0N30se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozMy43MjYxNTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjMzLjcyNjIwMFpcIixcIm5hbWVcIjpcIlZlZ2V0YXJpYW5cIixcImlkXCI6NDh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTAxOTkyWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MDIwMjdaXCIsXCJuYW1lXCI6XCJKdXN0IE9wZW5lZFwiLFwiaWRcIjo0OX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MTMyMjdaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUxMzI1OVpcIixcIm5hbWVcIjpcIkN1bHR1cmVcIixcImlkXCI6NTB9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzUuNTI0MjYxWlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MjQyOTJaXCIsXCJuYW1lXCI6XCJTdHlsZVwiLFwiaWRcIjo1MX0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNS41MzUzMTlaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM1LjUzNTM1MFpcIixcIm5hbWVcIjpcIkFjdGl2ZVwiLFwiaWRcIjo1Mn0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozNy41MjU2NzZaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjM3LjUyNTcwOVpcIixcIm5hbWVcIjpcIlRoZWF0cmVcIixcImlkXCI6NTN9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguMDU2NTA0WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC4wNTY1NDhaXCIsXCJuYW1lXCI6XCJXb21lbidzIEZhc2hpb25cIixcImlkXCI6NTR9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6MzguOTk5MDk4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMTozOC45OTkxMjlaXCIsXCJuYW1lXCI6XCJTcGlyaXRzXCIsXCJpZFwiOjU1fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjE3MzA3OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuMTczMTE4WlwiLFwibmFtZVwiOlwiTmV3IFJlc3RhdXJhbnRzIGFuZCBCYXJzXCIsXCJpZFwiOjU2fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAxOjQzLjcwMTQzM1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDE6NDMuNzAxNDY3WlwiLFwibmFtZVwiOlwiTWVhdC1sb3ZlcnNcIixcImlkXCI6NTd9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzAzMTg4WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMDMyMjhaXCIsXCJuYW1lXCI6XCJBcnRcIixcImlkXCI6NTh9LHtcImNyZWF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzE5OTU1WlwiLFwidXBkYXRlZF9hdFwiOlwiMjAxNC0xMi0yM1QwNTowMjowMi4zMTk5ODhaXCIsXCJuYW1lXCI6XCJGaWxtXCIsXCJpZFwiOjU5fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE0LTEyLTIzVDA1OjAyOjAyLjMzNjc2OVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTQtMTItMjNUMDU6MDI6MDIuMzM2ODA1WlwiLFwibmFtZVwiOlwiTWVuJ3MgRmFzaGlvblwiLFwiaWRcIjo2MH0se1wiY3JlYXRlZF9hdFwiOlwiMjAxNS0wMi0xMlQwNDoyMzozNC4xMzQ0MDNaXCIsXCJ1cGRhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjEzNDQzNlpcIixcIm5hbWVcIjpcIkRhbmNlXCIsXCJpZFwiOjYxfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTAyLTEyVDA0OjIzOjM0LjE0NTgzNlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDItMTJUMDQ6MjM6MzQuMTQ1ODY5WlwiLFwibmFtZVwiOlwiTmlnaHRsaWZlXCIsXCJpZFwiOjYyfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjM4LjE0Mzg4M1pcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6MzguMTQzOTEwWlwiLFwibmFtZVwiOlwiRm9vZCAmIERyaW5rXCIsXCJpZFwiOjYzfSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTA3LTEzVDEwOjI1OjUwLjkyNzQxMlpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMDctMTNUMTA6MjU6NTAuOTI3NDQ2WlwiLFwibmFtZVwiOlwiVHJhdmVsXCIsXCJpZFwiOjY0fSx7XCJjcmVhdGVkX2F0XCI6XCIyMDE1LTEwLTMwVDA1OjI4OjQ4Ljg3MTkyOVpcIixcInVwZGF0ZWRfYXRcIjpcIjIwMTUtMTAtMzBUMDU6Mjg6NDguODcxOTUyWlwiLFwibmFtZVwiOlwiSG90ZWxzXCIsXCJpZFwiOjY2fV1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkaW5ocXVhbmd0cnVuZyBvbiA5LzMwLzE1LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IHt9LFxuICBnZXQoa2V5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kYXRhW2tleV07XG4gICAgLy8gSWYgdGFyZ2V0IG5vdCBleHBpcmVkIHlldCwgb3Igbm8gZXhwaXJlZCBkYXRlIHNldFxuICAgIGlmICh0YXJnZXQgJiYgKHRhcmdldC5leHBpcmVkRGF0ZSA+ICtuZXcgRGF0ZSgpIHx8ICF0YXJnZXQuZXhwaXJlZERhdGUpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICAvKipcbiAgICogQGtleSA6IGtleVxuICAgKiBAdmFsdWUgOiB2YWx1ZVxuICAgKiBAZXhwaXJlZERhdGUgOiBtaWxpc2Vjb25kXG4gICAqL1xuICBzZXQoa2V5LCB2YWx1ZSwgZXhwaXJlZERhdGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbiAgICBpZiAoZXhwaXJlZERhdGUpIHtcbiAgICAgIHRhcmdldC5leHBpcmVkRGF0ZSA9IGV4cGlyZWREYXRlO1xuICAgIH1cbiAgICB0aGlzLmRhdGFba2V5XSA9IHRhcmdldDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBDbGVhciBjYWNoZSBmb3IgYWxsIG1hdGNoZWQga2V5cyAob3IgZXhhY3RseSB0aGUga2V5IGlmIGBtYXRjaGAgaXMgYSBzdHJpbmcpXG4gICAqL1xuICBjbGVhcihtYXRjaCkge1xuICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5c1tpXS5tYXRjaChtYXRjaCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbWF0Y2hdO1xuICAgIH1cbiAgfSxcbn07XG4iXX0=
