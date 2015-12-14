import React from 'react';
import './style/style.less';
import DataTable from './DataTable';
import StaticDataSource from './data-source/StaticDataSource';
import fakeData from './utils/fake-data';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      entries: fakeData.categories
    };

    this.dataSource = new StaticDataSource('category-list-select', 'category', this.state.entries);
  }
  render() {
    return (
      <div className="table">
        <DataTable id="category-table" dataSource={this.dataSource}/>
      </div>
    )
  }
}