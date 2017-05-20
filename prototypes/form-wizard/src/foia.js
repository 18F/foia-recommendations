/* global AGENCIES */
var FOIA = {
  agencyNames: function () {
    return jQuery.map(AGENCIES, function (el, idx) { return idx; }).sort();
  }
};

jQuery(document).ready(function () {
  var $agency = jQuery('#agency');
  $agency.typeahead({
    minLength: 2,
    highlight: true
  }, {
    limit: 10,
    source: new Bloodhound({
      local: FOIA.agencyNames(),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      datumTokenizer: Bloodhound.tokenizers.whitespace
    })
  });
});
