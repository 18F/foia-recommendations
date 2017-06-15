// global methods in our namespace
// AGENCIES is a global var defined in agencies.js
/* global AGENCIES */
var FOIA = {};
var Agency = require('./models/agency');

FOIA = {
  agencyNames: function () {
    return jQuery.map(AGENCIES, function (el, idx) { return idx; }).sort();
  },
  agency: function (name) {
    return new Agency(AGENCIES[name]);
  },
  hideAgencyDetails: function () {
    $('.external-link').hide();
    $('.unified-form').hide();
  },
  showRequestFormLink: function (agency) {
    var $link = $('<a class="foia-link"></a>');
    $link.attr('href', agency.request_form);
    $link.text(agency.request_form);
    $('p.foia-link').html($link);
    $('.external-link').show();
  },
  showForm: function () { // TODO agency is passed but not used
    $('.unified-form').show();
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
  $agency.on('typeahead:select', function (ev, suggestion) {
    var agency = FOIA.agency(suggestion);
    FOIA.hideAgencyDetails();
    // console.log(agency);
    if (agency.hasRequestForm()) {
      FOIA.showRequestFormLink(agency);
    } else {
      FOIA.showForm(agency);
    }
  });
});
