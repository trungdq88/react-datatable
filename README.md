# react-datatable
DataTable component build with ReactJS, supports sort, search, filter, paging, custom cell value and more!

DEMO: http://trungdq88.github.io/react-datatable

**Warning**: Project is under development.

## How it looks like
<img src="screenshot.png"/>
## Usage
Install

    npm install --save @trungdq88/react-datatable

Define a data source:

    this.categoryDataSource = new CategoryDataSource('category-list-select', fakeData.categories);

Create DataTable component:

    var DataTable = require('react-datatable');
    <DataTable id="category-table"
               dataSource={this.categoryDataSource}
               searchable
               sortable />

Not much documentation for now, see examples for more usage.

## Development & Build
Build the demo page:

    npm install
    npm run build

Start dev server for development

    npm start

No tests available yet.

