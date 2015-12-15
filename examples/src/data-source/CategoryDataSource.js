import {DataSource} from 'react-datatable';

/**
 * Data source for entity with existing data
 */
export default class StaticDataSource extends DataSource {

  constructor(name, items) {
    super(name);
    this.meta = {
      label: 'Category',
      apiEndPoint: 'category',
      exportEndPoint: '',
      apiProperty: 'categories',
      searchFields: ['name'],
      apiCountProperty: 'num_items',
      keyField: 'id',
      valueField: 'name',
      listFields: [
        ['Name', 'name'],
      ],
    };

    this.items = items;
    this.entity = this.meta;
    this.extraColums = [];
  }

  fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
    let data = this.items;
    // 1. Filter
    if (filter && Object.keys(filter).length > 0) {
      const filterFunc = item => item[this] === filter[this];
      for (const property in filter) {
        if (property) {
          data = data.filter(filterFunc.bind(property));
        }
      }
    }
    // 2. Search
    if (search) {
      const searchFields = this.entity.searchFields;
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
    perpage = perpage || this.DEFAULT_PER_PAGE;
    const pageItems = data.slice(perpage * (page - 1), page * perpage);

    // Set data
    this.data = {
      page: page,
      total: _total,
      entities: pageItems,
      perpage: perpage,
      search: search,
      sortProperty: sortProperty,
      sortOrderDesc: sortOrderDesc,
    };

    // Emit event
    this.trigger('change');
  }
}
