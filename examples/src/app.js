import React from 'react';
import DataTable from '@trungdq88/react-datatable';
import CategoryDataSource from './data-source/CategoryDataSource';
import GitHubIssueDataSource from './data-source/GitHubIssueDataSource';
import YoutubeDataSource from './data-source/YoutubeDataSource';
import fakeData from './utils/fake-data';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.categoryDataSource = new CategoryDataSource('category-list-select', fakeData.categories);
    this.reactIssueDataSource = new GitHubIssueDataSource('react-issues');

    const self = this;
    const extraColumns = [
      ['Select', {
        'field': '',
        transform: function t() {
          return (
            <button onClick={self.onRowSelected.bind(self, this)}
                    className="btn btn-primary btn-sm">Select</button>
          );
        },
      }, 'no-sort'],
    ];
    this.youtubeDataSource = new YoutubeDataSource('youtube-videos');
    this.youtubeDataSource.setExtraColumns(extraColumns);
  }

  onRowSelected(row) {
    alert('Clicked: ' + JSON.stringify(row));
    console.log(row);
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

        <hr/>
        <h1 className="text-center">Youtube videos (With extra columns)</h1>

        <DataTable id="react-youtube-videos"
                   dataSource={this.youtubeDataSource}
                   searchable />
      </div>
    )
  }
}