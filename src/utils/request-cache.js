/**
 * Created by dinhquangtrung on 9/30/15.
 */
export default {
  data: {},
  get(key) {
    const target = this.data[key];
    // If target not expired yet, or no expired date set
    if (target && (target.expiredDate > +new Date() || !target.expiredDate)) {
      return target.value;
    }
    return undefined;
  },
  /**
   * @key : key
   * @value : value
   * @expiredDate : milisecond
   */
  set(key, value, expiredDate) {
    const target = {
      value: value,
    };
    if (expiredDate) {
      target.expiredDate = expiredDate;
    }
    this.data[key] = target;
    return value;
  },
  /**
   * Clear cache for all matched keys (or exactly the key if `match` is a string)
   */
  clear(match) {
    if (typeof match === 'object') {
      const keys = Object.keys(this.data);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].match(match)) {
          delete this.data[keys[i]];
        }
      }
    } else {
      delete this.data[match];
    }
  },
};
