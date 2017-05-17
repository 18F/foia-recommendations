var FOIA = {
  agencyNames: function() {
    return jQuery.map(AGENCIES, function(el, idx) { return idx }).sort();
  }
};
