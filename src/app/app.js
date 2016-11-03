'use strict';

import template from './app.html!text';

import angular from 'angular';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';
import 'angular-route';
import 'angular-sanitize';

import toolkitModule from 'ramkat99/xib-angular-toolkit';
import navLockModule from 'ramkat99/xib-nav-lock';

import {View, Component, Inject} from 'ramkat99/xib-angular-toolkit'; // jshint unused: false

import componentsModule from './components/components';
import coreModule from './core/core';

let appModule = angular.module('app-module', [
  'ngRoute',
  'ngSanitize',
  'ngMessages',
  'ngMaterial',

  toolkitModule.name,
  navLockModule.name,

  componentsModule.name,
  coreModule.name
]);

@Component({
  selector: 'app'
})
@View({
  template: template,
  replace: true
})
@Inject('NavLockService', '$state')
class App {
  constructor(NavLockService, $state) {
    this.myName = 'Manie Coetzee';
    NavLockService.sayHello();
  }
}

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
    strictDi: true
  });
});

export default appModule;