/**
 * Created by dinhquangtrung on 10/2/15.
 */
const MicroEvent = window.MicroEvent;
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
    this.event = {};
    MicroEvent.mixin(this);
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

}
