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
    $('.agency-details').hide();
  },
  showRequestFormLink: function (agency) {
    var $link = $('a.foia-link');
    $link.attr('href', agency.request_form);
    $('.external-link').show();
  },
  showForm: function () { // TODO agency is passed but not used
    $('.unified-form').show();
  },
  addAgencyDetails: function (agency) {
    var $details = $('.agency-details');
    var $website = $('<a/>');
    var url;
    // console.log(agency);
    $details.find('.agency').text(agency.summary.name);
    $details.find('.name').text(agency.name);
    $details.find('.desc').text(agency.summary.description);
    $details.find('.abbr').text(agency.summary.abbreviation);
    if (agency.website) {
      url = agency.website;
    } else if (agency.summary.website) {
      url = agency.summary.website;
    }
    $website.attr('href', url);
    $website.text(url);
    $details.find('.website').html($website);
    $details.find('.contact').html(FOIA.buildContact(agency));
    $details.find('.median-time').html(FOIA.buildMedianTimes(agency));

    $details.show();
  },
  buildContact: function (agency) {
    var $div = $('<div/>');
    var $email = $('<a/>');
    var contact;
    if (agency.emails) {
      $email.attr('href', 'mailto:' + agency.emails[0]);
      $email.text(agency.emails[0]);
    }
    contact = [
      agency.address.address_lines.join('<br/>'),
      agency.address.street,
      agency.address.city + ', ' + agency.address.state + ' ' + agency.address.zip,
      agency.service_center.phone[0]
    ];
    $div.html(contact.join('<br/>'));
    $div.append('<br/>');
    $div.append($email);

    return $div;
  },
  buildMedianTimes: function (agency) {
    var $div = $('<div/>');
    var years = [];
    var label;
    $.each(agency.request_time_stats, function (year, report) {
      $.each(report, function (key, days) {
        if (key.match(/_median_/)) {
          label = key.split('_')[0];
          years.push([year, label, days]);
        }
      });
    });
    $div.append('<table class="usa-table-borderless">');
    $div.append('<thead><tr><th>Year</th><th>Type</th><th>Days</th></tr></thead>');
    $.each(years, function (idx, val) {
      $div.append('<tr><th>' + val[0] + '</th><td>' + val[1] + '</td><td>' + val[2] + '</td></tr>');
    });
    $div.append('</table>');
    return $div;
  },
  showConfirmation: function (ev) {
    ev.preventDefault();
    $('.unified-form').find(':input').prop('disabled', true);
    $('#submit').disabled = true;
    window.location = '/confirmation?agency=' + encodeURIComponent(FOIA.agencyName);
  },
  toggleHelp: function (ev) {
    var $help = $(ev.currentTarget).find('.tooltiptext');
    $help.slideToggle();
  },
  getUrlParameter: function (sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName;
    var i;

    for (i = 0; i < sURLVariables.length; i += 1) {
      sParameterName = sURLVariables[i].split('=');

      // `?enable_var` should be parsed as true.
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }

    return null;
  },
  buildConfirmation: function ($el) {
    var agencyName = FOIA.getUrlParameter('agency');
    var $agency = FOIA.agency(agencyName);
    FOIA.addAgencyDetails($agency);
    $el.show();
  }
};

jQuery(document).ready(function () {
  var $agency = jQuery('#agency');
  var $confirmation = jQuery('#confirmation');

  $agency.typeahead({
    minLength: 2,
    highlight: true
  }, {
    limit: 100,
    source: new Bloodhound({
      local: FOIA.agencyNames(),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      datumTokenizer: Bloodhound.tokenizers.whitespace
    })
  });
  $agency.on('typeahead:select', function (ev, suggestion) {
    var agency = FOIA.agency(suggestion);
    FOIA.agencyName = suggestion;
    FOIA.hideAgencyDetails();
    // console.log(agency);
    if (agency.hasRequestForm()) {
      FOIA.showRequestFormLink(agency);
    } else {
      FOIA.showForm(agency);
    }
    FOIA.addAgencyDetails(agency);
  });

  // submission always works
  $('#submit').on('click', function (ev) {
    FOIA.showConfirmation(ev);
  });

  // help text
  $('.tooltip').on('click', function (ev) {
    FOIA.toggleHelp(ev);
  });
  if ($confirmation && $confirmation[0]) {
    FOIA.buildConfirmation($confirmation);
  }
});
