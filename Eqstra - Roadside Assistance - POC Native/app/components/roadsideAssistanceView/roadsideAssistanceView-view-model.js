'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Roadside Assistance',
    // additional properties
});

// START_CUSTOM_CODE_roadsideAssistanceView
// END_CUSTOM_CODE_roadsideAssistanceView
module.exports = ViewModel;