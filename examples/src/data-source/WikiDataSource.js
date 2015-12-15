import React from 'react';
import {DataSource} from 'react-datatable';
import api from '../utils/api.js';

/**
 * Data source from entity APIs
 */
export default class WikiDataSource extends DataSource {
  constructor(name) {
    super(name);
    this.meta = {
      keyField: 'pageid',
      searchFields: ['title'],
      listFields: [
        ['Title', 'title'],
      ]
    };
    this.entity = this.meta;
    this.disableCache = false;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
    const apiEndPoint = 'https://en.wikipedia.org/w/api.php?action=query&generator=allpages&prop=info';
    let query = "";
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

    api.get(apiEndPoint + '?' + query, {})
      .done((response) => {
        results = Object.keys(response.query.pages).map(key => response.query.pages[key]);
        // Set data
        this.data = {
          page: page,
          total: undefined,
          entities: results,
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
