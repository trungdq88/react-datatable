import React from 'react';
import './style/style.less';
import DataTable from './DataTable';
import StaticDataSource from './data-source/StaticDataSource';
import EntityDataSource from './data-source/EntityDataSource';
import fakeData from './utils/fake-data';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      entries: fakeData.categories
    };

    this.dataSource = new StaticDataSource('category-list-select', 'category', this.state.entries);
    this.reactIssueDataSource = new EntityDataSource('react-issues', 'reactIssue')
  }
  render() {
    return (
      <div className="table">
        <h1 className="text-center">Static data</h1>
        <DataTable id="category-table" dataSource={this.dataSource}/>

        <hr/>

        <h1 className="text-center">Ajax data (React github issues)</h1>
        <DataTable id="react-issue-table" dataSource={this.reactIssueDataSource}/>
      </div>
    )
  }
}