import React from 'react';
import './style/style.less';
import DataTable from './lib/DataTable';
import CategoryDataSource from './data-source/CategoryDataSource';
import GitHubIssueDataSource from './data-source/GitHubIssueDataSource';
import fakeData from './utils/fake-data';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.categoryDataSource = new CategoryDataSource('category-list-select', fakeData.categories);
    this.reactIssueDataSource = new GitHubIssueDataSource('react-issues')
  }
  render() {
    return (
      <div className="table">
        <h1 className="text-center">Static data</h1>
        <DataTable id="category-table"
                   dataSource={this.categoryDataSource}
                   searchable
                   sortable />

        <hr/>

        <h1 className="text-center">Ajax data (React GitHub issues)</h1>
        {/*
        TODO: add adapter to integrate with GitHub API
        */}
        <DataTable id="react-issue-table"
                   dataSource={this.reactIssueDataSource}
                   sortable />
      </div>
    )
  }
}