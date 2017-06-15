/* eslint no-use-before-define: ["error", { "functions": false }] */

module.exports = Agency;

function Agency(attributes) { Object.assign(this, attributes); }

Agency.prototype.hasRequestForm = function () {
  if (this.request_form) {
    return true;
  }
  return false;
};
