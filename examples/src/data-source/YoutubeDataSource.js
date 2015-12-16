import React from 'react';
import {DataSource} from '@trungdq88/react-datatable';
import api from '../utils/api.js';

/**
 * Data source from entity APIs
 */
export default class YoutubeDataSource extends DataSource {
  constructor(name) {
    super(name);
    this.KEY = 'AIzaSyDX0BykDy8PEIQGsFjdSVAF4gDQVNwrztI';
    this.meta = {
      keyField: 'pageid',
      searchFields: ['title'],
      listFields: [
        ['Image', {
          field: 'snippet',
          transform: function (snippet) {
            return <img key={snippet.thumbnails.default.url} src={snippet.thumbnails.default.url} />;
          }
        }],
        ['Title', {
          field: 'snippet',
          transform: function (snippet) {
            return <a target="_blank" href={'https://www.youtube.com/watch?v=' + this.id.videoId}>{snippet.title}</a>
          }
        }],
        ['Description', {
          field: 'snippet',
          transform: function (snippet) {
            return snippet.description;
          }
        }],
      ]
    };
    this.entity = this.meta;
    this.disableCache = false;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
    const apiEndPoint = 'https://www.googleapis.com/youtube/v3/search?' +
      'type=video&part=snippet&key=' + this.KEY;
    let query = "";
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

    api.get(apiEndPoint + query, {})
      .done((response) => {
        const results = response.items;
        // Set data
        this.data = {
          page: page,
          total: 1, // TODO: react-datatable does not work well with cursor based pagination. Need improve this.
          entities: results,
          perpage: response.pageInfo.resultsPerPage,
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
