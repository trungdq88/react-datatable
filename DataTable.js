/**
 * Created by dinhquangtrung on 9/28/15.
 */

import React from 'react';
import classNames from 'classnames';
import FriendlyLoader from '../view/FriendlyLoader.js';
import entityInfo from '../../business/entity-info.js';

/**
 * Usage
 * const dataSource = new EntityDataSource('coupon-stores-add', 'store');
 * <DataTable id={'list-facilities-data-table'} dataSource={dataSource}/>
 */
export default class DataTable extends React.Component {

  constructor(...args) {
    super(...args);
    this.PAGES_BEFORE = 3;
    this.PAGES_AFTER = 4;
    this.state = {
      total: 0,
      entities: [],
      doneLoading: false,
      page: 1,
      perpage: 0,
      search: undefined,
      sortProperty: undefined,
      sortOrderDesc: true,
      filter: {},
      failed: false,
    };

    this.dataSource = this.props.dataSource;
    if (this.props.query) {
      this.setFilter(this.props.query);
    }

    this.onDataChange = this._onDataChange.bind(this);
    this.onDataFailed = this._onDataFailed.bind(this);
  }

  componentDidMount() {
    this.dataSource.bind('change', this.onDataChange);
    this.dataSource.bind('failed', this.onDataFailed);
    this.fetch();
  }

  componentWillUnmount() {
    this.dataSource.unbind('change', this.onDataChange);
    this.dataSource.unbind('failed', this.onDataFailed);
  }

  onKeyDown(e) {
    if (e.nativeEvent.keyCode === 13) {
      this.search();
    }
  }

  setFilter(query) {
    this.state.page = query.page;
    this.state.search = query.search;
    this.state.perpage = query.perpage;
    this.state.sortProperty = query.sortProperty;
    this.state.sortOrderDesc = query.sortOrderDesc;
    this.state.filter = query.filter;
  }

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

  isFilterQueryChanged() {
    return !(this.state.page === 1 &&
    this.state.search === undefined &&
    this.state.perpage === 15 &&
    this.state.sortProperty === undefined &&
    this.state.sortOrderDesc === true &&
    Object.keys(this.state.filter).length === 0);
  }

  fetch() {
    this.dataSource.fetch(
      this.state.page,
      this.state.search,
      this.state.sortProperty,
      this.state.sortOrderDesc,
      this.state.filter
    );
  }

  _onDataChange() {
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
    if (this.isFilterQueryChanged()) {
      this.props.onQueryChange && this.props.onQueryChange(this.getFilterQuery());
    }
  }

  _onDataFailed() {
    this.setState({
      failed: true,
    });
  }

  search() {
    // Set to page 1 when trigger search.
    this.state.doneLoading = false;
    this.state.page = 1;
    this.forceUpdate();
    this.fetch();
  }

  sort(sortProperty, sortable) {
    if (sortable) {
      if (this.state.sortProperty === sortProperty) {
        if (this.state.sortOrderDesc === false) this.state.sortOrderDesc = true;
        else if (this.state.sortOrderDesc === true) this.state.sortOrderDesc = null;
        else if (this.state.sortOrderDesc === null) this.state.sortOrderDesc = false;
      } else {
        this.state.sortOrderDesc = false;
      }
      this.state.sortProperty = sortProperty;
      this.state.doneLoading = false;
      this.forceUpdate();
      this.fetch();
    }
  }

  goToPage(pageNum) {
    this.state.page = pageNum;
    this.setState({
      doneLoading: false,
      page: pageNum,
    });
    this.fetch();
  }

  changeSearchKeyword(e) {
    this.setState({
      search: e.target.value,
    });
  }

  filter(property, value) {
    if (property) {
      if (value === undefined) {
        delete this.state.filter[property];
      } else {
        this.state.filter[property] = value;
      }
      this.state.doneLoading = false;
      this.state.page = 1;
      this.forceUpdate();
      this.fetch();
    }
  }

  renderSearchbox() {
    let placeholder = 'Search...';
    if (entityInfo[this.dataSource.entity].searchFields) {
      placeholder = 'Search ' + entityInfo[this.dataSource.entity]
          .searchFields.join(', ').replace(/_/g, ' ') + '...';
    }
    return (
      <div className="input-group search-box">
        <input type="search"
               className="form-control"
               placeholder={placeholder}
               value={this.state.search}
               onChange={this.changeSearchKeyword.bind(this)}
               onKeyPress={this.onKeyDown.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-primary btn-block" onClick={this.search.bind(this)}>
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    );
  }

  renderPaging() {
    const pageElements = [];
    const totalPage = Math.ceil(this.state.total / this.state.perpage);

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

  render() {
    const fields = this.dataSource.getFields();

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
          sortIcon = (this.state.sortOrderDesc ? <i className="fa fa-sort-desc"></i> :
            <i className="fa fa-sort-asc"></i>);
        } else {
          sortIcon = <i className="fa fa-sort"></i>;
        }
      }

      let filterIcon;

      if (propertyFilterable) {
        const filterItems = row[3].getDataAsArray().map((value) => {
          return (
            <li key={'filter-value-' + property + '-' + value.id}>
              <a onClick={this.filter.bind(this, property, value.id)}>
                {this.state.filter[property] === value.id ?
                  <i className="fa fa-dot-circle-o"></i> : <i className="fa fa-circle-o"></i>} {value.label}
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
              <i className="fa fa-filter"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a onClick={this.filter.bind(this, property, undefined)}>
                  <i className="fa fa-times"></i> No filter</a>
              </li>
              <li role="separator" className="divider"></li>
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

    return (
      <div>
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
