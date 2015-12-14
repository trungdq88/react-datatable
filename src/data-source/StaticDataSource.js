import DataSource from './DataSource.js';
import entityInfo from '../utils/entity-info.js';

/**
 * Data source for entity with existing data
 */
export default class StaticDataSource extends DataSource {

  constructor(name, entity, items) {
    super(name);
    this.items = items;
    this.entity = entity;
    this.extraColums = [];
    this.perpage = 15;
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter) {
    let data = this.items;
    // 1. Filter
    if (filter && Object.keys(filter).length > 0) {
      const filterFunc = item => item[this] === filter[this];
      for (const property in filter) {
        if (property ) {
          data = data.filter(filterFunc.bind(property));
        }
      }
    }
    // 2. Search
    if (search) {
      const searchFields = entityInfo[this.entity].searchFields;
      data = data.filter((item) => {
        for (let i = 0; i < searchFields.length; i++) {
          if (item[searchFields[i]].toLowerCase()
              .indexOf(search.toLowerCase()) > -1) {
            return true;
          }
        }
        return false;
      });
    }
    // Save the total item for pagination
    var _total = data.length;

    // 3. Order
    if (sortProperty && sortOrderDesc !== null) {
      data = data.concat([]).sort((a, b) => (2 * (+sortOrderDesc) - 1) *
      (a[sortProperty] > b[sortProperty] ? 1 : -1));
    }

    // 4. Paging
    const pageItems = data.slice(this.perpage * (page - 1), page * this.perpage);

    // Set data
    this.data = {
      page: page,
      total: _total,
      entities: pageItems,
      perpage: this.perpage,
      search: search,
      sortProperty: sortProperty,
      sortOrderDesc: sortOrderDesc,
    };

    // Emit event
    this.trigger('change');
  }

  setPerpage(perpage) {
    this.perpage = perpage;
  }

  getFields() {
    return entityInfo[this.entity].listFields.concat(this.extraColums);
  }

  setExtraColumns(extraColumns) {
    this.extraColums = extraColumns;
  }
}
