import React from 'react';
import DataTable from './DataTable';
import StaticDataSource from './data-source/StaticDataSource';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      entries: []
    };

    this.dataSource = new StaticDataSource('category-list-select', 'category', this.state.entries);
  }
  render() {
    return (
      <div>
        <DataTable id="category-table" dataSource={this.dataSource}/>
      </div>
    )
  }
}