/* eslint no-use-before-define: ["error", { "functions": false }] */

module.exports = Agency;

function Agency(attributes) { Object.assign(this, attributes); }

Agency.prototype.hasRequestForm = function () {
  if (this.request_form && this.request_form.match(/^http/)) {
    return true;
  }
  return false;
};

Agency.prototype.isFOIAonline = function () {
  return this.request_form.match(/foiaonline/);
};
