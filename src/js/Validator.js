export default class Validator {
    static validateUsername(name) {
      if (!name) {
        return false;
      }
      return !/[^\w-]|\d{4}|^[^A-Za-z]|[^A-Za-z]$/.test(name);
    }
  }