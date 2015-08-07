'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Accident/Theft Assistance',
    // additional properties
});

// START_CUSTOM_CODE_accidentTheftView
// END_CUSTOM_CODE_accidentTheftView
module.exports = ViewModel;