import React from 'react';
import {DataSource} from '@trungdq88/react-datatable';

/**
 * Data source for entity with existing data
 */
export default class RestaurantDataSource extends DataSource {

  constructor(name, items) {
    super(name);
    this.meta = {
      keyField: 'id',
      searchFields: ['name'],
      listFields: [
        ['Logo', {
          field: 'logo',
          transform: function t(value) {
            return <img key={value} height="100" className="img-preview" src={value}/>;
          },
        }, 'no-sort'],
        ['Name', {
          field: 'name',
          transform: function t(value) {
            return <a href={'#/entity/detail/dine/' + this.id}>{value}</a>;
          },
        }],
        ['Price', 'price', undefined, [
          {id: '$$ (<$30)', label: '$$ (<$30)'},
          {id: '$$$ (<$60)', label: '$$$ (<$60)'},
          {id: '$$$$ (<$100)', label: '$$$$ (<$100)'},
          {id: '$$$$$ (>$100)', label: '$$$$$ (>$100)'},
        ]],
        ['Rates', 'num_rating'],
        ['Created at', {
          field: 'created_at',
          transform: function t(value) {
            return (new Date(value)).toUTCString();
          },
        }],
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
      const filterFunc = function (item) {
        return item[this] === filter[this]
      };
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
