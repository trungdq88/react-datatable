/**
 * Created by dinhquangtrung on 9/28/15.
 */

import React from 'react';
import classNames from 'classnames';
import FriendlyLoader from './FriendlyLoader.js';
import DataSource from './DataSource';

/**
 * Available properties:
 * - id: HTML id attribute for <table> element
 * - perpage: Number of item to display perpage
 * - dataSource: DataSource object to provide data
 * - query: default query which contains filter settings. This is used for friendly-url 
 *   when attach a DataTable to a page. See documentation for detail.
 * - onQueryChange(query): callback to receive filter settings when it changes.
 * - sortable: boolean: allow columns to be sortable or not. Sortable fields are defined
 *   in DataSource object
 * - searchable: boolean: add a searchbox at top of table. Search fields are defined in
 *   DataSource object
 */
class DataTable extends React.Component {
  constructor(...args) {
    super(...args);

    // Default values
    this.DEFAULT_PER_PAGE = 10;
    this.PAGES_BEFORE = 3;
    this.PAGES_AFTER = 4;

    // Default state
    this.state = {
      total: 0,
      entities: [],
      doneLoading: false,
      page: 1,
      perpage: this.props.perpage || this.DEFAULT_PER_PAGE,
      search: undefined,
      sortProperty: undefined,
      sortOrderDesc: true,
      filter: {},
      failed: false,
    };

    // Set data source
    this.dataSource = this.props.dataSource;

    // If query object is provided, load filter settings from query
    if (this.props.query) {
      this.setFilter(this.props.query);
    }

    // References to helper
    this.onDataChange = this._onDataChange.bind(this);
    this.onDataFailed = this._onDataFailed.bind(this);
  }

  /**
   * Bind event from data source when component is mounted
   */
  componentDidMount() {
    this.dataSource.bind('change', this.onDataChange);
    this.dataSource.bind('failed', this.onDataFailed);
    this.fetch();
  }

  /**
   * Unbind event when component is going to be unmounted
   */
  componentWillUnmount() {
    this.dataSource.unbind('change', this.onDataChange);
    this.dataSource.unbind('failed', this.onDataFailed);
  }

  /**
   * Handle Enter key from search box
   */
  onSearchBoxKeydown(e) {
    if (e.nativeEvent.keyCode === 13) {
      this.search();
    }
  }

  /**
   * Set filter from query object
   */
  setFilter(query) {
    this.state.page = query.page;
    this.state.search = query.search;
    this.state.perpage = query.perpage;
    this.state.sortProperty = query.sortProperty;
    this.state.sortOrderDesc = query.sortOrderDesc;
    this.state.filter = query.filter;
  }

  /**
   * Retrieve query object from current filter settings
   */
  getFilterQuery() {
    return {
      page: this.state.page,
      search: this.state.search,
      perpage: this.state.perpage,
      sortProperty: this.state.sortProperty,
      sortOrderDesc: this.state.sortOrderDesc,
      filter: this.state.filter,
    };
  }

  /**
   * Return true if current filter settings is not changed
   */
  isFilterQueryChanged() {
    return !(this.state.page === 1 &&
    this.state.search === undefined &&
    this.state.perpage === this.DEFAULT_PER_PAGE &&
    this.state.sortProperty === undefined &&
    this.state.sortOrderDesc === true &&
    Object.keys(this.state.filter).length === 0);
  }

  /**
   * Send fetching request to get data from data source
   */
  fetch() {
    this.dataSource.fetch(
      this.state.page,
      this.state.search,
      this.state.sortProperty,
      this.state.sortOrderDesc,
      this.state.filter,
      this.state.perpage
    );
  }

  /**
   * Handle data from data source changed
   */
  _onDataChange() {
    // Get data from data sources
    const data = this.dataSource.get();
    this.state.total = data.total;
    this.state.entities = data.entities;
    this.state.page = data.page;
    this.state.perpage = data.perpage;
    this.state.search = data.search;
    this.state.sortProperty = data.sortProperty;
    this.state.sortOrderDesc = data.sortOrderDesc;
    this.setState({
      doneLoading: true,
    });

    // Dispatch event if query changed
    if (this.isFilterQueryChanged()) {
      this.props.onQueryChange && this.props.onQueryChange(this.getFilterQuery());
    }
  }

  /**
   * Handle data failed
   */
  _onDataFailed() {
    this.setState({
      failed: true,
    });
  }

  /**
   * Send search request.
   * Return to page 1 when search
   */
  search() {
    // Set to page 1 when trigger search.
    this.state.doneLoading = false;
    this.state.page = 1;
    this.forceUpdate();
    this.fetch();
  }

  /**
   * 
   * @sortProperty {string}: property name to be sort 
   * @sortable {boolean}: identify if the property should be sorted
   */
  sort(sortProperty, sortable) {
    if (sortable) {
      // Do the 3-state switching: asc/desc/none
      if (this.state.sortProperty === sortProperty) {
        if (this.state.sortOrderDesc === false) this.state.sortOrderDesc = true;
        else if (this.state.sortOrderDesc === true) this.state.sortOrderDesc = null;
        else if (this.state.sortOrderDesc === null) this.state.sortOrderDesc = false;
      } else {
        this.state.sortOrderDesc = false;
      }

      // Send sort request
      this.state.sortProperty = sortProperty;
      this.state.doneLoading = false;
      this.forceUpdate();
      this.fetch();
    }
  }

  /**
   * Load new page
   */
  goToPage(pageNum) {
    this.state.page = pageNum;
    this.setState({
      doneLoading: false,
      page: pageNum,
    });
    this.fetch();
  }

  /**
   * Handle search keyword change
   */
  onSearchKeywordChanged(e) {
    this.setState({
      search: e.target.value,
    });
  }

  /**
   * Filter results
   *
   * @property {string}: property name used for filter
   * @value {string}: value of the property that should only be shown
   */
  filter(property, value) {
    if (property) {
      // Construct the `filter` object
      if (value === undefined) {
        delete this.state.filter[property];
      } else {
        this.state.filter[property] = value;
      }

      // Send filter request
      this.state.doneLoading = false;
      this.state.page = 1;
      this.forceUpdate();
      this.fetch();
    }
  }

  /**
   * Render search box
   */
  renderSearchbox() {
    let placeholder = 'Search...';
    if (this.dataSource.entity.searchFields) {
      placeholder = 'Search ' + this.dataSource.entity
          .searchFields.join(', ').replace(/_/g, ' ') + '...';
    }
    return (
      <div className="input-group search-box">
        <input type="search"
               className="form-control"
               placeholder={placeholder}
               value={this.state.search}
               onChange={this.onSearchKeywordChanged.bind(this)}
               onKeyPress={this.onSearchBoxKeydown.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-primary btn-block" onClick={this.search.bind(this)}>
            <i className="fa fa-search"/>
          </button>
        </span>
      </div>
    );
  }

  /**
   * Render pagination
   */
  renderPaging() {
    const pageElements = [];

    // If the data source has no information about total page, we always display
    // one more extra page
    const totalPage = this.state.total !== undefined ?
      Math.ceil(this.state.total / this.state.perpage) : this.state.page + 1;

    // Only show pages when total page is > 1
    if (totalPage <= 1) return '';

    if (this.state.page > this.PAGES_BEFORE + 1) {
      pageElements.push(
        <li key={'pageLink0'}>
          <a onClick={this.goToPage.bind(this, 1)}>
            First
          </a>
        </li>
      );
    }
    // Loop through 3 pages before current page to 3 pages after current page
    for (let i = this.state.page - this.PAGES_BEFORE;
         i < this.state.page + this.PAGES_AFTER; i++) {
      // Dont show invalid case (ex: i = -1, or i > totalPage caused by the loop range)
      if (i >= 1 && i <= totalPage) {
        if (i === this.state.page) {
          pageElements.push(
            <li key={'pageLink' + i} className="active"><a>{i}</a></li>
          );
        } else {
          pageElements.push(
            <li key={'pageLink' + i}><a onClick={this.goToPage.bind(this, i)}>{i}</a></li>
          );
        }
      }
    }

    if (this.state.page < totalPage - this.PAGES_AFTER + 1) {
      pageElements.push(
        <li key={'pageLink' + totalPage}>
          <a onClick={this.goToPage.bind(this, totalPage)}>
            Last
          </a>
        </li>
      );
    }
    return (
      <nav className="text-right">
        <ul className="pagination">
          {pageElements}
        </ul>
      </nav>
    );
  }

  /**
   * Main render method.
   * @returns {XML}
   */
  render() {
    // Get all fields to be displayed from data source
    const fields = this.dataSource.getFields();

    // Generate all items as rows
    const items = this.state.entities.map((entity, rowIndex) => {
      const values = fields.map((row, cellIndex) => {
        const propertyObject = row[1]; // either a string or transform object
        let value;
        if (typeof propertyObject === 'string') {
          value = entity[propertyObject];
        } else if (typeof propertyObject === 'object') {
          value = propertyObject.transform
            .bind(entity)(entity[propertyObject.field]);
        }
        return (
          <td key={this.dataSource.name + '_' + rowIndex + '_' + cellIndex}>
            {value}
          </td>
        );
      });

      return (
        <tr key={this.dataSource.name + rowIndex}>
          <td>{(this.state.page - 1) * this.state.perpage + rowIndex + 1}</td>
          {values}
        </tr>
      );
    });

    // Generate header row, including sort, filter button if needed
    const headings = fields.map((row, index) => {
      const heading = row[0];
      const property = typeof row[1] === 'string' ? row[1] : row[1].field;
      const propertySortable = row[2] === undefined;
      const propertyFilterable = row[3] !== undefined;

      // Show sort icon if the list is defined as sortable and current field is sortable
      const sortable = this.props.sortable && propertySortable;
      let sortIcon;
      if (sortable) {
        if (this.state.sortProperty === property && this.state.sortOrderDesc !== null) {
          sortIcon = (this.state.sortOrderDesc ? <i className="fa fa-sort-desc"/> :
            <i className="fa fa-sort-asc"/>);
        } else {
          sortIcon = <i className="fa fa-sort"/>;
        }
      }

      // Render filter icons
      let filterIcon;
      if (propertyFilterable) {
        const filterItems = row[3].map((value) => {
          return (
            <li key={'filter-value-' + property + '-' + value.id}>
              <a onClick={this.filter.bind(this, property, value.id)}>
                {this.state.filter[property] === value.id ?
                  <i className="fa fa-dot-circle-o"/> : <i className="fa fa-circle-o"/>} {value.label}
              </a>
            </li>
          );
        });
        filterIcon = (
          <div className="btn-group">
            <button type="button"
                    className={'btn btn-xs dropdown-toggle '
                    + (this.state.filter[property] === undefined ?
                    'btn-default' : 'btn-success')}
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-filter"/>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a onClick={this.filter.bind(this, property, undefined)}>
                  <i className="fa fa-times"/> No filter</a>
              </li>
              <li role="separator" className="divider"/>
              {filterItems}
            </ul>
          </div>
        );
      }

      return (
        <th key={this.dataSource.name + 'th' + index}
            className={'has-filter-' + (propertyFilterable ? 'true' : '')}>
          <span className="pull-right">
            {filterIcon}
          </span>
          <span className="sort-icon" onClick={this.sort.bind(this, property, sortable)}>
            {heading} {sortIcon}
          </span>
        </th>
      );
    });

    // Build the table and return to `render` method
    return (
      <div className="react-datatable">
        <div className="row">
          <div className="col-sm-8">

          </div>
          <div className="col-sm-4">
            {this.props.searchable ? this.renderSearchbox() : ''}

          </div>
        </div>
        <table className={classNames('table table-bordered table-striped',
         {sortable: this.props.sortable})} id={this.props.id}>
          <thead>
          <tr>
            <th>#</th>
            {headings}
          </tr>
          </thead>
          <tbody>
          {this.state.entities.length > 0 ? items :
            <tr>
              <td className="text-center"
                  colSpan={headings.length + 1}>
                {this.state.doneLoading ? 'This list is empty' : ''}
              </td>
            </tr>}
          </tbody>
        </table>

        <div className={classNames('overlay-all', {'hide': this.state.doneLoading})}>
          <FriendlyLoader key={'loader-' + this.state.failed} failed={this.state.failed}/>
        </div>

        {this.renderPaging()}
      </div>
    );
  }
}

// Property types
DataTable.propTypes = {
    id: React.PropTypes.string.isRequired,
    dataSource: React.PropTypes.object.isRequired,
    perpage: React.PropTypes.number,
    query: React.PropTypes.string,
    onQueryChange: React.PropTypes.func,
    sortable: React.PropTypes.bool,
    searchable: React.PropTypes.bool
};

DataTable.DataSource = DataSource;
export default DataTable;
