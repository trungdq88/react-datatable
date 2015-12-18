import EventEmitter from 'event-emitter';
/**
 * Created by dinhquangtrung on 10/2/15.
 *
 * Abstract class
 * Contains:
 * - Data source for DataTable (API or existing array of elements)
 * - Field schema to display on DataTable
 */
export default class DataSource {

  /**
   * Each data source should have a unique name to make the debug
   * process easier
   */
  constructor(name) {
    // Constants
    this.DEFAULT_PER_PAGE = 10;

    // Private variables
    this._event = EventEmitter({});

    // Public variables
    this.meta = undefined;
    this.name = name;
    this.data = [];
    this.extraColums = [];
  }

  /**
   * Start to fetch data (via API or whatever)
   * Please implement this method to get data from any API endpoint
   * or from a static array. This method should assign the `this.data`
   * variable in the right schema which later will be get from `this.get()`
   * method.
   */
  fetch() {
    console.error('Not implemented!');
  }

  /**
   * Return fields from schema to display on DataTable concat
   * with extraColumns if any.
   * Read documentation for list fields schema.
   * (extraColumns also follow the list fields schema)
   */
  getFields() {
    return this.meta.listFields.concat(this.extraColums);
  }

  /**
   * Get current fetched data
   * `this.data` should returns an object with following properties:
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

  setExtraColumns(extraColumns) {
    this.extraColums = extraColumns;
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
