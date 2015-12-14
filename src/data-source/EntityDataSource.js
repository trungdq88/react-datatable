import DataSource from './DataSource.js';
import api from '../utils/api.js';
import entityInfo from '../utils/entity-info.js';

/**
 * Data source from entity APIs
 */
export default class EntityDataSource extends DataSource {

  constructor(name, entity) {
    super(name);
    this.entity = entity;
    this.extraColums = [];
    this.extraParams = {};
    this.disableCache = false;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter) {
    const {apiEndPoint} = entityInfo[this.entity];

    // Build query
    // 1. Pagination
    let query = '&page=' + page;
    // 2. Search
    if (search) query += '&query=' + search;
    // 3. Sort
    if (sortProperty && sortOrderDesc !== null) {
      query += '&order_by=' + sortProperty +
        '&order_type=' + (sortOrderDesc ? 'desc' : 'asc');
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
        const listProperty = entityInfo[this.entity].apiProperty;
        const countProperty = entityInfo[this.entity].apiCountProperty || 'count';
        const entities = listProperty ? response[listProperty] : response;
        const count = countProperty ? response[countProperty] : 0;
        // Set data
        this.data = {
          page: page,
          total: count,
          entities: entities,
          perpage: 15,
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

  getFields() {
    return entityInfo[this.entity].listFields.concat(this.extraColums);
  }

  setExtraColumns(extraColumns) {
    this.extraColums = extraColumns;
  }

  /**
   * Received extra param objects {key: String, value: String}
   * These params will be append to API call.
   * @param params
   */
  setExtraParams(params) {
    this.extraParams = params;
  }
}
