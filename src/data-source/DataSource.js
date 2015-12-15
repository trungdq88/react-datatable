import EventEmitter from 'event-emitter';
/**
 * Created by dinhquangtrung on 10/2/15.
 */
/**
 * Abstract class
 * Contains:
 * - Data source for DataTable (API or existing array of elements)
 * - List of fields to display on DataTable
 */
export default class DataSource {
  constructor(name) {
    this.name = name;
    this.data = [];
    this._event = EventEmitter({});
    this.extraParams = {};
    this.extraColums = [];
  }

  /**
   * Start to fetch data (via API or whatever)
   */
  fetch() {
    console.error('Not implemented!');
  }

  /**
   * Return fields schema to display on DataTable
   */
  getFields() {
    console.error('Not implemented!');
  }
  /**
   * Asynchronously get current fetched data
   * Should return:
   * - total: total entity number
   * - page: current page
   * - entities: entities for current page
   * - perpage: number of results per page
   * - search: search keyword
   * - sortProperty: sort property, undefined if no sort
   * - sortOrderDesc: true of sort in descending order, false if ascending
   */
  get() {
    return this.data;
  }

  /**
   * Bind event for data source
   */
  bind() {
    this._event.on.apply(this._event, arguments);
  }

  /**
   * Unbind event
   */
  unbind() {
    this._event.off.apply(this._event, arguments);
  }

  /**
   * Trigger events
   */
  trigger() {
    this._event.emit.apply(this._event, arguments);
  }
}
