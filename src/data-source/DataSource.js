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
    this.event = EventEmitter({});
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
    this.event.on.apply(this.event, arguments);
  }

  /**
   * Unbind event
   */
  unbind() {
    this.event.off.apply(this.event, arguments);
  }

  /**
   * Trigger events
   */
  trigger() {
    this.event.emit.apply(this.event, arguments);
  }
}
