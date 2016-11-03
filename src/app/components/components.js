'use strict';

import routesModule from './routes/routes';
import pagesModule from './pages/pages';
import directivesModule from './directives/directives';

import angular from 'angular';

let componentsModule = angular.module('components-module', [
    routesModule.name,
    pagesModule.name,
    directivesModule.name
]);

export default componentsModule;