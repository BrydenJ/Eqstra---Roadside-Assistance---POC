'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Dashboard",
    "modulePath": "components/home/home",
    "icon": "~/images/icons/home.png"
}, {
    "title": "Roadside Assistance",
    "modulePath": "components/roadsideAssistanceView/roadsideAssistanceView",
    "icon": "~/images/icons/add.png"
}, {
    "title": "Accident/Theft Assistance",
    "modulePath": "components/accidentTheftView/accidentTheftView",
    "icon": "~/images/icons/add.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;