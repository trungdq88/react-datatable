/**
 * Created by dinhquangtrung on 10/1/15.
 */
import React from 'react';

export default {

  /**
   * Name this key after entity name
   */
  category: {
    /**
     * Friendly name for this entity
     */
    label: 'Category',
    /**
     * API End point
     */
    apiEndPoint: 'category',
    /**
     * API end point for export feature
     */
    exportEndPoint: '',
    /**
     * Which property in API response contains the array of entity?
     */
    apiProperty: 'categories',
    /**
     * List of field that will be used in search
     */
    searchFields: ['name'],
    /**
     * Which property in API response contains the number of entities?
     */
    apiCountProperty: 'num_items',
    /**
     * Which property is unique between entities?
     */
    keyField: 'id',
    /**
     * Which property is a short string that can we can show
     * to user to identify entities?
     */
    valueField: 'name',
    /**
     * Fields that display in data table
     */
    listFields: [
    /**
     * ['Label', 'propertyNameOrTransformObject', noSort: Boolean, filterArrayValue]
     */
      ['Name', 'name'],
    ],
  },
};
