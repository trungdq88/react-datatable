import React from 'react';
import {DataSource} from '@trungdq88/react-datatable';
import api from '../utils/api.js';

/**
 * Data source from entity APIs
 */
export default class GitHubIssueDataSource extends DataSource {
  constructor(name) {
    super(name);
    this.meta = {
      keyField: 'id',
      searchFields: ['title'],
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
                <span key={label.name} className="label-wrapper">
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
    this.entity = this.meta;
    this.disableCache = false;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
    const apiEndPoint = 'https://api.github.com/repos/facebook/react/issues';

    // Build query
    // 1. Pagination
    let query = '&page=' + page;
    if (perpage) query += '&per_page=' + perpage;
    // 2. Search
    // if (search) query += '&query=' + search; // Sad, GitHub API does not provide search
    // 3. Sort
    if (sortProperty && sortOrderDesc !== null) {
      query += '&sort=' + sortProperty +
        '&direction=' + (sortOrderDesc ? 'desc' : 'asc');
    }
    // 4. Filter // Sad, GitHub API does not provide filter
    //if (filter && Object.keys(filter).length > 0) {
    //  query += Object.keys(filter).map((property) => {
    //    return '&' + property + '=' + filter[property];
    //  });
    //}
    // 5. Extra params
    if (Object.keys(this.extraParams).length) {
      query += '&' + Object.keys(this.extraParams).map((key) =>
        key + '=' + this.extraParams[key]).join('&');
    }

    api.get(apiEndPoint + '?' + query, {}, this.disableCache)
      .done((response) => {
        // Set data
        this.data = {
          page: page,
          total: undefined, // Sad, GitHub does not provide this information
          entities: response,
          perpage: perpage || this.DEFAULT_PER_PAGE,
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
