import React from 'react';
import DataSource from './DataSource.js';
import api from '../utils/api.js';

/**
 * Data source from entity APIs
 */
export default class GitHubIssueDataSource extends DataSource {

  meta = {
    label: 'Github issue',
    apiEndPoint: 'https://api.github.com/repos/facebook/react/issues',
    keyField: 'id',
    apiProperty: undefined, // The object itself is an array
    searchFields: ['title'],
    apiCountProperty: undefined, // Sadly GitHub api does not provide this
    valueField: 'id',
    listFields: [
      ['Title', {
        field: 'title',
        transform: function t(value) {
          return <a target="_blank" href={this.url}>{value}</a>;
        }
      }],
      ['Labels', {
        field: 'labels',
        transform: function t(value) {
          return value.map(label => {
            return (
              <span className="label-wrapper">
                <span className="label" style={{backgroundColor: label.color}}>{label.name}</span>
                {' '}
              </span>
            )
          })
        }
      }],
      ['Comments', 'comments'],
      ['Created at', {
        field: 'created_at',
        transform: function t(value) {
          return new Date(value).toLocaleString();
        }
      }],
    ]
  };

  constructor(name) {
    super(name);
    this.entity = this.meta;
    this.disableCache = false;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
    const {apiEndPoint} = this.entity;

    // Build query
    // 1. Pagination
    let query = '&page=' + page;
    if (perpage) query += '&per_page=' + perpage;
    // 2. Search
    if (search) query += '&query=' + search;
    // 3. Sort
    if (sortProperty && sortOrderDesc !== null) {
      query += '&sort=' + sortProperty +
        '&direction=' + (sortOrderDesc ? 'desc' : 'asc');
    }
    // 4. Filter
    if (filter && Object.keys(filter).length > 0) {
      query += Object.keys(filter).map((property) => {
        return '&' + property + '=' + filter[property];
      });
    }
    // 5. Extra params
    if (Object.keys(this.extraParams).length) {
      query += '&' + Object.keys(this.extraParams).map((key) =>
        key + '=' + this.extraParams[key]).join('&');
    }

    api.get(apiEndPoint + '?' + query, {}, this.disableCache)
      .done((response) => {
        const listProperty = this.entity.apiProperty;
        const countProperty = this.entity.apiCountProperty || 'count';
        const entities = listProperty ? response[listProperty] : response;
        const count = countProperty ? response[countProperty] : undefined;
        // Set data
        this.data = {
          page: page,
          total: count,
          entities: entities,
          perpage: perpage || (count === undefined ? entities.length : this.DEFAULT_PER_PAGE),
          search: search,
          sortProperty: sortProperty,
          sortOrderDesc: sortOrderDesc,
        };

        // Emit event
        this.trigger('change');
      }).fail(() => {
      this.trigger('failed');
    });
  }
}
