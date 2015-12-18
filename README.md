# react-datatable
DataTable component build with ReactJS, supports sort, search, filter, paging,
custom cell value and more!

DEMO: http://trungdq88.github.io/react-datatable

## How it looks like
<img src="screenshot.png"/>

## Install

    npm install --save @trungdq88/react-datatable

## Usage

Be patience, it takes few steps to get make a minimum example but it totally worth!

### 1. Define a data source
Say I want to create a Restaurant list to DataTable, I first create a DataSource 
class which tells the DataTable where do I get the data from.

```js
    import { DataSource } from '@trungdq88/react-datatable';
    
    // Don't forget to extends from DataSource
    export default class RestaurantDataSource extends DataSource {

      // This class will be initiate with a unique name and data
      constructor(name, data) {
        super(name);
        this.meta = {
          keyField: 'id',
          searchFields: ['name'],
          listFields: [
            ['Name', 'name'],
            ['Price', 'price'],
          ],
        };

        // Assign data to `items` property
        this.items = data;
      }

      fetch() {
        // For minimum example, we display all items in only 1 page (no pagination)
        this.data = {
          page: 1,
          total: this.items.length,
          entities: this.items,
          perpage: this.items.length,
        };

        // Emit event
        this.trigger('change');
      }
    }
```

### 2. Create a data source object
Create a data source object from RestaurantDataSource class with data

```js
    this.restaurantDataSource = new RestaurantDataSource('restaurants', [
        {name: 'Japanese food'},
        {name: 'Vietnamese food'},
        {name: 'Thai food'},
    ]);
```

### 3. Create DataTable component:
In your `render()` method:
    
```js
    <DataTable id="restaurants-table"
               dataSource={this.restaurantDataSource} />
```

Your data table should be displayed right now.

## Customize the table
`DataSource` is the heart of DataTable. It can be customized a lot to serve various data
types. 

### The `this.meta` property
Each `DataSource` class has a property named `meta` to describes the data, 
it tells the `DataTable` how to display data correctly.

Say, my data is an array of same schema objects:

```js
    [
        {
            id: 'VX129',
            name: 'Vietnamese food',
            price: '$$$$ (<100$)',
            img: 'http://abc.com/some_image.png',
        },
        {
            id: 'VX212',
            name: 'Thai food',
            price: '$$$ (<60$)',
            img: 'http://abc.com/some_image.png',
        }
    ]
```

This is the `meta` object for that data:

```js
        this.meta = {
          keyField: 'id',
          searchFields: ['name'],
          listFields: [
            // Format: [{Heading text}, {Property name}]
            ['Name', 'name'],
            ['Price', 'price'],
          ],
        };
```

DataTable display:

```js
    # | Name                | Price
    1 | Vietnamese food     | $$$$ (<100$)
    2 | Food food           | $$$ (<60$)
```

**Notice**: the data **must be an array**, and all the objects in that array must share 
the **same schema**.

### `listFields` property and transform object

From above example, you might know that the `listFields` property describes how the data
will be display on `DataTable` (which property name displays in which column Header).

In some cases, we need more advanced method to customize the data displayed (for example display an image instead of regular text. That where we use the `transform` object.

```js
          listFields: [
            // Format: [{Heading text}, {Property name}]
            ['Image', {
                // Field to be transformed
                field: 'img',
                // Receive `img` property in the first param
                // Returns {string} or `ReactElement` to be displayed
                transform: function (img) {
                    return <img src={img} />;
                }
            }],
            ['Name', 'name'],
            ['Price', 'price'],
          ],
```

The `transform` function also receive the context (`this` variable) of the parent data
object, that means you can reference to other property inside that transform object.
In the example bellow, I added a link (using `id` property) to "Name" column:

```js
          listFields: [
            ['Image', {
                field: 'img',
                transform: function (img) {
                    return <img src={img} />;
                }
            }],
            ['Name', {
                field: 'name',
                transform: function (name) {
                    return <a href={'http://example.com/restaurant/detail/' + this.id}>{name}</a>;
                }
            }],
          ],
```

### The `this.fetch` method.
As you can see in `RestaurantDataSource`, the fetch method only assign data to `this.data` and trigger `change` event. In fact, the `fetch` methods accept various parameters. See this in the `DataSource` class source code.

```js
      /**
       * Start to fetch data (via API or whatever)
       * Please implement this method to get data from any API endpoint
       * or from a static array. This method should assign the `this.data`
       * variable in the right schema which later will be get from `this.get()`
       * method.
       * 
       * Don't forget to call `this.trigger('change')` when the data is loaded
       * 
       * @page {number} requested page number
       * @search {string} keyword entered in search box
       * @sortProperty {string} property of the column that need to be sorted
       * @sortOrderDesc {boolean} equals `true` if sort in Desc order, `false` = Asc
       * @perpage {number} number of items to displayed in one page
       */
      fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
        console.error('Not implemented!');
      }
```

So basically, you can create a data source that get data every where. Check this example 
on get data from Github issue API

```js
      fetch(page, search, sortProperty, sortOrderDesc, filter, perpage) {
        const apiEndPoint = 'https://api.github.com/repos/facebook/react/issues';

        // Build URL
        // 1. Pagination
        let query = '&page=' + page;
        if (perpage) query += '&per_page=' + perpage;
        
        // 2. Search
        // Sad, GitHub API does not provide search
        // if (search) query += '&query=' + search; 
        
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

        // Send ajax request to URL
        api.get(apiEndPoint + '?' + query)
          .done((response) => {
            // Set data
            this.data = {
              page: page,
              total: undefined, 
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
```

More example on how to use `DataSource` please see in `examples/src`

### Search

Searchable fields is setted in `meta` object with `searchFields {array({string}))` 
property.

```js
        this.meta = {
          keyField: 'id',
          // Array of property name that will be used for search
          searchFields: ['name'],
          listFields: [
            ...
          ]
```

In order to display a search box to the top of the table, add `searchable` property to
`<DataTable>` element.

```js
    <DataTable id="restaurants-table"
               dataSource={this.restaurantDataSource} 
               searchable />
```

When user click search button, the `fetch` method will be called with `search` parameter contains the keyword entered in the search box.

### Sort

By default, all the property is sortable. If `<DataTable>` has `sortable` property, it
will display a sort icon right next to the column header, clicking to the sort icon will
trigger the `fetch` method with `sortProperty` and `sortOrderDesc` param.

```js
    <DataTable id="restaurants-table"
               dataSource={this.restaurantDataSource} 
               searchable
               sortable />
```

If you want to disable sorting for a speficic column, add a 'no-sort' string to the 3-rd 
element in `listFields` item:

```js
            ['Image', {
                field: 'img',
                transform: function (img) {
                    return <img src={img} />;
                },
            }, 'no-sort'],
```

You can use `true` instead of `no-sort` string, as long as the value is not `undefined`.

```js
    if (listField[2] === undefined) {
        // Display sort icon
    } else {
        // Hide sort icon
    }
```

### Filter

You can define the filter value for a specific column by adding a 4-th element in `listFields` item:

```js
      listFields: [
        ['Image', {
            field: 'img',
            transform: function (img) {
                return <img src={img} />;
            }
        }],
        ['Name', {
            field: 'name',
            transform: function (name) {
                return <a href={'http://example.com/restaurant/detail/' + this.id}>{name}</a>;
            }
        }],
        ['Price', 'price', undefined, [
          {id: '$$ (<$30)', label: '$$ (<$30)'},
          {id: '$$$ (<$60)', label: '$$$ (<$60)'},
          {id: '$$$$ (<$100)', label: '$$$$ (<$100)'},
          {id: '$$$$$ (>$100)', label: '$$$$$ (>$100)'},
        ]]
      ]
```

Filter setting is an array of objects, which must follow this schema:

```js
    {
        id: '',     // Id value of the filter
        label: '',  // Label to display in DataTable
    }
```

**Handle filter in `fetch` method**: fetch method will receive a `filter` object

```js
    {
        propertyName1: propertyValue1,
        propertyName2: propertyValue2,
        ...
    }
```

See an example on filtering data in `fetch` method:

```js
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
      ...
```

### Extra columns

In some cases, you might want to add extra columns, for example add a "Edit", "Remove" 
button to the last column. Create a `extraColumns` array to describe the column you 
want to add and then call `dataSource.setExtraColumns` to add the column.

```js
    this.restaurantDataSource = new RestaurantDataSource(
        'restaurant', fakeData.restaurants);
    
    const onOrderRestaurant = (restaurant) => {
        alert('Order placed for ' + restaurant.name);
    }
    
    const extraColumns = [
      ['Action', {
        'field': '',
        transform: function () {
          return (
            <button onClick={onOrderRestaurant.bind(self, this)}
                    className="btn btn-primary btn-sm">Order this restaurant</button>
          );
        },
      }, 'no-sort'],
    ];
    this.restaurantDataSource.setExtraColumns(extraColumns);
```

Basically, `DataSource` will concat the `extraColumns` with `listFields` and return 
to DataTable, therefore all the rules applied for `listFields` is the same with 
`extraColumns`.

## Development & Build
Build the demo page:

    npm install
    npm run build

Start dev server for development

    npm start

No tests available yet.

