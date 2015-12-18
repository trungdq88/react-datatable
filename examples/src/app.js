import React from 'react';
import DataTable from '@trungdq88/react-datatable';
import RestaurantDataSource from './data-source/RestaurantDataSource';
import GitHubIssueDataSource from './data-source/GitHubIssueDataSource';
import YoutubeDataSource from './data-source/YoutubeDataSource';
import fakeData from './utils/fake-data';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    // Restaurant example
    this.restaurantDataSource = new RestaurantDataSource('restaurant-list-select', fakeData.restaurants);
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

    // Github issue example
    this.reactIssueDataSource = new GitHubIssueDataSource('react-issues');

    const self = this;
    const extraColumns2 = [
      ['Select', {
        'field': '',
        transform: function () {
          return (
            <button onClick={self.onRowSelected.bind(self, this)}
                    className="btn btn-primary btn-sm">Select</button>
          );
        },
      }, 'no-sort'],
    ];

    // Youtube example
    this.youtubeDataSource = new YoutubeDataSource('youtube-videos');
    this.youtubeDataSource.setExtraColumns(extraColumns2);
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
                   perpage={5}
                   dataSource={this.restaurantDataSource}
                   searchable
                   sortable />

        <hr/>

        <h1 className="text-center">Github issues of ReactJS (Ajax data)</h1>
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
