import React from 'react';
import './style/style.less';
import DataTable from './DataTable';
import StaticDataSource from './data-source/StaticDataSource';
import GitHubIssueDataSource from './data-source/GitHubIssueDataSource';
import fakeData from './utils/fake-data';
import entityInfo from './utils/entity-info';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      entries: fakeData.categories
    };

    this.dataSource = new StaticDataSource('category-list-select',
      entityInfo['category'], this.state.entries);
    this.reactIssueDataSource = new GitHubIssueDataSource('react-issues')
  }
  render() {
    return (
      <div className="table">
        <h1 className="text-center">Static data</h1>
        <DataTable id="category-table"
                   dataSource={this.dataSource}
                   searchable
                   sortable />

        <hr/>

        <h1 className="text-center">Ajax data (React github issues)</h1>
        {/*
        TODO: add adapter to integrate with GitHub API
        */}
        <DataTable id="react-issue-table"
                   dataSource={this.reactIssueDataSource}
                   sortable
                   searchtable />
      </div>
    )
  }
}