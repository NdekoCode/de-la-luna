export default class Validator {
  constructor() {
    this.errors = {};
  }
  isEmpty(v) {
    return (
      v === undefined ||
      v === null ||
      (typeof v === "string"
        ? v.length < 1
        : JSON.stringify(v) === "[]" || JSON.stringify(v) === "{}")
    );
  }
}
